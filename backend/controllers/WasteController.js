const WasteLog = require("../models/WasteLog");
const User = require("../models/User");

const calculatePoints = (weight, type) => {
  let base = Math.floor(weight / 2) * 10;

  if (type === "recycle") base += 5;
  if (type === "reuse") base += 3;
  if (type === "reduce") base += 2;

  return base;
};

exports.depositWaste = async (req, res) => {
  try {
    const { userId, type, weightKg } = req.body;

    const points = calculatePoints(weightKg, type);

    const log = await WasteLog.create({
      userId,
      type,
      weightKg,
      pointsEarned: points
    });

    await User.findByIdAndUpdate(userId, {
      $inc: {
        coins: points,
        totalWaste: weightKg
      }
    });

    res.json({
      message: "Waste deposited successfully",
      points
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
