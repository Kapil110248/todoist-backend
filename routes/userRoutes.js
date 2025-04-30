const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware"); // correct path if different
const User = require("../models/User");

// @route   GET /api/users/profile
// @desc    Get logged-in user's profile
// @access  Private
router.get("/profile", protect, async (req, res) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
