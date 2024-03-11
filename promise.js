const createDelay = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

createDelay("Message one", 500)
  .then((message) => console.log(message))
  .catch((error) => console.error("Error: Delay failed", error));

createDelay("Message two", 1000)
  .then((message) => console.log(message))
  .catch((error) => console.error("Error: Delay failed", error));

createDelay("Message three", 1500)
  .then((message) => console.log(message))
  .catch((error) => console.error("Error: Delay failed", error));

//Promise All Method
const promises = [
  createDelay("Message one", 500),
  createDelay("Message two", 1000),
  createDelay("Message three", 1500),
];

Promise.all(promises).then((result) => {
  result.forEach((response) => {
    console.log(response);
  });
});
