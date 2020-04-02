const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 1e6; i++) {
    file.write(
        "esto es un texto de prueba con el curso de backend de nodejs en el modulo de streams"
    )
}
file.end();