import '../css/common.css';
import 'flatpickr/dist/flatpickr.min.css';

import flatpickr from 'flatpickr';

const startBtn = document.querySelector('[data-start]');
startBtn.setAttribute('disabled', true);
// startBtn.addEventListener('click', onStartBtnCkick);

// function onStartBtnCkick() {}

const calendar = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    let currentTime = Date.now();
    let selectedTime = selectedDates[0].getTime();

    if (currentTime > selectedTime) {
      window.alert('Please choose a date in the future');
      return;
    } else {
      startBtn.removeAttribute('disabled');
    }
    startBtn.addEventListener('click', onStartBtnCkick);
    function onStartBtnCkick() {
      setInterval(() => {
        const curTime = Date.now();
        const deltaTime = selectedTime - curTime;
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        console.log(`${days}:${hours}:${minutes}:${seconds}`);
      }, 1000);
    }
  },
});

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
