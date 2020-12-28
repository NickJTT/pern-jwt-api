const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = id => {
    const payload = { id: id }
    return jwt.sign(payload, process.env.jwtSecret, { expiresIn: '1hr' });
};
