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

