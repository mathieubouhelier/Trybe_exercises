const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const sum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    .map(() => Math.floor(Math.random() * 50))
    .reduce((acc, ind) => (acc = acc + ind * ind));
  successTest = sum < 8000;

  console.log("sum", sum, "successTest", successTest);

  function promise1() {
    return new Promise((resolve, reject) => {
      if (successTest) {
        console.log("inside Succedd");
        resolve("Succedd");
      } else {
        console.log("inside fail");
        reject("É mais de oito mil! Essa promise deve estar quebrada!");
      }
    });
  }
  const funcExt = () => {
    return new Promise((resolve, reject) => {
      resolve([2, 3, 5, 10].map((number) => sum / number));
    });
  };

  promise1()
  .then(() => funcExt().then(console.log))
  .catch(console.log);

  fetch(API_URL, myObject).then((data) => console.log("1st", data));

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

window.onload = () => fetchJoke();
