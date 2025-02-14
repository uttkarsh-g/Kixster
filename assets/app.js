import aj1ms from './images/shop/AIR+JORDAN+1+MID+SE.webp';
import ocb from './images/shop/ocb.png';
import ye from './images/shop/ye.png';
import aj1m from './images/shop/AIR+JORDAN+1+MID.webp';

const btn = document.querySelectorAll('.box');
const img = document.querySelectorAll('.img');
const h = document.querySelector('.hamburger');
const b = document.body;
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
                    <button class="hover cls-btn add-to-cart">
                        Add to cart
                    </button>
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
container.addEventListener('mouseenter', () => {
  mouse.style.opacity = 0;
});
container.addEventListener('mouseleave', () => {
  mouse.style.opacity = 1;
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
// showCase();
