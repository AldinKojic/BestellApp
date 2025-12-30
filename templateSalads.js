function saladsTemplate(indexSalad) {
  return `
    
    
    <main class="content-area">
      <section class="meal-card">
       
      <img class="meal-picture"
       src="${salads[indexSalad].picture}" alt="${salads[indexSalad].alt}">
        <div class="meal-content">
          <h2 class="meal-headline">${salads[indexSalad].name}</h2>
          <p>${salads[indexSalad].ingredients}</p>
        </div>
        <div class="price-content">
          <div class="meal-price">
           
            <p>${salads[indexSalad].price.toFixed(2)}€</p>
          </div>
       <button onclick="addSaladToBasket(${indexSalad})" class="add-to-basket">Add to basket</button>
        </div>
      </section>
    </main>  
    
    `;
}
