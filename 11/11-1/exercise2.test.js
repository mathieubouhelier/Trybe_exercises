const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          }
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    }
    
    const getUserName = (userID) => {
    const test = findUserById(userID).then(user => user.name);
      return findUserById(userID).then(user => user.name);
    }

    console.log('users[4]',users[4]);
    console.log(users[4].name);
    console.log(getUserName(5));
    console.log(findUserById(4));


describe('Quando o user 4 existe', () => {
  test('Retorne o nome Mark', () => {
      expect.assertions(1);
      return getUserName(4).then(user => {
        console.log('inside user',user)
        expect(user).toEqual('Mark');
      });
  });
});



describe('Quando o user 5 existe', () => {
  test('Retorne o nome Paul', () => {
    expect.assertions(1);
    return getUserName(5).then(user => {
      console.log('inside user',user)
      expect(user).toEqual('Paul');
    });
  });
});

describe('Quando o user não existe', () => {
  test(' error: User with  + id +  not found.', () => {
      expect.assertions(1);
      return getUserName(1).catch(error =>
        expect(error).toEqual({ error: "User with 1 not found." })
      
)})})
