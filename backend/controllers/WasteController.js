const WasteLog = require("../models/WasteLog");

const User = require("../models/User");

const depositWaste = async (req, res) => {

  try {

    const { type, weightKg } = req.body;

    const userId = req.user._id;

    const coins = weightKg * 10;

    await WasteLog.create({

      userId,

      type,

      weightKg,

      coinsEarned: coins

    });

    await User.findByIdAndUpdate(

      userId,

      {
        $inc: {
          coins,
          totalWaste: weightKg
        }
      }

    );

    res.json({
      message: "Waste submitted"
    });

  }

  catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  depositWaste
};
