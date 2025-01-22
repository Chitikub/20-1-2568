"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, supplier) {
        this.id = id;
        this.name = name;
        this.supplier = supplier;
    }
    getid() {
        return this.id;
    }
    getname() {
        return this.name;
    }
    setname(name) {
        this.name = name;
    }
    getsupplier() {
        return this.supplier;
    }
    setsupplier(supplier) {
        this.supplier = supplier;
    }
    toString() {
        return `Product[ID = ${this.id},Name=${this.name},Supplier=${this.supplier}]`;
    }
}
exports.Product = Product;
