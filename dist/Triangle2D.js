"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Vector2_1 = __importDefault(require("./Vector2"));
var Type;
(function (Type) {
    Type[Type["None"] = 0] = "None";
    Type[Type["Right"] = 1] = "Right";
    Type[Type["Acute"] = 2] = "Acute";
    Type[Type["Obtuse"] = 3] = "Obtuse";
})(Type = exports.Type || (exports.Type = {}));
var Triangle2D = (function () {
    function Triangle2D(p) {
        if (p === void 0) { p = []; }
        var ax = p[0] ? p[0] : 0;
        var ay = p[1] ? p[1] : 0;
        var bx = p[2] ? p[2] : 0;
        var by = p[3] ? p[3] : 0;
        var cx = p[4] ? p[4] : 0;
        var cy = p[5] ? p[5] : 0;
        this._A = new Vector2_1.default(ax, ay);
        this._B = new Vector2_1.default(bx, by);
        this._C = new Vector2_1.default(cx, cy);
    }
    Object.defineProperty(Triangle2D.prototype, "A", {
        get: function () { return this._A; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "B", {
        get: function () { return this._B; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "C", {
        get: function () { return this._C; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "AB", {
        get: function () {
            return Vector2_1.default.sub(this.B, this.A);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "BC", {
        get: function () {
            return Vector2_1.default.sub(this.C, this.B);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "CA", {
        get: function () {
            return Vector2_1.default.sub(this.A, this.C);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "a", {
        get: function () {
            return this.BC.magnitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "b", {
        get: function () {
            return this.CA.magnitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "c", {
        get: function () {
            return this.AB.magnitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "sortedLength", {
        get: function () {
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var list = [a, b, c];
            list.sort(function (a, b) { return b - a; });
            return list;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "maxSideName", {
        get: function () {
            if (this.isInvalid)
                return "";
            var list = this.sortedLength;
            var _a = this, a = _a.a, c = _a.c;
            switch (list[0]) {
                case c: return "AB";
                case a: return "BC";
                default: return "CA";
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minSideName", {
        get: function () {
            if (this.isInvalid)
                return "";
            var list = this.sortedLength;
            var _a = this, a = _a.a, c = _a.c;
            switch (list[2]) {
                case c: return "AB";
                case a: return "BC";
                default: return "CA";
            }
        },
        enumerable: true,
        configurable: true
    });
    Triangle2D.prototype.getLengthAt = function (sideName) {
        switch (sideName) {
            case "BC": return this.a;
            case "CA": return this.b;
            case "AB": return this.c;
        }
        return 0;
    };
    Object.defineProperty(Triangle2D.prototype, "maxLength", {
        get: function () {
            return this.getLengthAt(this.maxSideName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minLength", {
        get: function () {
            return this.getLengthAt(this.minSideName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "maxCornerName", {
        get: function () {
            var side = this.maxSideName;
            switch (side) {
                case "BC": return "A";
                case "CA": return "B";
                case "AB": return "C";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerName", {
        get: function () {
            var side = this.minSideName;
            switch (side) {
                case "BC": return "A";
                case "CA": return "B";
                case "AB": return "C";
            }
            return "";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "cosA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var n = (Math.pow(b, 2)) + (Math.pow(c, 2)) - (Math.pow(a, 2));
            var d = 2 * b * c;
            var cos = n / d;
            return cos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "cosB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var n = (Math.pow(c, 2)) + (Math.pow(a, 2)) - (Math.pow(b, 2));
            var d = 2 * c * a;
            var cos = n / d;
            return cos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "cosC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var n = (Math.pow(a, 2)) + (Math.pow(b, 2)) - (Math.pow(c, 2));
            var d = 2 * a * b;
            var cos = n / d;
            return cos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "sinA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosA = this.cosA;
            var sin = Math.sqrt(1 - (Math.pow(cosA, 2)));
            return sin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "sinB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosB = this.cosB;
            var sin = Math.sqrt(1 - (Math.pow(cosB, 2)));
            return sin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "sinC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosC = this.cosC;
            var sin = Math.sqrt(1 - (Math.pow(cosC, 2)));
            return sin;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinA = _a.sinA, cosA = _a.cosA;
            return sinA / cosA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinB = _a.sinB, cosB = _a.cosB;
            return sinB / cosB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinC = _a.sinC, cosC = _a.cosC;
            return sinC / Number(cosC.toFixed(15));
        },
        enumerable: true,
        configurable: true
    });
    Triangle2D.prototype.getCosAt = function (cornerName) {
        switch (cornerName) {
            case "A": return this.cosA;
            case "B": return this.cosB;
            case "C": return this.cosC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2D.prototype, "maxCornerCos", {
        get: function () {
            return this.getCosAt(this.maxCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerCos", {
        get: function () {
            return this.getCosAt(this.minCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Triangle2D.prototype.getSinAt = function (cornerName) {
        switch (cornerName) {
            case "A": return this.sinA;
            case "B": return this.sinB;
            case "C": return this.sinC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2D.prototype, "maxCornerSin", {
        get: function () {
            return this.getSinAt(this.maxCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerSin", {
        get: function () {
            return this.getSinAt(this.minCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Triangle2D.prototype.getTanAt = function (connerName) {
        switch (connerName) {
            case "A": return this.tanA;
            case "B": return this.tanB;
            case "C": return this.tanC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2D.prototype, "maxCornerTan", {
        get: function () {
            return this.getTanAt(this.maxCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerTan", {
        get: function () {
            return this.getTanAt(this.minCornerName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosA = this.cosA;
            return Math.acos(cosA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosB = this.cosB;
            return Math.acos(cosB);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosC = this.cosC;
            return Math.acos(cosC);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "area", {
        get: function () {
            var _a = this, b = _a.b, c = _a.c, sinA = _a.sinA;
            return (b * c * sinA) * 0.5;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "outerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, sinA = _a.sinA;
            return a / (2 * sinA);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "innerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c, area = _a.area;
            return (2 * area) / (a + b + c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "center", {
        get: function () {
            if (this.isInvalid)
                return Vector2_1.default.zero;
            var _a = this, A = _a.A, B = _a.B, C = _a.C;
            var g = new Vector2_1.default().add(A).add(B).add(C).times(1 / 3);
            return g;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "outerCenter", {
        get: function () {
            if (this.isInvalid)
                return Vector2_1.default.zero;
            var _a = this, A = _a.A, B = _a.B, C = _a.C, radA = _a.radA, radB = _a.radB, radC = _a.radC;
            var sin2A = Math.sin(radA * 2);
            var sin2B = Math.sin(radB * 2);
            var sin2C = Math.sin(radC * 2);
            var center = A.clone().times(sin2A)
                .add(B.clone().times(sin2B))
                .add(C.clone().times(sin2C));
            var d = sin2A + sin2B + sin2C;
            return center.times(1 / d);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "innerCenter", {
        get: function () {
            if (this.isInvalid)
                return Vector2_1.default.zero;
            var _a = this, A = _a.A, B = _a.B, C = _a.C, a = _a.a, b = _a.b, c = _a.c;
            var center = A.clone().times(a)
                .add(B.clone().times(b))
                .add(C.clone().times(c));
            var d = 1 / (a + b + c);
            return center.times(d);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "isInvalid", {
        get: function () {
            var list = this.sortedLength;
            var a = list[0], b = list[1], c = list[2];
            return !(a < b + c);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "type", {
        get: function () {
            if (this.isInvalid)
                return Type.None;
            var list = this.sortedLength;
            var max = Number((Math.pow(list[0], 2)).toFixed(15));
            var mid = Number((Math.pow(list[1], 2)).toFixed(15));
            var min = Number((Math.pow(list[2], 2)).toFixed(15));
            if (max < mid + min)
                return Type.Acute;
            if (max > mid + min)
                return Type.Obtuse;
            return Type.Right;
        },
        enumerable: true,
        configurable: true
    });
    Triangle2D.prototype.toString = function () {
        var _a = this, A = _a.A, B = _a.B, C = _a.C;
        return "A" + A + ", B" + B + ", C" + C;
    };
    return Triangle2D;
}());
exports.default = Triangle2D;
