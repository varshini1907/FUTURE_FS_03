const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

  document.getElementById("menu").scrollIntoView({
    behavior: "smooth"
  });

});


/* CART */

const cartItems = document.getElementById("cart-items");

const totalDisplay = document.getElementById("total");

const payBtn = document.getElementById("payBtn");

let total = 0;

let cartCount = 0;

function addToCart(product, price) {

  const li = document.createElement("li");

  li.textContent = `${product} - ₹${price}`;

  cartItems.appendChild(li);

  total += price;

  totalDisplay.textContent = total;

  cartCount++;

  document.getElementById("cart-count").textContent = cartCount;

  alert(`${product} added to cart 🛒`);

}


/* PAYMENT */

payBtn.addEventListener("click", () => {

  if (total === 0) {

    alert("Your cart is empty!");

  }

  else {

    alert(`Yayy! Order Successful 🎉
Total Payment: ₹${total}`);

    cartItems.innerHTML = "";

    total = 0;

    cartCount = 0;

    totalDisplay.textContent = total;

    document.getElementById("cart-count").textContent = cartCount;

  }

});