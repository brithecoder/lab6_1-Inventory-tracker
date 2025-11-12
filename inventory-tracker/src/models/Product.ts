import * as tax from "../utils/taxCalulator";

export class Product {
   public  sku: string;
   public name: string;
   public price: number;
    static tax: number = 0;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
   displayDetails(this: Product): string {
        return `${this.name} costs $${this.price} and sku is: ${this.sku}?`;
        }
        
       getPriceWithTax(): number{
        return this.price * (Product.tax + 1) ;
       };
}
   






// displayDetails() - a method that returns a formatted string with the product’s details.
// getPriceWithTax() - a method that calculates the final price of the product with tax.


