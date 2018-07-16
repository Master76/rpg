# rpg
Random password generator, which generates passwords with at least 1 uppercase, 1 special character.

# usage

Length of the password must be longer than 8.

```bash
node index.js [password length] [random seed | magic word] [recur times]
```

# examples

```bash
# use default password length(8) and random seed(Date.now())
node index.js
# Password: O4ss=ow0
# Seed: 1529397964951

# specific password length(12) and random seed(95277)
node index.js 12 95277
# Password: w%Aw8s8ksw4w
# Seed: 95277

# specific password length(10) and magic word(Hello World!)
node index.js 10 "Hello World!"
# Password: 0s!k0gO48s
# Seed: 177925888

# specific password length(12) and magic word(Master)
# and recur for 76 times
node index.js 12 "Master" 76
# Password: Goskgkg=0A0k
# Seed: -709051136
```
