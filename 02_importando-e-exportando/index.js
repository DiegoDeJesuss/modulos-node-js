const {createProduct, Product, productPrice} = require("./product");
require("./hello");

const product1 = createProduct(1, "Notebook", productPrice);
const product2 = new Product(2, "Smartphone", 800);


console.log(product1.getInfo());
console.log(product2.getInfo());

module .exports = {
    sayMyName: () => console.log("My name is Diego!")
}

