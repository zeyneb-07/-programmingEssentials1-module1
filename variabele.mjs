
// hoef je niet uit je hoofd te kennen
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let basis = await userInput.question("wat is de basis? ")
let hoogte = await userInput.question("wat is de hoogte? ")

let oppervlakte = basis * hoogte

console.log("De oppervlakte is "+ oppervlakte)

process.exit()
