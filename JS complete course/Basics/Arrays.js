var names = ['John', 'Mark', 'Jane'];
var years = new Array(1999, 1993, 1990); // 자주 사용되는 것

console.log(names[2]);
console.log(names.length);

names[2] = 'Ben';
console.log(names);

names[4] = 'lim';
names[names.length] = 'junk'
console.log(names)

var john = ['jon', 'smith', 'teacher', 1990, false];
john.push('blue'); // push from right
john.unshift('Mrs'); // push from left

console.log(john);

john.pop()
console.log(john);
john.pop()
console.log(john);
john.shift() // remove from front(left)
console.log(john);

console.log(john.indexOf(1990))
console.log(john.indexOf(19901))

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer' : 'John is a designer';
console.log(isDesigner)


