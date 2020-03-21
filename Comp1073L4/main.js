// JavaScript Document
//
//let request = new XMLHttpRequest();
//let url = 'https://wilana.github.io/JSON/products.json';
//
//
//
//request.onload = function () {
//  let myObj = request.response;
////	console.log(myObj);
//	showProducts(myObj);
//};
//
//request.open('GET', url);
//request.send();


// JavaScript Document
let requestURL = 'https://wilana.github.io/JSON/products.json';
// new XHR object, grabs things from the server without refresh 
let request = new XMLHttpRequest();
// Receive data from the request URL
request.open('GET', requestURL);

request.onload = function() {
  let productsList = JSON.parse(request.responseText);
  alert(productsList[0]); 
  products(productsList); 
};

request.send();


function products(jsonObj) {
  
  let products = jsonObj.products; 
  
  for(let i = 0; i < products.length; i++) {
    
    //build HTML elements for the content 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let ul = document.createElement('ul');

    let section = document.querySelector('section'); 
    img.setAttribute('src', 'https://wilana.github.io/JSON/assets/' + products[i].image); 
    img.setAttribute('alt', products[i].image); 
    h2.textContent = products[i].name; 
    p1.textContent = 'Price ' + products[i].price;
    p2.textContent = 'Size ' + products[i].size;
    let toppings = products[i].toppings; 
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

//// Function to use as callback
//function showProducts(jsonObj) {
//	let products = jsonObj.products;
////	console.log(products);
//
//	for(let i = 0; i < products.length; i++){
//
//    //build HTML elements for the content
//    let article = document.createElement('article');
//    let h2 = document.createElement('h2');
//    let img = document.createElement('img');
//    let p1 = document.createElement('p');
//    let p2 = document.createElement('p');
//
//    let section = document.querySelector('section');
//    img.setAttribute('src', 'https://wilana.github.io/Comp1073L4/images/' + products[i].image);
//    img.setAttribute('alt', products[i].image);
//    h2.textContent = products[i].name;
//    p1.textContent = 'Price ' + products[i].price;
//    p2.textContent = 'Size ' + products[i].size;
//
//    article.appendChild(img);
//    article.appendChild(h2);
//    article.appendChild(p1);
//    article.appendChild(p2);
//    section.appendChild(article);
//
//  }
//
//}
