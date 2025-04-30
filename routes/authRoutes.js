const express = require("express");
const router = express.Router();
const { register, login, profile } = require("../controllers/authController");
const protect = require("../middleware/authMiddleware");

// Register user
router.post("/register", register); // Register route corrected

// Login user
router.post("/login", login); // Login route corrected

// Get user profile (Protected Route)
router.get("/profile", protect, profile); // Profile route corrected

module.exports = router;
