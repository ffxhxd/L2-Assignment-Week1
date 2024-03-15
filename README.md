# Clothing Store
#LINK :  https://cerulean-chebakia-dd7c70.netlify.app/

Welcome to our clothing store! Browse through our collection of stylish clothing and add your favorites to the cart.

#Psuedo Code

1. Create a document with a DOCTYPE declaration for HTML5.
2. Define the HTML root element <html>.
3. Inside <html>, define the <head> element.
   a. Set character encoding to UTF-8.
   b. Add viewport meta tag for responsive design.
   c. Link an external stylesheet (style.css).
   d. Link Font Awesome for icons using a CDN.
   e. Set the document title.
4. Inside <head>, include closing tags for <meta>, <link>, and <title>.
5. Define the <body> element.
6. Inside <body>, create sections for Products and Cart.
   a. Each section should have a title and a description.
   b. Products section should include a container for product cards.
   c. Cart section should include a container for cart items and relevant buttons.
7. Include a <script> tag at the end of the <body> to link the JavaScript file (script.js).
8. Close the <body> and <html> tags.


1. Listen for the DOMContentLoaded event before executing any scripts.
2. Define mock data for clothing products in an array.
3. Initialize variables for total price and total items in the cart.
4. Get references to container elements for products and the cart.
5. Define functions for:
   a. Toggling cart visibility based on its emptiness.
   b. Adding items to the cart.
   c. Updating cart totals.
   d. Clearing the cart.
   e. Sorting items in the cart.
6. Populate product cards dynamically based on the mock data.
7. Implement event listeners for:
   a. Adding/removing items from the cart.
   b. Clearing the cart.
   c. Sorting items in the cart.
8. Call the function to toggle cart visibility initially to set cart visibility based on the initial cart state.
