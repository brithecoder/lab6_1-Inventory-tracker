
import {Product} from "../models/Product";

export class DigitalProduct extends Product{
    orgfileSize: number;


   constructor(sku: string,name: string, price: number, orgfileSize: number) {
        super(sku,name,price);
       this.orgfileSize =  orgfileSize;
    }
        
        get fileSize(): string{
            return `${this.orgfileSize.toFixed(2)} MB`;
        }
    
        getPriceWithTax(): number {
            // Digital products do not require tax, so the price remains the same.
            return this.price;
        }
        displayDetails(): string {
            return `${this.name} costs $${this.price} no tax required and is a digital download of ${this.fileSize}.`;
            }

}
