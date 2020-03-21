// JavaScript Document

// Access JSON file from github
let requestURL = 'https://wilana.github.io/Comp1073L4/products.json';
let request = new XMLHttpRequest();
// Receive data from the request URL
request.open('GET', requestURL);

// Access information and send to callback function
request.onload = function() {
  let productsList = JSON.parse(request.responseText);
  showProducts(productsList); 
};

request.send();



// Callback function: append the products on the page
function showProducts(jsonObj) {
	//the part of the JSON I want to display
	let products = jsonObj.products;

	// Cycle thru the array of product objects
	for(let i = 0; i < products.length; i++){

		//build HTML elements for the content
		let article = document.createElement('article');
		let h2 = document.createElement('h2');
		let img = document.createElement('img');
		let p1 = document.createElement('p');
		let details = document.createElement('div');
		let p2 = document.createElement('p');
		let p3 = document.createElement('p');
		
		// Where to put the content
		let section = document.querySelector('section');
		
		// Set-up HTML 
		img.setAttribute('src', products[i].image);
		img.setAttribute('alt', products[i].image);
		h2.textContent = products[i].name;
		p1.textContent = 'Price: ' + products[i].price;
		details.className = 'detailsSection'
		p2.textContent = 'Details: ';
		p2.className = 'detailsLabel';
		p3.textContent = products[i].details;
		p3.className = 'detailsContent';

		// Append everything on
		article.appendChild(img);
		article.appendChild(h2);
		article.appendChild(p1);
		details.appendChild(p2);
		details.appendChild(p3);
		article.appendChild(details);
		section.appendChild(article);
  } //end for loop (array of products)
}
