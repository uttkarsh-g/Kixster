import Lenis from 'lenis';

const lenis = new Lenis({
  duration: 1,
  smoothWheel: true,
  wheelMultiplier: 0.5,
  smoothTouch: true,
  touchMultiplier: 1.5,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
