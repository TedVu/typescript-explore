type person = {
  name: string;
  age?: number;
  hobbie: string[];
  role: number;
};

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

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}
