const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = name =>
  new Promise((resolve, reject) => {
    // setTimeout(() => Porque usar Timeout ???
    const animal = Animals.find(animal => animal.name === name);
    if (animal) {
      return resolve(animal);
    }
    return reject('Nenhum animal com esse nome!');
    // }, 100)
  });

const findAnimalByAge = age =>
  new Promise((resolve, reject) => {
    const animalFiltred = Animals.find(animal => animal.age === age);
    console.log('inside promise findAnimalByAge return_:', animalFiltred);
    if (animalFiltred) {
      return resolve(animalFiltred);
    }
    return reject('Nenhum animal com desse idade!');
  });

const getAnimal = data => {
  if (typeof data === 'string') {
    return findAnimalByName(data).then(animal => animal);
  }
  return findAnimalByAge(data).then(animal => animal);
};

// --------------------
describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com idade procurada', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal(2).then(animal => {
        expect(animal).toEqual({ name: 'Soneca', age: 2, type: 'Dog' });
      });
    });
  });
  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal(15).catch(error =>
        expect(error).toEqual('Nenhum animal com desse idade!'),
      );
    });
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!'),
      );
    });
  });
});
