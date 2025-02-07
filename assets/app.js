const m = document.querySelector('.menu');
const h = document.querySelector('.hamburger');
const navlinks = document.querySelectorAll('.hamburger a');
const cards = document.querySelectorAll('.card');
const b = document.body;
const btn = document.querySelectorAll('.box');
const img = document.querySelectorAll('.img');
const mouse = document.querySelector('.mm');
const heart = document.querySelectorAll('.heart');

// Mouse Follower

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

// mobile touch
b.addEventListener('touchstart', show);
b.addEventListener('touchmove', (e) => {
  const touch = e.touches[0];
  move(touch.clientX, touch.clientY);
});
b.addEventListener('touchend', hide);

// Hamburger

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
// Hero images

img.forEach((e, i) => {
  e.style.left = `${i * 100}%`;
});

btn.forEach((ele, index) => {
  ele.addEventListener('click', (element) => {
    const currentId = element.currentTarget.id;
    element.stopPropagation();
    b.className = '';
    h.className = 'hamburger';
    b.classList.add(currentId);
    h.classList.add(currentId);

    img.forEach((image, i) => {
      if (i === index) {
        image.style.left = '0%';
      } else {
        image.style.left = '100%';
      }
    });
  });
});

// cards

cards.forEach((element) => {
  element.addEventListener('mouseenter', (e) => {
    e.stopPropagation();
    mouse.style.opacity = 0;
  });
  element.addEventListener('mouseleave', (e) => {
    e.stopPropagation();
    mouse.style.opacity = 1;
  });
});

heart.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    icon.classList.toggle('love');
  });
});
