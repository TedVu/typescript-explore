// Array destructuring - values are pulled out by order
const hobbies2 = ["Reading", "Cooking"];

const [hobby1, hobby2] = hobbies2;

console.log(`Hobby 1 is ${hobby1}`);

const person4 = {
  fullName: "Ted Vu",
};

// Object destructuring - values are pulled out based on keys
const { fullName } = person4;

console.log(`The full name is ${fullName}`);
