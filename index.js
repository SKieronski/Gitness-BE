const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.set('port', process.env.PORT || 8000)


//==================================
//MIDDLEWARE
//==================================

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



//==================================
//ROUTES
//==================================

app.get('/', (req, res) => {
    res.redirect('/routines')
})


//==================================
//CONTROLLERS
//==================================

// Routines Controller
const routineController = require('./controllers/routines')
app.use('/routines', routineController)

//Exercises Controller -- might not need this one
const exerciseController = require('./controllers/exercises')
app.use('/exercises', exerciseController)


//==================================
//START SERVER
//==================================

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')} YAS`)
})