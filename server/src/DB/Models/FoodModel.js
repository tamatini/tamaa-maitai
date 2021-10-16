// Imports
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Food Schema * will probably need a redesign if can't handle image integration
const foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  prepTime: {
    type: String,
    required: true
  },
  ingredients: {
    type: String,
    required: true
  },
  steps: {
    type: String,
    required: true
  }
});

// Model and instance functions
const Food = mongoose.model('Food', foodSchema);

// Exports
module.exports = Food;
