"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhysicalProduct_1 = require("./models/PhysicalProduct");
var DigitalProduct_1 = require("./models/DigitalProduct");
// Create instances of both product types
var phone = new PhysicalProduct_1.PhysicalProduct("P123", "Iphone", 100.00, 24.25);
var lapTop = new PhysicalProduct_1.PhysicalProduct("P124", "MacBook", 1000.00, 32.00);
var eBook = new DigitalProduct_1.DigitalProduct("D123", "TypeScript Ebook Guide", 29.99, 15.8);
var musicApp = new DigitalProduct_1.DigitalProduct("D124", "Apple Music", 10.00, 12.4);
var productList = [phone, lapTop, eBook, musicApp];
productList.forEach(function (product) {
    console.log("The ".concat(product.displayDetails()));
});
// console.log(phone.displayDetails());
// console.log(eBook.displayDetails());
// console.log(lapTop.displayDetails());
// console.log(musicApp.displayDetails());
