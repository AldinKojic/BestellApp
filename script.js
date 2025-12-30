
function renderMeals() {

let content =document.getElementById("content");
content.innerHTML ="";

for (let indexMeal = 0; indexMeal < meals.length; indexMeal++) {
    content.innerHTML += template(indexMeal);    
}
 
renderPizzas()
 renderSaldads()
 
}



 function renderPizzas() {

 let content =document.getElementById("pizza");
 content.innerHTML ="";

 for (let indexMeal2 = 0; indexMeal2 < pizzas.length; indexMeal2++) {
     content.innerHTML += pizzaTemplate(indexMeal2);    
}
 }

 
 function renderSaldads() {

 let content =document.getElementById("salads");
 content.innerHTML ="";

 for (let indexSalad = 0; indexSalad < salads.length; indexSalad++) {
     content.innerHTML += saladsTemplate(indexSalad);    
}
 }

let basket = [];

 function renderBasket(){
    const basketContent = document.getElementById("basket-content");
    basketContent.innerHTML=""
    basket.forEach(item  => {
        basketContent.innerHTML +=
        ` 
          <div class="basket-content">
            <h5>${item.name}</h5>
            <div class="basket-item-meta">
              <p class="basket-price">0</p>
              <p class="basket-price">${item.price.toFixed(2)}€</p>
            </div>
          </div>
        `
    });
 }

function addToBasket(index) {
  basket.push(meals[index]);
  renderBasket();
}
function addPizzaToBasket(indexMeal2) {
  basket.push(pizzas[indexMeal2]);
    renderBasket();
}

function addSaladToBasket(indexSalad) {
  basket.push(salads[indexSalad]);
    renderBasket();
}

