const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = 'feedback-form-state';
try {
  email.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? '';
  message.value =
    JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
} catch (error) {}

form.addEventListener('input', () =>
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: email.value,
      message: message.value,
    })
  )
);
form.addEventListener('submit', e => {
  e.preventDefault();
  if (email.value !== '' && message.value !== '') {
    console.log({
      email: email.value,
      message: message.value,
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});