const promise1 = Promise.resolve(123);

promise1.then((value) => {
  console.log(`Value is ${value}`);
});

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 3) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log(`This is the message from calling resolve ${message}`);
}).catch((message) => {
  console.log(`This is the message from calling reject ${message}`);
});
