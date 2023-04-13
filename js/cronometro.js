let timer = document.getElementById("timer");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let pauseBtn = document.getElementById("pauseBtn");
let interval;
let timerRunning = false;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    if (!timerRunning) {
        interval = setInterval(function() {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            timer.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        }, 1000);
        timerRunning = true;
    }
}

function resetTimer() {
    clearInterval(interval);
    timer.innerHTML = "00:00:00";
    hours = 0;
    minutes = 0;
    seconds = 0;
    timerRunning = false;
}

function pauseTimer() {
    clearInterval(interval);
    timerRunning = false;
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);
pauseBtn.addEventListener("click", pauseTimer);
//practicando el inglish ?) xdxd