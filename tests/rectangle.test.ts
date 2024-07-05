import { Rectangle } from './../src/geometric-shape/rectangle'

describe('Rectangle class', () => {
    it(`Should create an instance`, () => {
        const rectangle = new Rectangle()
        expect(rectangle)
            .toBeInstanceOf(Rectangle)
    })

    it(`Should have a 0 default length`, () => {
        const rectangle = new Rectangle()
        expect(rectangle.getLength()).toBe(0)
    })

    it('Should have a 15 length', () => {
        const rectangle = new Rectangle()
        rectangle.setLength(15)
        expect(rectangle.getLength()).toBe(15)
    })

    it('Should have a 5 width', () => {
        const rectangle = new Rectangle()
        rectangle.setWidth(5)
        expect(rectangle.getWidth()).toBe(5)
    })

    it (`Should give a 40 perimeter`, () => {
        const rectangle = new Rectangle()
        rectangle.setWidth(5)
        rectangle.setLength(15)
        expect(rectangle.perimeter()).toBe(40)
    })
})