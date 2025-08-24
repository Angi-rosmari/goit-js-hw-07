const showname = document.querySelector('#name-output');

document.querySelector('#name-input').addEventListener('input', event => {
  showname.textContent = event.currentTarget.value.trim();

  if (showname.textContent === '') {
    showname.textContent = 'Anonymous';
  }
});
