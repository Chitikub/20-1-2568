"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
class Customer {
    constructor(WebUser, id, address, phone, email, account) {
        this.WebUser = WebUser;
        this.id = id;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.account = account;
    }
    getId() {
        return this.id;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getWebuser() {
        return this.WebUser;
    }
}
exports.Customer = Customer;
