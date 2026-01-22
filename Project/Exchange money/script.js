const balanceAmount = document.querySelector(".balance p");
const descriptionE = document.querySelector("#descripton");
const amountE = document.querySelector("#amount");
const transListE = document.querySelector(".transaction-list");

const creditBtn = document.querySelector("#credit");
const debitBtn = document.querySelector("#debit");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Update balance
function updateBalance() {
  const total = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  balanceAmount.textContent = `₹${total.toFixed(2)}`;
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Add transaction to UI
function addToHistory(tx) {
  const li = document.createElement("li");
  li.setAttribute("data-id", tx.id);

  const sign = tx.amount < 0 ? "-" : "+";
  const typeClass = tx.amount < 0 ? "debit" : "credit";

  li.innerHTML = `
    <span class="transaction-description">${tx.description}</span>
    <span class="${typeClass}">
      ${sign} ₹${Math.abs(tx.amount).toFixed(2)}
    </span>
    <button class="delete-btn">❌</button>
  `;

  // Delete button
  li.querySelector(".delete-btn").addEventListener("click", () => {
    deleteTransaction(tx.id);
  });

  transListE.appendChild(li);
}

// Add new transaction
function addTransaction(type) {
  const desc = descriptionE.value.trim();
  const amount = parseFloat(amountE.value);

  if (desc === "" || isNaN(amount) || amount <= 0) {
    alert("Enter valid description and amount");
    return;
  }

  const finalAmount = type === "credit" ? amount : -amount;

  const newTx = {
    id: Date.now(),
    description: desc,
    amount: finalAmount,
  };

  transactions.push(newTx);
  addToHistory(newTx);
  updateBalance();

  descriptionE.value = "";
  amountE.value = "";
}

// Delete transaction
function deleteTransaction(id) {
  transactions = transactions.filter(tx => tx.id !== id);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  init();
}

// Button events
creditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTransaction("credit");
});

debitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addTransaction("debit");
});

// Init app
function init() {
  transListE.innerHTML = "";
  transactions.forEach(addToHistory);
  updateBalance();
}

init();
