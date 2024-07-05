import { MariaDbPickerStrategy } from './../src/dbal/strategy/mariadb-picker-strategy'
import { DBAL } from './../src/dbal/dbal'

describe(`DBAL class hierarchy`, () => {
    it (`Should connect to MariaDB`, () => {
        const strategy = new MariaDbPickerStrategy()
        const dbal = new DBAL()
        dbal.setStrategy(strategy)
        dbal.doConnect()

        const testString =  `
            Connect to mariadb
            On 127.0.0.1:3306
            with credentials : admin - t*****o
        `
        expect(dbal.doConnect()).toEqual(testString)
    })
})