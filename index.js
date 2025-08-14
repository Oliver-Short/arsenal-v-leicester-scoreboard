

const homeScoreEl = document.getElementById("home-score")
const awayScoreEl = document.getElementById("away-score")
const homeTeam = document.getElementById("home-team")
const awayTeam = document.getElementById("away-team")

homeTeam.innerHTML = "Arsenal"
awayTeam.innerHTML = "Leicester"

let homeScore = 0
let awayScore = 0

updateScore()

function updateScore() {
    homeScoreEl.textContent = homeScore
    awayScoreEl.textContent = awayScore
}

function homeGoal(value) {
    homeScore += value
    updateScore()

}

function awayGoal(value) {
    awayScore += value
    updateScore()
}

function newGame() {
    homeScore = 0
    awayScore = 0
    updateScore()
    timer()
}

/* the timer will be an additional function, counting down from a 
number that the user chooses. once the timer ends, it will use the 
rematch function to reset the game to 0 - 0 */ 

function timer() {
    let sec = 20
    let timer = setInterval(function() {
        document.getElementById("timer").innerHTML = sec
        sec--
        if (sec < 0) {
            clearInterval(timer)
        }
    }, 1000)
}




/* 
    team colour dropdown for both teams to choose their kits. Choice of 
    generic colours i.e red, blue, green, yellow 
    Kit choice changes the colour behind the teams scoreboard and name 
    Both teams start in their home kit but can change to an away colour 
    if there is time, add Juventus and their colours as a third option
    as a team that can be changed in for either side 
*/

/* 
    add goal animation when someone scores
    as well as confetti like on scrimba across the screen
*/

// when one team wins, show a picture of their team lifting trophy
