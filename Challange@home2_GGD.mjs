import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal1 = parseFloat(await userInput.question('Geef het eerste getal: '));
let getal2 = parseFloat(await userInput.question('Geef het tweede getal: '));
let deler1 = 1;
let deler2 = 1;
let GGD = 0;


for (let i = 1; i <= getal2; i++) {
    deler1 = getal1 % i;
    deler2 = getal2 % i;
    if ((deler1 == 0) && (deler2 == 0)) {
        GGD = i
    }
}
console.log(GGD);


process.exit();