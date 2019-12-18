const mongoose = require('mongoose');
// All mongoose Schemas basically start the same
const Schema = mongoose.Schema;

// this only has a single field (username)
// below are validations, e.g, trim will trim whitespace off the end
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    }
}, {
    timestamps: true, // creates fields for creation/modification
});

const User = mongoose.model('User', userSchema);

module.exports = User;

// many of this will look very similar for mongoose schemas