
// function work() {
//     setTimeout(() => {
//         // const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) { } // 여기 시간만큼 백그라운드에서 다른 코드들은 실행될 수 있다.<비동기 형태>
//         // const end = Date.now();
//         console.log('동기식 과수원'); // 3번

//     }, 0);
// }
// work()


// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }
// pickFruits().then(console.log);


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}
async function getBanana() {
    await delay(500);
    return '🍌'
}

function pickAllFruits2() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join('+'));
} // 가장 늦게 출력돼. 비동기니까
// console.log(pickAllFruits())
pickAllFruits2().then(console.log)
console.log('apple')
console.log('ipad')

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log)





// function work(callback) {
//     setTimeout(() => {
//         // const start = Date.now();
//         for (let i = 0; i < 1000000000; i++) { }
//         console.log('ms'); // 3번
//         callback();
//     }, 0);
// }
// work(() => {
//     console.log('작업이 끝났어요!') // 4번
// });

// console.log('작업 시작!'); // 1번

// console.log('다음 작업'); // 2번