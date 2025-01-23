"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(id, billing_address, is_closed, open, closed) {
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
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
}
exports.Account = Account;
