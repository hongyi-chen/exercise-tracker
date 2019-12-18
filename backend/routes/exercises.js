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

module.exports = router;