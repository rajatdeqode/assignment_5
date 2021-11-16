function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello");
    }, 1000);
  });
}

sleep()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });