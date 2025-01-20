const express = require('express');
const User = require('../model/user.model');
const twilio = require('twilio');
const router = express.Router();

// Twilio configuration
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Create a new user
router.post('/create', async (req, res) => {
    try {
        const { name, email, mobile } = req.body;

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
            otp: "000000", // Default OTP if required
            otpExpiration: new Date(Date.now() + 5 * 60 * 1000) // Default expiration
        });

        await user.save();
        res.status(201).json({ message: "User created successfully", user });

    } catch (error) {
        console.error("Failed to create user:", error);
        res.status(500).json({ message: "Failed to create user", error: error.message });
    }
});


// User Login Route
router.post('/login', async (req, res) => {
    try {
        const { mobile, otp } = req.body;

        // Validate required fields
        if (!mobile || !otp) {
            return res.status(400).json({ message: "Mobile number and OTP are required" });
        }

        // Find user by mobile
        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Validate OTP and expiration
        if (user.otp !== otp || new Date() > user.otpExpiration) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        // Successful login
        res.status(200).json({ message: "Login successful", user });

    } catch (error) {
        console.error("Failed to login user:", error);
        res.status(500).json({ message: "Failed to login user", error: error.message });
    }
});

// Generate and send OTP
router.post("/send-otp", async (req, res) => {
    try {
        const { mobile } = req.body;

        if (!mobile) {
            return res.status(400).json({ message: "Mobile number is required" });
        }

        // Generate OTP and expiration
        const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate 6-digit OTP
        const otpExpiration = new Date(Date.now() + 5 * 60 * 1000); // Expire in 5 minutes

        // Find existing user or create a new one
        let user = await User.findOne({ mobile });
        if (!user) {
            user = new User({
                mobile,
                otp,
                otpExpiration,
            });
        } else {
            // Update OTP and expiration for existing user
            user.otp = otp;
            user.otpExpiration = otpExpiration;
        }

        await user.save();

        res.status(200).json({ message: "OTP sent successfully", otp }); // Optionally send OTP for testing
    } catch (error) {
        console.error("Failed to create user:", error);
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
});



module.exports = router;
