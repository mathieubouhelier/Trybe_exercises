const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myObject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  // create a a const sum of 10 random square numbers (with value betweeen [0-50])
  const sum = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    .map(() => Math.floor(Math.random() * 50))
    .reduce((acc, ind) => (acc = acc + ind * ind));

// calculPromise  if sum < 8000 resolve
function calculPromise() {
  return new Promise((resolve, reject) => {
    sum < 8000 ? resolve("Succedd") : reject("É mais de oito mil! Essa promise deve estar quebrada!");
  });
}

  // this promise return sum divided by 2, 3, 5, 10
  const dividPromise = () => {
    return new Promise((resolve, reject) => {
      resolve([2, 3, 5, 10].map((number) => sum / number));
    });
  };
  // Promise chain
  calculPromise()
    .then((response) => {
      console.log(response);
      dividPromise().then(console.log);
    })
    .catch(console.log);

  fetch(API_URL, myObject).then((data) => console.log("1st", data));

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

window.onload = () => fetchJoke();
