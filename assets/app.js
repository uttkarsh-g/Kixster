import aj1ms from './images/shop/AIR+JORDAN+1+MID+SE.webp';
import ocb from './images/shop/ocb.png';
import ye from './images/shop/ye.png';
import aj1m from './images/shop/AIR+JORDAN+1+MID.webp';
import y from './images/shop/y.png';
import ocw from './images/shop/ocw.png';
import aj4 from './images/shop/AIR+JORDAN+4+RM.webp';
import af1 from './images/shop/AIR+FORCE+1+.webp';
import jsl from './images/shop/JORDAN+SPIZIKE+LOW.webp';

const m = document.querySelector('.menu');
const h = document.querySelector('.hamburger');
const navlinks = document.querySelectorAll('.hamburger a');
const cards = document.querySelectorAll('.card');
const b = document.body;
const btn = document.querySelectorAll('.box');
const img = document.querySelectorAll('.img');
const mouse = document.querySelector('.mm');
const heart = document.querySelectorAll('.heart');
const cardContainer = document.querySelector('.swiper-wrapper');

const products = {
  1: {
    img: aj1ms,
    n: 'Air Jorden 1 Mid SE',
    op: 16000,
    np: 12000,
  },
  2: {
    img: ocb,
    n: 'ON RUNNING CLOUD X 3 BLACK',
    op: 19500,
    np: 17999,
  },
  3: {
    img: ye,
    n: 'ADIDAS YEEZY 350 V2 CARBON BELUGA',
    op: 20000,
    np: 14999,
  },
  4: {
    img: aj1m,
    n: 'Air Jorden 1 Mid',
    op: 13000,
    np: 11000,
  },
  5: {
    img: y,
    n: 'ADIDAS YEEZY FOAM RNNR MX GRANITE',
    op: 10000,
    np: 8999,
  },
  6: {
    img: ocw,
    n: 'ON RUNNING CLOUDTILT BLACKIVORY',
    op: 23500,
    np: 21999,
  },
  7: {
    img: aj4,
    n: 'Air Jorden 4 RM',
    op: 14000,
    np: 12999,
  },
  8: {
    img: af1,
    n: 'Air Force 1',
    op: 15000,
    np: 11000,
  },
  9: {
    img: jsl,
    n: 'Jorden Sipzike Low ',
    op: 18500,
    np: 14000,
  },
};

const swiperWrapper = document.querySelector('.swiper-wrapper');

Object.values(products).forEach((product) => {
  let card = document.createElement('div');
  card.classList.add('swiper-slide');
  card.innerHTML = `
        <div class="card">
            <div class="card-img">
                <img src="${product.img}" alt="${product.n}">
            </div>
            <div class="card-cnt">
                <div class="pal">
                    <p>${product.n}</p>
                    <i class="ri-heart-fill heart"></i>
                </div>
                <div class="pab">
                    <div class="price">
                        <p class="o">₹${product.op}</p>
                        <p class="n">₹${product.np}</p>
                    </div>
                    <button class="hover cls-btn add-to-cart" 
                        data-name="${product.n}" 
                        data-price="${product.np}" 
                        data-image="${product.img}">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    `;
  swiperWrapper.appendChild(card);
});
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

// cards.forEach((element) => {
//   element.addEventListener('mouseenter', (e) => {
//     e.stopPropagation();
//     mouse.style.opacity = 0;
//   });
//   element.addEventListener('mouseleave', (e) => {
//     e.stopPropagation();
//     mouse.style.opacity = 1;
//   });
// });

heart.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation();
    icon.classList.toggle('love');
  });
});

const showCase = () => {
  let swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 10,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
};
showCase();

// reviews
// const feedBack = () => {
//   const swiper = new Swiper('.mySwiper', {
//     rewind: true,
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 3500,
//       disableOnInteraction: false,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
// };

// feedBack();
