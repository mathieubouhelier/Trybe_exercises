const sum = require('./exercise1')
const myIndexOf = require('./exercise2')
const mySum = require('./exercise3')
const myRemove = require('./exercise4')
const myRemoveWithoutCopy = require('./exercise5')
const myFizzBuzz = require('./exercise6')
const thereIsFunction = require('./exercise8')
const change = require('./exercise9')
const isAbove = require('./exercise11')
const thereIs = '';
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

describe ('suite de test Exercise1', () => {
   test('soma 4 e 5 para dar 9', () => {
      expect(sum(4, 5)).toEqual(9)
   })
   test('soma 0 e 0 para dar 0', () => {
      expect(sum(0, 0)).toEqual(0)
   })
   test("throws error quando um parametro é um string ", () => {
      expect(() => {
        sum((4, "5"));
      }).toThrow();
    });
   test("throws retorno um messagem quando um parametro é um string", () => {
     expect(() => {
       sum((4, "5"));
     }).toThrow(new Error("parameters must be numbers"));
   });
})

describe ('suite de test Exercise2', () => {
   test('Teste se ([1, 2, 3, 4], 3) retorna o index do input 2', () => {
      expect(myIndexOf([1, 2, 3, 4],3)).toEqual(2)
   })
   test('Teste se ([1, 2, 3, 4],5) retorna o valor -1', () => {
      expect(myIndexOf([1, 2, 3, 4],5)).toEqual(-1)
   })
})

describe ('suite de test Exercise3', () => {
   test('teste sum do array [1, 2, 3, 4] igual a 10', () => {
      expect(mySum([1, 2, 3, 4])).toEqual(10)
   })
   test('teste sum do array igual a 10', () => {
      expect(mySum([1, -2, -3, 4])).toEqual(0)
   })
})

describe ('suite de test Exercise4', () => {
   test('Remove one item of the array ', () => {
      expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
   })
   test('Remove one item of the array ', () => {
      expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
   })
   test('teste array nao esta alterado', () => {
      expect(myRemove([5, 6, 7, 8])).toEqual([5, 6, 7, 8])
   })
   test('teste array nao esta alterado com input nao dentro do array', () => {
      expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
   })
})

describe ('suite de test Exercise5', () => {
   test('Remove one item of the array ', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
   })
   test('Remove one item of the array ', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
   })
   test('altere o array chamado a função', () => {
      const arr = [1, 2, 3, 4];
      myRemoveWithoutCopy(arr, 1);
      expect(arr).toEqual([2, 3, 4]);
    });
    test('Not Remove one item of the array ', () => {
      expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
   })
})

describe ('suite de test Exercise6', () => {
   test('input number divisible by 5 and 3 : 15 return fizzbuzz ', () => {
      expect(myFizzBuzz(15)).toMatch('fizzbuzz')
   })
   test('input number divisible by  3 : 9 return fizz ', () => {
      expect(myFizzBuzz(9)).toMatch('fizz')
   })
   test('input number divisible by 5  : 10 return buzz ', () => {
      expect(myFizzBuzz(10)).toMatch('buzz')
   })
   test('input number no divisible by 5 and 3 : 7 return 7 ', () => {
      expect(myFizzBuzz(7)).toEqual(7)
   })
   test('input NOT a number return false ', () => {
      expect(myFizzBuzz('test')).toBeFalsy()
   })
})

describe ('suite de test Exercise7', () => {
   test('check if a variable thereis is defined', () => {
      expect(thereIs).toBeDefined()
   })
})

describe ('suite de test Exercise8', () => {
   test('check if a function thereIsFunction is defined ', () => {
      expect(thereIsFunction).toBeDefined()
   })
})

describe ('suite de test Exercise9', () => {
   test('check a condition ', () => {
      expect(change('ok')).toBeFalsy()
   })
})

describe ('suite de test Exercise10', () => {
   test('check if obj1 identical obj2 ', () => {
      expect(obj1).toMatchObject(obj2);
   })
   test('check if obj1 NOT identical obj3 ', () => {
      expect(obj1).not.toMatchObject(obj3);
   })
   test('check if obj2 NOT identical obj3 ', () => {
      expect(obj2).not.toMatchObject(obj3);
   })
})

describe ('suite de test Exercise11', () => {
   test('check if 7> 5 ', () => {
      expect(isAbove(7, 5)).toBe(true)
   })
   test('check if 2 > 8 ', () => {
      expect(isAbove(2, 8)).toBeFalsy()
   })

})