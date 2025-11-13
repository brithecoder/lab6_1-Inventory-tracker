
// import {Product} from "../models/Product";
import { Product } from "../models/Product";

export class PhysicalProduct extends Product{
 
   static tax: number = 0.10;
   orgWeight: number;

    constructor(sku: string, name: string, price: number, orgWeight: number){
        super(sku,name,price);
        this.orgWeight = orgWeight;
    }
   
       
        get weight(): string {
            return `${this.orgWeight.toFixed(2)} kg`;
        }

        getPriceWithTax(): number {
            const taxAmount = this.price * PhysicalProduct.tax;
            return this.price + taxAmount;
        }
        displayDetails(): string {
            return `${this.name} costs $${this.price} before tax and $${this.getPriceWithTax()} after tax and weight of product is ${this.weight} .`;
            }
}
