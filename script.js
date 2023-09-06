const imgDice = document.querySelector('.dice').src = "/img/start-game.png"
let score = document.querySelector('.score')
let player0 = document.querySelector('.player--active')
let player1 = document.querySelector('.player--active')
let currentScore0 = document.getElementById('current--0')
let currentScore1 = document.getElementById('current--0')
let newCurrentScore = 0;
let player = document.querySelector('.player')
let checkActive = true


if (player0.classList.contains('player--active')){

    const btnRoll = document.querySelector('.btn--roll').addEventListener('click', () => {
        
        let randomNumber = Math.trunc(Math.random() * 6) + 1
        console.log(randomNumber)
        
        if (randomNumber === 2) {
            
            document.querySelector('.dice').src = "/img/dice-2.png"
            newCurrentScore += randomNumber;
            currentScore0.textContent = newCurrentScore
            
        } else if (randomNumber === 3) {
            
            document.querySelector('.dice').src = "/img/dice-3.png"
            newCurrentScore += randomNumber;
            currentScore0.textContent = newCurrentScore
            
        } else if (randomNumber === 4) {
            document.querySelector('.dice').src = "/img/dice-4.png"
            newCurrentScore += randomNumber;
            currentScore0.textContent = newCurrentScore
        } else if (randomNumber === 5) {
            
        document.querySelector('.dice').src = "/img/dice-5.png"
        newCurrentScore += randomNumber;
        currentScore0.textContent = newCurrentScore
        
    } else if (randomNumber === 6) {
        
        document.querySelector('.dice').src = "/img/dice-6.png"
        newCurrentScore += randomNumber;
        currentScore0.textContent = newCurrentScore
        
    } else if (randomNumber === 1) {
        
        document.querySelector('.dice').src = "/img/dice-1.png"
        currentScore0.textContent = 0
        newCurrentScore = 0
        currentScore0 = 0
        player0.classList.remove('player--active')
        player1.classList.add('player--active')
    }
})
} else if(player1.classList.contains('player--active')){
    const btnRoll = document.querySelector('.btn--roll').addEventListener('click', () => {
        
        let randomNumber = Math.trunc(Math.random() * 6) + 1
        console.log(randomNumber)
        
        if (randomNumber === 2) {
            
            document.querySelector('.dice').src = "/img/dice-2.png"
            newCurrentScore += randomNumber;
            currentScore1.textContent = newCurrentScore
            
        } else if (randomNumber === 3) {
            
            document.querySelector('.dice').src = "/img/dice-3.png"
            newCurrentScore += randomNumber;
            currentScore1.textContent = newCurrentScore
            
        } else if (randomNumber === 4) {
            document.querySelector('.dice').src = "/img/dice-4.png"
            newCurrentScore += randomNumber;
            currentScore1.textContent = newCurrentScore
        } else if (randomNumber === 5) {
            
        document.querySelector('.dice').src = "/img/dice-5.png"
        newCurrentScore += randomNumber;
        currentScore1.textContent = newCurrentScore
        
    } else if (randomNumber === 6) {
        
        document.querySelector('.dice').src = "/img/dice-6.png"
        newCurrentScore += randomNumber;
        currentScore1.textContent = newCurrentScore
        
    } else if (randomNumber === 1) {
        
        document.querySelector('.dice').src = "/img/dice-1.png"
        currentScore1.textContent = 0
        newCurrentScore = 0
        currentScore1 = 0
        player1.classList.remove('player--active')
        player0.classList.add('player--active')
    }
})
}


const bntHold = document.querySelector('.btn--hold').addEventListener('click', () => {
    let newScore = 0;
    newScore += newCurrentScore
    score.textContent = newScore
    score += newScore
})
