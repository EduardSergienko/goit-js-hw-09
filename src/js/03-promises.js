import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const delaiInput = document.querySelector('[name=delay]');
// const stepInput = document.querySelector('[name=step]');
// const amountInput = document.querySelector('[name=amount]');

const formEl = document.querySelector('.form');

const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', onSubmitForm);
function onSubmitForm(evt) {
  evt.preventDefault();
  const delay = +formEl.elements.delay.value;
  const step = +formEl.elements.step.value;
  const amount = +formEl.elements.amount.value;
  generatePromises(delay, step, amount);
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function generatePromises(delay, step, amount) {
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          timeout: 3000,
        });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌Rejected promise ${position} in ${delay}ms`, {
          timeout: 3000,
        });
      });
    delay += step;
  }
}

// createPromise(position, delay)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
