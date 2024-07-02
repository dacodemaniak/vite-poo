"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CircleBuilder = void 0;
var circle_1 = require("../circle");
var CircleBuilder = /** @class */ (function () {
    function CircleBuilder() {
    }
    CircleBuilder.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    CircleBuilder.prototype.build = function () {
        if (this.radius > 0) {
            var circle = new circle_1.Circle();
            circle.setRadius(this.radius);
            return circle;
        }
        throw new Error("Unable to build a circle with 0 or less radius dimension");
    };
    return CircleBuilder;
}());
exports.CircleBuilder = CircleBuilder;
