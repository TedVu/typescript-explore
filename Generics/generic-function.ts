// type constraint in action with extends keyword
function merge<T extends object, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const objC = merge({ name: "ted" }, { age: 4 });

console.log(objC.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";

  if (element.length === 1) {
    console.log("Got 1 element");
  } else if (element.length > 1) {
    console.log("Got " + element.length + " elements");
  }

  return [element, descriptionText];
}

console.log(countAndDescribe("Ted Vu"));
