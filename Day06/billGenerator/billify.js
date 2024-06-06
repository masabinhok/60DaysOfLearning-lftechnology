//DOM elements
const hamBar = document.querySelectorAll(".ham-bar");
const items = document.querySelector(".js-bill-items");
// DOM elements
const descriptionInput = document.querySelector(".js-description");
const qtyInput = document.querySelector(".js-quantity");
const priceInput = document.querySelector(".js-price");
const totalValue = document.querySelector(".js-total");

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  hamBar.forEach((bar) => {
    bar.classList.contains("js-ham-bar")
      ? bar.classList.remove("js-ham-bar")
      : bar.classList.add("js-ham-bar");
  });
});

const billItems = localStorage.getItem("bill")
  ? JSON.parse(localStorage.getItem("bill"))
  : [];
renderItem();

document.querySelector(".js-add-items").addEventListener("click", () => {
  addItem();
});

function addItem() {
  const description = descriptionInput.value;
  const quantity = qtyInput.value;
  const priceInput = document.querySelector(".js-price");
  const price = priceInput.value;
  let total;
  total = quantity * price;
  billItems.push({
    description,
    quantity,
    price,
    total,
  });
  localStorage.setItem("bill", JSON.stringify(billItems));
  document.querySelector(".js-total").value = total;
  renderItem();
  console.log(billItems);
}

function renderItem() {
  let billHTML = ``;
  billItems.forEach((item) => {
    const description = item.description;
    const price = item.price;
    const quantity = item.quantity;
    const total = item.total;
    const html = `
    <div class="bill-items-render">
    <div class="description">${description}
      <img class="minus-icon js-minus-icon" src="img/minus-icon.png">
    </div>
    <div class="quantity">${quantity}</div>
    <div class="price">${price}</div>
    <div class="total">${total}</div>
   
    </div>
    `;
    billHTML += html;
  });

  document.querySelector(".js-bill-items-input").innerHTML = billHTML;

  descriptionInput.value = ``;
  qtyInput.value = ``;
  priceInput.value = ``;
  totalValue.value = ``;
}

//clear all button
const clearAll = document.querySelector(".js-clear-all");

clearAll.addEventListener("click", () => {
  localStorage.clear();
  billItems.length = 0;
  renderItem();
});




