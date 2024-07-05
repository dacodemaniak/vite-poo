import { DbPickerStrategyInterface } from "./strategy/db-picker-strategy.interface";

export class DBAL {
    private _concreteStrategy!: DbPickerStrategyInterface

    public setStrategy(strategy: DbPickerStrategyInterface): void {
        this._concreteStrategy = strategy
    }

    public doConnect(): string {
        return this._concreteStrategy?.dbPicker().connect()
    }
}