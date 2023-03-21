interface Bird {
  type: "bird"; // discriminated union
  flyingSpped: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

// discriminated union in action
function moveAnimal(animal: Animal) {
  if (animal.type === "bird") {
    animal.flyingSpped;
  }
  console.log("Moving with spped: ", animal);
}
