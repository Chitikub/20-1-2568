import { WebUser } from './WebUser';
<<<<<<< HEAD
import { Account } from './Account';
export class Customer{
    private account: Account;
=======
class Customer{
>>>>>>> ce45b4a1412775e0a9218636f25e1fcbf65fe19c
    private WebUser: WebUser;
    private id: string;
    private address: string;
    private phone: number;
    private email: string
<<<<<<< HEAD
    constructor (WebUser:WebUser ,id:string, address:string, phone:number, email:string,account: Account) {
=======
    constructor (WebUser:WebUser ,id:string, address:string, phone:number, email:string) {
>>>>>>> ce45b4a1412775e0a9218636f25e1fcbf65fe19c
        this.WebUser = WebUser
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
<<<<<<< HEAD
        this.account = account
=======
>>>>>>> ce45b4a1412775e0a9218636f25e1fcbf65fe19c
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
