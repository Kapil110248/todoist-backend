const Task = require("../models/Reminder");

exports.getReminders = async (req, res) => {
  try {
    const tasks = await Task.find({ status: "Pending" });

    const now = new Date();

    const filteredTasks = tasks.filter((task) => {
      const taskDateTime = new Date(`${task.date}T${task.time}`);
      const diff = (taskDateTime - now) / 60000; // Minutes difference

      // Show task if it starts in next 30 minutes
      return diff >= 0 && diff <= 30;
    });

    res.json(filteredTasks);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reminders", error: err });
  }
};
