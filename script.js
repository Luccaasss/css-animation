const box = document.getElementById('main-box');
let toggle = true;

const button = document.getElementById('change-button').addEventListener('click', () => {
  if (toggle) {
    box.className = 'box shadow-pop-bl';
  } else {
    box.className = 'box';
  }
  toggle = (!toggle)
})