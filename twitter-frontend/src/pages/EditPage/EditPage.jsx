import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getTweetById, updateTweet } from '../../utilities/api'

function EditPage() {

  const [tweet, setTweet] = useState({})

  let tweetId = useParams().id

  let navigate = useNavigate()

  useEffect(() => {
    async function fetchTweet() {
      const tweet = await getTweetById(tweetId)
      setTweet(tweet)
    }
    fetchTweet()
  }, [tweetId])



  let handleChange = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    const res = await updateTweet(tweetId, tweet)
    navigate(`/detail/${res.data._id}`)
  }

  return (
    <div>
      {tweet ? (<div className="form-container">
        <form onSubmit={handleSubmit} className="form-input">
          <label>Name:</label>
          <input className="name-input" name="name" value={tweet.name} onChange={handleChange}></input><br></br>
          <label>Description:</label>
          <textarea className="description-input" name="description" value={tweet.description} onChange={handleChange}></textarea>
          <button type="Submit" value="Update Tweet">Update Tweet</button>
        </form>
      </div>) : null}
    </div>
  )
}

export default EditPage