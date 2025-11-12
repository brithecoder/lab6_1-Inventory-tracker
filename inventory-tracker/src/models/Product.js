"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    Product.prototype.displayDetails = function () {
        return "".concat(this.name, " costs $").concat(this.price, " and sku is: ").concat(this.sku, "?");
    };
    Product.prototype.getPriceWithTax = function () {
        return this.price * (Product.tax + 1);
    };
    ;
    Product.tax = 0;
    return Product;
}());
exports.Product = Product;
// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.
