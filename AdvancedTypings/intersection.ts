type Admin = {
  name: string;
  age: number;
};

type Employee = {
  employeeCode: string;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number; // union type
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type number
