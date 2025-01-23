import { Product } from './Product';

export class Lineitem {
    private quantity: number;
    private price: number;
    private product: Product;

    constructor(quantity: number, price: number, product: Product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }

    public getQuantity(): number {
        return this.quantity;
    }

    public getPrice(): number {
        return this.price;
    }

    public getProduct(): Product {
        return this.product;
    }

    public toString(): string {
        return `LineItem[Product=${this.product.toString()}, Quantity=${this.quantity}, Price=${this.price}]`;
    }
}
