const uppercase = (str, callback) => {
    callback(str.toUpperCase());
  }

test ('test if return uperCase', done => {
    uppercase('a', (result) => {
        expect(result).toMatch('A');
        done ();
    })
})