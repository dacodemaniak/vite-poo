import { Rectangle } from './../src/geometric-shape/rectangle'

describe('Rectangle class', () => {
    it(`Should create an instance`, () => {
        const rectangle = new Rectangle()
        expect(rectangle).toBeInstanceOf(Rectangle)
    })
})