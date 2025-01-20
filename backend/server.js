const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const userRoutes = require("./src/routes/user.route");
app.use("/api/user", userRoutes);

// MongoDB connection
async function main() {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully");
}

main().catch((err) => console.error(err));

// Default Route
app.get("/", (req, res) => {
    res.send("Server is Running...!");
});

// Start Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
