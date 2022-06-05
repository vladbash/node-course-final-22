const { Router } = require('express');
const chat = require('./chat/chat');
const { auth, user } = require('./user');
const jwtHook = require('../middlewares/jwt.middleware');

const apiRouter = new Router();

apiRouter.use('/chats', chat);
apiRouter.use('/auth', auth);
apiRouter.use('/users', jwtHook, user);

module.exports = apiRouter;