const toggle = document.getElementById('toggle');
const modal = document.getElementById('modal');
const open = document.getElementById('open');
const close = document.getElementById('close');
const submit = document.getElementById('submit')

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
// btn.addEventListener('click',callback(e));
// 위와같이 코드를 작성하게 되면, 클릭 이벤트가 발생했을 때 실행되는 것이 아니라,
// 자바스크립트가 코드를 한줄 한줄 읽으면서 즉시 실행해버린다.
// 다시말해, 클릭시 콜백함수로 동작하지 않고 애시당초에 콜백함수도 아니다. 함수를 실행시킨 형태이기 때문이다.


const checkRequired = (inputArr) => {
    let boolean = true;
    inputArr.map(input => { // forEach 뭐야 map 이랑. 그 문제가 아니라, false 가 나와도, Map() 함수가 끝까지 걍 도는 거였음
        if (!input.value) {
            boolean = false
        }
    })

    if (boolean) {
        return true;
    }
}

close.addEventListener('click', event => {
  modal.classList.remove('show-modal')
});

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

open.addEventListener('click',  (e) => {
    modal.classList.add('show-modal')
});

submit.addEventListener('click', (e) => {
    if (checkRequired([name, email, password, password2])) {
        modal.classList.remove('show-modal')
    }
    e.preventDefault(); // log 가 안찍힌 이유는, 새로고침되면서 콘솔이 날라갔기 때문
});

// 썌
window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);
