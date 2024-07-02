"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var circle_builder_1 = require("./geometric-shape/builder/circle-builder");
var rectangle_builder_1 = require("./geometric-shape/rectangle-builder");
var Main = /** @class */ (function () {
    function Main() {
        this._run();
    }
    Main.prototype._run = function () {
        var builder = new rectangle_builder_1.RectangleBuilder()
            .setLength(15)
            .setWidth(5);
        try {
            var rectangle = builder.build();
            console.log("Rectangle was build with ".concat(rectangle.getLength(), " x ").concat(rectangle.getWidth()));
        }
        catch (error) {
            console.log("Unable to build a Rectangle");
        }
        // Just do it with Circle
        var circleBuilder = new circle_builder_1.CircleBuilder();
        circleBuilder.setRadius(5);
        try {
            var circle = circleBuilder.build();
            console.log(circle.toString());
        }
        catch (error) {
            console.error(error.message);
        }
    };
    return Main;
}());
// Bootstrap application
(function () {
    new Main();
})();
