var products = [
{
		name: "Pizza",
		vegetarian: false,
		glutenFree: false,
		both: false,
		organic: false,
		price: 15.00,
		category: 'Meats'
	},
	{
		name: "Chicken",
		vegetarian: false,
		glutenFree: true,
		both: false,
		organic: true,
		price: 12.00,
		category: 'Meats'
	},
	{
		name: "Salmon",
		vegetarian: false,
		glutenFree: true,
		bothh: false,
		organic: true,
		price: 10.00,
		category: 'Meats'
	},
	{
		name: "Cheese",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 5.50,
		category: 'Dairy'
	},
	{
		name: "Mango",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 4.00,
		category: 'Fruits'
	},
	{
		name: "Pickles",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 3.40,
		category: 'Vegetables'
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		both: false,
		organic: false,
		price: 2.35,
		category: 'Baked Goods'
	},
	{
		name: "Cashews",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 2.00,
		category: 'Nuts'
	},

		{
		name: "Brocoli",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: true,
		price: 1.99,
		category: 'Vegetables'
	},
		{
		name: "Cherries",
		vegetarian: true,
		glutenFree: true,
		both: true,
		organic: false,
		price: 1.25,
		category: 'Fruits'
	},
];

// let globalProducts = []


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

function parseProducts(prods, selection) {
	let filtered_prod = [];
	console.log(selection)
	for (let i=0; i<prods.length; i++) {
		if(selection == prods[i].category){
			filtered_prod.push(prods[i]);
		}
	}
	console.log(filtered_prod);
	return filtered_prod;
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
