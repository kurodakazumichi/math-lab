"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __importDefault(require("./Vector2"));
var Line2D = (function () {
    function Line2D(p, v) {
        this._p = new Vector2_1.default(p.x, p.y);
        this._v = new Vector2_1.default(v.x, v.y);
    }
    Object.defineProperty(Line2D.prototype, "p", {
        get: function () { return this._p; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line2D.prototype, "v", {
        get: function () { return this._v; },
        enumerable: true,
        configurable: true
    });
    Line2D.prototype.getPoint = function (f) {
        return Vector2_1.default.add(this.p, this.v.normalize.times(f));
    };
    Line2D.prototype.getPoints = function (f) {
        var end = this.getPoint(f);
        return [this.p.x, this.p.y, end.x, end.y];
    };
    return Line2D;
}());
exports.Line2D = Line2D;
exports.Ray2D = Line2D;
var Segment2D = (function (_super) {
    __extends(Segment2D, _super);
    function Segment2D(p1, p2) {
        return _super.call(this, p1, p2) || this;
    }
    Object.defineProperty(Segment2D.prototype, "p1", {
        get: function () { return this.p; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Segment2D.prototype, "p2", {
        get: function () { return this.v; },
        enumerable: true,
        configurable: true
    });
    Segment2D.prototype.getEndPoint = function () {
        return Vector2_1.default.add(this.p1, this.p2);
    };
    Segment2D.prototype.getPoints = function () {
        return [this.p1.x, this.p1.y, this.p2.x, this.p2.y];
    };
    return Segment2D;
}(Line2D));
exports.Segment2D = Segment2D;
var Circle2D = (function () {
    function Circle2D(p, r) {
        this._p = new Vector2_1.default(p.x, p.y);
        this.r = r;
    }
    Object.defineProperty(Circle2D.prototype, "p", {
        get: function () { return this._p; },
        enumerable: true,
        configurable: true
    });
    return Circle2D;
}());
exports.Circle2D = Circle2D;
var Capsule2D = (function () {
    function Capsule2D(s, r) {
        this._s = new Segment2D(s.p1, s.p2);
        this.r = r;
    }
    Object.defineProperty(Capsule2D.prototype, "s", {
        get: function () { return this._s; },
        enumerable: true,
        configurable: true
    });
    return Capsule2D;
}());
exports.Capsule2D = Capsule2D;
