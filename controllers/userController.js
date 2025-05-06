const User = require("../models/User");

// @desc    Get logged-in user profile
exports.getProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "User not authorized" });
    }
    res.json({ user: req.user });
  } catch (error) {
    console.error("Error in getProfile controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update profile
exports.updateProfile = async (req, res) => {
  try {
    const { name, email, phone} = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, phone },
      { new: true }
      
    );

    res.json({ message: "Profile updated", user });
  } catch (error) {
    console.error("Error in updateProfile controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete user account
exports.deleteAccount = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user._id);
    res.json({ message: "Account deleted successfully" });
  } catch (error) {
    console.error("Error in deleteAccount controller:", error);
    res.status(500).json({ message: "Server error" });
  }
};
