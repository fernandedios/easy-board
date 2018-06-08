const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoardSchema = new Schema({
    title: String,
    description: String,
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    members: [
        { type: Schema.Types.ObjectId, ref: 'User' }
    ],
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Board', BoardSchema);
