var BMI = function (mass, height) {
    bmi = (mass / (height ^ 2));
    return bmi
}

var Mark = new Object();
Mark.fullName = 'Mark Gon'
Mark.mass = 70
Mark.height = 180
Mark.Bmi = function (mass, height) {
    this.bmi = (this.mass / (this.height ^ 2));
}
Mark.Bmi();


var John = new Object();
John.fullName = 'John Doe'
John.mass = 80
John.height = 170
John.bmi = BMI(John.mass, John.height);
// John.Bmi = function (mass, height) {
//     this.bmi = (this.mass / (this.height ^ 2));
// }


if (Mark['bmi'] < John['bmi']) {
    console.log(Mark.fullName + "'s bmi is " + Mark['bmi'] +
        ' and ' + John.fullName + "'s bmi is " + John['bmi'])
} else {
    console.log(John.fullName + "'s bmi is " + John['bmi'])
}
