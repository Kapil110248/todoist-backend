const mongoose = require("mongoose");

const reminderSchema = new mongoose.Schema({
  title: String,
  date: String,
  time: String,
  status: {
    type: String,
    enum: ["Pending", "Complete"],
    default: "Pending",
  },
});

module.exports = mongoose.model("Reminder", reminderSchema);
