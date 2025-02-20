const cM = document.querySelector('.cartsection');
const cartContainer = document.querySelector('.cart-container');
const cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
  if (cart.length === 0) {
    cM.classList.add('centercart');
    cM.innerHTML = ` 
      <div class="emptycart">
        <h3>No kicks here yet! Find your perfect pair now.</h3>
        <button><a href="shop.html"> Shop Now </a></button>
      </div>`;
    cartContainer.innerHTML = ''; // Ensure cart container is empty
    return;
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
    renderCart();
  }
}

renderCart();
