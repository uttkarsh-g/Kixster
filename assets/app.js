import aj1ms from './images/shop/AIR+JORDAN+1+MID+SE.webp';
import ocb from './images/shop/ocb.png';
import ye from './images/shop/ye.png';
import aj1m from './images/shop/AIR+JORDAN+1+MID.webp';

const btn = document.querySelectorAll('.box');
const img = document.querySelectorAll('.img');
const hero = document.querySelector('.hero');
const mouse = document.querySelector('.mm');
const container = document.querySelector('#container');

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
    n: 'ON RUNNING CLOUD',
    op: 19500,
    np: 17999,
  },
  3: {
    img: ye,
    n: 'ADIDAS YEEZY 350',
    op: 20000,
    np: 14999,
  },
  4: {
    img: aj1m,
    n: 'Air Jorden 1 Mid',
    op: 13000,
    np: 11000,
  },
};

// Hero images

img.forEach((e, i) => {
  e.style.left = `${i * 100}%`;
});

btn.forEach((ele, index) => {
  ele.addEventListener('click', (element) => {
    const currentId = element.currentTarget.id;
    element.stopPropagation();
    hero.className = '';
    hero.className = 'hero';
    hero.classList.add(currentId);

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
                </div>
                <div class="pab">
                    <div class="price">
                        <p class="o">₹${product.op}</p>
                        <p class="n">₹${product.np}</p>
                    </div>

                </div>
            </div>
        </div>
    `;
  cardContainer.appendChild(card);
});
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('heart')) {
    event.target.classList.toggle('love');
  }
});
const mQ = window.matchMedia('(min-width: 500px)');
if (mQ.matches) {
  container.addEventListener('mouseenter', () => {
    mouse.style.opacity = 0;
  });
  container.addEventListener('mouseleave', () => {
    mouse.style.opacity = 1;
  });
}

const showCase = () => {
  let swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '#nra',
      prevEl: '#nla',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
};
showCase();
const rShow = () => {
  let swiper = new Swiper('.cards', {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    navigation: {
      nextEl: '#fra',
      prevEl: '#fla',
    },
  });
};
rShow();
