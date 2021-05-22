type person = {
  name: string;
  age?: number;
  hobbie: string[];
  role: number;
};

type Combinable = number | string;

enum Role {
  ADMIN,
  READONLY,
  USER,
}
const person: person = {
  name: "ted",
  hobbie: ["cooking", "soccer"],
  role: Role.ADMIN,
};

const number2 = 2.8;
function combine(input1: number | string, input2: number | string) {
  let result;

  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

function plus(n1: number, n2: number): number {
  return n1 + n2;
}

let a: (n1: number, n2: number) => number;
console.log(a(1, 2));

function addAndHandle(n1: number, n2: number, cb: (result: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(1, 2, (result) => {
  console.log(result);
  return "ted";
});

let userInput: unknown;
let userName: string;

userInput = "ted";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
