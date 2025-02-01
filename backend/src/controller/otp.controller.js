const User = require("../model/user.model");

const client = require("twilio")(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Function to send OTP via Twilio
const sendOtp = async (req, res) => {
    const { role, mobile } = req.body;

    if (!mobile) {
        return res.status(400).json({ message: "Mobile number is required" });
    }

    try {
        // Ensure mobile number is in the correct format (+<country_code><number>)
        const formattedMobile = `+91${mobile}`;

        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(400).json({ message: "User not found with this mobile number" });
        }
        console.log(role, user.role)
        if(user && user.role !== role) {
            return res.status(400).json({ message: `Not authorized as ${role}`})
        }

        const verification = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({ to: formattedMobile, channel: "sms" });

        res.status(200).json({ success: true, message: "OTP sent successfully", sid: verification.sid });
    } catch (err) {
        console.error("error", err)
        res.status(500).json({ success: false, message: `Error in sending OTP: ${err.message}` });
    }
};

// Function to verify OTP via Twilio
const verifyOtp = async (mobile, otp) => {
    if (!mobile || !otp) {
        return { success: false, message: "Mobile number and OTP are required" };
    }

    try {
        // Ensure mobile number is in the correct format (+<country_code><number>)
        const formattedMobile = `+91${mobile}`;

        const result = await client.verify.v2.services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({
                to: formattedMobile,
                code: otp,
            });

        if (result.status === "approved") {
            return { success: true, message: "OTP verified successfully", payload: result };
        } else {
            return { success: false, message: "Invalid OTP" };
        }
    } catch (err) {
        return { success: false, message: `Error in verifying OTP: ${err.message}` };
    }
};

module.exports = { sendOtp, verifyOtp };
