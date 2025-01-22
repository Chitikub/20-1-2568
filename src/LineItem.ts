import { Product } from './Product';
export class Lineitem {
    private quantity: number;
    private price: number;
    private product: Product
    constructor(quantity:number, price:number, product:Product) {
        this.quantity = quantity;
        this.price = price
        this.product= product
    }
    public getquantity():number {
        return this.quantity
    }
    public setquantity(quantity:number):void {
        this.quantity = quantity
    }
    public getprice():number {
        return this.price
    }
    public setprice(price:number):void {
        this.price = price
    }
    public getProduct():Product {
        return this.product 
    }
    public setProduct(product:Product):void {
        this.product = product
    }
    public toString():string {
        return `lineItem [Quantity= ${this.quantity},Price=${this.price},Product=${this.product.toString()}]`
    }
}