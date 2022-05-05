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

// const bodyEl = document.querySelector('body');
// const btnEl = document.querySelectorAll('button');
// console.log(btnEl);

// let intervalId = null;

// btnEl.forEach(btn => {
//   console.log(btn);
//   btn.addEventListener('click', onbtnClick);
//   function onbtnClick(evt) {
//     console.log(evt.currentTarget.textContent);
//     if (evt.currentTarget.hasAttribute('data-start') || intervalId !== null) {
//       intervalId = setInterval(
//         () => {
//           bodyEl.style.backgroundColor = getRandomHexColor();
//         },

//         1000,
//       );
//       evt.currentTarget.setAttribute('disabled', true);
//     } else if (evt.currentTarget.hasAttribute('data-stop')) {
//       clearInterval(intervalId);
//       return;
//     }
//   }
// });

// function onStartBtnClick() {
//   intervalId = setInterval(
//     () => {
//       bodyEl.style.backgroundColor = getRandomHexColor();
//     },

//     1000,
//   );
//   if (intervalId !== null) {
//     startBtn.setAttribute('disabled', true);
//   }
// }
// function onStopBtnClick() {
//   clearInterval(intervalId);
//   startBtn.removeAttribute('disabled');
// }
