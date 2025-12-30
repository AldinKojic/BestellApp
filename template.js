function template(i) {
  return `
    
    
    <main class="content-area">
      <section class="meal-card">
       
      <img class="meal-picture"
       src="${meals[i].picture}" alt="${meals[i].alt}">
        <div class="meal-content">
          <h2 class="meal-headline">${meals[i].name}</h2>
          <p>${meals[i].ingredients}</p>
        </div>
        <div class="price-content">
          <div class="meal-price">
           
            <p>${meals[i].price.toFixed(2)}€</p>
          </div>
          <button onclick="addToBasket(${i})" class="add-to-basket">Add to basket</button>
         
        </div>
      </section>
    </main>  
    
    `;
}


