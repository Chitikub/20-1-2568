"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lineitem = void 0;
class Lineitem {
    constructor(quantity, price, product) {
        this.quantity = quantity;
        this.price = price;
        this.product = product;
    }
    getQuantity() {
        return this.quantity;
    }
    getPrice() {
        return this.price;
    }
    getProduct() {
        return this.product;
    }
    toString() {
        return `LineItem[Product=${this.product.toString()}, Quantity=${this.quantity}, Price=${this.price}]`;
    }
}
exports.Lineitem = Lineitem;
