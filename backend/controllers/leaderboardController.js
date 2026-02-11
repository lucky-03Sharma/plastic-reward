const User = require("../models/User");

const getLeaderboard = async (req, res) => {
  try {
    const users = await User.find()
      .sort({ coins: -1 })
      .limit(10)
      .select("name coins totalWaste");

    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getLeaderboard };
