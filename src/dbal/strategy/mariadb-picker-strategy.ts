import { MariadbConnect } from "../mariadb-connect";
import { DbPickerStrategyInterface } from "./db-picker-strategy.interface";

export class MariaDbPickerStrategy implements DbPickerStrategyInterface {
    dbPicker(): MariadbConnect {
        return new MariadbConnect();
    }
}