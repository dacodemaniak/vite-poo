import { CircleBuilder } from "./geometric-shape/builder/circle-builder"
import { Rectangle } from "./geometric-shape/rectangle"
import { RectangleBuilder } from "./geometric-shape/rectangle-builder"

class Main {
  constructor() {
    this._run()
  }

  private _run(): void {
    const builder = new RectangleBuilder()
      .setLength(15)
      .setWidth(5)
    try {
      const rectangle = builder.build()
      console.log(`Rectangle was build with ${rectangle.getLength()} x ${rectangle.getWidth()}`)
    } catch (error: any) {
      console.log(`Unable to build a Rectangle`)
    }

    // Just do it with Circle
    const circleBuilder = new CircleBuilder()
    circleBuilder.setRadius(5)
    const circle = circleBuilder.build()
    console.log(circle.toString())
  }
}

// Bootstrap application
(() => {
  new Main()
})()