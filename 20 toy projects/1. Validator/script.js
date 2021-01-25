const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const univ = document.getElementById("univ");

// show input error mesesage
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; // css의 해당 클래스네임을 인식
}

// check email is valid
// function isValidEmail(email) {
//     const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// } // change as below function expression

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, "Email is not valid")
    }
}

// check Univ
function checkUniv(input) {
    const substring = /대학교/;

    // if (substring in input.)
    if (substring.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `${getFieldName(input)} should contains 대학교`)
    }
}


// check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === "") {
            showError(input, `${getFieldName(input)} is not required`);
        } else {
            showSuccess(input);
        }
    });
}

// check password match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, `Passwords do not match`)
    }
}


// Get fieldName
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}



// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault(); //prevent it for flash
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password, password2)
    checkUniv(univ)
});

// password가 특수문자 가지도록 해보기
// 반응형으로 짜보기

