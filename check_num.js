function check(num) {
  if (!num) {
    return "Please Enter num";
  }
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve("Num is greater than 10");
    }
    reject("Num is less than 10");
  });
}

check(11)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
