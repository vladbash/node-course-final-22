const { jwtService } = require('../services');

const jwtHook = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        throw new Error(401);
    }
    const token = authHeader.replace('Bearer ', '');
    const user = jwtService.verifyToken(token);
    req.user = user;
    next();
};

module.exports = jwtHook;