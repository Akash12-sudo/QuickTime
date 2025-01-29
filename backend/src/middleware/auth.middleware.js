const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user info to request object
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token. Authentication failed." });
    }
};

module.exports = isAuthenticated;
