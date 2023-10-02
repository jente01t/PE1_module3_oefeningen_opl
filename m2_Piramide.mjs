import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Geef een hoogte: '));
let ster = '';

for (let i = 1; i <= hoogte; i++) {
    ster = ster + '*'
    console.log(ster)
}

process.exit();