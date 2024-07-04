import { Rectangle } from '../src/geometric-shape/rectangle'
import { RectangleBuilder } from './../src/geometric-shape/rectangle-builder'

describe(`Rectangle builder class`, () => {
    let builder: RectangleBuilder

    beforeEach(() => {
        builder = new RectangleBuilder()
    })

    it(`Should create an instance`, () => {
        expect(builder).toBeInstanceOf(RectangleBuilder)
    })

    it(`Should build a rectangle`, () => {
        builder.setLength(15)
        builder.setWidth(5)
        const rectangle = builder.build()
        expect(rectangle).toBeInstanceOf(Rectangle)
    })

    it(`Should raised an error if negative values was passed`, () => {
        builder.setLength(-15)
        builder.setWidth(5)

        expect(() => builder.build()).toThrow()
        
        builder.setLength(-15)
        builder.setWidth(-5)

        expect(() => builder.build()).toThrow()

        builder.setLength(15)
        builder.setWidth(-5)

        expect(() => builder.build()).toThrow()

    })

    it(`Should raised an error if width is same as length`, () => {
        builder.setLength(5)
        builder.setWidth(5)

        expect(() => builder.build()).toThrow()
    })

    it(`Should give a 15x5 rectangle`, () => {
        builder
            .setLength(15)
            .setWidth(5)
        const rectangle = builder.build()

        expect(rectangle.getLength()).toBe(15)
        expect(rectangle.getWidth()).toBe(5)
    })
})