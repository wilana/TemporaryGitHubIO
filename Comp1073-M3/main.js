// JavaScript Document

//variable for discounted rate (20%)
let discountRate = 20;

/*
				----------
				| RENTAL |
				----------
	- Main class object
*/


// Rental has a name, price, rating out of 5 stars, location, total number of rooms on site, total number of rooms left to rent, and features
class Rental {
	constructor (_name, _price, _rating, _location, _rooms, _available, _features) {
		this.name = _name;
		this.price = _price;
		this.rating = _rating;
		this.location = _location;
		this.rooms = _rooms;
		this.available = _available;
		this.features = _features;
		
		// any Rental is assumed to be regular
		this.type = "normalRental";
		// keep any display information in a div.
		this.div = document.createElement("div");
		
	}
} //end rental



/*
				-----------
				| METHODS |
				-----------
		editing the prototype properties
*/


// DISPLAY: displays the rental
Rental.prototype.display = function () {
	//find nearest div to add rental to
	let _parentDiv;
	
	if (this.type === "specialRental") {
		_parentDiv = document.getElementById("specialRate");
		this.div.className = "rental specialRate";
	} 
	//super host property
	else if (this.type === "superRental") {
		_parentDiv = document.getElementById("superHost");
		this.div.className = "rental superHost";
	} 
	// normal rental
	else {
		_parentDiv = document.getElementById("normalRental");
		this.div.className = "rental normalRental";
	}
	
	let _h4 = document.createElement("h4");
	_h4.innerHTML = this.name;
	
	this.div.appendChild(_h4);
	_parentDiv.appendChild(this.div); 
}


//	DESCRIBE: includes a button to display or hide more information
Rental.prototype.describe = function () {
	
	// Create Elements to display
	let _p = document.createElement("p");
	_p.className = "description";
	let _description = this.name + " is a " + this.rooms + " room";
	
	
	//special rate rental (discounted)
	if (this.type === "specialRental") {
		_description = _description + ", discounted rental ";
	} 
	//super host property
	else if (this.type === "superRental") {
		_description = _description + " rental from one of our super hosts ";
	} 
	// normal rental
	else {
		_description = _description + " rental ";
	}
	
	_description = _description + " in " + this.location + " with " + this.features ;
	
	
	let _readButton = document.createElement("button");
	_readButton.innerHTML = "Read More";
	_readButton.className = "readButton"
	this.div.appendChild (_readButton);
	
	// button click changes visibility of description
	_readButton.addEventListener ("click", function() {
		if (_readButton.innerHTML === "Read More") {
			_readButton.innerHTML = "Read Less";
			_p.innerHTML = _description;
		}
		else {
			_readButton.innerHTML = "Read More";
			_p.innerHTML = "";
		}
	});
	
	//add paragraph and 
	this.div.appendChild(_p);
}


// CHECK AVAILABILITY: display if rooms are available, running low or all booked
Rental.prototype.checkAvailability = function() {
	let _p = document.createElement("p");
	let _availability = this.rooms - this.available;
	// all rooms are available
	if (this.available === this.rooms) {
		_availability = "Rooms still available!";
		_p.className = "alert availability";
	}
	else if (this.available <= 0) {
		_availability = "No rooms left.";
		_p.className = "alert noRooms availability";
	}
	else {
		_availability = "Only " + _availability + " rooms left!";
		_p.className = "alert lowRooms availability";
	}
	_p.innerHTML = _availability;
	this.div.insertBefore(_p, this.div.querySelector("button"));
};


/*
				--------------------
				| EXTENDED CLASSES |
				--------------------
*/

// A special rate rental property
class PromoRental extends Rental {
	constructor (name, price, rating, location, rooms, available, features) {
		super (name, price, rating, location, rooms, available, features);
		// a special rate to be taken off the original price
		this.type = "specialRental";
	}
}

// A super host rental property
class SuperRental extends Rental {
	constructor (name, price, rating, location, rooms, available, features) {
		super (name, price, rating, location, rooms, available, features);
		this.type = "superRental";
	}
}

/*
				----------------
				| MORE METHODS |
				----------------
*/

// REDUCE: calculate and reduce the price
PromoRental.prototype.reducePrice = function () {
	let _newPrice = (100 - discountRate) / 100 * this.price;
	
	let _priceDiv = document.createElement("div");
	_priceDiv.className = "promoPrice";
	let _oldPricePara = document.createElement("p");
	_oldPricePara.className = "oldPrice";
	let _newPricePara = document.createElement("p");
	_newPricePara.className = "newPrice";
	
	_oldPricePara.innerHTML = "$" + this.price;
	_newPricePara.innerHTML = "$" + _newPrice;
	
	_priceDiv.appendChild(_oldPricePara);
	_priceDiv.appendChild(_newPricePara);
	this.div.appendChild(_priceDiv);
}
  
// DISPLAY RATING: how many stars out of 5
SuperRental.prototype.displayRating = function () {
	let _p = document.createElement("p");
	_p.className = "rating";
	_p.innerHTML = "Rated " + this.rating + "/5 stars";
	this.div.appendChild(_p);
}
/*
				-------------
				| INSTANCES |
				-------------
				
*/

let theNott = new Rental ("Nottawasaga Inn Resort", 200.00, 3, "Alliston", 150, 150, "free Wi-Fi, flat-screen TVs and desks, plus tea and coffeemakers. Suites add in-room whirlpool baths and fireplaces; upgraded units feature balconies and separate living areas. The resort has mini putt and an indoor pool with slides.");
theNott.display();
theNott.describe();
theNott.checkAvailability();

let broBasement = new Rental ("My Brother's Basement", 20.00, 1, "Alliston", 1, 0, "close proximity to the laundry room. You could probably find a free snack or two.");
broBasement.display();
broBasement.describe();
broBasement.checkAvailability();

let redPine = new PromoRental ("Red Pine Inn", 100.00, 2, "Alliston", 92, 90, "a central location in New Tecumseth. It's only a 4-minute drive from Nottawasaga Inn Resort Golf Club and 7 minutes from Earl Rowe Provincial Park. <br /><br />On site amenities include free wifi, conference spaces and a new recreation centre!");
redPine.display();
redPine.describe();
redPine.checkAvailability();
redPine.reducePrice();

let stevensonBB = new SuperRental ("Stevenson Farms B&B", 85.00, 4.5, "Everett", 12, 0, "free full breakfast, free WiFi in public areas and free self parking. <br /><br />Other amenities include a meeting room, a garden and a banquet hall, a full-service spa, a bar/lounge and massage/treatment rooms upon request. All 6 rooms offer TVs with satellite channels, plus ironing boards.");
stevensonBB.display();
stevensonBB.describe();
stevensonBB.checkAvailability();
stevensonBB.displayRating();