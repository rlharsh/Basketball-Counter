let homeScore = 0
let awayScore = 0
let currentPeriod = 0

let elHome = document.getElementById("total-home-score")
let elAway = document.getElementById("total-away-score")

function addHomeThree() {
    homeScore += 3
    refreshHomeScore()
}

function addHomeTwo() {
    homeScore += 2
    refreshHomeScore()
}

function addHomeOne() {
    homeScore += 1
    refreshHomeScore()
}

function removeOneHome() {
    if (homeScore - 1 >= 0) {
        homeScore--
    }
    refreshHomeScore()
}

function addAwayThree() {
    awayScore += 3
    refreshAwayScore()
}

function addAwayTwo() {
    awayScore += 2
    refreshAwayScore()
}

function addAwayOne() {
    awayScore += 1
    refreshAwayScore()
}

function removeOneAway() {
    if (awayScore - 1 >= 0) {
        awayScore--
    }
    refreshAwayScore()
}

function refreshHomeScore() {
    elHome.textContent = homeScore.toString().padStart(4, '0')
}

function refreshAwayScore() {
    elAway.textContent = awayScore.toString().padStart(4, '0')
}

function resetGame() {
    location.reload()
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var tIntt = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(tIntt)
            display.textContent = "88:88"
        }
    }, 1000);
}

function startGame() {
    let twelveMinutes = 60 * 1
    display = document.getElementById("central-timer")
    startTimer(twelveMinutes, display)
}