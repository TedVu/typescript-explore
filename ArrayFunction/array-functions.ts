const a = [
  {
    name: "ted",
  },
  {
    name: "kevin",
  },
  {
    name: "mia",
  },
];

const b = a.map((item) => item.name);

b.forEach((bs) => {
  console.log(`My name is ${bs}`);
});
