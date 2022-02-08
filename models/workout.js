const mongoose = require('../db/connection')
const exerciseSchema = require('./exercise')

const workoutSchema = new mongoose.Schema({

    name: {
        type = String,
        required: true
    }, 
   description: {
       type: String,
       required: true
   },
   exercises: [exerciseSchema]
   
})


const Workout = mongoose.model('Workout', workoutSchema)
module.exports = Workout