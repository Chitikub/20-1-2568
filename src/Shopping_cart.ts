import { Lineitem } from './LineItem';
export class Shopping_cart {
    private created: string;
    private lineItem: Lineitem [] = []
    constructor (created: string) {
        this.created = created
        this.lineItem
    } 
    public getCreate ():string {
        return this.created
    }
    public getLineItem():Lineitem[] {
        return this.lineItem
    }
    public addLineItem(lineItem:Lineitem):void {
        this.lineItem.push(lineItem)
    }
    public toString():string {
        return `ShoppingCard[created= ${this.created},Lineitem= ${this.lineItem}]`
    }
}