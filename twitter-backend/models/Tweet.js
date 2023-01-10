const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TweetModel = new Schema({
    name: {type: String, required: true},
    description: {type: String, require: true},
}, {
    timestamps: true
})

const Tweet = mongoose.model('Tweet', TweetModel)

module.exports = Tweet;