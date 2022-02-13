const mongoose = require('../db/connection')

const ExerciseSchema = new mongoose.Schema(
    {
        exercise_name: {
            type: String,
            // required: false
        },
        reps: {
            minmax: [Number],
            // required: false
        }, 
        sets: {
            type: Number,
            // required: false
        },
        muscle_groups: {
            type: [String],
            // required: false
        }, 
        exercise_description: {
            type: String,
            // required: false
        },
        img_example: {
            type: String, 
            // required: false
        }
    }
)

// const Exercise = mongoose.model('Exercise', ExerciseSchema)
module.exports = ExerciseSchema