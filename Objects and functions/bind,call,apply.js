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

//// call method, using this method.////
john.presentation.call(emily, 'friendly', 'afternoon'); // calling emily object
john.presentation.call(emily, 'friendly', 'Goodmorning');

// apply method
// john.presentation.apply(emily, )

//// bind method, doenst call the function immediately, but generate it lately ////
// so call and bind is 반대
var johnFriendly = john.presentation.bind(john, 'friendly');
// function get stored in variable johnFriendly
// 왜 friendly 인자 칸만 가능하지? 'morning'칸은 왜 불가?

johnFriendly('morningggg');
johnFriendly('Good eveningg');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');



/////////////////new thang/////////////////
var years = [2001, 1965, 1937, 1993, 2000];
// 함수안에 함수 넣는 것은 이름이 뭐여
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

// bind는 함수가 가르키는 this만 바꾸고 호출하지 않는 것.
var fullKR = arrayCalc(ages, isFullAge.bind(this, 20)) // we can preset the argument(function isFullAge)
console.log(ages);
console.log(fullKR);


var lim = {
    string: 'zero',
    yell: function () {
        alert(this.string);
    }
};

var kim = {
    string: '2?'
};

var yell2 = lim.yell.call(kim);
// yell2();