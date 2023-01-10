import './App.css';
import './index.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import EditPage from './pages/EditPage/EditPage';
import NewTweetPage from './pages/NewTweetPage/NewTweetPage';
import DetailPage from './pages/DetailPage/DetailPage';
import NavBar from './components/NavBar/NavBar';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import MyTweets from './pages/MyTweets/MyTweets';
import { useEffect, useState } from 'react';
import tokenService from './utilities/tokenService'


function App() {
  const [user, setUser] = useState({})
  useEffect(() => {
    registerUser()
  }, [])
  let registerUser = () => {
    let user = tokenService.getUserFromToken()
    setUser(user)
}

let logout = () => {
  setUser({})
}


  return (
    <div className="App">
    <NavBar logout={logout} /><br />
    <Routes>
      <Route path='/home' element={<HomePage />} />
      <Route path='/edit/:id' element={<EditPage />} />
      <Route path='/new' element={<NewTweetPage user={user} />} />
      <Route path='/detail/:id' element={<DetailPage />} />
      <Route path='/signup' element={<SignUpPage registerUser={registerUser} />} />
      <Route path='/mytweets' element={<MyTweets user={user} />} />
    </Routes>
    </div>
  );
}

export default App;
