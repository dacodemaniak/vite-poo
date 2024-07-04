import { Shape } from '../src/geometric-shape/shape'
import { Rectangle } from './../src/geometric-shape/rectangle'

describe(`Abstract Shape class`, () => {
    it(`Should be an instance of Shape`, () => {
        const rectangle: Shape = new Rectangle() as Shape // Casting
        expect(rectangle).toBeInstanceOf(Shape)
    })

    it(`Should be an instance of Rectangle`, () => {
        const rectangle = new Rectangle()
        rectangle.setColor('blue')
        expect(rectangle).toBeInstanceOf(Rectangle)
    })

    it(`Should have a perimeter of 40`, () => {
        const rectangle = new Rectangle()
        rectangle.setLength(15)
        rectangle.setWidth(5)

        expect(rectangle.perimeter()).toBe(40)
    })
})