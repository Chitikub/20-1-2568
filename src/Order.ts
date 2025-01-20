
import { OrderStatus } from './OrderStatus';
import { Lineitem } from './LineItem';
export class Oder{
    private number: string;
    private ordered: string;
    private shipped: string;
    private ship_to: string;
    private status: string;
    private total: number;
    private lineItems:Lineitem [] = []
    constructor (number: string, ordered: string, shipped: string, ship_to: string, status: string, total: number) {
        this.number = number 
        this.ordered = ordered 
        this.shipped = shipped
        this.ship_to = ship_to
        this.status = OrderStatus.NEW
        this.total = 0
        this.lineItems = this.lineItems
    }
public calculateTotal():number {
    let totalPrice= 0
    for(let i = 0; i < this.lineItems.length; i++){
        totalPrice += this.lineItems[i].getprice() * this.lineItems[i].getquantity();
    }
    return totalPrice
}
    public getnumber():string {
        return this.number
    }
    public getordered():string {
        return  this.ordered
    }
    public setorderDate(ordered:string):void{
        this.ordered = ordered
    }
    public getshippedDate():string {
        return this.shipped
    }
    public setshippedDate(shipped:string):void {
        this.shipped = shipped
    }
    public getship_to():string {
        return this.ship_to
    }
    public setship_to(ship_to:string):void {
        this.ship_to = ship_to
    }
    public getstatus():string {
        return this.status
    }
    public setstatus(status:string):void{
        this.status
    }
    public gettotal():number {
        return this.total
    }
    public settotal(total:number):void {
        this.total = total
    }
    public toString():string {
        return `Order [number = ${this.number},Ordered=${this.ordered},Shipped=${this.shipped},Ship_to= ${this.ship_to},Status=${this.status},Total=${this,this.total}]`
    }
}