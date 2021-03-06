const assert = require('assert');
// escreva a função addOne para passar nos testes abaixo:
const addOne = (array) => {
    let out = [] ; 
    for (i = 0; i < array.length; i += 1) {
        out[i] = array [i] + 1;
    }
    console.log(out);
    return out;
}


//
const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepEqual(output, expected);
assert.deepEqual(myArray, unchanged);
