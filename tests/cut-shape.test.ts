import { Rectangle } from '../src/geometric-shape/rectangle'
import { Circle } from './../src/geometric-shape/circle'
import { Shape } from '../src/geometric-shape/shape'
describe(`Shape cutting`, () => {
    it('Should cut some shapes', () => {
        const circle = new Circle()
        circle.setRadius(5)

        const rectangle = new Rectangle()
        rectangle.setLength(15)
        rectangle.setWidth(5)

        const shapeList: Array<Shape> = []
        shapeList.push(rectangle)
        shapeList.push(circle)

        for (let shape of shapeList) {
            const perimeter = shape.perimeter()
        }
    })
})