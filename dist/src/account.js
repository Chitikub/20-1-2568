"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const Shopping_cart_1 = require("./Shopping_cart");
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.orders = [];
        this.payments = [];
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
        this.shoppingCart = new Shopping_cart_1.Shopping_cart("22-01-2025");
    }
    getid() {
        return this.id;
    }
    getbilling_address() {
        return this.billing_address;
    }
    setbilling_address(billing_address) {
        this.billing_address = billing_address;
    }
    getis_closed() {
        return this.is_closed;
    }
    setis_closed(is_closed) {
        this.is_closed = is_closed;
    }
    getopen() {
        return this.open;
    }
    setopen(open) {
        this.open = open;
    }
    getclosed() {
        return this.closed;
    }
    setclosed(closed) {
        this.closed = closed;
    }
    addOrders(order) {
        this.orders.push(order);
    }
    setPayment(payment) {
        this.payments.push(payment);
    }
    getpayments() {
        return this.payments;
    }
    getorders() {
        return this.orders;
    }
}
exports.Account = Account;
