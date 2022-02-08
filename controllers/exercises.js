const express = require('express')
const router = express.Router()
const Exercise = require('../models/exercise')
const Workout = require('../models/workout')

//NOT SURE IF WE NEED THIS ONE
//GET exercise by ID
// router.get('/', (req, res, next) => {
//     const exerciseData = req.body
//     const exerciseId = exerciseData.exerciseId
//     Exercise.find()
//         .then((exercises) => res.json(exercises))
//         .catch(next)
// })

//GET exercise by id
router.post('/', (req, res, next) => {
    const exerciseData = req.body
    const workoutID = exerciseData.workoutID
    Workout.findById(workoutID)
        .then((workout) => {
            workout.exercises.push(exerciseData)
            return workout.save()
        })
        .then((workout) => res.status(201).json({ workout: workout}))
        .catch(next)
})

//Delete exercise by Id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Workout.findOne({ 'exercises._id': id })
        .then((workout) => {
            workout.exercises.id(id).remove()
            return workout.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
}) 

//Update/patch by id -- don't use PUT because only changing one piece?
router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const exerciseData = req.body

    Workout.findOne({
        'exercises._id': id
    })
        .then((workout) => {
            const exercise = workout.exercises.id(id)
            exercise.set(exerciseData)
            return workout.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


moodule.exports = router