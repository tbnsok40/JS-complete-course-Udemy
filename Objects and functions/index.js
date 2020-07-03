// function constructor

// var john = {
//     name: 'john',
//     yearOfBirth: 1993,
//     job: 'dev',
// };


// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     // this.calculateAge = function () {
//     //     console.log(2020 - this.yearOfBirth);
//     // }
// }

// // method is not in the constructor anymore but we can use it
// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// // john is instance of Person object
// var john = new Person('john', 1990, 'developer');
// console.log(john)

// var jane = new Person('Jane', 1993, 'Designer');
// var mark = new Person('Mark', 1992, 'Engineer');


// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// // you can see inheritance works by this codes
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

// john's own property != lastName
// because it is inherited by Person prototype
// john is instance of Person

// method which is prototype property, eg) length(), pop(), push()



// Object.create
// var personProto = {
//     calculateAge: function () {
//         console.log(2020 - this.yearofBirth);
//     }
// }

// var john = Object.create(personProto);
// john.name = 'john';
// john.yearofBirth = 1993;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'jane' },
//     yearofBirth: { value: 1993 },
//     job: { value: 'developer' },
// });

// Primitives vs Objects
// holds the data inside of primitives itself

// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

var obj1 = {
    name: 'hon',
    age: 23
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); // 30
console.log(obj2.age); // 30



var age = 27;
var obj = {
    name: 'hon',
    city: 'lisbon'
}

function change(a, b) {
    a = 30;
    b.city = 'sanfran';
}
change(age, obj);

console.log(age); // 27
console.log(obj.city) // sanfran
// age variable holding a primitive, obj variable holding a object reference
// primitive remains unchanged.


