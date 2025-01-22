export class Account{
    private id: string;
    private billing_address: string;
    private is_closed: string;
    private open: string;
    private closed: string;

    constructor (id: string,billing_address:string,is_closed:string,open:string,closed:string) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed
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
    public getis_closed ():string {
        return this.is_closed;
    }
    public setis_closed(is_closed:string):void {
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
}