const jwt = require("jsonwebtoken");

exports.authentication = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"] || req.headers["X-API-KEY"]
        if (!token) {
            return res.status(401).send({ status: false, message: "token must be present" })
        }
        let decodedtoken = jwt.verify(token, 'sun');
        if (!decodedtoken) {
            return res.status(400).send({ status: false, message: "Invalid authentication token in request headers." })
        }
        if (Date.now() > (decodedtoken.exp) * 1000) {
            return res.status(400).send({ status: false, message: "Session expired! Please login again." })
        }
        req.loggedInUserId = decodedtoken.userId
        next();
    }
    catch (err) { return res.status(500).send({ status: false, message: err.message }); }
}
