import 'remixicon/fonts/remixicon.css';

const m = document.querySelector('.menu');
const h = document.querySelector('.hamburger');
const navlinks = document.querySelectorAll('.hamburger a');
const b = document.body;
const mouse = document.querySelector('.mm');

m.addEventListener('click', (e) => {
  e.stopPropagation();
  m.classList.toggle('mact');
  h.classList.toggle('active');
  b.classList.toggle('stop');
});

navlinks.forEach((navLinks) => {
  navLinks.addEventListener('click', (e) => {
    e.stopPropagation();
    m.classList.toggle('mact');
    h.classList.toggle('active');
    b.classList.toggle('stop');
  });
});

function move(x, y) {
  mouse.style.left = x - 10 + 'px';
  mouse.style.top = y - 8 + 'px';
}
const hide = () => {
  mouse.style.opacity = '0';
};
const show = () => {
  mouse.style.opacity = 1;
};
b.addEventListener('mouseenter', show);
b.addEventListener('mouseleave', hide);
b.addEventListener('mousemove', (arg) => {
  move(arg.x, arg.y);
});
