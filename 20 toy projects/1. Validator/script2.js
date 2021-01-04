const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const univ = document.getElementById("univ");

// 성후야, 너가 행복하려면 내가 뭘 해줘야 겠니
// 나를 아끼고 가꾸는, 잘 보살피는 생활을 하다보면 삶이 건강해진다.
// 나를 부정하지 않도록 하자.

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, "Email is not valid")
    }
}

function checkPasswordMatch(input, input2){
    if (input.value !== input2.value){
        showError(input2, "Password is not match")
    }else{
        showSuccess(input)
    }
}

function checkLength(input, min, max){
    if (input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);

    }else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value === ''){
            showError(input, `${getFieldName(input)} is not required`)
        }else{
            showSuccess(input);
        }
    })

}


form.addEventListener('submit', function(e){
    e.preventDefault();
    checkRequired([username, email, password, password2, univ]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    checkUniv(univ);
});