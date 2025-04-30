const express = require("express");
const router = express.Router();
const { getReminders } = require("../controllers/reminderController");

router.get("/", getReminders);

module.exports = router;
