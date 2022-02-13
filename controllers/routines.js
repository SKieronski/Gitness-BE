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

//UPDATE/PUT routine by id
router.put('/:id', async (req, res, next) => {
    console.log(req.body);
    try {
        const routineToUpdate = await Routine.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        console.log("in routines put try");
        res.status(200).json(routineToUpdate);
    } catch (err) {
        next(err);
    }
})

//UPDATE/PATCH routine by id
router.patch("/:id", async (req, res, next) => {
    console.log(req.body);
    try {
        const routineToUpdate = await Routine.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        console.log("in routines patch try");
        res.status(200).json(routineToUpdate);
    } catch (err) {
        next(err);
    }
})


//DESTROY/DELETE routine by Id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id
    Routine.findByIdAndDelete({ _id: id })
        .then(() => res.sendStatus(204))
        .catch(next)
})


module.exports = router