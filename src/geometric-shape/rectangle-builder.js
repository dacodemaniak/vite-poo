"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RectangleBuilder = void 0;
var rectangle_1 = require("./rectangle");
var RectangleBuilder = /** @class */ (function () {
    function RectangleBuilder() {
    }
    RectangleBuilder.prototype.setLength = function (length) {
        this.length = length;
        return this;
    };
    RectangleBuilder.prototype.setWidth = function (width) {
        this.width = width;
        return this;
    };
    RectangleBuilder.prototype.build = function () {
        if (this._checkForPositiveValue() && this._checkForDifferentValue()) {
            var rectangle = new rectangle_1.Rectangle();
            rectangle.setLength(this.length);
            rectangle.setWidth(this.width);
            return rectangle;
        }
        throw new Error("Method not implemented.");
    };
    RectangleBuilder.prototype._checkForPositiveValue = function () {
        return this.width > 0 && this.length > 0;
    };
    RectangleBuilder.prototype._checkForDifferentValue = function () {
        return this.width != this.length;
    };
    return RectangleBuilder;
}());
exports.RectangleBuilder = RectangleBuilder;
