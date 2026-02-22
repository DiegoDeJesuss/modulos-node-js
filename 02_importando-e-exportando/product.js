class Product {
    constructor(id, name, price) {
        this.name = name;
        this.price = price;
        this.id = id;
    }
    
    getInfo() {
        return `ID do produto: ${this.id}, Nome do produto: ${this.name}, Preço do produto: R$${this.price}`;
    }   
}

function createProduct(id, name, price) {
    return new Product(id, name, price);
}

const productPrice = 1200;



module.exports = {
    createProduct,
    Product,
    productPrice,
};