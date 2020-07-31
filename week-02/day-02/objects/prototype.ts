`use strict`;

// Prototype

function employee(id: number, name: string) {
  this.id = id;
  this.name = name;
}
const emp = new employee(123, 'Smith');
const emp2 = new employee(143, `Jones`);
employee.prototype.email = 'smith@abc.com';
console.log(`Employee 's Id: ${emp.id}`);
console.log(`Employee's name: ${emp.name}`);
console.log(`Employee's Email ID: ${emp.email}`);
