const mongoose = require('mongoose')

const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL, onConnect )

//function declaration
function onConnect(){
    console.log('Connected to database!')
}

//arrow function
// let onConnect = () => {
// }

//function expression
// let onConnect = function() {
// }