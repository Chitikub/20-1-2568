import { WebUser } from './WebUser';
import { Account } from './account';

export class Customer {
    private account: Account;
    private webUser: WebUser;
    private id: string;
    private address: string;
    private phone: number;
    private email: string;

    constructor(webUser: WebUser, id: string, address: string, phone: number, email: string, account: Account) {
        this.webUser = webUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.account = account;
    }

    public getId(): string {
        return this.id;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public getPhone(): number {
        return this.phone;
    }

    public setPhone(phone: number): void {
        this.phone = phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public getWebUser(): WebUser {
        return this.webUser;
    }

    public getAccount(): Account {
        return this.account;
    }
}
