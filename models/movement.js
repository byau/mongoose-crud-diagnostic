// Each Movement needs to have the following features:
// - A name (required).
// - A description (no longer than 200 characters).
// - Starting and ending years (as strings) for the time when the movement
//    was most prominent.
// - An 'ancestor', another art movement that this movement descends from.

"use strict";

const mongoose = require('mongoose');

const movementSchema = new mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  description: {
      type: String,
      maxlength: 200
  },
  "starting year" : String,
  "ending year" : String,
  _ancestor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movement',
  }
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;
