"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    // Constructor to initialize the login_id, password, and set the state to NEW
    constructor(login_id, password) {
        this.order = [];
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.Userstate.NEW; // Default state is NEW
    }
    // Getter for login_id
    getlogin_id() {
        return this.login_id;
    }
    // Setter for password
    setpassword(password) {
        this.password = password;
    }
    // Getter for state
    getState() {
        return this.state;
    }
    // Setter for state
    setState(state) {
        this.state = state;
    }
    // Method to add an order
    addOrder(order) {
        this.order.push(order);
    }
    // Method to get all orders
    getOrders() {
        return this.order;
    }
    // Method to convert WebUser to string
    toString() {
        return `WebUser [username=${this.login_id}, orders=${this.order.map(order => order.toString()).join(", ")}]`;
    }
}
exports.WebUser = WebUser;
