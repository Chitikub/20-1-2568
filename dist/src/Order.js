"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Order {
    constructor(number, ordered, shipped, ship_to, status, total) {
        this.lineItems = [];
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = status || OrderStatus_1.OrderStatus.NEW;
        this.total = total || 0;
    }
    calculateTotal() {
        let totalPrice = 0;
        for (const item of this.lineItems) {
            totalPrice += item.getPrice() * item.getQuantity();
        }
        this.total = totalPrice;
        return totalPrice;
    }
    addLineItem(item) {
        this.lineItems.push(item);
    }
    getnumber() {
        return this.number;
    }
    getordered() {
        return this.ordered;
    }
    setordered(ordered) {
        this.ordered = ordered;
    }
    getshipped() {
        return this.shipped;
    }
    setshipped(shipped) {
        this.shipped = shipped;
    }
    getship_to() {
        return this.ship_to;
    }
    setship_to(ship_to) {
        this.ship_to = ship_to;
    }
    getstatus() {
        return this.status;
    }
    setstatus(status) {
        this.status = status;
    }
    gettotal() {
        return this.total;
    }
    toString() {
        return `Order [number=${this.number}, ordered=${this.ordered}, shipped=${this.shipped}, ship_to=${this.ship_to}, status=${this.status}, total=${this.total}, lineItems=${this.lineItems
            .map(item => `${item.getProduct().getname()} (Quantity: ${item.getQuantity()}, Price: ${item.getPrice()})`)
            .join(", ")}]`;
    }
}
exports.Order = Order;
