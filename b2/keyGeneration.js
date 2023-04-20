const crypto = require('crypto');

const generateKey = () => {
    let key = crypto.randomBytes(16);
    let hexKey = key.toString('hex');
    return hexKey;
};

module.exports = generateKey;
