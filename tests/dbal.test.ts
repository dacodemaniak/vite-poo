import { MariaDbPickerStrategy } from './../src/dbal/strategy/mariadb-picker-strategy'
import { PostgresPickerStrategy } from './../src/dbal/strategy/postgres-picker-strategy'
import { DBAL } from './../src/dbal/dbal'

describe(`DBAL class hierarchy`, () => {
    it (`Should connect to MariaDB`, () => {
        // Sets the concrete strategy to use to connect to a RDBMS
        const strategy = new MariaDbPickerStrategy()

        // Instanciate an abstraction connection
        const dbal = new DBAL()

        // Agregate strategy
        dbal.setStrategy(strategy)

        // Do connection
        dbal.doConnect()

        const testString =  `
            Connect to mariadb
            On 127.0.0.1:3306
            with credentials : admin - t*****o
        `
        expect(dbal.doConnect()).toEqual(testString)
    })

    it (`Should connect to PostgreSQL`, () => {
        // Sets the concrete strategy to use to connect to a RDBMS
        const strategy = new PostgresPickerStrategy()

        // Instanciate an abstraction connection
        const dbal = new DBAL()

        // Agregate strategy
        dbal.setStrategy(strategy)

        // Do connection
        dbal.doConnect()

        const testString =  `
            Connect to postgresql
            On 127.0.0.1:45017
            with credentials : admin - t*****o
        `
        expect(dbal.doConnect()).toEqual(testString)
    })
})