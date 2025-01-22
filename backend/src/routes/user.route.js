const express = require("express");
const User = require("../model/user.model");
const { sendOtp, verifyOtp } = require("../controller/otp.controller");

const router = express.Router();

// Create a new user
router.post("/create", async (req, res) => {
    try {
        const { name, email, mobile } = req.body;
        console.log(name, email, mobile);

        if (!name || !email || !mobile) {
            return res.status(400).json({ message: "Name, email, and mobile are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const user = new User({ name, email, mobile });
        await user.save();

        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
});

// OTP Routes
router.post("/send-otp", sendOtp);
router.post("/verify-otp", async (req, res) => {
    const { mobile, otp } = req.body;
    const result = await verifyOtp(mobile, otp);
    res.status(result.success ? 200 : 400).json(result);
});

// Login Route - Based on Mobile Number and OTP
router.post("/login", async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        // Check if mobile exists in the database
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(400).json({ message: "User not found with this mobile number" });
        }

        // Verify OTP
        const result = await verifyOtp(mobile, otp);

        if (result.success) {
            res.status(200).json({
                message: "Login successful",
                user,
            });
        } else {
            res.status(400).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
});

// Get a user by ID
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error: error.message });
    }
});

// Get all users
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error: error.message });
    }
});

// Update a user by ID
router.put("/:id", async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { name, email, mobile },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User updated successfully", updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error: error.message });
    }
});

// Delete a user by ID
router.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error: error.message });
    }
});

// Logout Route
router.post("/logout", async (req, res) => {
    try {
        // Assuming you are using JWT tokens or sessions for user authentication
        // If using JWT tokens, this route could invalidate the user's token on the client side.

        // For now, we will just send a response indicating the user has been logged out
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Error during logout", error: error.message });
    }
});

module.exports = router;
