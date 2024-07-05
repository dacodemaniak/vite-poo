import { AbstractConnect } from "./abstract-connect"

export class MariadbConnect extends AbstractConnect {
    constructor() {
        super() // Explicit call to super class (needed if constructor in child class)
        
        this._ipAddress = '127.0.0.1'
        this._port = 3306
        this._userPassword = 'toto'
        this._username = 'admin'
        this._dbName = 'mariadb'
    }

    public connect(): string {
        return this.toString()
    }
}