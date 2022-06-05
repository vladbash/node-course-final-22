const { Router } = require('express');
const { userService, jwtService } = require('../../services');

const authRouter = new Router();

authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const { _id } = await userService.login(email, password);
    const token = jwtService.generateToken({ email, id: _id });
    
    res.json({ token });
});

module.exports = authRouter;