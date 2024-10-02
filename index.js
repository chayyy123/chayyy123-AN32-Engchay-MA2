const storeName = "Marco Store"; //store name
const storeLocation = "Alabang"; //location
const storeCapacity = 100;

let name;
let price;
let quantity;

let products = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

let totalNumberProducts = 0; //eto all the number of products 

for (let product of products) {
    totalNumberProducts += product.quantity;
}

let totalInventoryValue = 0; //total inventory value dito 

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}

const addLaptop = 10;
products[0].quantity += addLaptop; //adding the new laptop here yung sampu 

let highestPriceProductName = "";
let highestPrice = 0;

for (let product of products) {
    if (product.price > highestPrice) {
        highestPrice = product.price;  // Update highest price
        highestPriceProductName = product.name;  // Update product name
    }
}

console.log("Store Name: ", storeName); //output
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", products[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);