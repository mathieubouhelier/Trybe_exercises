const assert = require('assert');
// escreva a função removeMiddle para passar nos testes abaixo:
removeMiddle = (input) => {
    let output = []
    middle = Math.floor((input.length)/2);
    output = input.slice(middle,middle + 1) ;
    console.log(middle, output);
    return output;
}
const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
