const feedbackForm = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem('feedback-form-state');

if (savedData) {
  const parsedData = JSON.parse(savedData);

  feedbackForm.elements.email.value = parsedData.email;
  feedbackForm.elements.message.value = parsedData.message;

  formData.email = parsedData.email;
  formData.message = parsedData.message;
}

feedbackForm.addEventListener('input', () => {
  const inputData = new FormData(feedbackForm);

  formData.email = inputData.get('email').trim();
  formData.message = inputData.get('message').trim();

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', e => {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  formData.email = '';
  formData.message = '';
});
