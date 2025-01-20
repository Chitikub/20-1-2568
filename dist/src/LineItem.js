"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lineitem = void 0;
class Lineitem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getquantity() {
        return this.quantity;
    }
    setquantity(quantity) {
        this.quantity = quantity;
    }
    getprice() {
        return this.price;
    }
    setprice(price) {
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    toString() {
        return `lineItem [Quantity= ${this.quantity},Price=${this.price},Product=${this.product.toString()}]`;
    }
}
exports.Lineitem = Lineitem;
