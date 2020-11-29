var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + "is married");
} else {
  console.log(firstName + " will marry soon!");
}

var isMarrried = true;
if (isMarrried) {
  console.log(firstName + " is married ! ");
} else {
  console.log(firstName + "will hopefully marry soon");
}

var firstName = "JOhn";
var age = 15;
if (age < 13) {
  console.log(firstName + " is a boy");
} else if (20 > age && age >= 13) {
  console.log(firstName + "is a teenager");
} else {
  console.log(firstName + "is a adult");
}

// conditional operators
// ternary operaotrs 3항 조건 연산자
var firstName = "Tim";
var age = 3;
age >= 19
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drink juice.");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

//switch statement
// looks cleaner than if else statements
var job = "designer";
switch (job) {
  case "teacher":
  case "instructor": // 이렇게 여러개의 케이스를 하나로 통합할 수도 있다
    console.log(firstName + " teaches kids how to code");
    break; // break 안써주면 아래 콘솔들도 다 프린트된다
  case "driver":
    console.log(firstName + " drives");
    break;
  case "designer":
    console.log(firstName + "designs beautiful web");
    break;
  default:
    // case에 들어가지 않는 값들은 default로 처리해준다.
    console.log(firstName + "does something else");
  // 여기는 break필요없어, 마지막 문항이니까.
}

age = 10;
switch (true) {
  case age < 13:
    console.log(firstName + " is a boy");
    break;

  case age >= 13 && age < 20:
    console.log(firstName + "is a teenager");
    break;

  case age >= 20 && age < 30:
    console.log(firstName + "is a adult");
    break;

  default:
    console.log(firstName + " is a man");
}

// falsy values: undefined, null, 0, '', NaN
// truthy values: Not falsy values

var height;
height = 0; // it says it's not defined
if (height || height === 0) {
  // now it makes zero defined
  console.log("variable is defined");
} else {
  console.log("variables has not been defined");
}
// equality operators
height = 23;
if (height == "23") {
  console.log("the == operator does type coercion!");
} else if (height === "23") {
  console.log("the === doesn't support type coercion ");
}

// == 는 type coercion 실행, ===는 type 변환 ㄴㄴ 23 과 '23'은 다른 것이기에
