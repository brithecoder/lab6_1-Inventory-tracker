
import {Product} from "../models/Product";

export class DigitalProduct extends Product{
    _fileSize: number;


   constructor(sku: string,name: string, price: number, _fileSize: number) {
        super(sku,name,price);
       this._fileSize =  _fileSize;
    }
        
        get fileSize(): string{
            return `${this._fileSize.toFixed(2)} MB`;
        }
    
        getPriceWithTax(): number {
            // Digital products do not require tax, so the price remains the same.
            return this.price;
        }
        displayDetails(): string {
            return `${this.name} costs $${this.price} no tax required and is a digital download of ${this.fileSize}.`;
            }

}
