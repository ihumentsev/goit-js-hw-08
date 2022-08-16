// Импорт
import throttle from 'lodash.throttle';

// -----------
const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};
const refs = {
  formEl: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.formEl.addEventListener('submit', onFormSend);
refs.formEl.addEventListener('input', throttle(onFormDataInput, 500));

function onFormDataInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSend(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  console.log(formData);
}

function storageGetItem() {
  const saveMassage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));
  if (saveMassage) {
    refs.formEl.email.value = saveMassage.email;
    refs.formEl.message.value = saveMassage.message;
  }
}
storageGetItem();
