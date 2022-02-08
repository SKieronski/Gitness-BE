const express = require('express')
const router = express.Router()
const Workout = require('../models/workout')

//GET all workouts
router.get('/', (req, res, next) => {
    Workout.find()
    .then((workouts) => res.json(workouts))
    .catch(next)
})

//GET by Id
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Workout.findById(id)
        .then((workout) => res.json(workout))
        .catch(next)
})

//CREATE/POST workout
router.post('/', (req, res, next) => {
    const workoutData = req.body
    Workout.create(workoutData)
    .then((workout) => res.status(201).json(workout))
    .catch(next)

})

//UPDATE/PATCH workout by id
router.patch('/:id', (req, res, next) => {
    const id = req.params.id
    const workoutData = req.body
    Workout.findByIdAndUpdate({ _id: id }, workoutData, { new: true })
        .then((workout) => res.json(workout))
        .catch(next)
})


//DESTROY/DELETE workout by Id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Workout.findByIdAndDelete({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router