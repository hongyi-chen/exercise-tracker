import { Schema } from "mongoose";
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 4 fields, not as many validations
const exerciseSchema = new Schema({
    username: { type: String, required: true},
    description: { type: String, required: true},
    duration: { type: Number, required: true},
    date: { type: Date, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

// CRUD - Create Read Update Delete