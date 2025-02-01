const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const { sendOtp, verifyOtp } = require("../controller/otp.controller");
const isAuthenticated = require("../middleware/auth.middleware");

const router = express.Router();

// Create a new user
router.post("/create", async (req, res) => {
    try {
        const { name, email, mobile, role } = req.body;
        console.log(req.body)

        if (!name || !email || !mobile) {
            return res.status(400).json({ message: "Name, email, and mobile are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        const user = new User({
            name,
            email,
            mobile,
            role: role || "user", // Assign default role if not provided
        });
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

        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(400).json({ message: "User not found with this mobile number" });
        }

        const result = await verifyOtp(mobile, otp);

        if (result.success) {
            const token = jwt.sign(
                { userId: user._id, role: user.role },
                process.env.JWT_SECRET_KEY,  // ✅ Correct
                { expiresIn: "1h" }
            );
            
            console.log('token created: ', token);

            res.cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict'
            });

            res.status(200).json({
                message: "Login successful",
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                    role: user.role,
                }
            });
        } else {
            res.status(400).json({ message: result.message });
        }
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error: error.message });
    }
});

// Protected Route Example
router.get("/protected", isAuthenticated, async (req, res) => {
    try {
        res.status(200).json({ message: "Access to protected route granted", user: req.user });
    } catch (error) {
        res.status(500).json({ message: "Error fetching protected data", error: error.message });
    }
});

// Logout Route
router.post("/logout", async (req, res) => {
    try {
        res.clearCookie("token");
        res.status(200).json({ message: "Logout successful" });
    } catch (error) {
        res.status(500).json({ message: "Error during logout", error: error.message });
    }
});

module.exports = router;
