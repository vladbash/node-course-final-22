const { Router } = require('express');
const { Document } = require('../../models');

const homeRouter = new Router();

homeRouter.get('/', async (req, res) => {
    const docs = await Document.find();
    res.render('index', { docs });
});

homeRouter.post('/', (req, res) => {
    res.render('index');
});

module.exports = homeRouter;