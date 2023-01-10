const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema

const SALT_ROUNDS = 6;

const UserModel = new Schema({
    name: String,
    email: {type: String, required: true, lowercase: true, unique: true},
    password: String,
    // if I leave it as an object, it will be One:One
    // an array will be Many to Many
    tweets: [{type: mongoose.Schema.ObjectId, ref: 'Tweet'}]
}, {
    timestamps: true
})

UserModel.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    // password has been changed - salt and hash it
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
      if (err) return next(err);
      // replace the user provided password with the hash
      user.password = hash;
      next();
    });
  });

const User = mongoose.model('User', UserModel)

module.exports = User;