const cM = document.querySelector('.cartsection');
const cartContainer = document.querySelector('.cart-container');
const price = document.querySelector('.amt-list');
const total = document.querySelector('#grandtotal');
const loginpage = document.querySelector('.login');
const iF = document.querySelectorAll('form input');
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const isLogin = false;

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (!isLogin) {
    loginpage.classList.add('loginshow');
  }
});

loginpage.addEventListener('click', () => {
  loginpage.classList.remove('loginshow');
  iF.forEach((allInp) => {
    allInp.value = '';
  });
});

function renderCart() {
  if (cart.length === 0) {
    cM.classList.add('centercart');
    cM.innerHTML = `
      <div class="emptycart">
        <h3>No kicks here yet! Find your perfect pair now.</h3>
        <button><a href="shop.html"> Shop Now </a></button>
      </div>`;
    cartContainer.innerHTML = '';
  }

  cartContainer.innerHTML = cart
    .map(
      (item) => `
      <div class="cartitem">
        <div class="cii">
          <img src="${item.img}" alt="${item.n}" />
        </div>
        <div class="cia">
          <h4>${item.n}</h4>
          <div class="ciaa">
            <p class="ciaap">₹${item.np}</p>
            <button class="remove-btn" data-id="${item.id}">
              <i class="ri-delete-bin-line"></i>
            </button>
          </div>
        </div>
      </div>`
    )
    .join('');
  price.innerHTML = cart
    .map(
      (item) => ` <div class="item-amt">
                <p>1 x ${item.n}</p>
                <p>₹${item.np}</p>
              </div>`
    )
    .join('');
  const totalAmount = cart.reduce((acc, item) => acc + item.np, 0);
  total.innerText = `₹${totalAmount}`;

  document.querySelectorAll('.remove-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const btnElement = e.target.closest('.remove-btn'); // Ensure correct button selection
      if (btnElement) {
        removeFromCart(btnElement.dataset.id);
      }
    });
  });
}

function removeFromCart(id) {
  const index = cart.findIndex((item) => item.id === id);
  if (index > -1) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart.length === 0) {
      document.querySelector('.itemm').classList.remove('added');
    }
    renderCart();
  }
}

renderCart();
