export abstract class Shape {
    private color!: string

    abstract perimeter(): number

    public setColor(color: string): void {
        this.color = color
    }
}