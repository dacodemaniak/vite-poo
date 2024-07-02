"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.toString = function () {
        return "Circle with radius of ".concat(this.radius);
    };
    return Circle;
}());
exports.Circle = Circle;
