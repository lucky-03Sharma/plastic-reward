const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const wasteRoutes = require("./routes/wasteRoutes");
const leaderboardRoutes = require("./routes/leaderboardRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/waste", wasteRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/auth", authRoutes);

connectDB();


app.get("/", (req, res) => {
    res.send("Eco reward API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server running on the port", PORT);
});