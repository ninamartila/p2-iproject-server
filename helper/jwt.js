const jwt = require('jsonwebtoken');

function signToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET)
}

function verifyToken(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    return payload;
};

module.exports = { signToken, verifyToken }