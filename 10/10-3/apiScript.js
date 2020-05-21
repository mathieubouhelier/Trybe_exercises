const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const numRandom = () => Math.floor(Math.random() * 50);
  let randomNums = [];
  sum = 0;
  for (let index = 0; index < 10; index++) {
    randomNums[index] = numRandom();
    sum = sum + randomNums[index] * randomNums[index];
  }
  successTest = sum < 8000;
  // console.log("meu array", randomNums, "sum", sum, successTest);

  function promise1() {
    return new Promise((resolve, reject) => {
      if (successTest) {
        // console.log("inside Succedd");
        resolve("Succedd");
      } else {
        // console.log("inside fail");
        reject("É mais de oito mil! Essa promise deve estar quebrada!");
      }
    });
  }
  const divedNumber = [2, 3, 5, 10];
  const funcExt = () => {
    return new Promise(() => {
      // console.log("Funcext_print test");
      for (let index = 0; index < divedNumber.length; index++) {
        let divedArray = [];
        divedArray = successTest / divedNumber[index];
        console.log(divedArray);
      }
    });
  };

  promise1().then(funcExt()).catch(console.log);

  fetch(API_URL, myObject).then((data) => console.log("1st", data));

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

window.onload = () => fetchJoke();
