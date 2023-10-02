import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

let hoogte = parseFloat(await userInput.question('Wat is de hoogte?'));
let midden = (hoogte + 1) / 2

for (let i = 1; i <= midden; i++ ) {
    let rij = '';
    for(let j = 1; j <= midden - i; j++){
    rij += ' ';
    }
    for(let k = 1; k <= 2 * i - 1; k++){
    rij += '*';
    }
    console.log(rij);
}

for(let i = 1; i <= midden -1; i++) {
    let rij = '';
    for(let j = 1; j <= midden + i; j++){
        rij = ' ';
    } for (let k = 1; k <= 2 * i - 1;k++) {
        rij += '*';
    } console.log(rij)
}


process.exit();