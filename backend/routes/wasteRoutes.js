const express = require("express");
const router = express.Router();
const { depositWaste } = require("../controllers/WasteController");

router.post("/deposit", depositWaste);

module.exports = router;
