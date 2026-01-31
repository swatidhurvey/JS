// ===== DATA =====
let products = JSON.parse(localStorage.getItem("products")) || [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ===== DOM =====
const productList = document.getElementById("productList");
const cartItems = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");
const adminPanel = document.getElementById("adminPanel");

// ===== STORAGE =====
function saveData() {
  localStorage.setItem("products", JSON.stringify(products));
  localStorage.setItem("cart", JSON.stringify(cart));
}

// ===== RENDER =====
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(p => {
    productList.innerHTML += `
      <div class="product">
        <b>${p.name}</b> - ₹${p.price}<br>
        <button onclick="addToCart(${p.id})">Add</button>
        <button onclick="deleteProduct(${p.id})">❌</button>
      </div>
    `;
  });
}

function renderCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    cartItems.innerHTML += `
      <div class="cart-item">
        ${item.name} x ${item.qty}
        <button onclick="removeFromCart(${item.id})">❌</button>
      </div>
    `;
  });

  totalSpan.innerText = total;
}

// ===== CART =====
function addToCart(id) {
  const product = products.find(p => p.id === id);
  const item = cart.find(i => i.id === id);

  if (item) item.qty++;
  else cart.push({ ...product, qty: 1 });

  saveData();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveData();
  renderCart();
}

// ===== ADMIN =====
function addProduct() {
  const name = document.getElementById("pname").value;
  const price = +document.getElementById("pprice").value;

  if (!name || !price) return;

  products.push({ id: Date.now(), name, price });
  saveData();
  renderProducts();
}

function deleteProduct(id) {
  products = products.filter(p => p.id !== id);
  saveData();
  renderProducts();
}

// ===== EVENTS =====
document.getElementById("adminBtn").onclick = () =>
  adminPanel.classList.toggle("hidden");

document.getElementById("addProductBtn").onclick = addProduct;

document.getElementById("checkoutBtn").onclick = () => {
  alert("Order Placed Successfully!");
  cart = [];
  saveData();
  renderCart();
};

// ===== INIT =====
renderProducts();
renderCart();
