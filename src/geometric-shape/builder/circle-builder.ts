import { Circle } from "../circle";
import { CircleBuilderInterface } from "./circle-builder-interface";

export class CircleBuilder implements CircleBuilderInterface {
    private radius!: number

    setRadius(radius: number): void {
        this.radius = radius
    }

    build(): Circle {
        if (this.radius > 0) {
            const circle = new Circle()
            circle.setRadius(this.radius)
            return circle
        }

        throw new Error(`Unable to build a circle with 0 or less radius dimension`)
    }
}