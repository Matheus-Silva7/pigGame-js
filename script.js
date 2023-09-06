const imgDice = document.querySelector('.dice').src = "/img/start-game.png"
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0 = document.getElementById('score--0')
let score1 = document.getElementById('score--1')
let currentScore0 = document.getElementById('current--0')
let currentScore1 = document.getElementById('current--1')
let newCurrentScore = 0;
let newScore0 = 0;
let newScore1 = 0;


const btnRoll = document.querySelector('.btn--roll').addEventListener('click', () => {

    let randomNumber = Math.trunc(Math.random() * 6) + 1
    console.log(randomNumber)

    if (randomNumber === 1) {
        document.querySelector('.dice').src = "/img/dice-1.png"
        newCurrentScore = 0;
        currentScore0.textContent = '0';
        currentScore1.textContent = '0';
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
    } else {
        document.querySelector('.dice').src = `/img/dice-${randomNumber}.png`
        newCurrentScore += randomNumber;
        if (player0.classList.contains('player--active')) {
            currentScore0.textContent = newCurrentScore
        } else {
            currentScore1.textContent = newCurrentScore
        }
    }
})


const bntHold = document.querySelector('.btn--hold').addEventListener('click', () => {
    if (player0.classList.contains('player--active')) {
        newScore0 += newCurrentScore
        score0.textContent = newScore0
    } else {
        newScore1 += newCurrentScore
        score1.textContent = newScore1
    }
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
    newCurrentScore = 0;
    currentScore0.textContent = '0';
    currentScore1.textContent = '0';
    if (newScore0 >= 100) {
        alert("Jogador 1 Vence!")
        newScore0 = 0
        score0.textContent = newScore0
    } else if (newScore1 >= 100) {
        alert("Jogador 2 venceu")
        newScore1 = 0
        score1.textContent = newScore1
    }
})

