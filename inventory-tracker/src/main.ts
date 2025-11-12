import {Product} from "./models/Product";
import {PhysicalProduct} from "./models/PhysicalProduct";
import {DigitalProduct} from "./models/DigitalProduct";
// Create instances of both product types
const  phone  = new  PhysicalProduct("P123", "Iphone", 100.00, 24.25);
const  lapTop = new PhysicalProduct("P124","MacBook",1000.00, 32.00)
const  eBook  = new DigitalProduct("D123", "TypeScript Ebook Guide", 29.99, 15.8);
const musicApp = new DigitalProduct("D124","Apple Music",10.00,12.4)


const productList: Product[] = [phone,lapTop,eBook,musicApp];


productList.forEach((product)=>{
console.log(`The ${product.displayDetails()}`);
});

// console.log(phone.displayDetails());
// console.log(eBook.displayDetails());
// console.log(lapTop.displayDetails());
// console.log(musicApp.displayDetails());

