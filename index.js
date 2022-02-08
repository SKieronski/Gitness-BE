const express = require('express')
const app = express()
const cors = require('cors')
const req = require('express/lib/request')
app.use(cors())
app.set('port')


//==================================
//MIDDLEWARE
//==================================

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




//==================================
//ROUTES
//==================================

app.get('/', (req, res) => {
    res.redirect('/api')
})


//==================================
//CONTROLLERS
//==================================

// Workouts Controller
const workoutController = require('./controllers/workouts')
app.use('/workouts', workoutController)

//Exercises Controller
const exerciseController = require('./controllers/exercises')
app.use('/workouts/exercises', exerciseController)


//==================================
//START SERVER
//==================================

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.essage || 'Internal Server Error'
    res.staus(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')} YAS`)
})