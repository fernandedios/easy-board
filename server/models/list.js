const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ListSchema = new Schema({
    board: { type: Schema.Types.ObjectId, ref: 'Board' },
    title: String,
    description: String,
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('List', ListSchema);
