const bcrypt = require('bcrypt');

const ROUNDS = 10;

module.exports = async password => {
    const salt = await bcrypt.genSalt(ROUNDS);
    return await bcrypt.hash(password, salt);
};
