const userName = "ted";

// will not get a compilation error, the type of age is any
let age;
age = 30;
age = "ted";

// will get compilation error the type of age is number
// let age2 = 30;
// age2 = "ted";

// var, let and const
// 1. Scoping
// var has function scope and global scope
// while let and const have block scope
// const cannot be reassigned
// 2. Hoisting
// var allows hoisting while let and const do not
// hoisting allows variables to be used before its declaration
// 3. Reassignment
// var and let allows while const do not
// 4. Redeclaration
// var allows while let and const do not
