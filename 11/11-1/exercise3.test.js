const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = id => {
  return new Promise((resolve, reject) => {
    if (users[id]) {    
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = userID => {
  const test = asyncfindUserById(userID).then(user => user.name);
  return findUserById(userID).then(user => user.name);
};

console.log('findUserById(4)',findUserById(4));
console.log(findUserById(4).then(animal => animal));
console.log(findUserById(1).catch(error => error));

      // console.log('getUser',getUser);
      // expect(getUser).toEqual('Mark');
  

// describe('Quando o user 4 existe', () => {
//   test('Retorne o nome Mark', async () => {
//     const getUser = await getUserName(4);
//     expect(getUser).toEqual('Mark');
//   });
// });

// describe('Quando o user 5 existe', () => {
//   test('Retorne o nome Paul', async () => {
//     const getUser = await getUserName(5);
//     expect(getUser).toEqual('Paul');
//   });
// });

// describe('Quando o user 5 existe', () => {
//   test('Retorne o nome Paul', async () => {
//     try {
//       await getUserName(5);
//     } catch (error) {
//       expect(getUerrorser).toEqual(({ error: "User with 1 not found." }));
//     }
//   });
// });
