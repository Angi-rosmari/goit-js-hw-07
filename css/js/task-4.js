const form = document.querySelector('.login-form');

form.addEventListener('submit', eventSubmit);

function eventSubmit(event) {
  event.preventDefault();

  const mail = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();

  if (mail === '' || pass === '') {
    return alert('All form fields must be filled in');
  }

  const objInputsValues = { email: mail, password: pass };
  console.log(objInputsValues);
  form.reset();
}
