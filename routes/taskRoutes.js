const express = require('express');
const router = express.Router();
const {
  addTask,
  getTasks,
  updateTaskStatus,
  deleteTask,
} = require('../controllers/taskController');

router.post('/', addTask);
router.get('/', getTasks);
router.patch('/:id', updateTaskStatus);
router.delete('/:id', deleteTask);

module.exports = router;
