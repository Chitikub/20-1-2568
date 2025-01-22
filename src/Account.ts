import { Shopping_cart } from './Shopping_cart';
import { Order } from './Order';
import { Payment } from './payment';
export class Account{
    private id: string;
    private billing_address: string;
    private is_closed: boolean;
    private open: string;
    private closed: string;
    private orders: Order[] = []
    private shoppingCart: Shopping_cart
    private payments: Payment [] = []

    constructor (id: string,billing_address:string,is_closed:boolean,open:string,closed:string) {
        this.id = id;
        this.billing_address = billing_address; 
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.shoppingCart = new Shopping_cart ("22-01-2025");
        
    }
    public getid():string {
        return this.id;
    }
    public getbilling_address ():string {
        return this.billing_address;
    }
    public setbilling_address(billing_address:string):void {
        this.billing_address = billing_address
    }
    public getis_closed ():boolean {
        return this.is_closed;
    }
    public setis_closed(is_closed:boolean):void {
        this.is_closed =is_closed;
    }
    public getopen ():string {
        return this.open;
    }
    public setopen (open:string):void {
        this.open = open;
    }
    public getclosed ():string {
        return this.closed
    }
    public setclosed (closed:string):void {
        this.closed = closed
    }
    public addOrders(order:Order):void {
        this.orders.push(order)
    }
    public setPayment(payment:Payment):void {
        this.payments.push(payment)
    }
    public getpayments():Payment[]{
        return this.payments
    }
    public getorders():Order[] {
        return this.orders
    }
}
