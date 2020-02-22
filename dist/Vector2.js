"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = 0;
        this.y = 0;
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.equal = function (v) {
        return (this.x === v.x && this.y === v.y);
    };
    Vector2.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    };
    Vector2.prototype.sub = function (v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    };
    Vector2.prototype.times = function (k) {
        this.x *= k;
        this.y *= k;
        return this;
    };
    Object.defineProperty(Vector2.prototype, "magnitude", {
        get: function () {
            var _a = this, x = _a.x, y = _a.y;
            return Math.sqrt(x * x + y * y);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "normalize", {
        get: function () {
            var magnitude = this.magnitude;
            if (magnitude == 0)
                return Vector2.zero;
            var v = {
                x: this.x / magnitude,
                y: this.y / magnitude
            };
            return new Vector2(v.x, v.y);
        },
        enumerable: true,
        configurable: true
    });
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    Object.defineProperty(Vector2, "zero", {
        get: function () {
            return new Vector2(0, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2, "one", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2, "up", {
        get: function () {
            return new Vector2(0, 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2, "down", {
        get: function () {
            return new Vector2(0, -1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2, "left", {
        get: function () {
            return new Vector2(-1, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector2, "right", {
        get: function () {
            return new Vector2(1, 0);
        },
        enumerable: true,
        configurable: true
    });
    Vector2.add = function (v1, v2) {
        return v1.clone().add(v2);
    };
    Vector2.sub = function (v1, v2) {
        return v1.clone().sub(v2);
    };
    Vector2.times = function (v, k) {
        return v.clone().times(k);
    };
    Vector2.inverse = function (v) {
        return v.clone().times(-1);
    };
    Vector2.isZero = function (v) {
        return (v.x === 0 && v.y === 0);
    };
    Vector2.isParallel = function (v1, v2) {
        var t = v1.x * v2.y - v1.y * v2.x;
        return (t === 0);
    };
    Vector2.isVertical = function (v1, v2) {
        return (Vector2.dot(v1, v2) === 0);
    };
    Vector2.dot = function (v1, v2) {
        var dot = v1.x * v2.x + v1.y * v2.y;
        return dot;
    };
    Vector2.cross = function (v1, v2) {
        var cross = v1.x * v2.y - v2.x * v1.y;
        return cross;
    };
    Vector2.angle = function (v1, v2) {
        var nemu = Vector2.dot(v1, v2);
        var deno = v1.magnitude * v2.magnitude;
        var cos = nemu / deno;
        return Math.acos(cos);
    };
    return Vector2;
}());
exports.default = Vector2;
