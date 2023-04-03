const names: Array<string | number> = [];
names.push("1");
names.push(2);

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((val) => {
  console.log(val);
});
