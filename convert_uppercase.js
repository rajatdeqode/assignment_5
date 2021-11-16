const arr = ["hello", "how", "are", "you"];

function makeAllCaps(arr1) {
  return new Promise((resolve, reject) => {
    resolve(
      arr1.map((ele) => {
        return ele.toUpperCase();
      })
    );
  });
}

function sortWords(result) {
  return new Promise((resolve, reject) => {
    const so = result.sort();
    resolve(so);
  });
}

makeAllCaps(arr)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  });
