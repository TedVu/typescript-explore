function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const objC = merge({ name: "ted" }, { age: 4 });

console.log(objC.age);
