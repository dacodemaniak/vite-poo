"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.length = 0;
        _this.width = 0;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.length + this.width) * 2;
    };
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
}(shape_1.Shape));
exports.Rectangle = Rectangle;
