// Exeriment with this keyword

// this refers to the object that is executing / calling a function
// this in a function refers to the global object / in browser it is the browser window object
// in strict mode, however, this doesn't have default binding and will be undefined

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
person.iteration.call(person2);
