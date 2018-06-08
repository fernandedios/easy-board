const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    list: { type: Schema.Types.ObjectId, ref: 'List' },
    title: String,
    description: String,
    status: { type: Boolean, default: false },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);
