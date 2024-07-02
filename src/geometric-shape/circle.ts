export class Circle {
    private radius!: number

    setRadius(radius: number) {
        this.radius = radius
    }

    toString(): string {
        return `Circle with radius of ${this.radius}`
    }
}