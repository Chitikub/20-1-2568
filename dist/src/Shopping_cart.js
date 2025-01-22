"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shopping_cart = void 0;
class Shopping_cart {
    constructor(created) {
        this.lineItem = [];
        this.created = created;
        this.lineItem;
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
        return `ShoppingCard[created= ${this.created},Lineitem= ${this.lineItem}]`;
    }
}
exports.Shopping_cart = Shopping_cart;
