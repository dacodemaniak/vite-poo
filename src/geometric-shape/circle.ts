import { Shape } from "./shape"

export class Circle extends Shape {
    private radius!: number

    setRadius(radius: number) {
        this.radius = radius
    }

    perimeter(): number {
        return (Math.PI * 2) * this.radius
    }

    toString(): string {
        return `Circle with radius of ${this.radius}`
    }
}