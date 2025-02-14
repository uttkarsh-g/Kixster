import aj1ms from './images/shop/AIR+JORDAN+1+MID+SE.webp';
import ocb from './images/shop/ocb.png';
import ye from './images/shop/ye.png';
import aj1m from './images/shop/AIR+JORDAN+1+MID.webp';
import y from './images/shop/y.png';
import ocw from './images/shop/ocw.png';
import aj4 from './images/shop/AIR+JORDAN+4+RM.webp';
import af1 from './images/shop/AIR+FORCE+1+.webp';
import jsl from './images/shop/JORDAN+SPIZIKE+LOW.webp';

const itemContainer = document.querySelector('.itemcontainer');
const i = document.querySelector('.itemm');

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
  5: {
    img: y,
    n: 'ADIDAS YEEZY FOAM',
    op: 10000,
    np: 8999,
  },
  6: {
    img: ocw,
    n: 'ON RUNNING CLOUDTILT',
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

Object.values(products).forEach((product) => {
  let card = document.createElement('div');
  card.classList.add('items');
  card.innerHTML = `
          <div class="item">
              <div class="item-head">
                  <img src="${product.img}" alt="${product.n}">
              </div>
              <div class="item-cnt">
                  <div class="pname">
                      <p>${product.n}</p>
                      <i class="ri-heart-fill heart"></i>
                  </div>
                  <div class="ppab">
                      <div class="p-price">
                          <p class="old">₹${product.op}</p>
                          <p class="new">₹${product.np}</p>
                      </div>
                      <button class="cart-btn">
                          Add to cart
                      </button>
                  </div>
              </div>
          </div>
      `;
  itemContainer.appendChild(card);

  let cartBtn = card.querySelector('.cart-btn');
  cartBtn.addEventListener('click', () => {
    cartBtn.innerText = 'Added';
    i.style.backgroundColor = 'red';
  });
});
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('heart')) {
    event.target.classList.toggle('l');
  }
});
