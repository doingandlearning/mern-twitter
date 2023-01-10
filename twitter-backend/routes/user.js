var express = require('express');
var router = express.Router();
const userCtrl = require('../controllers/users')

/* GET home page. */
router.post('/signup', userCtrl.signup)

router.post('/:userId/tweets', userCtrl.createUserTweet)

router.get('/:userId/tweets', userCtrl.getUserTweets)

module.exports = router;