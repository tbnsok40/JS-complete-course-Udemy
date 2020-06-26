// document.querySelector('.btn-roll').addEventListener('click', function () {
//     // 1. Random number
//     var dice = Math.floor(Math.random() * 6) + 1;
//     //2. Display the result
//     var diceDOM = document.querySelector('.dice');
//     diceDOM.style.display = 'block';
//     diceDOM.src = 'dice-' + dice + '.png';
//     //3. Update the round score IF the rolled number was NOT a 1
//     if (dice !== 1) {
//         //Add score
//         roundScore += dice;
//         document.querySelector('#current-' + activePlayer).textContent = roundScore;
//     } else {
//         //Next player
//         nextPlayer();
//     }
// }
// );
document.querySelector('.btn-roll').addEventListener('click', function () {
    // 1. I need random number
    var dice = Math.floor(Math.random() * 6 + 1)
    // 2. display the number
    var diceDOM = document.querySelector('.dice')
    diceDOM.src = "dice-" + dice + ".png";
    diceDOM.style.display = 'block';
    //3. Update roundScore if dice number wasn't a 1
    if (dice !== 1) {
        roundScore += dice
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    }
});




//예제
// document.querySelector('.btn-hold').addEventListener('click', function () {
//     // add current score to global score
//     scores[activePlayer] += roundScore;
//     // Update the UI
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//     // check if the player won the game
//     if (scores[activePlayer] >= 20) {
//         document.querySelector('#name-' + activePlayer).textContent = 'Winner';
//         document.querySelector('.dice').style.display = 'none';
//         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); // what the hell is classList
//         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); // add, remove, toggle
//     } else {
//         nextPlayer();
//     }
// });

// 내꺼
document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 30) {
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}
// function nextPlayer() {
//     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // 삼항 연산자(조건문),sipler than if statements
//     roundScore = 0;

//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0';

//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');

//     document.querySelector('.dice').style.display = 'none';
// }



var scores, roundScore, activePlayer; // this is global scope
init();
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1'
    document.getElementById('name-1').textContent = 'Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

// document.querySelector('.btn-new').addEventListener('click', init); // not calling it, just passing it (function init())
// function init() {
//     scores = [0, 0];
//     roundScore = 0;
//     activePlayer = 0;
//     document.querySelector('.dice').style.display = 'none'; // default는 안 보이도록 setting(주사위)
//     document.getElementById('score-0').textContent = '0';
//     document.getElementById('score-1').textContent = '0';
//     document.getElementById('current-0').textContent = '0';
//     document.getElementById('current-1').textContent = '0'; //html의 text를 직접 셋팅
//     document.getElementById('name-0').textContent = 'Player 1';
//     document.getElementById('name-1').textContent = 'Player 2';
//     document.querySelector('.player-0-panel').classList.remove('winner');
//     document.querySelector('.player-1-panel').classList.remove('winner');
//     document.querySelector('.player-0-panel').classList.remove('active');
//     document.querySelector('.player-1-panel').classList.remove('active');
//     document.querySelector('.player-0-panel').classList.add('active'); 
// }

// // textContent의 c가 소문자가 아니도록 주의하자 시벌
// // getElementsById와 getElementById는 다를다. s 주의 **