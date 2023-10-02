import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal = parseFloat(await userInput.question('Geef een getal: '));
let som = 0;

while (getal > 0) {
    som += getal;
    getal = parseFloat(await userInput.question('Geef een getal: '));
}

console.log(som);

process.exit();