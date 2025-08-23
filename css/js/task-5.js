function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const bodyTag = document.querySelector('body');
const colorValue = document.querySelector('.color');

button.addEventListener('click', () => {
  const randomColor = getRandomHexColor();
  bodyTag.style.backgroundColor = randomColor;
  colorValue.textContent = randomColor;
});
