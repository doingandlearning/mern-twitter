const Tweet = require('../models/Tweet')

// async
function getAllTweets(req,res){
    // Tweet.findById(req.params.id).then .. .. 
    // Tweet.findOne({name: 'Angeline'}).then((tweets) => 
    Tweet.find({}).then((tweets) => {
        res.json(tweets)
    }).catch(err => err)
    // let tweets = await Tweet.find({})
    // res.json(tweets)
}

function deleteTweet(req,res) {
    let tweetId = req.params.id
    Tweet.findByIdAndDelete(tweetId)
        .then(() => res.json(
            {"message": "Tweet was successfully deleted."}
        ))
        .catch(err => res.json(err))
}

function tweetDetail(req,res) {
    let tweetId = req.params.id
    Tweet.findById(tweetId)
        .then((tweet) => res.json(tweet))
        .catch(err => err)
}

function createTweet(req,res) {
    console.log(req.body)
    let tweetData = req.body
    // let newTweet = await Tweet.create(newTweet) async
    // let newTweet = new Tweet(tweetData)
    // await newTweet.save()
    Tweet.create(tweetData)
    .then(tweet => res.json(tweet))
    .catch(err => res.json(err))
}

function updateTweet(req,res) {
    let updatedTweet = req.body
    let tweetId = req.params.id
    Tweet.findByIdAndUpdate(tweetId, updatedTweet)
    .then((tweet) => res.json(tweet))
    .catch(err => err)
}

module.exports = {
    getAllTweets,
    deleteTweet,
    tweetDetail,
    createTweet,
    updateTweet
}