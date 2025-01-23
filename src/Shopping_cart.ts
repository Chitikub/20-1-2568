import { Lineitem } from './LineItem';
import { Product } from './Product';

export class Shopping_cart {
    calculateTotal(): number {
        return this.lineItem.reduce((total, item) => total + (item.getPrice() * item.getQuantity()), 0);
    }
    private created: string;
    private lineItem: Lineitem[] = [];

    constructor(created: string) {
        this.created = created;
    }

    public getCreate(): string {
        return this.created;
    }

    public getLineItem(): Lineitem[] {
        return this.lineItem;
    }

    public addLineItem(lineItem: Lineitem): void {
        this.lineItem.push(lineItem);
    }

    public toString(): string {
        return `ShoppingCart[Created: ${this.created}, LineItems: ${this.lineItem
            .map(item => `${item.getProduct().getname()} (Quantity: ${item.getQuantity()})`)
            .join(", ")}]`;
    }
}
