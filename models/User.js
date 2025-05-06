const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  
  },
  password: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: "https://via.placeholder.com/150", // Default photo URL
  },
 phone: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/, // Regex to ensure it's a 10-digit number
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
