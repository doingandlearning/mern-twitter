import React, {useState} from 'react'
import './SignUpPage.css'
import tokenService from '../../utilities/tokenService'
import { useNavigate } from 'react-router-dom'

function SignUpPage(props) {

    const navigate = useNavigate()
    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        password: ''
    })
    let handleChange = (e) => {
        setUserForm({...userForm, [e.target.name]: e.target.value})
      }
    let handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify(userForm)
          })
          .then(res => {
            if (res.ok) return res.json();
            throw new Error('Email already taken!');
          })
          // Parameter destructuring!
          .then(({token}) => tokenService.setToken(token))
          .then(() => props.registerUser())
          .then(() => navigate('/home'))
          // the above could have been written as
          //.then((token) => token.token);
    }

  return (
    <div className="signup-container">
         <form onSubmit={handleSubmit} className="form-input">
        <label>Name:</label>
        <input className="name-input" name="name" value={userForm.name} onChange={handleChange}></input><br></br>
        <label>Email:</label>
        <input className="description-input" name="email" value={userForm.email} onChange={handleChange}></input>
        <label>Password:</label>
        <input className="description-input" name="password" value={userForm.password} onChange={handleChange}></input>
        <button type="Submit" value="Sign Up!">Sign up!</button>
       </form>
    </div>
  )
}

export default SignUpPage