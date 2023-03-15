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
} = {
  name: "Ted Vu",
  age: 30,
  hobbies: ["sport"],
  role: [5, "test"],
  gender: Gender.FEMALE,
};
