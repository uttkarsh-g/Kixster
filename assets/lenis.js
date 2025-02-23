import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1,
  smoothWheel: true,
  wheelMultiplier: 0.5,
  smoothTouch: true,
  touchMultiplier: 1.5,
});

document.querySelector('.menu').addEventListener('click', () => {
  if (document.body.classList.contains('stop')) {
    lenis.stop();
  } else {
    lenis.start();
  }
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
