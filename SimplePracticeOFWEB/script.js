let intervalId;
let time = 0;
let isPaused = false;

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const display = document.getElementById("display");

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);

function startTimer() {
  // If starting fresh, read input
  if (time === 0) {
    time = Number(document.getElementById("timeInput").value);

    if (time <= 0) {
      alert("Please enter a valid number");
      return;
    }
  }

  // Prevent multiple intervals
  clearInterval(intervalId);

  isPaused = false;
  display.innerText = time;

  intervalId = setInterval(() => {
    if (!isPaused) {
      time--;
      display.innerText = time;

      if (time === 0) {
        clearInterval(intervalId);
        alert("Time's up ⏰");
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}
