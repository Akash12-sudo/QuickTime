// backend/src/model/user.model.js

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        match: [/^[0-9]{10}$/, "Invalid mobile number"],
    },
    otp: {
        type: String,
        required: true,
        default: () => Math.floor(100000 + Math.random() * 900000).toString(), // Default 6-digit OTP
    },
    otpExpiration: {
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 5 * 60 * 1000), // Default expiry: 5 minutes from now
    },
}, { timestamps: true });



const User = model("User", userSchema);

module.exports = User;

