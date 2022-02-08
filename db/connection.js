require('dotenv').config()
const mongoose = require('mongoose')
const db = mongoose.connection
const mongoURI = process.env.DATABASE_URL

mongoose.connect(mongoURI, { useNewParser: true })

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected at: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))


db.on('open', () => {
    console.log('✅ mongo connection made!')
})

module.exports = mongoose