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
    let currentTime = new Date().getTime();
    let selectedTime = selectedDates[0].getTime();

    if (currentTime > selectedTime) {
      window.alert('Please choose a date in the future');
    } else {
      startBtn.removeAttribute('disabled');
    }
  },
});
