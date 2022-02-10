const mongoose = require('../db/connection')

const ExerciseSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        reps: {
            minmax: [Number],
            required: false
        }, 
        sets: {
            type: Number,
            required: false
        },
        muscle_groups: {
            type: [String],
            required: false
        }, 
        description: {
            type: String,
            required: false
        },
        img_example: {
            type: String, 
            required: false
        }
    }
)

// const Exercise = mongoose.model('Exercise', ExerciseSchema)
module.exports = ExerciseSchema