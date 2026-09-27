import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let som;
let gemiddelde;


som = parseFloat(await userInput.question('Geef een getal1 in:'));
som += parseFloat(await userInput.question('Geef een getal2 in:'));
som += parseFloat(await userInput.question('Geef een getal3 in:'));
som += parseFloat(await userInput.question('Geef een getal4 in:'));

gemiddelde = som/4;
console.log("Het gemiddelde is: " + gemiddelde + ".");

process.exit();
