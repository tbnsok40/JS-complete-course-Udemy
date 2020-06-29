document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. I need random number
        var dice1 = Math.floor(Math.random() * 6) + 1
        var dice2 = Math.floor(Math.random() * 6) + 1
        // 2. display the number

        var diceDOM1 = document.getElementById('dice-0')
        var diceDOM2 = document.getElementById('dice-1')
        diceDOM1.src = "dice-" + dice1 + ".png";
        diceDOM2.src = "dice-" + dice2 + ".png";
        diceDOM1.style.display = 'block';
        diceDOM2.style.display = 'block';

        // dice double 6
        // if (dice_pre && dice === 3) {
        //     if (dice_pre === dice) {
        //         roundScore = 100;
        //         document.querySelector('#current-' + activePlayer).textContent = roundScore;
        //     }
        // }

        //3. Update roundScore if dice number wasn't a 1
        if ((dice1 !== 1) || (dice2 !== 1)) {
            sum = dice1 + dice2
            roundScore += (sum)
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        final_score = document.querySelector('.final-score').value; // textContent대신에 value를 써줘야한다.
        // have to change that 30 to something
        if (scores[activePlayer] >= final_score) {
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER';
            document.getElementById('dice-0').style.display = 'none';
            document.getElementById('dice-1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // 삼항 연산자(조건문),sipler than if statements
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';
}


var scores, roundScore, activePlayer, gamePlaying; // this is global scope, it couldn't be accessed if it is in the init() function
init();
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-0').style.display = 'none';
    document.getElementById('dice-1').style.display = 'none';

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

// 1. if someone rolls two 6 in a row => losses entire score
// 2. add an inpuf field to the html, where player can set the winning score.
// 3. add another dice in game. player looses his current score when one of them is a 1.


// // textContent의 c가 소문자가 아니도록 주의하자 시벌
// // getElementsById와 getElementById는 다를다. s 주의 **



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