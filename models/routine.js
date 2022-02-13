const mongoose = require('../db/connection')
const ExerciseSchema = require('./exercise')
// const {exerciseSchema} = require(_dirname+'./exercise.js').schema

const RoutineSchema = new mongoose.Schema({

    routine_name: {
        type: String,
        // required: false
    }, 
    routine_description: {
       type: String,
    //    required: false
    },
    exercises: [ExerciseSchema]
})


const Routine = mongoose.model('Routine', RoutineSchema)
module.exports = Routine