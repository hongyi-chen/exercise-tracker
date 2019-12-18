const router = require('express').Router();
// requires the mongoose model that we created
let User = require('../models/user.model');

// first endpoint that handles HTTP get requests
// on the /users URL path
// localhost: 5000/users/ --> this happens if it is a get request
router.route('/').get((req, res) => {
    User.find() // gets a list of all of the users from mongodb atlas db
    .then(users => res.json(users)) // results are returned in js format
    .catch(err => res.status(400).json('Error: ' + err));
})

// this handles post requests
// it has /add 
router.route('/add').post((req, res) => {
    const username = req.body.username; 
    const newUser = new User({username}); // creates new instance of user using username

    // new user is saved to the database using save method
    newUser.save()
    // then we return the user added in JSON, or we return error msg
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// exporting the router
module.exports = router;