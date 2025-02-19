// const cM = document.querySelector('.cartsection');
// const cartContainer = document.querySelector('.cart-container');
// const cart = JSON.parse(localStorage.getItem('cart')) || [];

// function renderCart() {
//   if (cart.length === 0) {
//     cM.classList.add('centercart');
//     cM.innerHTML = ` <div class="emptycart">
//         <h3>No kicks here yet! Find your perfect pair now.</h3>
//         <button><a href="shop.html"> Shop Now </a></button>
//       </div>`;
//     return;
//   }

//   cartContainer.innerHTML = cart
//     .map(
//       (item) => `
//     <div class="cart-item">
//       <img src="${item.img}" alt="${item.n}">
//       <p>${item.n}</p>
//       <p>₹${item.np}</p>
//       <button class="remove-btn" data-id="${item.id}">Remove</button>
//     </div>
//   `
//     )
//     .join('');

//   document.querySelectorAll('.remove-btn').forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//       removeFromCart(e.target.dataset.id);
//     });
//   });
// }

// function removeFromCart(id) {
//   const index = cart.findIndex((item) => item.id === id);
//   if (index > -1) {
//     cart.splice(index, 1);
//     localStorage.setItem('cart', JSON.stringify(cart));
//     renderCart();
//   }
// }

// renderCart();
