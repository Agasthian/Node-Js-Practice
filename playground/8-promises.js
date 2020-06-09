const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([9, 9, 1]);
  }, 2000);
});

doWorkPromise
  .then((result) => {
    console.log('Success', result);
  })
  .catch((error) => {
    console.log(error);
  });
