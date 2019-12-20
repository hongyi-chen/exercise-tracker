const express = require ('express');
const cors = require ('cors');

// connect to mongodb database
const mongoose = require('mongoose');

// configures so that we can have environment variables in .env file
require('dotenv').config();

// creates express server
const app = express();
const port = process.env.PORT || 5000;

//middleware - allows us to parse JSON
app.use(cors());
app.use(express.json());

// uri - database URI
const uri = process.env.ATLAS_URI;
// passes in URI, where database is stored
// also passes in flags to deal with MongoDB, just put these things in
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
// once the connection is established, this is what happens
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// require the files and then use the files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// use the files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})