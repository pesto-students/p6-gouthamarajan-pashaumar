// call method is used when we provide context to this by passing object as first parameter
// followed by number of known arguments

// const employee = {
//   name: "Mohd Umar",
//   age: 25,
// };

// const getEmployeeIntro = function (designation, companyName) {
//   return `Hello, My name is ${this.name}, I am ${this.age} years old, I am a ${designation} in ${companyName}.`;
// };

// console.log(
//   getEmployeeIntro.call(employee, "Software Engineer", "Coditation Systems")
// );

// call method is used when we provide context to this by passing object as first parameter
// followed by array of arguments
// the difference between call and apply is -> we use apply method when we don't the number
// of arguments

// const employee = {
//   name: "Mohd Umar",
//   age: 25,
// };

// const getEmployeeIntro = function (designation, companyName) {
//   return `Hello, My name is ${this.name}, I am ${this.age} years old, I am a ${designation} in ${companyName}.`;
// };

// console.log(
//   getEmployeeIntro.apply(employee, ["Software Engineer", "Coditation Systems"])
// );

// call and bind method are same but the only the difference is bind returns the
// function for later use

const employee = {
  name: "Mohd Umar",
  age: 25,
};

const getEmployeeIntro = function (designation, companyName) {
  return `Hello, My name is ${this.name}, I am ${this.age} years old, I am a ${designation} in ${companyName}.`;
};

const employeeInto = getEmployeeIntro.bind(employee, "Software Engineer");

console.log(employeeInto("Coditation Systems"));
