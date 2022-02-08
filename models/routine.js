const mongoose = require('../db/connection')
const ExerciseSchema = require('./exercise')
// const {exerciseSchema} = require(_dirname+'./exercise.js').schema

const RoutineSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    }, 
   description: {
       type: String,
       required: true
   },
   exercises: [ExerciseSchema]
})


const Routine = mongoose.model('Routine', RoutineSchema)
module.exports = Routine