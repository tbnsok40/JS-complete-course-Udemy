// function constructor

// var john = {
//     name: 'john',
//     yearOfBirth: 1993,
//     job: 'dev',
// };

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function () {
    //     console.log(2020 - this.yearOfBirth);
    // }
}

// method is not in the constructor anymore but we can use it
Person.prototype.calculateAge = function () {
    console.log(2020 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// john is instance of Person object
var john = new Person('john', 1990, 'developer');
console.log(john)

var jane = new Person('Jane', 1993, 'Designer');
var mark = new Person('Mark', 1992, 'Engineer');


john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// you can see inheritance works by this codes
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

