const assert = require('assert');
// escreva a função findTheNeedle para passar nos testes abaixo:
const findTheNeedle = (array,toFind) => {
    let out = 0-1
    for (i = 0; i < array.length; i += 1) {
      if (array[i] === toFind) out = i;

  }
  console.log(out); 
    return out
  }
//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
