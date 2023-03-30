// Exeriment with this keyword

// this refers to the object that is executing / calling a function
// this in a function refers to the global object / in browser it is the browser window object
// in strict mode, however, this doesn't have default binding and will be undefined
// a callback is a case where we need to take care, if we pass in a normal function as a callback
// that function will have the this binding to the function (because it is called in side another function)
// a way to solve this problem of course is to use forEach

// an example of bounding this to an object
const person = {
  fullName: "Ted Vu",
  hobbies: ["Games", "Soccer"],
  callMyName: function () {
    console.log(`My name is ${this.fullName}`);
  },
  iteration: function () {
    this.hobbies.forEach((hobby, index) => {
      console.log(`Hobby of ${this.fullName} is ${hobby}`);
    });
  },
};

const person2 = {
  fullName: "Kevin Vu",
  hobbies: ["Games", "Soccer"],
};

person.callMyName();
person.callMyName.call(person2);
person.callMyName.bind(person2)();
