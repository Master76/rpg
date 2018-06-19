let rand = require('./random').rand;

module.exports = function upper() {
    let c = rand() % 26 + 65;
    return String.fromCharCode(c);
};
