// Exercício 4

Por fim, faça uma pirâmide com `n` asteriscos de base:

/*
n = 5

  *
 ***
*****
*/

//Solução

let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex++) {
  for (lineColumn = 1; lineColumn <= n; lineColumn++) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight--;
  controlLeft++;
};

// Exercício 5

Faça uma pirâmide com `n` asteriscos de base, que seja vazia no meio:

//Solução

let n = 7;
let lineInput = [];
let baseMatrix = [];
let symbol = '*';
let matrix = [];
let midOfMatrix = (n + 1) / 2;
let controlLeft = 1;
let controlRight = n - 2;

for (let lineColumn = 0; lineColumn < n; lineColumn++) {
  baseMatrix[lineColumn] = symbol;
}
matrix[0] = baseMatrix;
for (let lineIndex = 1; lineIndex < n; lineIndex++) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    if (lineColumn === controlLeft || lineColumn === controlRight) {
      lineInput[lineColumn] = symbol;
    } else {
      lineInput[lineColumn] = ' ';
    }
  }
  matrix[lineIndex] = lineInput;
  controlLeft++;
  controlRight--;
  lineInput = [];
  if (controlLeft > controlRight) break;
}
let result = '';
for (let lineIndex = matrix.length - 1; lineIndex >= 0; lineIndex--) {
  for (let lineColumn = 0; lineColumn < n; lineColumn++) {
    result = result + matrix[lineIndex][lineColumn];
  }
  console.log(result);
  result = '';
}
