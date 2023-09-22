

let checkBtn = document.querySelector(".check")
let againBtn = document.querySelector(".again")

let resultMsgElem = document.querySelector(".message")
let scoreElem = document.querySelector(".score")
let highScoreElem = document.querySelector(".highscore")


let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20
let highScore = 0

function updateScore() {
    score--
    scoreElem.textContent = score
}

function winning() {
    document.querySelector(".number").textContent = correctNumber
    document.querySelector("body").style.backgroundColor = "#60b347"
    if (score > highScore) {
        highScore = score
        highScoreElem.textContent = highScore
    }
}

function displayMessage(Message) {
    resultMsgElem.textContent = Message
}

// Check Button Event Listener
checkBtn.addEventListener("click", function () {
    const guessNumber = Number(document.querySelector('.guess').value);
    console.log("correctNumber: ", correctNumber);
    console.log("guessNumber: ", guessNumber);
    // Void Input
    if (!guessNumber) {
        displayMessage("❌ No Number")
    }
    else if (guessNumber !== correctNumber) {
        if (score > 1) {
            displayMessage( guessNumber > correctNumber ? "📈 Too High" : "📉 Too Low" )
            updateScore()
        }
        else {
            displayMessage("💥 Game Over") 
            updateScore()
        }
    }
    else {
        displayMessage("🎉 Well done !")
        winning()
    }
})

// Again Button Event Listener
againBtn.addEventListener("click", function () {
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").textContent = "?"
    displayMessage("Start guessing...")
    score = 20
    scoreElem.textContent = score
    document.querySelector('.guess').value = ""
    correctNumber = Math.trunc(Math.random() * 20) + 1;

})