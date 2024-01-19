
const form = document.querySelector('.feedback-form');
const { elements } = form;
const localStorageKey = 'feedback-form-state';

const updateLocalStorage = () => {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify({
      email: elements.email.value,
      message: elements.message.value,
    })
  );
};

const loadFromLocalStorage = () => {
  try {
    const savedState = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    elements.email.value = savedState.email || '';
    elements.message.value = savedState.message || '';
  } catch (error) {}
};

const handleInput = () => updateLocalStorage();

const handleSubmit = (e) => {
  e.preventDefault();
  const { email, message } = elements;

  if (email.value !== '' && message.value !== '') {
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
};

form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

loadFromLocalStorage();
