// type constraint in action with extends keyword
function merge<T extends object, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const objC = merge({ name: "ted" }, { age: 4 });

console.log(objC.age);
