const mongoose = require('mongoose')

require('dotenv').config()
require('./config/database')

const Tweet = require('./models/Tweet')


Tweet.deleteMany({}).then(() =>{
    console.log('Database cleaned!')
})

Tweet.insertMany([
    {
        name: 'Angeline', 
        description:'Today is a good day'
    },
    {
        name: 'Amal', 
        description: 'Created a twitter app today!'
    },
    {
        name: 'Ryan', 
        description: 'Why does my laptop never have any battery?'
    },
    {
        name: 'Matt', 
        description: 'Incoherent screaming!'
    },
    {
        name: 'Manohisoa', 
        description: 'Love Express!'
    },
    {
        name: 'Mohamed', 
        description: `I don't love starbucks!`
    },
    {
        name: 'Ana', 
        description: 'Enjoying the mountains!'
    }
]).then(() => {
    console.log('Data was successfully added to database!')
})