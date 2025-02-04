function hamMenu() {
  const m = document.querySelector('.menu');
  const h = document.querySelector('.hamburger');
  const b = document.body;
  m.addEventListener('click', (e) => {
    e.stopPropagation();
    m.classList.toggle('mact');
    h.classList.toggle('active');
    b.classList.toggle('stop');
  });
}
hamMenu();
