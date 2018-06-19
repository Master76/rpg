let random = require('./random'),
    normal = require('./normal'),
    upper = require('./upper'),
    special = require('./special'),
    strhash = require('./strhash');

// default configurations
const defaultLen = 8;
const weight = [
    normal, normal, normal, normal,
    normal, normal, normal, normal,
    upper, upper, upper, upper,
    special, normal, normal, normal
];

let [
    length = defaultLen,
    seed = Date.now()
] = process.argv.slice(2).map(v => {
    let rtn = Number(v);
    if (isNaN(rtn))
        rtn = strhash(v);
    return rtn;
});

// validate
if (length < 8) {
    throw new RangeError('Length of the password must be longer than 8.')
}

// initialize
let sln = new Array(length);
let pwd = new Array(length);
random.srand(seed);

// ensure there exists at least one uppercase or special character
(function () {
    let ui = random.rand() % length;
    let si = random.rand() % (length - 1);
    if (ui == si) si++;
    sln[ui] = upper;
    sln[si] = special;
})();

// plan for other empty entries
(function () {
    for (let i = 0; i < length; i++) {
        if (sln[i] == null)
            sln[i] = weight[random.rand() % weight.length];
        pwd[i] = sln[i]();
    }
})();

console.log('Password:', pwd.join(''));
console.log('Seed:', seed);
