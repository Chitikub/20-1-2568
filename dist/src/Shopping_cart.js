"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping_cart = void 0;
class Shopping_cart {
    calculateTotal() {
        return this.lineItem.reduce((total, item) => total + (item.getPrice() * item.getQuantity()), 0);
    }
    constructor(created) {
        this.lineItem = [];
        this.created = created;
    }
    getCreate() {
        return this.created;
    }
    getLineItem() {
        return this.lineItem;
    }
    addLineItem(lineItem) {
        this.lineItem.push(lineItem);
    }
    toString() {
        return `ShoppingCart[Created: ${this.created}, LineItems: ${this.lineItem
            .map(item => `${item.getProduct().getname()} (Quantity: ${item.getQuantity()})`)
            .join(", ")}]`;
    }
}
exports.Shopping_cart = Shopping_cart;
