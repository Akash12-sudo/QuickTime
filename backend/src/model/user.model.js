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
        match: [/^\+?[0-9]{1,4}?[-.\s]?[0-9]{10}$/, "Invalid mobile number"],
    },
    otp: {
        type: String,
        required: false, // Managed by Twilio
    },
    otpExpiration: {
        type: Date,
        required: false, // Managed by Twilio
    },
}, { timestamps: true });

const User = model("User", userSchema);

module.exports = User;


