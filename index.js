let random = require('./random'),
    normal = require('./normal'),
    upper = require('./upper'),
    special = require('./special'),
    strhash = require('./strhash');

// default configurations
const defaultLen = 8;
const defaultLoop = 1;
const weight = [
    normal, normal, normal, normal,
    normal, normal, normal, normal,
    upper, upper, upper, upper,
    special, normal, normal, normal
];

let [
    length = defaultLen,
    seed = Date.now(),
    recur = defaultLoop
] = process.argv.slice(2).map((v, i) => {
    let rtn = Number(v);
    if (isNaN(rtn)) {
        if (i != 1) throw new TypeError('Malformed command line arguments.')
        rtn = strhash(v);
    }
    return rtn;
});

// validate
if (length < 8) {
    throw new RangeError('Length of the password must be longer than 8.')
}

let password;
while (recur--) {

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

    password = pwd.join('');
    if (recur != 0) 
        seed = strhash(password);
}

console.log('Password:', password);
console.log('Seed:', seed);
