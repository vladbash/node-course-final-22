const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = payload => {
    return jwt.sign(payload, config.get('jwt.secret'));
};

const verifyToken = token => {
    return jwt.verify(token, config.get('jwt.secret'));
}

module.exports = {
    generateToken,
    verifyToken
};