import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { parse } from 'node:path';
const userInput = readline.createInterface({input, output});

for (let i = 1; i <= 10000000000; i++) {
    if (( i % 3 == 0 ) && (i % 5 == 0)){
        console.log('FizzBuzz');
    } else if ( i % 3 == 0) {
        console.log('Fizz');
    } else if ( i % 5 == 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

process.exit();