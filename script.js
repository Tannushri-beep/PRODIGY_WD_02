// script.js

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
  elapsedTime = Date.now() - startTime;
  let time = new Date(elapsedTime);
  let min = String(time.getUTCMinutes()).padStart(2, '0');
  let sec = String(time.getUTCSeconds()).padStart(2, '0');
  let ms = String(Math.floor(time.getUTCMilliseconds() / 10)).padStart(2, '0');
  document.getElementById('display').textContent = `${min}:${sec}:${ms}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTime, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  startTime = 0;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (elapsedTime === 0) return;
  let li = document.createElement('li');
  li.textContent = document.getElementById('display').textContent;
  document.getElementById('laps').appendChild(li);
}
