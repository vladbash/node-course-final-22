const { Schema, SchemaTypes, model } = require('mongoose');

const DocumentSchema = new Schema({
    name: {
        type: SchemaTypes.String,
        required: true,
    },
    content: {
        type: SchemaTypes.String,
    },
    owner: {
        type: SchemaTypes.ObjectId,
    },
    editors: [{
        type: SchemaTypes.ObjectId,
    }],
}, { timestamps: true });

module.exports = model('Document', DocumentSchema, 'documents');