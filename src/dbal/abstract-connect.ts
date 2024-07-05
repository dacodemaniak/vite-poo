export abstract class AbstractConnect {
    protected _ipAddress: string = ''
    protected _port: number = 0
    protected _username: string = ''
    protected _userPassword: string = ''
    protected _dbName: string = ''

    public abstract connect(): string

    public toString(): string {
        return `
            Connect to ${this._dbName}
            On ${this._ipAddress}:${this._port}
            with credentials : ${this._username} - ${this._userPassword[0]}*****${this._userPassword[this._userPassword.length - 1]}
        `
    }
}