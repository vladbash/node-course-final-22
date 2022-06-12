const { Document } = require('../models');

const onUpdate = async ({ id, name, content }) => {
    const doc = await Document.findById(id);
    if (!doc) throw new Error('wrong doc id');
    doc.name = name;
    doc.content = content;
    await doc.save();
    return doc;
};

module.exports = {
    onUpdate
};