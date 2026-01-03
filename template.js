function template(i, meals) {
  return `   
    <main class="content-area">
      <section class="meal-card">   
      <img class="meal-picture"
       src="${meals.picture}" alt="${meals.alt}">
        <div class="meal-content">
          <h2 class="meal-headline">${meals.name}</h2>
          <p>${meals.ingredients}</p>
        </div>
        <div class="price-content">
          <div class="meal-price">
            <p>${meals.price.toFixed(2)}€</p>
          </div>
          <button onclick="addToBasket(${i})" class="add-to-basket">Add to basket</button>
        </div>
      </section>
    </main>  
    
    `;
}

function renderBasketItem(item, i) {
  return ` 
          <div class="basket-content">
            <h5>${item.name}</h5>
             <div class="basket-item-meta">
          <button class="icon-btn" onclick="changeAmount(${i}, 1)">${item.amount }x</button>     
          <button class="icon-btn icon-btn" onclick="changeAmount(${i}, -1)" aria-label="Reduce amount">
            <img src="./img's/icons-lightmode/delete.png" alt="minus">
          </button>
          <p class="basket-price">${(item.price * item.amount).toFixed(2)}€</p>
        </div>
      </div>
          </div>
        `;
}

function warning() {
  return `
  <p class="modul-basket-warning" >Your basket is currently empty.</p>
  `;
}

function renderBasketItem(item, i) {
  return ` 
          <div class="basket-content">
            <h5>${item.name}</h5>
             <div class="basket-item-meta">
          <button class="icon-btn" onclick="changeAmount(${i}, 1)">${ item.amount }x</button>     
          <button class="icon-btn icon-btn" onclick="changeAmount(${i}, -1)" aria-label="Reduce amount">
            <img src="./img's/icons-lightmode/delete.png" alt="minus">
          </button>
          <p class="basket-price">${(item.price * item.amount).toFixed(2)}€</p>
        </div>
      </div>
          </div>
        `;
}

function warning() {
  return `
  <p class="modul-basket-warning" >Your basket is currently empty.</p>
  `;
}
