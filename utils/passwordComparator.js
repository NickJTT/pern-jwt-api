const bcrypt = require('bcrypt');

module.exports = async(original, encrypted) => {
    return await bcrypt.compare(original, encrypted);
}
