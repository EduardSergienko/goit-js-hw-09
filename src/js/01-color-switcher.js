function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
stoptBtn.setAttribute('disabled', true);
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stoptBtn.addEventListener('click', onStopBtnClick);
function onStartBtnClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  intervalId = setInterval(
    () => {
      bodyEl.style.backgroundColor = getRandomHexColor();
    },

    1000,
  );
  if (intervalId !== null) {
    startBtn.setAttribute('disabled', true);
    stoptBtn.removeAttribute('disabled');
  }
}
function onStopBtnClick() {
  clearInterval(intervalId);
  startBtn.removeAttribute('disabled');
  stoptBtn.setAttribute('disabled', true);
}
