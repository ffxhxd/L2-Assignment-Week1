// Execute the following code once the DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function() {

  //mock data
  const clothingData = [
    {
      "id": "C001",
      "name": "Men's T-Shirt",
      "brand": "ABC",
      "description": "A comfortable and stylish men's t-shirt. With all colors available",
      "price": 29.99,
      "stock": 150,
      "category": "Clothing",
      "tags": ["t-shirt", "men's clothing"],
      "size_available": ["S", "M", "L", "XL"],
      "color_available": ["Black", "White", "Blue", "Red"],
      "image": "https://images.unsplash.com/photo-1543965170-4c01a586684e?q=80&w=1449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "C002",
      "name": "Women's Jeans",
      "brand": "XYZ",
      "description": "High-quality jeans for women with a slim fit.",
      "price": 49.99,
      "stock": 100,
      "category": "Clothing",
      "tags": ["jeans", "women's clothing"],
      "size_available": ["XS", "S", "M", "L"],
      "color_available": ["Blue", "Black", "Grey"],
      "image": "https://images.unsplash.com/photo-1595272832990-82e5cd240255?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "C003",
      "name": "Unisex Hoodie",
      "brand": "DEF",
      "description": "A warm and cozy hoodie suitable for both men and women.",
      "price": 39.99,
      "stock": 120,
      "category": "Clothing",
      "tags": ["hoodie", "unisex clothing"],
      "size_available": ["XS", "S", "M", "L", "XL"],
      "color_available": ["Grey", "Navy", "Black", "Green"],
      "image": "https://images.unsplash.com/photo-1579269879086-b773e815a753?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "C004",
      "name": "Men's Formal Shirt",
      "brand": "GHI",
      "description": "A classic formal shirt for men suitable for office wear.",
      "price": 59.99,
      "stock": 80,
      "category": "Clothing",
      "tags": ["shirt", "men's clothing", "formal"],
      "size_available": ["S", "M", "L", "XL"],
      "color_available": ["White", "Blue", "Pink"],
      "image": "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      "id": "C005",
      "name": "Women's Dress",
      "brand": "JKL",
      "description": "An elegant dress for women suitable for parties and events.",
      "price": 79.99,
      "stock": 90,
      "category": "Clothing",
      "tags": ["dress", "women's clothing", "formal"],
      "size_available": ["S", "M", "L"],
      "color_available": ["Red", "Black", "Blue"],
      "image": "https://images.unsplash.com/photo-1603122630570-7fd434d470d0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

  // Get reference to the container for clothing cards and the cart container
  const container = document.getElementById('clothing-cards');
  const cartContainer = document.querySelector('.cart-container tbody');  
  const emptyCartMessage = document.querySelector('.empty-cart-message');  
  
  // Initialize total price and total items in the cart
  let totalPrice = 0;
  let totalItems = 0;

    // Function to toggle cart visibility based on its emptiness
  function toggleCartVisibility() {
    if (totalItems === 0) {
        document.getElementById('cart').style.display = 'none';
        emptyCartMessage.style.display = 'block';
      } else {
        document.getElementById('cart').style.display = 'block';
        emptyCartMessage.style.display = 'none';
      }
  }


  // Loop through each clothing item and create a card for it
  clothingData.forEach(clothing => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      // Populate card HTML with clothing data
      card.innerHTML = `
          <div class="product-tumb">
              <img src="${clothing.image}" alt="${clothing.name}">
          </div>
          <div class="product-details">
              <span class="product-catagory">${clothing.tags.join(', ')}</span>
              <h4><a href="">${clothing.name}</a></h4>
              <p>${clothing.description}</p>
              <div class="product-bottom-details">
                  <div class="product-price"><small>$${clothing.price.toFixed(2)}</small></div>
                  <div class="product-links">
                      <button class="add-to-cart-btn" data-id="${clothing.id}" data-name="${clothing.name}" data-price="${clothing.price.toFixed(2)}">Add to Cart</button>
                  </div>
              </div>
          </div>
      `;

      // Append card to the container
      container.appendChild(card);
  });

  // Function to add an item to the cart
  function addToCart(id, name, price) {
      const existingItem = document.querySelector(`.cart-item[data-id="${id}"]`);
      if (existingItem) {
          const quantityInput = existingItem.querySelector('.quantity-input');
          const quantity = parseInt(quantityInput.value);
          quantityInput.value = quantity + 1;
      } else {
          const cartItem = document.createElement('tr');
          cartItem.classList.add('cart-item');
          cartItem.dataset.id = id;
          cartItem.innerHTML = `
              <td>${name}</td>
              <td>$${price}</td>
              <td><input type="number" class="quantity-input" value="1" min="1"></td>
              <td>$${price}</td>
              <td><button class="remove-btn">Remove</button></td>
          `;
          cartContainer.appendChild(cartItem);
      }
      totalPrice += parseFloat(price);
      totalItems++;
      updateTotal();
      updateAverage();
      toggleCartVisibility();
  }

  // Function to update total price in the cart
  function updateTotal() {
      document.querySelector('.total strong').textContent = `Total: $${totalPrice.toFixed(2)}`;
  }

  // Function to update average price in the cart
  function updateAverage() {
      const averagePrice = totalItems ? totalPrice / totalItems : 0;
      document.querySelector('.average strong').textContent = `Average Price: $${averagePrice.toFixed(2)}`;
  }

  // Event listener for adding items to the cart
  container.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-to-cart-btn')) {
          const id = event.target.dataset.id;
          const name = event.target.dataset.name;
          const price = event.target.dataset.price;
          addToCart(id, name, price);
      }
  });

  // Event listener for removing items from the cart
  cartContainer.addEventListener('click', function(event) {
      if (event.target.classList.contains('remove-btn')) {
          const item = event.target.closest('.cart-item');
          const price = parseFloat(item.querySelector('td:nth-child(2)').textContent.slice(1));
          const quantity = parseInt(item.querySelector('.quantity-input').value);
          totalPrice -= price * quantity;
          totalItems -= quantity;
          item.remove();
          updateTotal();
          updateAverage();
  toggleCartVisibility();
      }
  });

  // Function to clear the cart
  function clearCart() {
    cartContainer.innerHTML = ''; 
    totalPrice = 0;
    totalItems = 0; 
    updateTotal();
    updateAverage();
    toggleCartVisibility();
    
  }

  // Event listener for clearing the cart
  document.querySelector('.clear-btn').addEventListener('click', clearCart);

  // Function to sort items in the cart based on price
  function sortCartByPrice(order) {
    const items = Array.from(cartContainer.querySelectorAll('.cart-item'));
    items.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('td:nth-child(2)').textContent.slice(1));
        const priceB = parseFloat(b.querySelector('td:nth-child(2)').textContent.slice(1));
        return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
    cartContainer.innerHTML = '';
    items.forEach(item => {
        cartContainer.appendChild(item);
    });
  }

  // Event listener for sorting items in the cart
  document.getElementById('sort-by').addEventListener('change', function() {
    const sortBy = this.value;
    if (sortBy === 'price-low-to-high') {
        sortCartByPrice('asc');
    } else if (sortBy === 'price-high-to-low') {
        sortCartByPrice('desc');
    }
  });


    // Call toggleCartVisibility initially to set cart visibility based on initial cart state
    toggleCartVisibility();
});
