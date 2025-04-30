// backend/config/db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Ensure you are loading the environment variables

const connectDB = async () => {
  try {
    // Use the MONGO_URI from the .env file
    await mongoose.connect(`mongodb+srv://kapil:12345@cluster0.zte6he4.mongodb.net/todoist?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = connectDB;
