const { verifyToken } = require('../helper/jwt');

const authentication = (req, res, next) => {
    const { access_token } = req.headers;
    if (access_token) {
        const payload = verifyToken(access_token);
        req.users = { id: payload.id, email: payload.email };
        if (payload.id) {
            next()
        } else {
            next({ name: "Unauthorized" });
        }
    } else {
        next({ name: "Unauthorized" });
    }
};

module.exports = authentication