const faker = require("faker");

let welcome = `===================
WELCOME TO MY SHOP!
===================`;

console.log(welcome);
// make a loop to iterate 10 times
for (let i = 0; i < 10; i++) {
  console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}