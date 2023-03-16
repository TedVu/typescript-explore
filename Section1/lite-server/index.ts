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

// callback has a different behaviour than normal, the type of the function doesn't apply to call back
const callCallback = (cb: (string) => void) => {
  cb(1);
};

callCallback(callback);
