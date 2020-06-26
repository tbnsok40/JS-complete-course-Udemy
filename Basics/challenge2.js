var john = [116, 94, 123]
var mike = [116, 94, 123]
var Mary = [116, 94, 123]
var J_average = (john[0] + john[1] + john[2]) / 3
var M_average = (mike[0] + mike[1] + mike[2]) / 3
var Ma_average = (Mary[0] + Mary[1] + Mary[2]) / 3
console.log(J_average, Ma_average, M_average)

if (J_average > M_average && J_average > Ma_average) {
    console.log('John won')
} else if (J_average < M_average && M_average > Ma_average) {
    console.log('Mike won')
} else if (Ma_average > M_average && J_average < Ma_average) {
    console.log('Mary won')
} else {
    console.log('it would be a draw')
}


