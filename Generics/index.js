var names = [];
names.push("1");
names.push(2);
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("This is done");
    }, 2000);
});
promise.then(function (val) {
    console.log(val);
});
