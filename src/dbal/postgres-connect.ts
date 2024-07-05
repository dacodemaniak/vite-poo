import { AbstractConnect } from "./abstract-connect";

export class PostgresConnect extends AbstractConnect {
    constructor() {
        super()

        this._ipAddress = '127.0.0.1'
        this._port = 45017
        this._userPassword = 'toto'
        this._username = 'admin'
        this._dbName = 'postgres'
    }

    public connect(): string {
        return this.toString()
    }
}