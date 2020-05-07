const assert = require('assert');
const greetPeople = (people) => {
    let greeting = 'Hello ';
    let out =[]
  
    for (const person in people) {
      out.push(`${greeting}${people[person]}`);
    }
    console.log(out);
    return out;
  };
 
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];
  console.log(greetPeople(parameter));
  /*
    Use a variável parameter como parâmetro da função acima, escreva testes
    para verificar se a mesma está retornando a como se vê na variável result
    e, caso não esteja, altere o código para que ele passe nos testes.
    Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
    a função aos poucos:
  */
assert.strictEqual(typeof greetPeople, 'function');
// assert.deepEqual(greetPeople(parameter), result);
assert.deepStrictEqual(greetPeople(parameter), result);
