import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './DetailPage.css'
import { Link } from 'react-router-dom'

function DetailPage() {
  
  const [tweet, setTweet] = useState({})

  let tweetId = useParams().id

  useEffect(() => {
    fetchTweet()
 }, [])

 let fetchTweet = () => {
     axios.get(`/tweets/${tweetId}`)
     .then((res) => {
      console.log('res', res.data)
         setTweet(res.data) // for Axios
     })
 }
  
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