const { Router } = require('express');
const { Document } = require('../../models');

const docRouter = new Router();

docRouter.get('/create', (req, res) => {
    res.render('document', { doc: {} });
});

docRouter.post('/create', async (req, res) => {
    const { id } = req.user;
    const { name, content } = req.body;
    const doc = new Document({
        name,
        content,
        owner: id
    });
    await doc.save();
    res.redirect(`/document/${doc._id}`);
});

docRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const doc = await Document.findById(id);
    res.render('document', { doc });
});

module.exports = docRouter;