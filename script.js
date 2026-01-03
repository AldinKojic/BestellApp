let orderJustPlaced = false;
let basket = [];
const deliveryFee = 4.99;

function init() {
  renderMeals();
}

function renderMeals() {
  const burger = document.getElementById("burger");
  const pizza = document.getElementById("pizza");
  const salad = document.getElementById("salad");
  burger.innerHTML = "";
  pizza.innerHTML = "";
  salad.innerHTML = "";

  for (let i = 0; i < meals.length; i++) {
    const meal = meals[i];
    const dishHTML = template(i, meal);

    if (meal.category === "burger") {
      burger.innerHTML += dishHTML;
    } else if (meal.category === "pizza") {
      pizza.innerHTML += dishHTML;
    } else if (meal.category === "salad") {
      salad.innerHTML += dishHTML;
    } else {
      console.warn("Unknown dish category");
    }
  }
}

function renderBasket() {
  const basketContent = document.getElementById("basket-content");
  basketContent.innerHTML = "";
  basket.forEach((item, i) => {
    basketContent.innerHTML +=  renderBasketItem(item, i)
  });
  updateBasketAlert();
  updateBasketAlertMobile()
}

function addToBasket(index) {
  const meal = meals[index];

  const existingItem = basket.find((item) => item.id === meal.id);
  if (existingItem) {
    existingItem.amount += 1;
  } else {
    basket.push({
      id: meal.id,
      name: meal.name,
      price: meal.price,
      amount: 1,
    });
  }
  renderTotals();
  renderBasket();
  renderTotalsMobile()
   renderBasketMobile()
   updateCartBadge() 
}

function changeAmount(index, delta) {
  basket[index].amount += delta;

  if (basket[index].amount <= 0) {
    basket.splice(index, 1);
  }
 renderTotals();
renderBasket();
renderTotalsMobile();
renderBasketMobile();
}

function renderTotals() {
  let subtotal = 0;
  for (let i = 0; i < basket.length; i++) {
    const item = basket[i];
    subtotal += item.price * item.amount;
  }
  let delivery;

  if (basket.length > 0) {
    delivery = deliveryFee;
  } else {
    delivery = 0;
  }

  let total = subtotal + delivery;

  document.getElementById("subtotal-value").innerHTML = `${subtotal.toFixed( 2 )}€`;
  document.getElementById("delivery-value").innerHTML = `${delivery.toFixed( 2 )}€`;
  document.getElementById("total-value").innerHTML = `${total.toFixed(2)}€`;
  document.getElementById("buy-now-button").innerHTML =
    "Buy now (" + total.toFixed(2) + "€)";
}

function orderConfirmed() {
  const alertBox = document.getElementById("basket-alert");
  if (basket.length === 0) {
    alertBox.innerHTML = warning();
    alertBox.classList.remove("hidden");
    return;
  }
  orderJustPlaced = true;
  alertBox.classList.add("hidden");
  alertBox.innerHTML = "";
  document.getElementById("order-modal").classList.remove("hidden");
}

function updateBasketAlert() {
  const alertBox = document.getElementById("basket-alert");
  alertBox.classList.add("hidden");
  alertBox.innerHTML = "";
}

function closeOrderModal() {
  document.getElementById("order-modal").classList.add("hidden");
  basket.length = 0;

  renderBasket();
  renderTotals();
   renderBasketMobile();
  renderTotalsMobile();
  updateCartBadge()
  orderJustPlaced = false;
}

function prevBubbiling(event) {
  event.stopPropagation();
}
