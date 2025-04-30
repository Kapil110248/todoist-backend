// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  completedAt: Date,  // Changed to camelCase
  status: {
    type: String,
    default: 'Pending'
  }
});

module.exports = mongoose.model('Task', taskSchema);