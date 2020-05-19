const removeVowels = (word) => {
  const characters = word.split("");
  let results = "";
  let index = 1;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === "a" ||
      characters[i] === "o" ||
      characters[i] === "i" ||
      characters[i] === "e" ||
      characters[i] === "u"
    ) {
      results = results.concat(index);
      index += 1;
    } else {
      results = results.concat(characters[i]);
    }
  }
  console.log("displya rersult final", results);
  return results;
};

const parameter = "Dayane";
const result = "D1y2n3";
/*
    Use a variável parameter como parâmetro da função acima, escreva testes
    para verificar se a mesma está retornando a como se vê na variável result
    e, caso não esteja, altere o código para que ele passe nos testes.
    Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo
    a função aos poucos:
  */
const assert = require("assert");
assert.strictEqual(typeof removeVowels, "function");
assert.deepStrictEqual(removeVowels(parameter), result);
assert.strictEqual(typeof result, "string");
assert.notDeepStrictEqual(removeVowels("a"), "a");
assert.deepStrictEqual(removeVowels("D"), "D");
