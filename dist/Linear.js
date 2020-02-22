"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(require("./Util"));
var Linear = (function () {
    function Linear(a, b) {
        if (a === void 0) { a = 0; }
        if (b === void 0) { b = 0; }
        this._a = a;
        this._b = b;
    }
    Object.defineProperty(Linear.prototype, "a", {
        get: function () { return this._a; },
        set: function (v) { this._a = Util.unifySign(v); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Linear.prototype, "b", {
        get: function () { return this._b; },
        set: function (v) { this._b = Util.unifySign(v); },
        enumerable: true,
        configurable: true
    });
    Linear.prototype.fx = function (x) {
        if (this.isInvalid)
            return 0;
        var _c = this, a = _c.a, b = _c.b;
        return a * x + b;
    };
    Linear.prototype.initStandardForm = function (a, b) {
        this.a = a, this.b = b;
        return this;
    };
    Linear.prototype.initGeneralForm = function (A, B, C) {
        A;
        B;
        C;
        this.a = -A / B;
        this.b = C / B;
        return this;
    };
    Linear.prototype.initBySlopeAndPoint = function (a, x, y) {
        var b = y - a * x;
        this.a = a;
        this.b = b;
        return this;
    };
    Linear.prototype.initBy2Point = function (x1, y1, x2, y2) {
        var nume = y2 - y1;
        var deno = x2 - x1;
        var a = nume / deno;
        this.initBySlopeAndPoint(a, x1, y1);
        return this;
    };
    Object.defineProperty(Linear.prototype, "isInvalid", {
        get: function () {
            if (!Number.isFinite(this.a))
                return true;
            if (!Number.isFinite(this.b))
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Linear.prototype.isPerpWith = function (linear) {
        if (this.isInvalid)
            return false;
        if (linear.isInvalid)
            return false;
        return (this.a * linear.a === -1);
    };
    Object.defineProperty(Linear.prototype, "perpSlope", {
        get: function () {
            var slope = -(1 / this.a);
            return (Number.isFinite(slope)) ? slope : 0;
        },
        enumerable: true,
        configurable: true
    });
    Linear.prototype.toString = function () {
        return "y=" + this.a + "x+" + this.b;
    };
    Linear.intersect = function (a, b) {
        var result = {
            count: 0,
            points: []
        };
        var nume = b.b - a.b;
        var deno = a.a - b.a;
        var x = nume / deno;
        if (!Number.isFinite(x))
            return result;
        var y = a.fx(x);
        result.count = 1;
        result.points.push(x, y);
        return result;
    };
    return Linear;
}());
exports.default = Linear;
