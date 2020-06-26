///// function /////
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

///// Variables /////

var john = new Object()

john['bill'] = new Array(124, 48, 268, 180, 42)
var tip = new Array()
var final = new Array()

john['tip'] = tip

for (i = 0; i < john.bill.length; i++) {
    tip[i] = tipCal(john.bill[i])
    final[i] = tip[i] + john.bill[i]
}
john['final'] = final


console.log('tips are ' + john.tip + ' and fianl paid is ' + john.final)
///////////////////////////////////////