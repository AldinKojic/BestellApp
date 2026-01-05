
function renderBasketMobile() {
  const basketContent = document.getElementById("basket-content-mobile");
  basketContent.innerHTML = "";

  basket.forEach((item, i) => {
    basketContent.innerHTML += renderBasketMobileItem(item, i);
  });

  const alertBox = document.getElementById("basket-alert-mobile");
  if (alertBox && basket.length > 0) {
    alertBox.classList.add("hidden");
    alertBox.innerHTML = "";
  }
}

function renderTotalsMobile() {
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

  document.getElementById("subtotal-value-mobile").innerHTML = `${subtotal.toFixed(2)}€`;
  document.getElementById("delivery-value-mobile").innerHTML = `${delivery.toFixed(2)}€`;
  document.getElementById("total-value-mobile").innerHTML = `${total.toFixed(2)}€`;

  document.getElementById("buy-now-button").innerHTML =
    "Buy now (" + total.toFixed(2) + "€)";
}

function openCart() {
  document.getElementById("mobile-cart").classList.remove("hidden");
  renderBasketMobile();
  renderTotalsMobile();
}

function orderConfirmedMobile() {
  const alertBox = document.getElementById("basket-alert-mobile");
  if (basket.length === 0) {
    alertBox.innerHTML = warningMobile();
    alertBox.classList.remove("hidden");
    return;
  }
  orderJustPlaced = true;
  alertBox.classList.add("hidden");
  alertBox.innerHTML = "";
  closeCart()
  document.getElementById("order-modal").classList.remove("hidden");
}

function updateBasketAlertMobile() {
  const alertBox = document.getElementById("basket-alert");
  alertBox.classList.add("hidden");
  alertBox.innerHTML = "";
}

function closeCart() {
  const alertBox = document.getElementById("basket-alert-mobile");
  if (alertBox) {
    alertBox.classList.add("hidden");
    alertBox.innerHTML = "";
  }
  document.getElementById("mobile-cart").classList.add("hidden");
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count-badge");
  if (!badge) return;

  let count = 0;
  for (let i = 0; i < basket.length; i++) {
    count += basket[i].amount;
  }

  if (count === 0) {
    badge.classList.add("hidden");
    badge.innerHTML = "0";
  } else {
    badge.classList.remove("hidden");
    badge.textContent = String(count);
  }
   if (count > 9) {
      badge.innerHTML = "9+";
    } else {
      badge.innerHTML = count;
    }
}