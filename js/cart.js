document.addEventListener('DOMContentLoaded', () => {
  // Initialize cart from localStorage or empty array
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Update localStorage with cart
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  // Render cart items (for cart.html)
  const renderCart = () => {
    const cartItems = document.querySelector('.cart-items');
    const cartTotal = document.querySelector('.cart-total');
    const emptyCart = document.querySelector('.empty-cart');
    const cartContainer = document.querySelector('.cart-container');

    // If not on cart page, skip rendering
    if (!cartItems) return;

    // Show/hide cart table or empty message
    if (cart.length === 0) {
      cartContainer.style.display = 'none';
      emptyCart.style.display = 'block';
      return;
    } else {
      cartContainer.style.display = 'block';
      emptyCart.style.display = 'none';
    }

    // Clear existing items
    cartItems.innerHTML = '';

    // Calculate total
    let total = 0;

    // Render each cart item
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;

      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="../${item.image}" alt="${item.name}" class="cart-item-image"></td>
        <td>${item.name}</td>
        <td>${item.condition}</td>
        <td>Ksh ${item.price.toLocaleString()}</td>
        <td>
          <div class="quantity-controls">
            <button class="quantity-decrease" data-id="${item.id}">-</button>
            <span>${item.quantity}</span>
            <button class="quantity-increase" data-id="${item.id}">+</button>
          </div>
        </td>
        <td>Ksh ${itemTotal.toLocaleString()}</td>
        <td><button class="remove-item" data-id="${item.id}">Remove</button></td>
      `;
      cartItems.appendChild(row);
    });

    // Update total
    cartTotal.textContent = `Ksh ${total.toLocaleString()}`;
  };

  // Handle all cart-related clicks
  document.addEventListener('click', (e) => {
    // Handle "Add to Cart"
    if (e.target.classList.contains('add-to-cart')) {
      const productId = parseInt(e.target.dataset.id, 10);
      if (isNaN(productId)) {
        console.error('Invalid product ID:', e.target.dataset.id);
        return;
      }
      const product = products.find(p => p.id === productId);
      if (product) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
          cartItem.quantity += 1;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        saveCart();
        e.target.textContent = 'Added!';
        e.target.disabled = true;
        setTimeout(() => {
          e.target.textContent = 'Add to Cart';
          e.target.disabled = false;
        }, 1000);
        renderCart(); // Update cart if on cart page
      } else {
        console.error(`Product with ID ${productId} not found`);
      }
    }

    // Handle quantity increase
    if (e.target.classList.contains('quantity-increase')) {
      const productId = parseInt(e.target.dataset.id, 10);
      const cartItem = cart.find(item => item.id === productId);
      if (cartItem) {
        cartItem.quantity += 1;
        saveCart();
        renderCart();
      }
    }

    // Handle quantity decrease
    if (e.target.classList.contains('quantity-decrease')) {
      const productId = parseInt(e.target.dataset.id, 10);
      const cartItem = cart.find(item => item.id === productId);
      if (cartItem && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        saveCart();
        renderCart();
      }
    }

    // Handle remove item
    if (e.target.classList.contains('remove-item')) {
      const productId = parseInt(e.target.dataset.id, 10);
      cart = cart.filter(item => item.id !== productId);
      saveCart();
      renderCart();
    }
  });

  // Initial render for cart page
  renderCart();
});