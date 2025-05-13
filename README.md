# WebTechnologies-Week-8-Assignment

ReTech
ReTech is a responsive e-commerce website for purchasing high-quality used, good, and refurbished electronics, such as dishwashers, microwaves, soundbars, and smart thermostats. The platform provides an intuitive interface for browsing products, viewing detailed product information, managing a shopping cart, and contacting the business. Built with HTML, CSS, and JavaScript, it serves customers seeking affordable electronics in Nairobi, Kenya, and beyond.

# Table of Contents
Features
Installation
Usage
File Structure
Dependencies
Known Issues
Future Improvements
Contact

# Features
Homepage (index.html): Showcases featured products (refurbished or entertainment category) with a hero section and "Add to Cart" buttons.
Products Page (products.html): Displays a filterable grid of all products by category (kitchen, laundry, entertainment, home) and condition (used, good, refurbished).
Product Details Page (product-details.html): Provides detailed information for a selected product, including image, name, price, condition, category, description, and "Add to Cart" functionality.
Cart Page (cart.html): Lists cart items with images, quantities, prices, and totals, allowing users to adjust quantities or remove items. Persists cart data in localStorage.
Contact Page (contact.html): Includes a form for sending inquiries (name, email, subject, message) with client-side validation and contact details (email: retech@retechkenya.com, phone: +254798765432, location: Nairobi, Kenya, social: @ReTechKenya).


# Accessibility:
Semantic HTML (<header>, <nav>, <main>, <section>, <footer>), ARIA attributes for navigation toggle.

# Installation
Clone the Repository:
https://github.com/koscark/WebTechnologies-Week-8-Assignment
Install live-server:npm install -g live-server
Run the Website
Open http://localhost:8080/pages/index.html in your browser.

# Usage
Homepage:
View featured products (e.g., Refurbished Microwave Oven).
Click product name/image to visit product-details.html?id=X.
Click "Add to Cart" to add items to the cart.

Products Page:
Filter products by category or condition using dropdowns.
Click a product to view details or add to cart.

Product Details Page:
Access via product links (e.g., product-details.html?id=3).
View product image, price, condition, category, and description.
Add to cart or return to products.

Cart Page:
View cart items with images, quantities, and totals.
Adjust quantities (+/-) or remove items.
Note: "Proceed to Checkout" is non-functional (see Future Improvements).

Contact Page:
Fill out the form (name, email, message required) and submit.
View validation feedback (e.g., "Thank you for your message!").
Contact via email (retech@retechkenya.com), phone (+254798765432), or Twitter (@ReTechKenya).


File Structure
E-Commerce-Website/
├── assets/
│   ├── images/             # Product images (e.g., microwave.jpg)
│   └── data/
│       └── products.js     # Product data (id, name, price, image, condition, category)
├── css/
│   ├── styles.css         # Global styles (layout, footer, header)
│   ├── responsive.css     # Mobile responsiveness (hamburger menu, cart table)
│   └── components.css     # Component styles (navigation, product cards, forms)
├── js/
│   ├── main.js            # Main javascript
│   ├── products.js        # Product rendering and filtering
│   ├── cart.js            # Cart management (localStorage)
│   └── contact.js         # Contact form validation
├── pages/
│   ├── index.html         # Homepage
│   ├── products.html      # Product listing
│   ├── cart.html          # Shopping cart
│   ├── product-details.html # Product details
│   └── contact.html       # Contact form and info
└── README.md              # This documentation

# Note
I tried to depoy the website in varcel but ut was not loading the CSS and JavaScript yet in VS Code it works without an issue.
You can try downloading the project and running it on your local machine.