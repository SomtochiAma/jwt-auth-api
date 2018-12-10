const jwt = require('jsonwebtoken'),
    expressjwt = require('express-jwt');


exports.signToken = (id) => {
    return jwt.sign(
        { _id: id},
        "secret",
        { expiresIn: "24h" }
    )
}
