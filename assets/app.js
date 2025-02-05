const m = document.querySelector('.menu');
const h = document.querySelector('.hamburger');
const b = document.body;
const btn = document.querySelectorAll('.box');
const img = document.querySelectorAll('.img');

//Hamburger

m.addEventListener('click', (e) => {
  e.stopPropagation();
  m.classList.toggle('mact');
  h.classList.toggle('active');
  b.classList.toggle('stop');
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
