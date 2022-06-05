const userService = require('./user.service');
const passportStrategies = require('./auth.service');
const jwtService = require('./jwt.service');

module.exports = {
    userService,
    passportStrategies,
    jwtService
};