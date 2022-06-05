const { Router } = require('express');
const { userService } = require('../../services');

const userRouter = new Router();

userRouter.get('/me', async (req, res) => {
    const { id } = req.user;
    res.json(await userService.getUser(id));
});

userRouter.put('/', async (req, res) => {
    const { id } = req.user;
    const { name, email } = req.body;

    res.json(await userService.updateUser(id, name, email));
});

module.exports = userRouter;