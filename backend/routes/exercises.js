// same two endpoints as the users.js file

const router = require('express').Router();
// route URL / exericses / ..
let Exercise = require('../models/exercise.model');

// get request that finds and takes exercises and returns them as JSON, else error
router.route('/').get((req, res) => {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

// post request, we pass the username, desc, etc in the body
// creates a new exercissse
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration); //converts to Num
    const date = Date.parse(req.body.date); //converts to date

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// /:id is like a variable, an object id that is created automatically my Mongo
// this returns just the information about a specific exercise (JSON)
// the get request
router.route('/:id').get((reqz, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// this is the delete request, deletes the object based on its ID
// finds the ID and then deletes (gets it from the url)
router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id) //req.params.id is the URL
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// finds the current exercise, passing in the parameter from the URL
// take the information from the exercise, you set it to the new parameters
// assigning it to the fields of the exercises that already exist
// save it, and then return
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;