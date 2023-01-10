var express = require('express');
var router = express.Router();
const TweetCtrl = require('../controllers/twitter')

/* GET home page. */
router.get('/', function(req,res){
  res.redirect('/tweets')
})
//Get All Route
router.get('/tweets', TweetCtrl.getAllTweets);
// Delete Tweet Route
router.delete('/tweets/:id', TweetCtrl.deleteTweet)
//Get Tweet Details
router.get('/tweets/:id', TweetCtrl.tweetDetail)
//Create New Tweet
router.post('/tweets', TweetCtrl.createTweet)
//Update Tweet
router.patch('/tweets/:id', TweetCtrl.updateTweet)

module.exports = router;
