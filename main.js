var viewCartButton = document.getElementsByClassName('view-cart')[0];
var clearCartButton = document.getElementsByClassName('clear-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];
//Cart Array Empty
var cart = [];
var total = 0;


viewCartButton.addEventListener('click', function () {
  //Ben
  // shoppingCart.classList.toggle("show");
  //Parsity
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

clearCartButton.addEventListener('click', function (e) {
  cart = [];
  total = 0;

  renderCart();
  renderTotal();
});

// //Detects when add to cart is clicked
// products.addEventListener('click', function (e) {
// // (e) is our event object
// console.log(e);
// //If its classlist contains add to cart contains is a DOM list method
// //In other words does this element(e) have this class this (addtocart)
//   if (e.target.classList.contains('add-to-cart')) {
//     console.log('clicked add to cart');
//   }
// });

//Now to Add items to CART
// To break down what we're trying to do in steps, we could say this:

//     1) The user clicks the "Add to Cart" button
//     2) We then extract the associated product's name and price
//     3) Using those attributes and values, we create individual product objects (plain ole' JavaScript objects)
//     4) We then push those product objects into a global cart array.
//     5) Finally, we'll somehow figure out how to take the raw data in our cart array and turn it into HTML on our page

// Make sense? So that puts us just before number 2 in the list above. This is what main.js should look like right now (we went ahead and added the cart array):

// products.addEventListener('click', function (e) {
//   if (e.target.classList.contains('add-to-cart')) {
//     // TODO: get value of product name
//     // TODO: get value of product price
//     // TODO: built object based on name and price
//     // TODO: push object into _cart_ array
//   }
// });

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    //Whatever item was click we want to grab the closes item
    //closest traverses up the dom for parents and FIND traverses down the dom for children
    //Also need to get attribute using that "getattribute" method
    var itemName = e.target.closest('.item').getAttribute('data-name');
    var itemPrice = e.target.closest('.item').getAttribute('data-price');
  
    //Making object with above values
    var product = {
      name: itemName,
      price: itemPrice
    }
    //pushing into the cart
    cart.push(product);
    total += parseInt(product.price);

    // debugger
    //As soon as we push products to cart we want call render car function
    renderCart();
    renderTotal();
  }
});

//Function to "render" the cart takes array and turns it to HTML
var renderCart = function () {
  // var total = document.getElementsByClassName('total')[0]
  // TODO: empty `.cart-list'  Think to how later our cart will have a bunch of items
  //This is that cart list div
  var cartList = document.getElementsByClassName('cart-list')[0];
//are there children to the cartlist node if so we want them out "loops through every child node"
  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }
  // TODO: loop through _cart_ and create new HTML based on our objects
  //Initializing to empty string ''
  var items = '';
//Using a for loop to the cart (could have used map or foreach or reduce)
//looping through and concat items to <div> tag
  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';
  }
//append items to cartList
cartList.innerHTML = items;
};

var renderTotal = function () {
  var totalElement = document.getElementsByClassName('total')[0];

  totalElement.innerHTML = total;
}