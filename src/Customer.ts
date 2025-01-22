import { WebUser } from './WebUser';
import { Account } from './Account';
export class Customer{
    private account: Account;
    private WebUser: WebUser;
    private id: string;
    private address: string;
    private phone: number;
    private email: string
    constructor (WebUser:WebUser ,id:string, address:string, phone:number, email:string,account: Account) {
        this.WebUser = WebUser
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.account = account
    }
    public getId():string {
        return this.id;
    }
    public getAddress():string {
        return this.address;
    }
    public setAddress(address: string):void {
        this.address = address
    }
    public getPhone():number {
        return this.phone;
    }
    public setPhone(phone:number):void {
        this.phone = phone
    }
    public getEmail():string {
        return this.email
    }
    public setEmail(email:string):void {
        this.email = email
}
    public getWebuser():WebUser {
        return this.WebUser
    }
}
