// Импорт
import throttle from 'lodash.throttle';

// -----------
const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  formEl: document.querySelector('.feedback-form'),
  // textarea: document.querySelector('.feedback-form textarea'),
};

refs.formEl.addEventListener('submit', onFormSend);
refs.formEl.addEventListener('input', throttle(onFormDataInput, 500));

function onFormDataInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSend(event) {
  console.log(JSON.parse(localStorage.getItem(FEEDBACK_KEY)));
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

function storageGetItem() {
  const message = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (message) {
    refs.formEl.email.value = message.email;
    refs.formEl.message.value = message.message;
  } else {
    refs.formEl.email.value = null;
    refs.formEl.message.value = null;
  }
}
storageGetItem();
