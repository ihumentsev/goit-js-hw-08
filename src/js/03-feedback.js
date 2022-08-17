// Импорт
import throttle from 'lodash.throttle';

// -----------
const FEEDBACK_KEY = 'feedback-form-state';
let formData = {};
const refs = {
  formEl: document.querySelector('.feedback-form'),
  onMessage: document.querySelector('[name="message"]'),
  onEmail: document.querySelector('[name="email"]'),
};

refs.formEl.addEventListener('submit', onFormSend);
refs.formEl.addEventListener('input', throttle(onFormDataInput, 500));

function onFormDataInput(event) {
  formData = {
    email: refs.onEmail.value,
    message: refs.onMessage.value,
  };

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSend(event) {
  event.preventDefault();
  if (refs.onEmail.value.trim() !== '' && refs.onMessage.value !== '') {
    console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));
    refs.formEl.reset();
    localStorage.removeItem(FEEDBACK_KEY);
  }
}

function getFormValue() {
  const saveFeedback = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (saveFeedback) {
    refs.onEmail.value = saveFeedback.email;
    refs.onMessage.value = saveFeedback.message;
  }
  formData = saveFeedback;
}
getFormValue();
