let rand = require('./random').rand;

const mapping = '!@#$%^&*_+~-=;:,.<>?';

module.exports = function special() {
    let i = rand() % mapping.length;
    return mapping[i];
};
