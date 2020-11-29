
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (var i = 0; i < 20; i += 2) {
//     console.log(i)
// }

// var john = ['jon', 'smith', 'teacher', 1990, false];

// for (var j = 0; j < john.length; j++) {
//     console.log(john[j])
// }

// j = 0;
// while (j < john.length) {
//     console.log(john[j]);
//     j++;
// }


var john = ['jon', 'smith', 'teacher', 1990, false, 'blue'];

for (var j = 0; j < john.length; j++) {
    if (typeof john[j] !== 'string') break;
    console.log(john[j])
}
console.log('');

for (var j = 0; j < john.length; j++) {
    if (typeof john[j] !== 'string') continue;
    console.log(john[j])
}

// looping backwards
for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i])
}