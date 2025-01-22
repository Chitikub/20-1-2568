"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebUser = void 0;
const UserState_1 = require("./UserState");
class WebUser {
    // Constructor to initialize the login_id, password, and set the state to NEW
    constructor(login_id, password) {
        this.login_id = login_id;
        this.password = password;
        this.state = UserState_1.Userstate.NEW; // Default state is NEW
    }
    // Getter for login_id
    getlogin_id() {
        return this.login_id;
    }
    // Setter for password
    setpassword(password) {
        this.password = password; // Corrected this line to set the password properly
    }
    // Getter for state
    getState() {
        return this.state;
    }
    // Setter for state
    setState(state) {
        this.state = state;
    }
    // toString method to return a string representation of the object
    toString() {
        return `ID: ${this.login_id}, State: ${this.state}`;
    }
}
exports.WebUser = WebUser;
// Enum for Userstate (Improved version using enum)
