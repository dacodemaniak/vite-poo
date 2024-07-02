export class Rectangle {
    private length: number = 0
    private width: number = 0

    // Getters
    getLength(): number {
        return this.length
    }

    getWidth(): number {
        return this.width
    }

    // Setters
    setLength(length: number): void {
        this.length = length
    }

    /**
     * 
     * @param width 
     * @returns void
     */
    setWidth(width: number): void {
        this.width = width
    }
}