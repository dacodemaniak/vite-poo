import { PostgresConnect } from "../postgres-connect";
import { DbPickerStrategyInterface } from "./db-picker-strategy.interface";

export class PostgresPickerStrategy implements DbPickerStrategyInterface {
    dbPicker(): PostgresConnect {
        return new PostgresConnect();
    }
}