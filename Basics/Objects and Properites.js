var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1993,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false
}; // this is John object

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x])

john.job = 'designer';
john['isMarried'] = true; // we can simply changes properties 
console.log(john);


// new Object Syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane)


var Lim = {
    firstName: 'SH',
    lastName: 'Lim'
}
var z = 'birthday'
Lim['job'] = 'developer';
console.log(Lim.firstName)
console.log(Lim.job)