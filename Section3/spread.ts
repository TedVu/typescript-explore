const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking"];

// the use of spread operation
activeHobbies.push(...hobbies);

activeHobbies.forEach((activeHobby) => {
  console.log(`Active hobby is ${activeHobby}`);
});

const person1 = {
  firstName: "Ted",
  lastName: "Vu",
};

const person3 = { ...person1 };

console.log(`Person 3 first name is ${person3.firstName}`);
