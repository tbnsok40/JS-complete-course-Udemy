// function basic
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

var ageLim = calculateAge(1993);
var ageKim = calculateAge(1994);
var agePark = calculateAge(1993);

console.log(ageLim)

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + 'years');
    } else {
        console.log(firstName + ' is already retired')
    }

}
yearsUntilRetirement(1993, 'Lim');
yearsUntilRetirement(1953, 'Lim');

// Function statements and expressions


// function declarations
// function whatDoYouDo(job, name)

// function expressions
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids';
        case 'driver':
            return firstName + ' drives vehicles';
        case 'designer':
            return firstName + ' designs websites';
        default:
            return firstName + ' does something else';
    }
}
console.log(whatDoYouDo('driver', 'john'));
console.log(whatDoYouDo('teacher', 'john'));

// what is differen between function delcarations / expressions?
// when JS expects for values that is expressions.
