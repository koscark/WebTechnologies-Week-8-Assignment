document.addEventListener('DOMContentLoaded', () => {
  // Check page type
  const isProductsPage = document.querySelector('#category-filter') !== null;
  const isDetailsPage = document.querySelector('.product-details') !== null;
  const productGrid = document.querySelector('.product-grid');
  
  // Homepage: Featured products
  if (!isProductsPage && !isDetailsPage) {
    const featuredProducts = products.filter(product => 
      product.condition === 'refurbished' || product.category === 'entertainment'
    ).slice(0, 3);
    renderProducts(featuredProducts, productGrid);
  }
  // Products page: Filterable grid
  else if (isProductsPage) {
    renderProducts(products, productGrid);

    // Setup filter event listeners
    const categoryFilter = document.querySelector('#category-filter');
    const conditionFilter = document.querySelector('#condition-filter');

    const applyFilters = () => {
      const category = categoryFilter.value;
      const condition = conditionFilter.value;

      let filteredProducts = products;

      if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
      }

      if (condition !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.condition === condition);
      }

      renderProducts(filteredProducts, productGrid);
    };

    categoryFilter.addEventListener('change', applyFilters);
    conditionFilter.addEventListener('change', applyFilters);
  }
  // Product details page
  else if (isDetailsPage) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'), 10);
    const productDetails = document.querySelector('.product-details');
    const productError = document.querySelector('.product-error');
    const productImage = document.querySelector('.product-image');
    const productInfo = document.querySelector('.product-info');

    const product = products.find(p => p.id === productId);

    if (product) {
      productDetails.style.display = 'flex';
      productError.style.display = 'none';

      // Generate description
      const description = generateProductDescription(product);

      productImage.innerHTML = `
        <img src="../${product.image}" alt="${product.name}">
      `;
      productInfo.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>Price:</strong> Ksh ${product.price.toLocaleString()}</p>
        <p><strong>Condition:</strong> ${product.condition}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Description:</strong> ${description}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
    } else {
      productDetails.style.display = 'none';
      productError.style.display = 'block';
    }
  }
});

// Render products to a grid (for index.html, products.html)
function renderProducts(products, grid) {
  grid.innerHTML = '';
  products.forEach(product => {
    const productCard = document.createElement('article');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <a href="product-details.html?id=${product.id}">
        <img src="../${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
      </a>
      <p>Condition: ${product.condition}</p>
      <p>Price: Ksh ${product.price.toLocaleString()}</p>
      <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    grid.appendChild(productCard);
  });
}

// Generate a product description
function generateProductDescription(product) {
  const conditionDesc = {
    used: 'This item has been gently used and is in good working condition with minor wear.',
    good: 'This item is in excellent condition, thoroughly tested, and ready for use.',
    refurbished: 'Professionally refurbished to like-new condition, fully tested and certified.'
  };
  const categoryDesc = {
    kitchen: 'Perfect for enhancing your kitchen with reliable performance.',
    laundry: 'Designed to make laundry tasks efficient and hassle-free.',
    entertainment: 'Elevate your home entertainment with top-quality audio and visuals.',
    home: 'Ideal for improving comfort and convenience in your home.'
  };
  return `${conditionDesc[product.condition]} ${categoryDesc[product.category]}`;
}