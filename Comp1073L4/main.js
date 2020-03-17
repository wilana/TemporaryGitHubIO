// JavaScript Document
let requestURL = 'https://wilana.github.io/Comp1073-L4/products.json';
// new XHR object, grabs things from the server without refresh 
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

request.onload = function() {
  let plentyPizza = request.response;
  console.log(plentyPizza); 
  pizzaTypes(plentyPizza); 
};

function pizzaTypes(jsonObj) {
  
  let pizzaTypes = jsonObj.pizzaTypes; 
  
  for(let i = 0; i < pizzaTypes.length; i++) {
    
    //build HTML elements for the content 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let ul = document.createElement('ul');

    let section = document.querySelector('section'); 
    img.setAttribute('src', 'https://jessicagilfillan.github.io/JSON/assets/' + pizzaTypes[i].image); 
    img.setAttribute('alt', pizzaTypes[i].image); 
    h2.textContent = pizzaTypes[i].name; 
    p1.textContent = 'Price ' + pizzaTypes[i].price;
    p2.textContent = 'Size ' + pizzaTypes[i].size;
    let toppings = pizzaTypes[i].toppings; 
    for (let j = 0; j < toppings.length; j++) {
      let listItem = document.createElement('li'); 
      listItem.textContent = toppings[j]; 
      ul.appendChild(listItem); 
    }
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(ul); 
    section.appendChild(article);

  }
 
}


