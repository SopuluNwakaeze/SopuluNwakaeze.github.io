// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [		
{
		name: "Pizza",
		vegetarian: false,
		glutenFree: false,
		both: false,
		organic: false,
		price: 15.00
	},		
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		both: false,
		organic: true,
		price: 12.00
	},


	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		bothh: false,
		organic: true,
		price: 10.00
	},





	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 5.50
	},		
	{
		name: "Mango",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 4.00
	},		
	{
		name: "Pickles",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 3.40
	},			
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		both: false,
		organic: false,
		price: 2.35
	},
	{
		name: "Cashews",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 2.00
	},

		{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 1.99
	},
		{
		name: "Cherries",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 1.25
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if((restriction == "Both") && (prods[i].both == true)){
			product_names.push(prods[i]);
		}
		if((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "Vegetarian") && (prods[i].vegetarian == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "GlutenFree") && (prods[i].glutenFree == true)){
			product_names.push(prods[i]);
		}
		else if (restriction == "None"){
			product_names.push(prods[i]);
		}
	}
	console.log(product_names);
	return product_names;

}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}