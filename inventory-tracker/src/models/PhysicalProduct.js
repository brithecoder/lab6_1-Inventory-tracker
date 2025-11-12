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
exports.PhysicalProduct = void 0;
// import {Product} from "../models/Product";
var Product_1 = require("../models/Product");
var PhysicalProduct = /** @class */ (function (_super) {
    __extends(PhysicalProduct, _super);
    function PhysicalProduct(sku, name, price, _weight) {
        var _this = _super.call(this, sku, name, price) || this;
        _this._weight = _weight;
        return _this;
    }
    Object.defineProperty(PhysicalProduct.prototype, "weight", {
        get: function () {
            return "".concat(this._weight.toFixed(2), " kg");
        },
        enumerable: false,
        configurable: true
    });
    PhysicalProduct.prototype.getPriceWithTax = function () {
        var taxAmount = this.price * PhysicalProduct.tax;
        return this.price + taxAmount;
    };
    PhysicalProduct.prototype.displayDetails = function () {
        return "".concat(this.name, " costs $").concat(this.price, " before tax and $").concat(this.getPriceWithTax(), " after tax and weight of product is ").concat(this.weight, " .");
    };
    PhysicalProduct.tax = 0.10;
    return PhysicalProduct;
}(Product_1.Product));
exports.PhysicalProduct = PhysicalProduct;
