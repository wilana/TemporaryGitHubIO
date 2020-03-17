// JavaScript Document

// Create XHR object
let requestURL = 'https://wilana.github.io/Comp1073-L4/products.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();


// 3) function to access info from server with URL and callback function
request.onload = function() {
	let productsList = request.response;
	console.log(productsList);
	products(productsList);
}

// 4) Callback function to access info using jsonObj and displays
function products(jsonObj) {
	let products = jsonObj.products;
	
	for (let i = 0; i < products.length; i++) {
		//Elements to display product info
		let productDiv = document.createElement('div');
		let h2Name = document.createElement('h2');
		let img = document.createElement('img');
		let pricePara = document.createElement('p');
		let detailsPara = document.createElement('p');
		
		let parentDiv = document.getElementById('productsList');
		productDiv.className = 'productEntry';
		
		// update content of Elements with product info
		h2Name.textContent = products[i].name;
		img.setAttribute('src', 'https://wilana.github.io/Comp1073-L4/images/' + products[i].image);
		img.setAttribute('alt', products[i].image);
		pricePara.textContent = 'Price: ' + products[i].price;
		detailsPara.textContent = products[i].details;
		
		
		// add elements into product's div
		productDiv.appendChild(h2Name);
		productDiv.appendChild(img);
		productDiv.appendChild(pricePara);
		productDiv.appendChild(detailsPara);
		
		// add product div to the page
		parentDiv.appendChild(productDiv);
	}
}

// 5) invoke the function, pass the URL of json file and name of callback function


