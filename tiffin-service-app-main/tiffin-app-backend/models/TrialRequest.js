const mongoose = require('mongoose');

const trialRequestSchema = new mongoose.Schema({
  name: String,
  address: String,
  contact: String,
  message: String,
  feedback: String,
  rating: Number,
});

module.exports = mongoose.model('TrialRequest', trialRequestSchema);
