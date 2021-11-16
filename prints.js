function num() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let i = 0; i <=10; i++) {
        resolve(console.log(i));
      }
    }, Math.floor(Math.random() * 10)+1);
  });
}
num().then((res) => {
  console.log(res)
})