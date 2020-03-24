// JavaScript Document

// Function to get information from JSON
function loadAsset(url, type) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    /* Resolve and Reject information from
    https://developers.google.com/web/fundamentals/primers/promises#promisifying_xmlhttprequest
    */

    xhr.onload = function () {
      if (xhr.status == 200) {
        resolve(xhr.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = function () {
      reject(Error("Network Error"));
    }
    xhr.send();
  })
}


// Get the information then display to page
loadAsset('https://wilana.github.io/Comp1073L4/products.json', 'json').then(function (jsonObj) {
  let products = jsonObj.products;

  // Cycle thru the array of product objects
  for (let i = 0; i < products.length; i++) {

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
  }
}, function (error) {
  let errorH2 = document.createElement('h2');
  let errorPara1 = document.createElement('p');
  let errorPara2 = document.createElement('p');

  errorH2.textContent = 'Sorry!';
  errorPara1.textContent = 'It looks like we couldn\'t load this content.';
  errorPara2.textContent = 'Error: ' + error;

  let section = document.querySelector('section');
  section.appendChild(errorH2);
  section.appendChild(errorPara1);
  section.appendChild(errorPara2);


});
