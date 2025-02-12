// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

// // // // hero

// gsap.from('.title h1', {
//   delay: 0.5,
//   y: 50,
//   opacity: 0,
// });

// gsap.from('.img img', {
//   delay: 1,
//   y: -150,
//   opacity: 0,
// });
// gsap.to('.imge', {
//   y: '50px',

//   scrollTrigger: {
//     trigger: '.imge',
//     scroller: 'body',
//     start: '50% 50%',
//     end: '50% 30%',
//     scrub: 5,
//   },
// });
// gsap.to('.title', {
//   y: '-20%',
//   scrollTrigger: {
//     trigger: '.title',
//     scroller: 'body',
//     start: '50% 25%',
//     end: '50% 10%',
//     scrub: 5,
//   },
// });
// gsap.from('.btn', {
//   opacity: 0,
//   delay: 2,
// });

// gsap.from('.scrol', {
//   opacity: 0,
//   delay: 2,
// });
// gsap.to('.bar', {
//   delay: 2.5,
//   y: 25,
//   duration: 1,
//   repeat: -1,
//   yoyo: true,
// });

// // // // about section
// let horizontalScroll = gsap.matchMedia();

// horizontalScroll.add('(min-width: 769px)', () => {
//   const hori = gsap.utils.toArray('#about .h');

//   gsap.to(hori, {
//     xPercent: -100 * (hori.length - 1),
//     delay: 2,
//     scrollTrigger: {
//       trigger: '#about',
//       pin: true,
//       scrub: 1,
//       end: '+=3500',
//     },
//   });

//   gsap.from('.la', {
//     y: 50,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.la',
//       scroller: 'body',
//       start: '0% 30%',
//       end: '10% 20%',
//       scrub: 3,
//     },
//   });
//   gsap.from('.aa', {
//     y: -500,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.aa',
//       scroller: 'body',
//       start: '80% 30%',
//       scrub: 3,
//     },
//   });
//   gsap.from('.fa', {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.fa',
//       scroller: 'body',
//       start: '2055px 30%',
//       end: '+=3500',
//       scrub: 3,
//     },
//   });
// });
