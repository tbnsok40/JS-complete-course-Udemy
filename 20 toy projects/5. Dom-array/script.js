const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = []; //global 변수

getRandomUser();
getRandomUser();
getRandomUser();


// fetch random user and add Money
async function getRandomUser() {

    // use async then we don need this chain stuffs
    // fetch('https://randomuser.me/api').then(res => res.json()).then(data => ) // <== memo this

    // fetch is asynchronous => so use the await
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    const user = data.results[0];
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000) // 사실상 api에서 활용하는 정보는 이름 밖에 없네.. 돈은 임의로 만들어 내버림.
    }
    addData(newUser) // newUser가 data가 된다. 놀래라이씨
}

function doubleMoney() {
    data.map(user => {
        console.log(user)
    })
    // 전역변수 data를 가져다 mapping
    data = data.map((user) => {
        // spread operation
        return {...user, money: user.money * 2}
        // spread연산자로 user의 기존 정보들은 모두 그대로 박아두고, money라는 key에 대해서만 값을 수정하여 return한다.
    })
    updateDom();
}


// Add new obj to data array

function addData(obj) {
    data.push(obj)
    updateDom(); // if nothing is in the args, then just thorow the data as args (originally it supposed to get the providedData)
}

// Update Dom
function updateDom(providedData = data) {
    // Clear Main Div
    // main.innerHTML = '<h2><strong>Person </strong>Wealth</h2>'; // 이게 없으면 브라우저에서도 사라짐...how?

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person'); // HTML 구조를 잡고 <div class = "person" />

        // 구조를 잡았으니 그 안에 내용을 innerHTML method로 잡는다.
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element); //appendChild
    });
}

// Format Money
function formatMoney(number) {
    // ref stackoverflow
    return "$ " + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
}

function sortByRichest() {
    data.sort((a, b) => b.money - a.money);
    updateDom();
}

function showMillionaires() {
    data = data.filter(user => user.money > 300000);
    updateDom();
}

function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);
    const wealthEl = document.createElement("div");
    wealthEl.innerHTML = `<h3> Total wealth: ${wealth}</h3>`
    main.appendChild(wealthEl)
}

// single arrow function doesn't need return 
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMillionaires);
calculateWealthBtn.addEventListener("click", calculateWealth)