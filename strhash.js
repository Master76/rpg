const mask = 0xffffffff;

function readInt(value, offset) {
    let pos = offset * 2;
    let num1 = value.charCodeAt(pos++);
    let num2 = value.charCodeAt(pos);
    return (num1 << 8) + num2;
}

module.exports = function strhash(value) {
    let offset = 0;
    let m = 0x15051505;
    let n = m;
    for (let i = value.length; i > 0; i -= 4) {
        m = (((m << 5) + m) + (m >> 0x1b)) ^ readInt(value, 0 + offset) & mask;
        if (i <= 2) {
            break;
        }
        n = (((n << 5) + n) + (n >> 0x1b)) ^ readInt(value, 1 + offset) & mask;
        offset += 2;
    }
    return (m + (n * 0x5d588b65)) & mask;
};
