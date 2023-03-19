const hobbies = ["Sports", "Cooking"];

const activeHobbies = ["Hiking"];

// the use of spread operation
activeHobbies.push(...hobbies);

activeHobbies.forEach((activeHobby) => {
  console.log(`Active hobby is ${activeHobby}`);
});
