type Combinable2 = string | number;
type Numeric2 = number | boolean;

type Universal2 = Combinable2 & Numeric2;

function add(a: Combinable2, b: Combinable2) {
  // type guards in action
  return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  // check if type is Admin using the in keyword
  if ("age" in emp) {
    console.log(emp.age);
  }
}

class Vehicle {
  drive() {}
}
