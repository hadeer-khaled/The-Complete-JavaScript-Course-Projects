
// Select player elements
let score0Elem = document.getElementById("score--0")
let score1Elem = document.getElementById("score--1")
let player0 = document.querySelector(".player--0")
let player1 = document.querySelector(".player--1")

let currentScore0Elem = document.getElementById("current--0")
let currentScore1Elem = document.getElementById("current--1")

let diceElem = document.querySelector(".dice")

// Select butons
let newBtn = document.querySelector(".btn--new")
let rollBtn = document.querySelector(".btn--roll")
let holdBtn = document.querySelector(".btn--hold")

let playersScore , currentScore , activePlayer , playingState 

function init() {
    
    // Starting conditions
    playersScore = [0, 0]
    currentScore = 0
    activePlayer = 0;
    playingState = true

    score0Elem.textContent = "0"
    score1Elem.textContent = "0"

    currentScore0Elem = currentScore
    currentScore1Elem = currentScore

    diceElem.classList.add("hidden")

    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")

    player0.classList.add("player--active")
    player1.classList.remove("player--active")
}

init();

function switchPlayer() {

    currentScore = 0
    document.getElementById(`current--${activePlayer}`).textContent = currentScore

    activePlayer = activePlayer == 0 ? 1 : 0;
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
}

function winning() {
    playingState = false
    document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
    diceElem.classList.add("hidden")
}


// Rolling dice functionality
rollBtn.addEventListener("click", function () {
    if (playingState) {
        // 1. Generating a random dice roll
        const diceNum = Math.trunc(Math.random() * 6) + 1

        // 2. Displaying the dice
        diceElem.classList.remove("hidden")
        diceElem.src = `dice-${diceNum}.png`

        //3. Check rolling 1
        if (diceNum == 1) {
            // if the dice = 1 ==> switch player and currentScore = 0
            switchPlayer()
        }
        else {
            // if the dice != 1 ==> increment the current score 
            currentScore += diceNum
            document.getElementById(`current--${activePlayer}`).textContent = currentScore
        }
    }
})

// Hold Button functionality
holdBtn.addEventListener("click", function () {
    if (playingState) {
        // Add the current score to total score 
        playersScore[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = playersScore[activePlayer];

        // check if total score => 100 ===>  winning the game
        if (playersScore[activePlayer] >= 100) {
            winning()
        }
        else {
            // switch players
            switchPlayer()
        }
    }
})

// New Game Button functionality
newBtn.addEventListener("click", init)