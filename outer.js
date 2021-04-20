const spanInput = document.getElementById('span-input');
const outerInput = document.getElementById('input');

outerInput.addEventListener('input', event => {
  spanInput.textContent = event.target.value;
});
