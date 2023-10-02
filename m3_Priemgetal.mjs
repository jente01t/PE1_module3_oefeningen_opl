import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let priemgetal = true;
let resultaat;

for (let i = 2; i < getal; i++) {
    resultaat = getal % i
    if (resultaat == 0) {
        priemgetal = false;
    }
}
if (priemgetal) {
    console.log('Het is een priemgetal.')
} else {
    console.log('Het is geen priemgetal.')
}

process.exit();