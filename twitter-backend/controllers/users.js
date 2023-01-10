const User = require('../models/User')
const jwt = require('jsonwebtoken');
const Tweet = require('../models/Tweet');
// import {jwt} from 'jsonwebtoken'

// const SECRET = process.env.SECRET;

async function signup(req, res) {
  console.log('form Data', req.body)
    const user = new User(req.body);
    try {
      await user.save();
      // Be sure to first delete data that should not be in the token
      const token = createJWT(user);
      console.log(token)
      res.json({ token });
    } catch (err) {
      // Probably a duplicate email
      res.status(400).json(err);
    }
  }


  // User.create(newUser).then((returnedUser) => {
  //   //only accessible in scope of the callback
  // }).catch(err => err)

  // let newUser = await User.create(newUser)


  async function createUserTweet(req, res) {
    let userId = req.params.userId
    try {  
      let currentUser = await User.findById(userId)
      let newTweet = await Tweet.create(req.body)
      currentUser.tweets.push(newTweet._id)
      await currentUser.save()
      return res.json(currentUser)
    } 
    catch (err) {
      res.json(err)
    }
  }

  async function getUserTweets(req,res) {
    let userId = req.params.userId
    User.findById(userId).populate('tweets').then((user) => {
      res.json(user)
    })
    .catch(err => res.json(err))
  }
  
module.exports = { 
    signup,
    createUserTweet,
    getUserTweets
}


/*----- Helper Functions -----*/

function createJWT(user) {
  let token = jwt.sign(
      {user}, // data payload
      "SEIRocks!",
      {expiresIn: '24h'}
    );
    return token
  }