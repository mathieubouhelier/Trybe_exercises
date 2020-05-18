Agora a prática
Com exceção do exercício 9, refaça todos os exercícios do dia 8.3 , dessa vez utilizando Jest.

Faça os exercícios fizzbuzz, palidrome, reverseInt e vowels deste repositório . Os testes para cada exercício já estão prontos. Você precisa completar as funções de cada exercício de forma que todos os testes passem. Clone o repositório ou copie os arquivos para sua máquina.

Bônus
Faça os exercícios 10 e 11 deste repositório . Os testes para cada exercício já estão prontos. Você precisa completar as funções de cada exercício de forma que todos os testes passem. Clone o repositório ou copie os arquivos para sua máquina.

Agora a prática
Você vai implementar vários testes em contextos diferentes a fim de consolidar a mecânica e também a forma de pensar em testes.

Copie as funções já implementadas e desenvolva os testes. Separe as funções em arquivos para evitar qualquer tipo de problema.

A função sum(a, b) retorna a soma do parâmetro a com o b

Teste se o retorno de sum(4, 5) é 9
Teste se o retorno de sum(0, 0) é 0
Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
Copiar
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
2. A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso o item não pertença ao array arr
Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
Copiar
const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// implemente seus testes aqui
3. A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
Copiar
const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// implemente seus testes aqui
4. A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array
Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Verifique se o array passado por parâmetro não sofreu alterações
Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
Copiar
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
5. A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o próprio array sem o elemento item caso ele exista no array
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
Copiar
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
6. A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divísivel por 3 ou 5 e retorna false caso num não seja um número
Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
Copiar
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
7. Teste se uma variável foi definida
Copiar
const assert = require('assert');

const thereIs = '';

// implemente seus testes aqui
8. Teste se uma função foi definida
Copiar
const assert = require('assert');

function thereIs() {}

// implemente seus testes aqui
9. Utilize assert.ok() para testar uma condição
Copiar
const assert = require('assert');

function change(param) {
  return !param;
}

// implemente seus testes aqui
10. Compare dois objetos (JSON) para verificar se são idênticos ou não
Copiar
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
11. Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.
Copiar
const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
Bônus
Bônus 1
Imagine que você vai construir uma máquina de venda automática (como essas que vendem refrigerante). A máquina aceita moedas e calcula a diferença do valor total que deve ser pago e o valor recebido da pessoa que compra. Essa máquina possui um conjunto de moedas. Você deve implementar a seguinte lógica: dado o valor do troco, a máquina retorna uma lista com as moedas que ela devolverá para a pessoa.