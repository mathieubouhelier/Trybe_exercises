const assert = require('assert')

const myList = [1, 2, 3]

// escreva swap abaixo

const swap = (array) => array.reverse();

// console.log('swap',swap(myList));

const swappedList = swap(myList);

console.log('swappedList',swappedList);

assert.equal(swappedList[0], 3)
assert.equal(swappedList[1], 2)
assert.equal(swappedList[2], 1)
    
