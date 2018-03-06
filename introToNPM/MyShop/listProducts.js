var faker = require('faker');


console.log("================");
console.log("Welcome to shop.");
console.log("================");

for(var i = 0; i < 9; i++){
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}