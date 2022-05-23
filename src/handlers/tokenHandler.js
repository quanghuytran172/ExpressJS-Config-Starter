const jsonwebtoken = require("jsonwebtoken");

const tokenDecode = (req) => {
    const bearerHeader = req.headers["authorization"];
    if (bearerHeader) {
        const bearer = bearerHeader.split(" ")[1];
        try {
            const tokenDecoded = jsonwebtoken.verify(
                bearer,
                process.env.TOKEN_SECRET_KEY
            );
            return tokenDecoded;
        } catch (err) {
            return false;
        }
    } else {
        return false;
    }
};

exports.verifyAdminToken = async (req, res, next) => {};
