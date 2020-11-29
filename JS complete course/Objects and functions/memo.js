// function retirement(retirementAge) {
//     var a = ' years left till retirement'
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }
// var retirementKR = retirement(60);
// retirementKR(1993);

// function interviewQuestion(job) {
//     var a = ' my job is '
//     return function (name) {
//         console.log(name + a + job);
//     }
// }
// var jobAsking = interviewQuestion('Developer');
// jobAsking('LIM')


// function interviewQuestion(job) {
//     return function (name) {
//         if (job === 'designer') {

//             console.log(name + ', can you please explain you experience')

//         } else if (job === 'developer') {

//             console.log('Which part you mainly develop? ' + name)
//             console.log('Data engineering')

//         } else {

//             console.log('hi ' + name + ' what do you do')
//         }
//     }
// }
// interviewQuestion('developer')('LIM');

// var years = [2001, 1965, 1937, 1993, 2000];
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function calculateAge(element) {
//     return 2020 - element;
// }
// function isFullAge(limit, element) {
//     return element >= limit;
// }
// var ages = arrayCalc(years, calculateAge);
// var fullKR = arrayCalc(ages, isFullAge.bind(this, 20))
// console.log(ages)
// console.log(fullKR)



// 객체
// var john = {
//     name: 'john',
//     yearOfBirth: 1993,
//     job: 'dev',
// };

// function constructor
// var Person = function (name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }
// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth) // this가 없으면 에러난다.
//     // Person이라는 원형에서 yearOfBirth를  받아오는 개념
// }
// Person.prototype.middleName = 'Huge';

// var Lim = new Person('Lim', 1993, 'developer');
// console.log(Lim)
// Lim.calculateAge()
// console.log(Lim.middleName) // prototype에 끼워넣은 것이기에, 원형 객체에는 나타나지 않음


// method, Object.create
// var personProto = {
//     calculateAge: function () {
//         console.log(2020 - this.yearOfBirth);
//     }
// }
// var Lim = Object.create(personProto);
// Lim.name = 'Lim';
// Lim.yearOfBirth = 1993;
// Lim.job = 'teacher';

// console.log(Lim.calculateAge())

// var Jang = Object.create(personProto, {
//     name: { value: 'Jang' },
//     yearOfBirth: { value: 1996 },
//     job: { value: 'designer' }
// });
// console.log(Jang, Jang.calculateAge())


// Primitives, objectives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);

// var age = 30;
// var obj = {
//     name: 'LIm',
//     age: 30
// }
// function change(a, b) {
//     a = 1;
//     b.age = 1;
// }
// change(age, obj);
// console.log(age);
// console.log(obj.age);
// obj.age = 2
// console.log(obj.age)


////////////////////////////////////////////
// var numbers = [1990, 1992, 1993, 1994, 1995];
// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(element) {
//     return 2020 - element;
// }
// function isFullAge(element) {
//     return element >= 25;
// }
// function maxHeartRate(element) {
//     if (element >= 25 && element <= 70) {
//         return Math.round(206.9 - (0.67 * element));
//     } else {
//         return -1;
//     }
// }
// var ages = arrayCalc(numbers, calculateAge);
// console.log(ages);

// var fullAges = arrayCalc(numbers, isFullAge);
// console.log(fullAges)

// var check = arrayCalc(arrayCalc(numbers, calculateAge), maxHeartRate);
// console.log(check)



////////////////////////////////////////////////
////////////// Interview Question //////////////
////////////////////////////////////////////////

// var interviewQuestion = function (job) {
//     if (job === 'designer') {
//         return function (name) {
//             console.log(name + ' can you draw me please?')
//         }
//     } else {
//         return function (name) {
//             console.log(name + ' what is your job?')
//         }
//     }
// }

// interviewQuestion('developer')('Lim')