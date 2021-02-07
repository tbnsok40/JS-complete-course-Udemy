const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];



getRandomUser();
getRandomUser();
getRandomUser();





// fetch random user and add Money
async function getRandomUser() {

    // use async then we don need this chain stuffs
    // fetch('https://randomuser.me/api').then(res => res.json()).then(data => )


    // fetch is asynchronous => so use the await
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)

    }

    addData(newUser)

}

function doubleMoney() {
    data = data.map((user) => {
        // spread operation
        return { ...user, money: user.money * 2 }
    })

    updateDom();
}




// Add new obj to data array

function addData(obj) {
    data.push(obj)

    updateDom(); // if nothing is in the args, then just thorow the data as args (originally it supposed to get the providedData)
}



// Updata Dom
function updateDom(providedData = data) {

    // Clear Main Div
    main.innerHTML = '<h2><strong>Person </strong>Wealth</h2>'; // 이게 없으면 브라우저에서도 사라짐...how?


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



// single arrow function doesn't need return 


addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
