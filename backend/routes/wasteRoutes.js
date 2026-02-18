const express = require("express");

const router = express.Router();

const {
  depositWaste
} = require("../controllers/wasteController");

const {
  protect
} = require("../middleware/authMiddleware");

router.post(
  "/deposit",
  protect,
  depositWaste
);

module.exports = router;
