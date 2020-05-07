const assert = require('assert');
// escreva a função addAllnumbers para passar nos testes abaixo:
const addAllnumbers = (array) => {
    let out = 0;
    for (i = 0; i < array.length; i += 1) {
      out += array[i];
  }
  console.log(out); 
    return out
  }

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);
