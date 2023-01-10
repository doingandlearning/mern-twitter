import React, { useState } from 'react'
import './NewTweetPage.css'
import { useNavigate } from 'react-router-dom'
import { createTweet, createWithId } from '../../utilities/api'

function NewTweetPage(props) {

  const [tweet, setTweet] = useState({
    name: '',
    description: ''
  })

  let navigate = useNavigate()


  let handleChange = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value })
  }

  let handleSubmit = async (e) => {
    e.preventDefault()
    if (props.user) {
      let userId = props.user._id
      await createWithId(userId, tweet)
      navigate(`/mytweets`);
    } else {
      const res = await createTweet(tweet)
      navigate(`/detail/${res.data._id}`)
    }

  }


  return (
    <div>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-input">
          <label>Name:</label>
          <input className="name-input" name="name" value={tweet.name} onChange={handleChange}></input><br></br>
          <label>Description:</label>
          <textarea className="description-input" name="description" value={tweet.description} onChange={handleChange}></textarea>
          <button type="Submit" value="Create new Tweet!">Create New Tweet!</button>
        </form>
      </div>
    </div>
  )
}

export default NewTweetPage