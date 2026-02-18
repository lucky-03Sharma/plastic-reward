const mongoose = require("mongoose");

const wasteLogSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String,
    enum: ["recycle", "reuse", "reduce"]
  },
  weightKg: Number,
  pointsEarned: Number,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("WasteLog", wasteLogSchema);
