var john = {
    name: 'LIM',
    age: 28,
    job: 'developer',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('good ' + timeOfDay + ' ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job);


        } else if (style === 'friendly') {
            console.log(timeOfDay + ' guys, I\'m ' + this.name + '. I\'m ' + this.job);
        }
    }
}

var emily = {
    name: 'emily',
    age: 25,
    job: 'designer',
};

john.presentation('formal', 'morning');

// call method, using this method.
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method
// john.presentation.apply(emily, )

// bind method, doenst call the function immediately, but generate it lately
var johnFriendly = john.presentation.bind(john, 'friendly');
// function get stored in variable johnFriendly

johnFriendly('morningggg');
johnFriendly('Good eveningg');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 1993, 2000];
function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

// callback function: fn
function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, element) {
    return element >= limit;
}
var ages = arrayCalc(years, calculateAge);

var fullKR = arrayCalc(ages, isFullAge.bind(this, 20)) // we can preset the argument(function isFullAge)
console.log(ages);
console.log(fullKR);
