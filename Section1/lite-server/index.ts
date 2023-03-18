enum Gender {
  MALE,
  FEMALE,
}
// object type
const person: {
  name?: string;
  age?: number;
  hobbies?: string[];
  role?: [number, string];
  gender?: Gender;
  literal?: "ted" | "kevin" | "mia";
} = {
  name: "Ted Vu",
  age: 30,
  hobbies: ["sport"],
  role: [5, "test"],
  gender: Gender.FEMALE,
  literal: "kevin",
};

type NumberOrString = number | string;

// union type
const combine = (input1: NumberOrString, input2: number | string) => {};

const doSomething = (): void => {
  console.log("Do something");
};

const doSomething2: () => void = doSomething;

const callback = (num): number => {
  console.log(`I'm a callback with a number received as ${num}`);
  return 5;
};

// callback has a different behaviour, the type of the function doesn't apply to call back
const callCallback = (cb: (string) => void) => {
  cb(1);
};

callCallback(callback);

// Difference between unknown and any
let userInput: unknown;
let userName: string;

userInput = 5;
userName = "5";

// this will get compilation error as unknown type cannot be reassigned
// userName = userInput;

// never represents the type of values that never occurs
// never is a subtype of everytype and no type is a subtype of never
// hence, never is assignable to any type but no type is assignable to never
function throwException(): never {
  throw new Error("Im an error");
}

let b = 5;
