let startTime = 0;
let isRunning = false;
let interval;
let lapsContainer = document.getElementById("laps");

function updateDisplay() {
  const now = Date.now();
  const elapsed = now - startTime;
  const date = new Date(elapsed);
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");
  const seconds = String(date.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(Math.floor(date.getUTCMilliseconds() / 10)).padStart(2, "0");
  document.getElementById("display").textContent = `${minutes}:${seconds}:${milliseconds}`;
}

function start() {
  if (!isRunning) {
    startTime = Date.now() - (window.elapsedTime || 0);
    interval = setInterval(updateDisplay, 10);
    isRunning = true;
  }
}

function pause() {
  if (isRunning) {
    clearInterval(interval);
    window.elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(interval);
  document.getElementById("display").textContent = "00:00:00";
  lapsContainer.innerHTML = "";
  isRunning = false;
  startTime = 0;
  window.elapsedTime = 0;
}

function lap() {
  if (isRunning) {
    const time = document.getElementById("display").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap: ${time}`;
    lapsContainer.appendChild(li);
  }
}
