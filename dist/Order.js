"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oder = void 0;
const OrderStatus_1 = require("./OrderStatus");
class Oder {
    constructor(number, ordered, shipped, ship_to, status, total) {
        this.number = number;
        this.ordered = ordered;
        this.shipped = shipped;
        this.ship_to = ship_to;
        this.status = OrderStatus_1.OrderStatus.NEW;
        this.total = total;
    }
    getnumber() {
        return this.number;
    }
    getordered() {
        return this.ordered;
    }
    setorderDate(ordered) {
        this.ordered = ordered;
    }
    getshippedDate() {
        return this.shipped;
    }
    setshippedDate(shipped) {
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
        this.status;
    }
    gettotal() {
        return this.total;
    }
    settotal(total) {
        this.total = total;
    }
}
exports.Oder = Oder;
