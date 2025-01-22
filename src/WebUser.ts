import { Userstate } from './UserState';
export class WebUser {
    private login_id: string;
    private password: string;
    private state: Userstate;

    // Constructor to initialize the login_id, password, and set the state to NEW
    constructor(login_id: string, password: string) {
        this.login_id = login_id;
        this.password = password;
        this.state = Userstate.NEW;  // Default state is NEW
    }

    // Getter for login_id
    public getlogin_id(): string {
        return this.login_id;
    }

    // Setter for password
    public setpassword(password: string): void {
        this.password = password; // Corrected this line to set the password properly
    }

    // Getter for state
    public getState(): Userstate {
        return this.state;
    }

    // Setter for state
    public setState(state: Userstate): void {
        this.state = state;
    }

    // toString method to return a string representation of the object
    public toString(): string {
        return `ID: ${this.login_id}, State: ${this.state}`;
    }
}

// Enum for Userstate (Improved version using enum)
