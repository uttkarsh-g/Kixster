const oe = document.querySelector('.openeye');
const ce = document.querySelector('.closeeye');
const ec = document.querySelector('.peye');
const p = document.querySelector('#password');

function showPassword() {
  oe.classList.add('hide');
  ce.classList.remove('hide');
  ce.classList.add('show');
  p.type = 'text';
}
function hidePassword() {
  oe.classList.remove('hide');
  oe.classList.add('show');
  ce.classList.add('hide');
  p.type = 'password';
}

ec.addEventListener('mousedown', () => {
  showPassword();
});

ec.addEventListener('mouseup', () => {
  hidePassword();
});

ec.addEventListener('touchstart', () => {
  showPassword();
});

ec.addEventListener('touchend', () => {
  hidePassword();
});

document.querySelector('form').addEventListener('submit', (e) => {
  e.stopPropagation();
  e.preventDefault();
});
