const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // ⬅️ Add this
const taskRoutes = require("./routes/taskRoutes");
const reminderRoutes = require("./routes/reminder");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB(); // ⬅️ Call it here

// Routes
app.use("/tasks", taskRoutes);
app.use("/reminders", reminderRoutes);
app.use("/api/auth", authRoutes);
app.use("/users", userRoutes);

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
