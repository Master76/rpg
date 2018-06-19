# rpg
Random password generator

# usage

Length of the password must be longer than 8.

```bash
node index.js [password length] [random seed | magic word]
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

```
