import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './DetailPage.css'
import { Link } from 'react-router-dom'
import { getTweetById } from '../../utilities/api'

function DetailPage() {

  const [tweet, setTweet] = useState({})

  let tweetId = useParams().id

  useEffect(() => {
    async function fetchTweet() {
      const tweet = await getTweetById(tweetId)
      setTweet(tweet)
    }
    fetchTweet()
  }, [tweetId])


  return (
    <div className="detail-container">
      {tweet ? (
        <article className="message is-link" key={tweet._id}>
          <div className="message-header">
            <p>Name: {tweet.name}</p>
            <div className="buttons-container">

              <Link to={`/edit/${tweet._id}`}>
                <button className="edit">Edit</button>
              </Link>

            </div>
          </div>
          <div className="message-body">
            {tweet.description}
          </div>
        </article>
      ) : null}
    </div>
  )
}

export default DetailPage