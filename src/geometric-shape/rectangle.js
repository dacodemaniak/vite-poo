"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        this.length = 0;
        this.width = 0;
    }
    // Getters
    Rectangle.prototype.getLength = function () {
        return this.length;
    };
    Rectangle.prototype.getWidth = function () {
        return this.width;
    };
    // Setters
    Rectangle.prototype.setLength = function (length) {
        this.length = length;
    };
    /**
     *
     * @param width
     * @returns void
     */
    Rectangle.prototype.setWidth = function (width) {
        this.width = width;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
