var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 2000,
    family: ['Jane', 'Mark', 'Bob'],
    job: 'teacher',
    isMarried: false,

    //this is function expression
    calcAge: function (birthYear) {
        this.super = 2020 - this.birthYear;
        // there is no age properties, but we can add it by this code
        // this method is use birthYear from this Objects
    }
};

john.calcAge();
// if this sentence were none, then there wouldn't be 'super' properties in John object

console.log(john)
