const express = require('express')
const router = express.Router()
const Exercise = require('../models/exercise')
const Routine = require('../models/routine')

//NOT SURE IF WE NEED THIS ONE
//GET exercise by ID
// router.get('/', (req, res, next) => {
//     const exerciseData = req.body
//     const exerciseId = exerciseData.exerciseId
//     Exercise.find()
//         .then((exercises) => res.json(exercises))
//         .catch(next)
// })

//CREATE exercise by id
// router.post('/', (req, res, next) => {
//     const exerciseData = req.body
//     const routineID = exerciseData.routineID
//     Routine.findById(routineID)
//         .then((routine) => {
//             routine.exercises.push(exerciseData)
//             return routine.save()
//         })
//         .then((routine) => res.status(201).json({ routine: routine }))
//         .catch(next)
// })

//Delete exercise by Id
// router.delete('/:id', (req, res, next) => {
//     const id = req.params.id
//     Routine.findOne({ 'exercises._id': id })
//         .then((routine) => {
//             routine.exercises.id(id).remove()
//             return routine.save()
//         })
//         .then(() => res.sendStatus(204))
//         .catch(next)
// }) 

//Update/patch by id -- don't use PUT because only changing one piece?
// router.patch('/:id', (req, res, next) => {
//     const id = req.params.id
//     const exerciseData = req.body

//     Routine.findOne({
//         'exercises._id': id
//     })
//         .then((routine) => {
//             const exercise = routine.exercises.id(id)
//             exercise.set(exerciseData)
//             return routine.save()
//         })
//         .then(() => res.sendStatus(204))
//         .catch(next)
// })


module.exports = router