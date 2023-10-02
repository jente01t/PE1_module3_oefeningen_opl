import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}

process.exit();
