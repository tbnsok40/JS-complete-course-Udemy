var original = new Array(124, 48, 268)

var calculator = function (paid) {
    if (paid < 50) {
        tip = (paid * 0.2)
    } else if (50 <= paid && paid < 200) {
        tip = paid * 0.15
    } else {
        tip = paid * 0.1
    }
    return tip
}

// other ways
function tipCal(original) {
    var percentage;
    if (original < 50) {
        percentage = .2;
    } else if (original >= 50 && original < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * original
}



// console.log(calculator(original[0]))
// console.log(calculator(original[1]))
// console.log(calculator(original[2]))
var tip = new Array(calculator(original[0]), calculator(original[1]), calculator(original[2]))
var final = new Array(original[0] + tip[0], tip[1] + original[1], tip[2] + original[2])

console.log(tip)
console.log(final)
