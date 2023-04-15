// // const promise1 = Promise.reject(123);

// // promise1
// //   .then((value) => {
// //     console.log(`Value is ${value}`);
// //   })
// //   .catch((err) => {
// //     console.log("Will I ever be called ? ");
// //   });

// // let p = new Promise((resolve, reject) => {
// //   let a = 1 + 1;
// //   if (a == 3) {
// //     resolve("Success");
// //   } else {
// //     reject("Failed");
// //   }
// // });

// // p.then((message) => {
// //   console.log(`This is the message from calling resolve ${message}`);
// // }).catch((message) => {
// //   console.log(`This is the message from calling reject ${message}`);
// // });

// // Promise helps solve the problem of callback hell

// // const userLeft = true;
// // const userWatchingCatMeme = false;
// // const watchTutorialCallback = new Promise((resolve, reject) => {
// //   if (userLeft) {
// //     reject({
// //       name: "User Left",
// //       message: ":(",
// //     });
// //   } else if (userWatchingCatMeme) {
// //     reject({
// //       name: "User Watching cat meme",
// //       message: "WebDevSimplified < Cat",
// //     });
// //   } else {
// //     resolve("Thumbs up and Subscribe");
// //   }
// // });

// // watchTutorialCallback
// //   .then((msg) => {
// //     console.log("Success: " + msg);
// //   })
// //   .catch((err) => {
// //     console.log(err.name + " " + err.message);
// //   });

// const promise1 = new Promise((resolve, reject) => {
//   resolve("Video 1 recorded");
// });

// const promise2 = new Promise((resolve, reject) => {
//   resolve("Video 2 recorded");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Video 3 recorded");
//   }, 5000);
// });

// // race will only execute the first resolve but wait all to be end
// Promise.race([promise1, promise2, promise3]).then((msg) => {
//   console.log(msg);
// });

// const t = Promise.resolve(() => {
//   console.log("Do something please");
// });

// // value here is a arrow function
// t.then((value) => {
//   value();
// });

// MDN study of Promises
const doSomething = Promise.resolve(() => {
  console.log("Do something promise");
});
const promise = doSomething;

const promisemdn2 = promise.then((test) => {
  console.log("Calling promise successfully");
  test();
});
