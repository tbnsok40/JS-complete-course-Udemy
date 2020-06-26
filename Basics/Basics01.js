var firstName = "John";
console.log(firstName);
var lastName = "smith";
var age = 28;
var fullAge = true;
console.log(fullAge);
var job;
console.log(job);
job = "Teacher";
console.log(job);

// 5 Data Types in JS
// Number
// String
// Boolean
// undefined
// Null
// automatically figure it out what the data type is

// type coercion(강제) 강제 형변환

var firstName = "JON";
var age = 28;
console.log(firstName + " " + age);

var job, isMarrried; // 한줄에 선언
job = "teacher";
isMarrried = "false";

console.log(
  firstName + " " + age + "year old" + job + "isMarried" + isMarrried
);
age = "twenty eight"; //magic of js, dynamic data type => 강제 형 변환
job = "driver";

// alert와 prompt(=>입력가능하게한다)
alert(firstName + "is a " + age + " year old " + job + " Is he married ");
var lastName = prompt("What is his last name?");
console.log(firstName + " " + lastName);
////////////////////////////////////////////////////

// Basic Operators, Math Operators
var year, yearLim, yearJohn;
year = 2020;
yearLim = year - 28;
yearJohn = year - 33;
console.log(yearLim);
console.log(year + 2);
console.log(year * 2);
console.log(year / 2);

// Logical operators_boolean variable
var johnOlder = yearJohn > yearLim;
console.log(johnOlder);

// typeof operator
job = "driver";
var s;
console.log(typeof johnOlder);
console.log(typeof year);
console.log(typeof job);
console.log(typeof s);

// Operator precedence
// which operator excecuted first
var now = 3;
var yearJohn = 1;
var fullAge = 1;
var isFullAge = now - yearJohn >= fullAge; // minus got precedent than greater or equal

console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 34;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 -6 // 32 - 6 // 26
console.log(x, y);
// assignment works to right to left, thats the reason why this case works = associativity

// More operators
x = 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

// increment
x++;
console.log(x);
++x;
console.log(x);

// Quiz 1
var mMark = 78;
var hMark = 1.7;
var mJohn = 92;
var hJohn = 1.9;

var BMIMark = mMark / (hMark ^ 2);
var BMIJohn = mJohn / (hJohn ^ 2);
console.log("BMIMark: ", BMIMark, "BMIJohn: ", BMIJohn);

var markBMI = BMIJohn > BMIMark;
console.log("Is mark's BMI lower than John?  ", markBMI);
