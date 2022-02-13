const mongoose = require('../db/connection')

const ExerciseSchema = new mongoose.Schema(
    {
        exercise_name: {
            type: String
        },
        reps: {
            minmax: [Number]
        }, 
        sets: {
            type: Number
        },
        muscle_groups: {
            type: [String]
        }, 
        exercise_description: {
            type: String
        },
        img_example: {
            type: String
        }
    }
)

// const Exercise = mongoose.model('Exercise', ExerciseSchema)
module.exports = ExerciseSchema