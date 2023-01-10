import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

function NavBar(props) {
  return (
    <div>
      <ul className="navbar-twitter">
       <div className="right-side">
         <li className="title is-4"><Link to="/home">Twitter App</Link></li>
        </div>
        <div className="left-side">
        <li><Link to="/new">New Tweet</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/mytweets">My Tweets</Link></li>
        <li><Link to="/home">Log in</Link></li>
        <li onClick={props.logout}><Link to="/signup">Log out</Link></li>
        <li><Link to="/signup">Sign Up</Link></li>
        </div>
      </ul>
    </div>
  )
}

export default NavBar