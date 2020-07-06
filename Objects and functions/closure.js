// Closures
function retirement(retirementAge) {
    var a = ' years left until retirement'
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a); // wow a앞에 연산자 - 쓰면 Nan나옴
    }
}
var retirementUS = retirement(66);
retirementUS(1993);
retirement(66)(1993);
// so in the function retirement(), it returns variable a and return anonymous return function.
// and it's mission is done.
// but still that anonymous function inside of retirement able to call the varriable a, which is out of itseslf.
// this is what we called Closuer.
// definition of Closure
// An inner function has always access to the variables and parameters of its outer function,
// even after the outer function has returned.
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1993);
retirementUS(1993);
retirementIceland(1993);
////////////////////////////////////////////////
/// rewrite below function using the closure ///
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain you experience')
        }
    } else if (job === 'developer') {
        return function (name) {
            console.log('what is your main stack ' + name)
        }
    } else {
        return function (name) {
            console.log('hi, what do you do')
        }
    }
};
