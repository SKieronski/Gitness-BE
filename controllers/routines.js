const express = require('express')
const router = express.Router()
const Routine = require('../models/routine')

//GET all routines
router.get('/', (req, res, next) => {
    Routine.find()
    .then((routines) => res.json(routines))
    .catch(next)
})

//GET by Id
router.get('/:id', (req, res, next) => {
    const id = req.params.id
    Routine.findById(id)
        .then((routine) => res.json(routine))
        .catch(next)
})

//CREATE/POST routine
router.post('/', (req, res, next) => {
    const routineData = req.body
    Routine.create(routineData)
    .then((routine) => res.status(201).json(routine))
    .catch(next)

})

//UPDATE/PATCH routine by id
router.put('/:id', (req, res, next) => {
    const id = req.params.id
    const routineData = req.body
    Routine.findByIdAndUpdate({ _id: id }, routineData, { new: true })
        .then((routine) => res.json(routine))
        .catch(next)
})


//DESTROY/DELETE routine by Id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Routine.findByIdAndDelete({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router