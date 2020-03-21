// JavaScript Document
let request = new XMLHttpRequest();
let url = 'https://wilana.github.io/Comp1073L4/products.json';

request.open('GET', url);
request.send();

request.onload = function () {
   let myObj = request.response;
	console.log(myObj)
  showProducts(myObj);
};





//let requestURL = 'wilana.github.io/Comp1073L4/products.json';
//let request = new XMLHttpRequest();
//request.open('GET', requestURL);
//request.responseType = 'json';
//request.send();
//
//// get response
//request.onload = function() {
//  let productsList = request.response;
//  showProducts(productsList);
//}

function showProducts(jsonObj) {
	let products = jsonObj["products"]; 
	
	
	for(let i = 0; i < products.length; i++){
    
    //build HTML elements for the content 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    let section = document.querySelector('section'); 
    img.setAttribute('src', 'https://wilana.github.io/Comp1073L4/images/' + products[i].image); 
    img.setAttribute('alt', products[i].image); 
    h2.textContent = products[i].name; 
    p1.textContent = 'Price ' + products[i].price;
    p2.textContent = 'Size ' + products[i].size;

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    section.appendChild(article);

  }
 
}


