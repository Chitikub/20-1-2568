import { OrderStatus } from './OrderStatus';
import { Lineitem } from './LineItem';

export class Order {
    private number: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: string;
    private total: number;
    private lineItems: Lineitem[] = [];

    constructor(number: string, ordered: string, shipped: string, ship_to: string, status: string, total: number) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status || OrderStatus.NEW;
        this.total = total || 0;
    }

    public calculateTotal(): number {
        let totalPrice = 0;
        for (const item of this.lineItems) {
            totalPrice += item.getPrice() * item.getQuantity();
        }
        this.total = totalPrice;
        return totalPrice;
    }

    public addLineItem(item: Lineitem): void {
        this.lineItems.push(item);
    }

    public getnumber(): string {
        return this.number;
    }

    public getordered(): string {
        return this.ordered;
    }

    public setordered(ordered: string): void {
        this.ordered = ordered;
    }

    public getshipped(): string {
        return this.shipped;
    }

    public setshipped(shipped: string): void {
        this.shipped = shipped;
    }

    public getship_to(): string {
        return this.ship_to;
    }

    public setship_to(ship_to: string): void {
        this.ship_to = ship_to;
    }

    public getstatus(): string {
        return this.status;
    }

    public setstatus(status: string): void {
        this.status = status;
    }

    public gettotal(): number {
        return this.total;
    }

    public toString(): string {
        return `Order [number=${this.number}, ordered=${this.ordered}, shipped=${this.shipped}, ship_to=${this.ship_to}, status=${this.status}, total=${this.total}, lineItems=${this.lineItems
            .map(item => `${item.getProduct().getname()} (Quantity: ${item.getQuantity()}, Price: ${item.getPrice()})`)
            .join(", ")}]`;
    }
}
