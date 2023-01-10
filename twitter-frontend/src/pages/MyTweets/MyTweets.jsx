import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './MyTweets.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

function MyTweets(props) {
    const MySwal = withReactContent(Swal)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        fetchTweets()
    }, [])

    let fetchTweets = () => {
        console.log('from fetch Tweets!', props.user)
        if (props.user) {
            let userId = props.user._id
            axios.get(`/user/${userId}/tweets`)
            .then((res) => {
                if (res.data.tweets){
                    setTweets(res.data.tweets) // for Axios
                } else {
                    console.log(res.data)
                }
            })
        }
    }

    let deleteTweet = (id) => {
        axios.delete(`/tweets/${id}`)
        .then(res => console.log(res.data))
        .then(() => {
            MySwal.fire({
                title: <strong>Tweet Deleted!</strong>,
                html: <i>Your tweet was deleted</i>,
                icon: 'success'
              })
        })
        .then(() => {fetchTweets()})
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
<button className="delete" aria-label="delete" onClick={() => {deleteTweet(tweet._id)}}></button>
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

export default MyTweets