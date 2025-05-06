const express = require("express");
const router = express.Router();
const { getProfile, updateProfile, deleteAccount } = require("../controllers/userController");
const protect = require("../middleware/authMiddleware"); // JWT middleware

// @route   GET /api/user/profile
router.get("/profile", protect, getProfile);

// @route   PUT /api/user/update
router.put("/update", protect, updateProfile);

// @route   DELETE /api/user/delete
router.delete("/delete", protect, deleteAccount);

module.exports = router;
