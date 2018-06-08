const jwt = require('express-jwt');
const { secretKey } = require('../config');

const auth = jwt({
    secret: secretKey, 
    credentialsRequired: false
});

module.exports = auth;
