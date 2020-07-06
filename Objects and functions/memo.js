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

var years = [2001, 1965, 1937, 1993, 2000];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(element) {
    return 2020 - element;
}
function isFullAge(limit, element) {
    return element >= limit;
}
var ages = arrayCalc(years, calculateAge);
var fullKR = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullKR)
