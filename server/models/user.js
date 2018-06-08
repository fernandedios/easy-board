const _ = require('lodash');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: {
        type: String, 
        unique: true,
        lowercase: true
    },
    password: String,
    avatar: String,
    role: {
        type: String,
        default: 'user'
    },
    created: { type: Date, default: Date.now }
});

// DO NOT use fat arrwo function here, need to preserve 'this'
UserSchema.pre('save', function(next) {
    let user = this;

    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return next();

        user.password = hash;
        next();
    });
});

UserSchema.methods.toJSON = function() {
    const user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'name', 'email', 'role', 'avatar']);
}

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}; 

module.exports = mongoose.model('User', UserSchema);
