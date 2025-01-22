export class Payment {
    private id: string;
    private paid: string;
    private total: number;
    private details: string;
    constructor (id:string, paid:string, total:number, details:string) {
        this.id = id;
        this.paid = paid;
        this.total = total;
        this.details = details;
    }
    public getid ():string {
        return this.id
    }
    public getpaid ():string {
        return this.paid
    }
    public setpaid(paid:string):void {
        this.paid = paid
    }
    public gettotal():number {
        return this.total
    }
    public settotal(total:number):void {
        this.total = total;
    }
    public getdetails ():string {
        return this.details
    }
    public setdetails(details:string):void {
        this.details = details
    }
    public toString():string {
        return `Payment=[ID= ${this.id},Paid= ${this.paid},Total${this.total},Details=${this.details}]`
    }
}