import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let getal = 0;
let gemiddelde = 0;
let aantal = 0;
let totaal = 0;


while (gemiddelde < 25) {
    aantal++;
    getal = parseFloat(await userInput.question('Geef een getal: '));
    totaal = totaal + getal;
    gemiddelde = totaal / aantal;
    console.log('Het gemiddelde is: ' + gemiddelde);
}

process.exit();