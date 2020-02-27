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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __importDefault(require("./Vector2"));
var Util = __importStar(require("./util"));
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
var AABB2D = (function () {
    function AABB2D(c, r) {
        this._c = c;
        this.rx = r[0];
        this.ry = r[1];
    }
    Object.defineProperty(AABB2D.prototype, "c", {
        get: function () { return this._c; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "width", {
        get: function () {
            return this.rx * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "height", {
        get: function () {
            return this.ry * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "p1", {
        get: function () {
            return new Vector2_1.default(this.c.x - this.rx, this.c.y + this.ry);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this.c.x + this.rx, this.c.y + this.ry);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this.c.x + this.rx, this.c.y - this.ry);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB2D.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(this.c.x - this.rx, this.c.y - this.ry);
        },
        enumerable: true,
        configurable: true
    });
    return AABB2D;
}());
exports.AABB2D = AABB2D;
var OBB2D = (function () {
    function OBB2D(c, r, angle) {
        this.rad = 0;
        this._c = c;
        this._r = new Vector2_1.default(r[0], r[1]);
        this.angle = angle;
    }
    Object.defineProperty(OBB2D.prototype, "c", {
        get: function () { return this._c; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "r", {
        get: function () { return this._r; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "rx", {
        get: function () { return this._r.x; },
        set: function (v) { this._r.x = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "ry", {
        get: function () { return this._r.y; },
        set: function (v) { this._r.y = v; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "angle", {
        get: function () { return Util.rad2deg(this.rad); },
        set: function (v) { this.rad = Util.deg2rad(v); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "width", {
        get: function () {
            return this.rx * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "height", {
        get: function () {
            return this.ry * 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "p1", {
        get: function () {
            return new Vector2_1.default(-this._r.x, this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this._r.x, this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this._r.x, -this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(-this._r.x, -this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "s1", {
        get: function () {
            return Vector2_1.default.sub(this.p2, this.p1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "s2", {
        get: function () {
            return Vector2_1.default.sub(this.p3, this.p2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "s3", {
        get: function () {
            return Vector2_1.default.sub(this.p4, this.p3);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OBB2D.prototype, "s4", {
        get: function () {
            return Vector2_1.default.sub(this.p1, this.p4);
        },
        enumerable: true,
        configurable: true
    });
    return OBB2D;
}());
exports.OBB2D = OBB2D;
