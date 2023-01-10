import React, { useEffect, useState } from 'react'
import './HomePage.css'
import { Link } from 'react-router-dom'
import { deleteTweetById, getAllTweets } from '../../utilities/api'
// Can use axios
function HomePage() {
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        async function fetchTweets() {
            const tweets = await getAllTweets()
            setTweets(tweets)
        }
        fetchTweets()
    }, [])



    let deleteTweet = async (id) => {
        await deleteTweetById(id)
        const tweets = await getAllTweets()
        setTweets(tweets)

    }

    return (
        <div className="tweet-container">
            <h1 className="title">Tweets</h1>
            {tweets.map((tweet) => (
                tweet ? (
                    <article className="message is-link" key={tweet._id}>
                        <div className="message-header">
                            <p>Name: {tweet.name}</p>
                            <div className="buttons-container">
                                <Link to={`/detail/${tweet._id}`}>
                                    <button>Detail</button>
                                </Link>
                                <button className="delete" aria-label="delete" onClick={() => { deleteTweet(tweet._id) }}></button>
                                <Link to={`/edit/${tweet._id}`}>
                                    <button className="edit">Edit</button>
                                </Link>

                            </div>
                        </div>
                        <div className="message-body">
                            {tweet.description}
                        </div>
                        <p className="date">Posted at: {tweet.createdAt.split('T')[0]}</p>
                    </article>
                ) : null
            ))}
        </div>
    )
}

export default HomePage