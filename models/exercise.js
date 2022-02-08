const mongoose = require('../db/connection')

const ExerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }, 
        reps: {
            type: Number,
            min: Number,
            max: Number,
            required: false
        }, 
        sets: {
            type: Number,
            required: true
        },
        muscle_groups: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        img_example: {
            type: String, 
            required: false
        }
    }
)

// const Exercise = mongoose.model('Exercise', ExerciseSchema)
module.exports = ExerciseSchema