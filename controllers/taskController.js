const Task = require('../models/Task');

exports.addTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// Update task status
// taskController.js
exports.updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const update = {
      status,
      completedAt: status === "Complete" ? new Date() : null,
    };

    const updatedTask = await Task.findByIdAndUpdate(id, update, { new: true });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task status" });
  }
};


// Update task delete
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
