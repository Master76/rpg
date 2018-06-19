let rand = require('./random').rand;

module.exports = function normal() {
    let n = rand() % 36;
    // number
    if (n <= 10) return n.toString();
    // lowercase
    else return String.fromCharCode(n + 87);
};
