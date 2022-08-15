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
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.formEl.addEventListener('input', throttle(onFormDataInput, 500));

function onFormDataInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function onFormSend(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}

// function onTextareaInput(event) {
//   localStorage.setItem(FEEDBACK_KEY, event.target.value);
// }

function pushTextarea() {
  const saveMassage = localStorage.getItem(FEEDBACK_KEY);
  if (saveMassage) {
    formData[event.target.name] = JSON.parse(saveMassage);
  }
}
pushTextarea();
