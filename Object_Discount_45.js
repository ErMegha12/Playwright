let product = {
    name: "mobile",
    price: 15000,
    discount: 30
};
let finalPrice = product.price - (product.price * product.discount / 100);
console.log("Final price of the product is: " + finalPrice);
