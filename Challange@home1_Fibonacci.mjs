import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});


let maxGetal = parseFloat(await userInput.question('Geef een maximum getal :'));
let getal1 = 0;
let getal2 = 1;

console.log(getal1)
console.log(getal2)

for (let i = 0; i <= maxGetal; i = i) {
    i = getal1 + getal2;
    getal1 = getal2;
    getal2 = i
    if (i <= maxGetal){
        console.log(i);
    } else {
        process.exit();
    }
}

process.exit();

// probleem1 = geeft niet de eerste 0 en 1
// probleem2 = gaat niet tot de gegeven max (26 voor 21 te krijgen) => opgelost