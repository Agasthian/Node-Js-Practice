// setTimeout(() => {
//   console.log('Wait time of 2 secounds');
// }, 2000);

// example
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode('chennai', (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     const result = a + b;
//     callback(result);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

//callback
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback(undefined, [1, 7, 9]);
    callback('This is a error', undefined);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
