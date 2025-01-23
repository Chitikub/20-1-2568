import { Order } from './Order';
import { Userstate } from './UserState';

export class WebUser {
    
    private login_id: string;
    private password: string;
    private state: Userstate;
    private order: Order[] = [];

    // Constructor to initialize the login_id, password, and set the state to NEW
    constructor(login_id: string, password: string) {
        this.login_id = login_id;
        this.password = password;
        this.state = Userstate.NEW;  // Default state is NEW
    }

    // Getter for login_id
    public getlogin_id(): string {
        return this.login_id;
    }

    // Setter for password
    public setpassword(password: string): void {
        this.password = password;
    }

    // Getter for state
    public getState(): Userstate {
        return this.state;
    }

    // Setter for state
    public setState(state: Userstate): void {
        this.state = state;
    }

    // Method to add an order
    public addOrder(order: Order): void {
        this.order.push(order);
    }

    // Method to get all orders
    public getOrders(): Order[] {
        return this.order;
    }

    // Method to convert WebUser to string
    public toString(): string {
        return `WebUser [username=${this.login_id}, orders=${this.order.map(order => order.toString()).join(", ")}]`;
    }
}
