function pizzaTemplate(indexMeal2) {
  return `
    
    
    <main class="content-area">
      <section class="meal-card">
       
      <img class="meal-picture"
       src="${pizzas[indexMeal2].picture}" alt="${pizzas[indexMeal2].alt}">
        <div class="meal-content">
          <h2 class="meal-headline">${pizzas[indexMeal2].name}</h2>
          <p>${pizzas[indexMeal2].ingredients}</p>
        </div>
        <div class="price-content">
          <div class="meal-price">
           
            <p>${pizzas[indexMeal2].price.toFixed(2)}€</p>
          </div>
        <button onclick="addPizzaToBasket(${indexMeal2})" class="add-to-basket">Add to basket</button>
        </div>
      </section>
    </main>  
    
    `;
}
