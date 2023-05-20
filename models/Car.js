const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type:String,
    required:true
  },
  model: {
    type: String,
    required: true,
  },
  milage: {
    type: String,
    required: true,
  },
  availableFrom: {
    type: String,
    required: true,
  },
  availableTill: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  carDetails: {
    type: String,
  },
  image:{
    date:Buffer,
    type:String
  }
});

module.exports = Car = mongoose.model('car',carSchema);