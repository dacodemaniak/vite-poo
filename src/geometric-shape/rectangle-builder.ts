import { Rectangle } from "./rectangle";
import { RectangleBuilderInterface } from "./rectangle-builder-interface";

export class RectangleBuilder implements RectangleBuilderInterface {
    private length!: number
    private width!: number
    
    setLength(length: number): RectangleBuilder {
        this.length = length
        return this
    }

    setWidth(width: number): RectangleBuilder {
        this.width = width
        return this
    }

    build(): Rectangle {
        if (this._checkForPositiveValue() && this._checkForDifferentValue()) {
            const rectangle = new Rectangle()
            rectangle.setLength(this.length)
            rectangle.setWidth(this.width)
            return rectangle
        }
        throw new Error("Method not implemented.");
    }

    private _checkForPositiveValue(): boolean {
        return this.width > 0 && this.length > 0
    }

    private _checkForDifferentValue(): boolean {
        return this.width != this.length
    }
    
}