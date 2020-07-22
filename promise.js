// promise를 썼다는 것 자체가 비동기의 선언 => 여기서 1000ms기다리는 동안 백그라운드에서
// 다른 코드들이 작동할 수 있다.

// 기능을 정상적으로 수행하여 인자를 전달하는 resolve 콜백함수,
// 문제 발생시 호출하게 될 reject 콜백함수
// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1);
//     }, 1000);
// });

// myPromise.then(n => {
//     console.log(n);
// }).catch(error => {
//     console.log(error);
// });


// function increaseAndPrint(n) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const value = n + 1;
//             if (value === 5) {
//                 const error = new Error();
//                 error.name = 'ValueIsFiveError';
//                 reject(error);
//                 return;
//             }
//             console.log(value);
//             resolve(value);
//         }, 1000);
//     });
// }

// increaseAndPrint(0)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .then(increaseAndPrint)
//     .catch(e => {
//         console.error(e);
//     });

// // 다 비동기를 처리하기 위함인데, callback함수 대신 promise를 쓰는 것

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
    console.log('안녕하세요!');
    await sleep(4000); // 1초쉬고
    console.log('반갑습니다!');
}

process().then(() => {
    console.log('작업이 끝났어요!');
});