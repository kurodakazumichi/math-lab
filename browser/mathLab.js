(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MathLab"] = factory();
	else
		root["MathLab"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Linear.ts":
/*!***********************!*\
  !*** ./src/Linear.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/util.ts"));
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Linear.prototype, "b", {
        get: function () { return this._b; },
        set: function (v) { this._b = Util.unifySign(v); },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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


/***/ }),

/***/ "./src/Primitive2D.ts":
/*!****************************!*\
  !*** ./src/Primitive2D.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBB = exports.AABB = exports.Capsule = exports.Circle = exports.Segment = exports.Ray = exports.Line = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Vector2 */ "./src/Vector2.ts"));
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/util.ts"));
var Line = (function () {
    function Line(p, v) {
        this._p = new Vector2_1.default(p.x, p.y);
        this._v = new Vector2_1.default(v.x, v.y);
    }
    Object.defineProperty(Line.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "v", {
        get: function () { return this._v; },
        enumerable: false,
        configurable: true
    });
    Line.prototype.getPoint = function (f) {
        return Vector2_1.default.add(this.p, this.v.normalize.times(f));
    };
    return Line;
}());
exports.Line = Line;
exports.Ray = Line;
var Segment = (function (_super) {
    __extends(Segment, _super);
    function Segment(p1, p2) {
        return _super.call(this, p1, p2) || this;
    }
    Object.defineProperty(Segment.prototype, "p1", {
        get: function () { return this.p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "p2", {
        get: function () { return this.v; },
        enumerable: false,
        configurable: true
    });
    Segment.prototype.getEndPoint = function () {
        return Vector2_1.default.add(this.p1, this.p2);
    };
    Segment.prototype.getPoints = function () {
        return [this.p1.x, this.p1.y, this.p2.x, this.p2.y];
    };
    return Segment;
}(Line));
exports.Segment = Segment;
var Circle = (function () {
    function Circle(p, r) {
        this._p = new Vector2_1.default(p.x, p.y);
        this.r = r;
    }
    Object.defineProperty(Circle.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
exports.Circle = Circle;
var Capsule = (function () {
    function Capsule(s, r) {
        this._s = new Segment(s.p1, s.p2);
        this.r = r;
    }
    Object.defineProperty(Capsule.prototype, "s", {
        get: function () { return this._s; },
        enumerable: false,
        configurable: true
    });
    return Capsule;
}());
exports.Capsule = Capsule;
var AABB = (function () {
    function AABB(c, r) {
        this._c = c;
        this.rx = r[0];
        this.ry = r[1];
    }
    Object.defineProperty(AABB.prototype, "c", {
        get: function () { return this._c; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "width", {
        get: function () {
            return this.rx * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "height", {
        get: function () {
            return this.ry * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "p1", {
        get: function () {
            return new Vector2_1.default(this.c.x - this.rx, this.c.y + this.ry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this.c.x + this.rx, this.c.y + this.ry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this.c.x + this.rx, this.c.y - this.ry);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(this.c.x - this.rx, this.c.y - this.ry);
        },
        enumerable: false,
        configurable: true
    });
    return AABB;
}());
exports.AABB = AABB;
var OBB = (function () {
    function OBB(c, r, angle) {
        this.rad = 0;
        this._c = c;
        this._r = new Vector2_1.default(r[0], r[1]);
        this.angle = angle;
    }
    Object.defineProperty(OBB.prototype, "c", {
        get: function () { return this._c; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "r", {
        get: function () { return this._r; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "rx", {
        get: function () { return this._r.x; },
        set: function (v) { this._r.x = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "ry", {
        get: function () { return this._r.y; },
        set: function (v) { this._r.y = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "angle", {
        get: function () { return Util.rad2deg(this.rad); },
        set: function (v) { this.rad = Util.deg2rad(v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "width", {
        get: function () {
            return this.rx * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "height", {
        get: function () {
            return this.ry * 2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "p1", {
        get: function () {
            return new Vector2_1.default(-this._r.x, this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this._r.x, this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this._r.x, -this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(-this._r.x, -this._r.y).rotate(this.rad).add(this.c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "s1", {
        get: function () {
            return Vector2_1.default.sub(this.p2, this.p1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "s2", {
        get: function () {
            return Vector2_1.default.sub(this.p3, this.p2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "s3", {
        get: function () {
            return Vector2_1.default.sub(this.p4, this.p3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(OBB.prototype, "s4", {
        get: function () {
            return Vector2_1.default.sub(this.p1, this.p4);
        },
        enumerable: false,
        configurable: true
    });
    return OBB;
}());
exports.OBB = OBB;


/***/ }),

/***/ "./src/Quadratic.ts":
/*!**************************!*\
  !*** ./src/Quadratic.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/util.ts"));
var Quadratic = (function () {
    function Quadratic() {
        this._a = 0;
        this._b = 0;
        this._c = 0;
        this._a = this._b = this._c = 0;
    }
    Object.defineProperty(Quadratic.prototype, "a", {
        get: function () { return Util.unifySign(this._a); },
        set: function (v) { this._a = Number(v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "b", {
        get: function () { return Util.unifySign(this._b); },
        set: function (v) { this._b = Number(v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "c", {
        get: function () { return Util.unifySign(this._c); },
        set: function (v) { this._c = Number(v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "p", {
        get: function () {
            return Util.unifySign(Quadratic.calcP_By_ab(this.a, this.b));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "q", {
        get: function () {
            return Util.unifySign(Quadratic.calcQ_By_abc(this.a, this.b, this.c));
        },
        enumerable: false,
        configurable: true
    });
    Quadratic.prototype.initGeneralForm = function (a, b, c) {
        this._a = a, this._b = b, this._c = c;
        return this;
    };
    Quadratic.prototype.initStandardForm = function (a, p, q) {
        this._a = a;
        this._b = Quadratic.calcB_By_ap(a, p);
        this._c = Quadratic.calcC_By_pq(a, p, q);
        return this;
    };
    Quadratic.prototype.initFactorizationForm = function (a, s, t) {
        this._a = a;
        this._b = Quadratic.calcB_By_ast(a, s, t);
        this._c = Quadratic.calcC_By_ast(a, s, t);
        return this;
    };
    Quadratic.prototype.initByApexAndPassPoint = function (p, q, x, y) {
        var a = Quadratic.calcA_By_pqxy(p, q, x, y);
        this.initStandardForm(a, p, q);
        return this;
    };
    Quadratic.prototype.initByAxisAnd2PassPoints = function (axisX, x1, y1, x2, y2) {
        var a = Quadratic.calcA_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
        var q = Quadratic.calcQ_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
        var p = axisX;
        this.initStandardForm(a, p, q);
        return this;
    };
    Quadratic.prototype.initBy3PassPoints = function (x1, y1, x2, y2, x3, y3) {
        var a = Quadratic.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        var b = Quadratic.calcB_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        var c = Quadratic.calcC_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        this.initGeneralForm(a, b, c);
        return this;
    };
    Quadratic.prototype.fx = function (x) {
        if (this.isInvalid)
            return 0;
        var _d = this, a = _d.a, p = _d.p, q = _d.q;
        return a * ((x - p) * (x - p)) + q;
    };
    Quadratic.prototype.getPoints = function (fromX, toX, step) {
        if (this.isInvalid)
            return [];
        var p = [];
        toX += step * 0.1;
        for (var x = fromX; x <= toX; x += step) {
            p.push(x, this.fx(x));
        }
        return p;
    };
    Quadratic.prototype.getPointsOfSlopeAtYTangent = function (fromX, toX) {
        if (this.isInvalid)
            return [];
        var y1 = this.b * fromX + this.c;
        var y2 = this.b * toX + this.c;
        return [fromX, y1, toX, y2];
    };
    Object.defineProperty(Quadratic.prototype, "apex", {
        get: function () {
            return { x: this.p, y: this.q };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "axis", {
        get: function () {
            return this.p;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "isInvalid", {
        get: function () {
            return !Quadratic.isValidA(this.a);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "hasApex", {
        get: function () {
            var _d = this, p = _d.p, q = _d.q;
            return Quadratic.hasApex(p, q);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "max", {
        get: function () {
            if (0 <= this.a)
                return undefined;
            return this.apex.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "min", {
        get: function () {
            if (this.a <= 0)
                return undefined;
            return this.apex.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "discriminant", {
        get: function () {
            var _d = this, a = _d.a, b = _d.b, c = _d.c;
            return Quadratic.discriminant(a, b, c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "solution", {
        get: function () {
            var _d = this, a = _d.a, b = _d.b, c = _d.c;
            return Quadratic.solution(a, b, c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "isPositiveDefinite", {
        get: function () {
            var _d = this, a = _d.a, b = _d.b, c = _d.c;
            return Quadratic.isPositiveDefinite(a, b, c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Quadratic.prototype, "isNegativeDefinite", {
        get: function () {
            var _d = this, a = _d.a, b = _d.b, c = _d.c;
            return Quadratic.isNegativeDefinite(a, b, c);
        },
        enumerable: false,
        configurable: true
    });
    Quadratic.prototype.toStringOfSlope = function (fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (this.isInvalid)
            return "なし";
        return this.a.toFixed(fixed);
    };
    Quadratic.prototype.toStringOfAxis = function (fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (!this.hasApex)
            return "なし";
        var axis = this.axis.toFixed(fixed);
        return "x=" + axis;
    };
    Quadratic.prototype.toStringOfApex = function (fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (!this.hasApex)
            return "なし";
        var x = this.apex.x.toFixed(fixed);
        var y = this.apex.y.toFixed(fixed);
        return "(" + x + ", " + y + ")";
    };
    Quadratic.prototype.toStringOfLatexAPQ = function (fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (this.isInvalid)
            return "none";
        var a = this.a.toFixed(fixed);
        var p = this.p.toFixed(fixed);
        var q = this.q.toFixed(fixed);
        return "$$y=" + a + "(x - (" + p + "))^2 + (" + q + ")$$";
    };
    Quadratic.prototype.toStringOfLatexABC = function (fixed) {
        if (fixed === void 0) { fixed = 1; }
        if (this.isInvalid)
            return "none";
        var a = this.a.toFixed(fixed);
        var b = this.b.toFixed(fixed);
        var c = this.c.toFixed(fixed);
        return "$$y=" + a + "x^2 + (" + b + ")x + (" + c + ")$$";
    };
    Quadratic.prototype.toStringAboutShape = function () {
        var a = this.a;
        if (this.isInvalid)
            return "";
        if (a < 0) {
            return "上に凸";
        }
        else {
            return "下に凸";
        }
    };
    Quadratic.prototype.toString = function () {
        var _d = this, a = _d.a, b = _d.b, c = _d.c, p = _d.p, q = _d.q;
        return "{a:" + a + ", b:" + b + ", c:" + c + ", p:" + p + ", q:" + q + "}";
    };
    Quadratic.calcP_By_ab = function (a, b) {
        return -b / (2 * a);
    };
    Quadratic.calcQ_By_abc = function (a, b, c) {
        return -((Math.pow(b, 2)) - (4 * a * c)) / (4 * a);
    };
    Quadratic.calcB_By_ap = function (a, p) {
        return -2 * a * p;
    };
    Quadratic.calcB_By_ast = function (a, s, t) {
        return (-a * t) + (-a * s);
    };
    Quadratic.calcC_By_pq = function (a, p, q) {
        return a * Math.pow(p, 2) + q;
    };
    Quadratic.calcC_By_ast = function (a, s, t) {
        return a * s * t;
    };
    Quadratic.calcA_By_pqxy = function (p, q, x, y) {
        var nume = y - q;
        var deno = Math.pow((x - p), 2);
        return nume / deno;
    };
    Quadratic.calcA_By_axixX_x1y1_x2y2 = function (axisX, x1, y1, x2, y2) {
        var nume = y1 - y2;
        var deno = (Math.pow((x1 - axisX), 2)) - (Math.pow((x2 - axisX), 2));
        return nume / deno;
    };
    Quadratic.calcQ_By_axixX_x1y1_x2y2 = function (axisX, x1, y1, x2, y2) {
        var a = this.calcA_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
        var q = y1 - (a * Math.pow((x1 - axisX), 2));
        return q;
    };
    Quadratic.calcA_By_x1y1_x2y2_x3y3 = function (x1, y1, x2, y2, x3, y3) {
        var nume = ((y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2));
        var deno = ((x1 - x2) * (x1 - x3) * (x2 - x3));
        return nume / deno;
    };
    Quadratic.calcB_By_x1y1_x2y2_x3y3 = function (x1, y1, x2, y2, x3, y3) {
        var a = this.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        var nume = y1 - y2 - (a * (Math.pow(x1, 2) - Math.pow(x2, 2)));
        var deno = x1 - x2;
        return nume / deno;
    };
    Quadratic.calcC_By_x1y1_x2y2_x3y3 = function (x1, y1, x2, y2, x3, y3) {
        var a = this.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        var b = this.calcB_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
        var c = y1 + (-a * (x1 * x1) - b * x1);
        return c;
    };
    Quadratic.discriminant = function (a, b, c) {
        return (Math.pow(b, 2)) - (4 * a * c);
    };
    Quadratic.solution = function (a, b, c) {
        var d = Quadratic.discriminant(a, b, c);
        if (a === 0)
            return undefined;
        if (d < 0)
            return [];
        var deno = 2 * a;
        var x1 = Util.unifySign((-b - Math.sqrt(d)) / deno);
        var x2 = Util.unifySign((-b + Math.sqrt(d)) / deno);
        if (d === 0)
            return [x1];
        return [Math.min(x1, x2), Math.max(x1, x2)];
    };
    Quadratic.isValidA = function (a) {
        if (a === 0)
            return false;
        if (isNaN(a))
            return false;
        if (Infinity == Math.abs(a))
            return false;
        return true;
    };
    Quadratic.hasApex = function (p, q) {
        if (isNaN(p) || isNaN(q))
            return false;
        if (Infinity === Math.abs(p))
            return false;
        if (Infinity === Math.abs(q))
            return false;
        return true;
    };
    Quadratic.isPositiveDefinite = function (a, b, c) {
        if (!Quadratic.isValidA(a))
            return false;
        if (a < 0)
            return false;
        var d = Quadratic.discriminant(a, b, c);
        return (d < 0);
    };
    Quadratic.isNegativeDefinite = function (a, b, c) {
        if (!Quadratic.isValidA(a))
            return false;
        if (0 < a)
            return false;
        var d = Quadratic.discriminant(a, b, c);
        return (d < 0);
    };
    Quadratic.intersect = function (a, b) {
        var result = {
            count: 0,
            points: []
        };
        if (a.isInvalid || b.isInvalid)
            return result;
        if (a.a - b.a === 0) {
            var nume = b.c - a.c;
            var deno = a.b - b.b;
            if (deno === 0)
                return result;
            var x = nume / deno;
            var y = a.fx(x);
            result.count = 1;
            result.points.push(x, y);
            return result;
        }
        var c = new Quadratic().initGeneralForm(a.a - b.a, a.b - b.b, a.c - b.c);
        var px = c.solution;
        if (px === undefined || px.length === 0)
            return result;
        px.map(function (x) {
            result.count++;
            result.points.push(x, a.fx(x));
        });
        return result;
    };
    return Quadratic;
}());
exports.default = Quadratic;


/***/ }),

/***/ "./src/Triangle2D.ts":
/*!***************************!*\
  !*** ./src/Triangle2D.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Vector2 */ "./src/Vector2.ts"));
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "B", {
        get: function () { return this._B; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "C", {
        get: function () { return this._C; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "AB", {
        get: function () {
            return Vector2_1.default.sub(this.B, this.A);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "BC", {
        get: function () {
            return Vector2_1.default.sub(this.C, this.B);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "CA", {
        get: function () {
            return Vector2_1.default.sub(this.A, this.C);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "a", {
        get: function () {
            return this.BC.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "b", {
        get: function () {
            return this.CA.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "c", {
        get: function () {
            return this.AB.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "sortedLength", {
        get: function () {
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var list = [a, b, c];
            list.sort(function (a, b) { return b - a; });
            return list;
        },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minLength", {
        get: function () {
            return this.getLengthAt(this.minSideName);
        },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinA = _a.sinA, cosA = _a.cosA;
            return sinA / cosA;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinB = _a.sinB, cosB = _a.cosB;
            return sinB / cosB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "tanC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinC = _a.sinC, cosC = _a.cosC;
            return sinC / Number(cosC.toFixed(15));
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerCos", {
        get: function () {
            return this.getCosAt(this.minCornerName);
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerSin", {
        get: function () {
            return this.getSinAt(this.minCornerName);
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "minCornerTan", {
        get: function () {
            return this.getTanAt(this.minCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosA = this.cosA;
            return Math.acos(cosA);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosB = this.cosB;
            return Math.acos(cosB);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "radC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosC = this.cosC;
            return Math.acos(cosC);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "area", {
        get: function () {
            var _a = this, b = _a.b, c = _a.c, sinA = _a.sinA;
            return (b * c * sinA) * 0.5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "outerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, sinA = _a.sinA;
            return a / (2 * sinA);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "innerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c, area = _a.area;
            return (2 * area) / (a + b + c);
        },
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2D.prototype, "isInvalid", {
        get: function () {
            var list = this.sortedLength;
            var a = list[0], b = list[1], c = list[2];
            return !(a < b + c);
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Triangle2D.prototype.toString = function () {
        var _a = this, A = _a.A, B = _a.B, C = _a.C;
        return "A" + A + ", B" + B + ", C" + C;
    };
    return Triangle2D;
}());
exports.default = Triangle2D;


/***/ }),

/***/ "./src/Vector2.ts":
/*!************************!*\
  !*** ./src/Vector2.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sqrMagnitude", {
        get: function () {
            var _a = this, x = _a.x, y = _a.y;
            return x * x + y * y;
        },
        enumerable: false,
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
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "rad", {
        get: function () {
            var _a = this, x = _a.x, y = _a.y;
            var rad = Math.atan(y / x);
            if (rad < 0 && x < 0 || 0 < rad && y < 0) {
                return rad + Math.PI;
            }
            if (rad < 0 && 0 < x) {
                return rad + 2 * Math.PI;
            }
            return rad;
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.rotate = function (rad) {
        var _a = this, x = _a.x, y = _a.y;
        this.x = x * Math.cos(rad) - y * Math.sin(rad);
        this.y = x * Math.sin(rad) + y * Math.cos(rad);
        return this;
    };
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.lerp = function (to, t) {
        var v = Vector2.sub(to, this);
        this.add(v.times(t));
    };
    Vector2.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    Object.defineProperty(Vector2, "zero", {
        get: function () {
            return new Vector2(0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "one", {
        get: function () {
            return new Vector2(1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "up", {
        get: function () {
            return new Vector2(0, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "down", {
        get: function () {
            return new Vector2(0, -1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "left", {
        get: function () {
            return new Vector2(-1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2, "right", {
        get: function () {
            return new Vector2(1, 0);
        },
        enumerable: false,
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
        var t = Vector2.cross(v1, v2);
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
    Vector2.distance = function (v1, v2) {
        return Vector2.sub(v1, v2).magnitude;
    };
    Vector2.lerp = function (v1, v2, t) {
        return v1.clone().lerp(v2, t);
    };
    return Vector2;
}());
exports.default = Vector2;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Primitive2D = exports.Triangle2D = exports.Quadratic = exports.Linear = exports.Vector2 = exports.Util = void 0;
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/util.ts"));
exports.Util = Util;
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Vector2 */ "./src/Vector2.ts"));
exports.Vector2 = Vector2_1.default;
var Quadratic_1 = __importDefault(__webpack_require__(/*! ./Quadratic */ "./src/Quadratic.ts"));
exports.Quadratic = Quadratic_1.default;
var Linear_1 = __importDefault(__webpack_require__(/*! ./Linear */ "./src/Linear.ts"));
exports.Linear = Linear_1.default;
var Triangle2D_1 = __importDefault(__webpack_require__(/*! ./Triangle2D */ "./src/Triangle2D.ts"));
exports.Triangle2D = Triangle2D_1.default;
var Primitive2D = __importStar(__webpack_require__(/*! ./Primitive2D */ "./src/Primitive2D.ts"));
exports.Primitive2D = Primitive2D;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.cramp = exports.round = exports.rad2deg = exports.deg2rad = exports.unifySign = void 0;
exports.unifySign = function (a) {
    if (a === 0)
        return 0;
    return a;
};
exports.deg2rad = function (d) {
    return Math.PI / 180 * d;
};
exports.rad2deg = function (r) {
    return 180 / Math.PI * r;
};
exports.round = function (num, fixed) {
    if (fixed === void 0) { fixed = 1; }
    var fix = Math.pow(10, fixed);
    return Math.round(num * fix) / fix;
};
exports.cramp = function (no, min, max) {
    no = Math.min(no, max);
    no = Math.max(no, min);
    return no;
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTGluZWFyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvUHJpbWl0aXZlMkQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9RdWFkcmF0aWMudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9UcmlhbmdsZTJELnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQyw2QkFBUTtBQUN4QztBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RIYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCLHNDQUFzQyxpQkFBaUIsRUFBRTtBQUN2Riw2QkFBNkIsdURBQXVEO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsNkJBQVE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsRUFBRTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGVBQWUsRUFBRTtBQUMzQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRTtBQUM5QywyQkFBMkIsZUFBZSxFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUMsMkJBQTJCLGVBQWUsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLCtCQUErQixFQUFFO0FBQzNELDJCQUEyQiw0QkFBNEIsRUFBRTtBQUN6RDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDblJhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFnRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOVhhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQTJDO0FBQzVDO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWMsRUFBRTtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzFMYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNkJBQVE7QUFDeEM7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsaUNBQVU7QUFDakQ7QUFDQSxtQ0FBbUMsbUJBQU8sQ0FBQyx5Q0FBYztBQUN6RDtBQUNBLCtCQUErQixtQkFBTyxDQUFDLDJDQUFlO0FBQ3REOzs7Ozs7Ozs7Ozs7O0FDcENhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1hdGhMYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNYXRoTGFiXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1hdGhMYWJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIExpbmVhciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lYXIoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSB2b2lkIDApIHsgYSA9IDA7IH1cclxuICAgICAgICBpZiAoYiA9PT0gdm9pZCAwKSB7IGIgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IGI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2E7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9hID0gVXRpbC51bmlmeVNpZ24odik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcImJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fYjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2IgPSBVdGlsLnVuaWZ5U2lnbih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5meCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB2YXIgX2MgPSB0aGlzLCBhID0gX2MuYSwgYiA9IF9jLmI7XHJcbiAgICAgICAgcmV0dXJuIGEgKiB4ICsgYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRTdGFuZGFyZEZvcm0gPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHRoaXMuYSA9IGEsIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0R2VuZXJhbEZvcm0gPSBmdW5jdGlvbiAoQSwgQiwgQykge1xyXG4gICAgICAgIEE7XHJcbiAgICAgICAgQjtcclxuICAgICAgICBDO1xyXG4gICAgICAgIHRoaXMuYSA9IC1BIC8gQjtcclxuICAgICAgICB0aGlzLmIgPSBDIC8gQjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeVNsb3BlQW5kUG9pbnQgPSBmdW5jdGlvbiAoYSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBiID0geSAtIGEgKiB4O1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeTJQb2ludCA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBudW1lID0geTIgLSB5MTtcclxuICAgICAgICB2YXIgZGVubyA9IHgyIC0geDE7XHJcbiAgICAgICAgdmFyIGEgPSBudW1lIC8gZGVubztcclxuICAgICAgICB0aGlzLmluaXRCeVNsb3BlQW5kUG9pbnQoYSwgeDEsIHkxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLmEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMuYikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaXNQZXJwV2l0aCA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobGluZWFyLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5hICogbGluZWFyLmEgPT09IC0xKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJwZXJwU2xvcGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xvcGUgPSAtKDEgLyB0aGlzLmEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKE51bWJlci5pc0Zpbml0ZShzbG9wZSkpID8gc2xvcGUgOiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwieT1cIiArIHRoaXMuYSArIFwieCtcIiArIHRoaXMuYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgcG9pbnRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG51bWUgPSBiLmIgLSBhLmI7XHJcbiAgICAgICAgdmFyIGRlbm8gPSBhLmEgLSBiLmE7XHJcbiAgICAgICAgdmFyIHggPSBudW1lIC8gZGVubztcclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB2YXIgeSA9IGEuZngoeCk7XHJcbiAgICAgICAgcmVzdWx0LmNvdW50ID0gMTtcclxuICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGluZWFyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5lYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLk9CQiA9IGV4cG9ydHMuQUFCQiA9IGV4cG9ydHMuQ2Fwc3VsZSA9IGV4cG9ydHMuQ2lyY2xlID0gZXhwb3J0cy5TZWdtZW50ID0gZXhwb3J0cy5SYXkgPSBleHBvcnRzLkxpbmUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgTGluZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lKHAsIHYpIHtcclxuICAgICAgICB0aGlzLl9wID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLl92ID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHYueCwgdi55KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJ2XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Y7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmUucHJvdG90eXBlLmdldFBvaW50ID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMucCwgdGhpcy52Lm5vcm1hbGl6ZS50aW1lcyhmKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbmV4cG9ydHMuUmF5ID0gTGluZTtcclxudmFyIFNlZ21lbnQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFNlZ21lbnQsIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBTZWdtZW50KHAxLCBwMikge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBwMSwgcDIpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy52OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBTZWdtZW50LnByb3RvdHlwZS5nZXRFbmRQb2ludCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMucDEsIHRoaXMucDIpO1xyXG4gICAgfTtcclxuICAgIFNlZ21lbnQucHJvdG90eXBlLmdldFBvaW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gW3RoaXMucDEueCwgdGhpcy5wMS55LCB0aGlzLnAyLngsIHRoaXMucDIueV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFNlZ21lbnQ7XHJcbn0oTGluZSkpO1xyXG5leHBvcnRzLlNlZ21lbnQgPSBTZWdtZW50O1xyXG52YXIgQ2lyY2xlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENpcmNsZShwLCByKSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChwLngsIHAueSk7XHJcbiAgICAgICAgdGhpcy5yID0gcjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaXJjbGUucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufSgpKTtcclxuZXhwb3J0cy5DaXJjbGUgPSBDaXJjbGU7XHJcbnZhciBDYXBzdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhcHN1bGUocywgcikge1xyXG4gICAgICAgIHRoaXMuX3MgPSBuZXcgU2VnbWVudChzLnAxLCBzLnAyKTtcclxuICAgICAgICB0aGlzLnIgPSByO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcHN1bGUucHJvdG90eXBlLCBcInNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fczsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENhcHN1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2Fwc3VsZSA9IENhcHN1bGU7XHJcbnZhciBBQUJCID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEFBQkIoYywgcikge1xyXG4gICAgICAgIHRoaXMuX2MgPSBjO1xyXG4gICAgICAgIHRoaXMucnggPSByWzBdO1xyXG4gICAgICAgIHRoaXMucnkgPSByWzFdO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcImNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fYzsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcIndpZHRoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnggKiAyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBQUJCLnByb3RvdHlwZSwgXCJoZWlnaHRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yeSAqIDI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLmMueCAtIHRoaXMucngsIHRoaXMuYy55ICsgdGhpcy5yeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLmMueCArIHRoaXMucngsIHRoaXMuYy55ICsgdGhpcy5yeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcInAzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLmMueCArIHRoaXMucngsIHRoaXMuYy55IC0gdGhpcy5yeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFBQkIucHJvdG90eXBlLCBcInA0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLmMueCAtIHRoaXMucngsIHRoaXMuYy55IC0gdGhpcy5yeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEFBQkI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQUFCQiA9IEFBQkI7XHJcbnZhciBPQkIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gT0JCKGMsIHIsIGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5yYWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2MgPSBjO1xyXG4gICAgICAgIHRoaXMuX3IgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoclswXSwgclsxXSk7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwiY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9jOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT0JCLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcInJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueDsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IueCA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcInJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IueSA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcImFuZ2xlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwucmFkMmRlZyh0aGlzLnJhZCk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLnJhZCA9IFV0aWwuZGVnMnJhZCh2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwid2lkdGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yeCAqIDI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwiaGVpZ2h0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnkgKiAyO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgtdGhpcy5fci54LCB0aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLnJhZCkuYWRkKHRoaXMuYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMuX3IueCwgdGhpcy5fci55KS5yb3RhdGUodGhpcy5yYWQpLmFkZCh0aGlzLmMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcInAzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLl9yLngsIC10aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLnJhZCkuYWRkKHRoaXMuYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwicDRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KC10aGlzLl9yLngsIC10aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLnJhZCkuYWRkKHRoaXMuYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwiczFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDIsIHRoaXMucDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPQkIucHJvdG90eXBlLCBcInMyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAzLCB0aGlzLnAyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoT0JCLnByb3RvdHlwZSwgXCJzM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wNCwgdGhpcy5wMyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE9CQi5wcm90b3R5cGUsIFwiczRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDEsIHRoaXMucDQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBPQkI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuT0JCID0gT0JCO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIFF1YWRyYXRpYyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRdWFkcmF0aWMoKSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IDA7XHJcbiAgICAgICAgdGhpcy5fYiA9IDA7XHJcbiAgICAgICAgdGhpcy5fYyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYSA9IHRoaXMuX2IgPSB0aGlzLl9jID0gMDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC51bmlmeVNpZ24odGhpcy5fYSk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9hID0gTnVtYmVyKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJiXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwudW5pZnlTaWduKHRoaXMuX2IpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYiA9IE51bWJlcih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnVuaWZ5U2lnbih0aGlzLl9jKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2MgPSBOdW1iZXIodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC51bmlmeVNpZ24oUXVhZHJhdGljLmNhbGNQX0J5X2FiKHRoaXMuYSwgdGhpcy5iKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwicVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLnVuaWZ5U2lnbihRdWFkcmF0aWMuY2FsY1FfQnlfYWJjKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRHZW5lcmFsRm9ybSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IGEsIHRoaXMuX2IgPSBiLCB0aGlzLl9jID0gYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRTdGFuZGFyZEZvcm0gPSBmdW5jdGlvbiAoYSwgcCwgcSkge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhO1xyXG4gICAgICAgIHRoaXMuX2IgPSBRdWFkcmF0aWMuY2FsY0JfQnlfYXAoYSwgcCk7XHJcbiAgICAgICAgdGhpcy5fYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV9wcShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRGYWN0b3JpemF0aW9uRm9ybSA9IGZ1bmN0aW9uIChhLCBzLCB0KSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IFF1YWRyYXRpYy5jYWxjQl9CeV9hc3QoYSwgcywgdCk7XHJcbiAgICAgICAgdGhpcy5fYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV9hc3QoYSwgcywgdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnlBcGV4QW5kUGFzc1BvaW50ID0gZnVuY3Rpb24gKHAsIHEsIHgsIHkpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV9wcXh5KHAsIHEsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW5pdFN0YW5kYXJkRm9ybShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRCeUF4aXNBbmQyUGFzc1BvaW50cyA9IGZ1bmN0aW9uIChheGlzWCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcSA9IFF1YWRyYXRpYy5jYWxjUV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcCA9IGF4aXNYO1xyXG4gICAgICAgIHRoaXMuaW5pdFN0YW5kYXJkRm9ybShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRCeTNQYXNzUG9pbnRzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYiA9IFF1YWRyYXRpYy5jYWxjQl9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB0aGlzLmluaXRHZW5lcmFsRm9ybShhLCBiLCBjKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmZ4ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgcmV0dXJuIGEgKiAoKHggLSBwKSAqICh4IC0gcCkpICsgcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmdldFBvaW50cyA9IGZ1bmN0aW9uIChmcm9tWCwgdG9YLCBzdGVwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgdmFyIHAgPSBbXTtcclxuICAgICAgICB0b1ggKz0gc3RlcCAqIDAuMTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gZnJvbVg7IHggPD0gdG9YOyB4ICs9IHN0ZXApIHtcclxuICAgICAgICAgICAgcC5wdXNoKHgsIHRoaXMuZngoeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmdldFBvaW50c09mU2xvcGVBdFlUYW5nZW50ID0gZnVuY3Rpb24gKGZyb21YLCB0b1gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgeTEgPSB0aGlzLmIgKiBmcm9tWCArIHRoaXMuYztcclxuICAgICAgICB2YXIgeTIgPSB0aGlzLmIgKiB0b1ggKyB0aGlzLmM7XHJcbiAgICAgICAgcmV0dXJuIFtmcm9tWCwgeTEsIHRvWCwgeTJdO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImFwZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB4OiB0aGlzLnAsIHk6IHRoaXMucSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImF4aXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzSW52YWxpZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhUXVhZHJhdGljLmlzVmFsaWRBKHRoaXMuYSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiaGFzQXBleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIHAgPSBfZC5wLCBxID0gX2QucTtcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5oYXNBcGV4KHAsIHEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcIm1heFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgwIDw9IHRoaXMuYSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwZXgueTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJtaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hIDw9IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcGV4Lnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiZGlzY3JpbWluYW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwic29sdXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLnNvbHV0aW9uKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzUG9zaXRpdmVEZWZpbml0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaXNQb3NpdGl2ZURlZmluaXRlKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzTmVnYXRpdmVEZWZpbml0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaXNOZWdhdGl2ZURlZmluaXRlKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZlNsb3BlID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCLjgarjgZdcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkF4aXMgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQXBleClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLmF4aXMudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwieD1cIiArIGF4aXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mQXBleCA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBcGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gXCLjgarjgZdcIjtcclxuICAgICAgICB2YXIgeCA9IHRoaXMuYXBleC54LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5hcGV4LnkudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZMYXRleEFQUSA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBwID0gdGhpcy5wLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBxID0gdGhpcy5xLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIiQkeT1cIiArIGEgKyBcIih4IC0gKFwiICsgcCArIFwiKSleMiArIChcIiArIHEgKyBcIikkJFwiO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkxhdGV4QUJDID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmEudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIGIgPSB0aGlzLmIudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIGMgPSB0aGlzLmMudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwiJCR5PVwiICsgYSArIFwieF4yICsgKFwiICsgYiArIFwiKXggKyAoXCIgKyBjICsgXCIpJCRcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nQWJvdXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYTtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGlmIChhIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLkuIrjgavlh7hcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuS4i+OBq+WHuFwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmMsIHAgPSBfZC5wLCBxID0gX2QucTtcclxuICAgICAgICByZXR1cm4gXCJ7YTpcIiArIGEgKyBcIiwgYjpcIiArIGIgKyBcIiwgYzpcIiArIGMgKyBcIiwgcDpcIiArIHAgKyBcIiwgcTpcIiArIHEgKyBcIn1cIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY1BfQnlfYWIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiAtYiAvICgyICogYSk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNRX0J5X2FiYyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oKE1hdGgucG93KGIsIDIpKSAtICg0ICogYSAqIGMpKSAvICg0ICogYSk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X2FwID0gZnVuY3Rpb24gKGEsIHApIHtcclxuICAgICAgICByZXR1cm4gLTIgKiBhICogcDtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0JfQnlfYXN0ID0gZnVuY3Rpb24gKGEsIHMsIHQpIHtcclxuICAgICAgICByZXR1cm4gKC1hICogdCkgKyAoLWEgKiBzKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfcHEgPSBmdW5jdGlvbiAoYSwgcCwgcSkge1xyXG4gICAgICAgIHJldHVybiBhICogTWF0aC5wb3cocCwgMikgKyBxO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQ19CeV9hc3QgPSBmdW5jdGlvbiAoYSwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBhICogcyAqIHQ7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNBX0J5X3BxeHkgPSBmdW5jdGlvbiAocCwgcSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBudW1lID0geSAtIHE7XHJcbiAgICAgICAgdmFyIGRlbm8gPSBNYXRoLnBvdygoeCAtIHApLCAyKTtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNBX0J5X2F4aXhYX3gxeTFfeDJ5MiA9IGZ1bmN0aW9uIChheGlzWCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgbnVtZSA9IHkxIC0geTI7XHJcbiAgICAgICAgdmFyIGRlbm8gPSAoTWF0aC5wb3coKHgxIC0gYXhpc1gpLCAyKSkgLSAoTWF0aC5wb3coKHgyIC0gYXhpc1gpLCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjUV9CeV9heGl4WF94MXkxX3gyeTIgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNhbGNBX0J5X2F4aXhYX3gxeTFfeDJ5MihheGlzWCwgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgICAgIHZhciBxID0geTEgLSAoYSAqIE1hdGgucG93KCh4MSAtIGF4aXNYKSwgMikpO1xyXG4gICAgICAgIHJldHVybiBxO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5MyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSAoKHkxIC0geTIpICogKHgxIC0geDMpIC0gKHkxIC0geTMpICogKHgxIC0geDIpKTtcclxuICAgICAgICB2YXIgZGVubyA9ICgoeDEgLSB4MikgKiAoeDEgLSB4MykgKiAoeDIgLSB4MykpO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgbnVtZSA9IHkxIC0geTIgLSAoYSAqIChNYXRoLnBvdyh4MSwgMikgLSBNYXRoLnBvdyh4MiwgMikpKTtcclxuICAgICAgICB2YXIgZGVubyA9IHgxIC0geDI7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQ19CeV94MXkxX3gyeTJfeDN5MyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNhbGNBX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5jYWxjQl9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYyA9IHkxICsgKC1hICogKHgxICogeDEpIC0gYiAqIHgxKTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuZGlzY3JpbWluYW50ID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucG93KGIsIDIpKSAtICg0ICogYSAqIGMpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5zb2x1dGlvbiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChkIDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIHZhciBkZW5vID0gMiAqIGE7XHJcbiAgICAgICAgdmFyIHgxID0gVXRpbC51bmlmeVNpZ24oKC1iIC0gTWF0aC5zcXJ0KGQpKSAvIGRlbm8pO1xyXG4gICAgICAgIHZhciB4MiA9IFV0aWwudW5pZnlTaWduKCgtYiArIE1hdGguc3FydChkKSkgLyBkZW5vKTtcclxuICAgICAgICBpZiAoZCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFt4MV07XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbih4MSwgeDIpLCBNYXRoLm1heCh4MSwgeDIpXTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaXNWYWxpZEEgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGlzTmFOKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKEluZmluaXR5ID09IE1hdGguYWJzKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmhhc0FwZXggPSBmdW5jdGlvbiAocCwgcSkge1xyXG4gICAgICAgIGlmIChpc05hTihwKSB8fCBpc05hTihxKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChJbmZpbml0eSA9PT0gTWF0aC5hYnMocCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoSW5maW5pdHkgPT09IE1hdGguYWJzKHEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzUG9zaXRpdmVEZWZpbml0ZSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKCFRdWFkcmF0aWMuaXNWYWxpZEEoYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZCA9IFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIChkIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzTmVnYXRpdmVEZWZpbml0ZSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKCFRdWFkcmF0aWMuaXNWYWxpZEEoYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoMCA8IGEpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZCA9IFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIChkIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmludGVyc2VjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIHBvaW50czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChhLmlzSW52YWxpZCB8fCBiLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBpZiAoYS5hIC0gYi5hID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1lID0gYi5jIC0gYS5jO1xyXG4gICAgICAgICAgICB2YXIgZGVubyA9IGEuYiAtIGIuYjtcclxuICAgICAgICAgICAgaWYgKGRlbm8gPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgeCA9IG51bWUgLyBkZW5vO1xyXG4gICAgICAgICAgICB2YXIgeSA9IGEuZngoeCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb2ludHMucHVzaCh4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgUXVhZHJhdGljKCkuaW5pdEdlbmVyYWxGb3JtKGEuYSAtIGIuYSwgYS5iIC0gYi5iLCBhLmMgLSBiLmMpO1xyXG4gICAgICAgIHZhciBweCA9IGMuc29sdXRpb247XHJcbiAgICAgICAgaWYgKHB4ID09PSB1bmRlZmluZWQgfHwgcHgubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHB4Lm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICByZXN1bHQuY291bnQrKztcclxuICAgICAgICAgICAgcmVzdWx0LnBvaW50cy5wdXNoKHgsIGEuZngoeCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFF1YWRyYXRpYztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUXVhZHJhdGljO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlR5cGUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbnZhciBUeXBlO1xyXG4oZnVuY3Rpb24gKFR5cGUpIHtcclxuICAgIFR5cGVbVHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgVHlwZVtUeXBlW1wiUmlnaHRcIl0gPSAxXSA9IFwiUmlnaHRcIjtcclxuICAgIFR5cGVbVHlwZVtcIkFjdXRlXCJdID0gMl0gPSBcIkFjdXRlXCI7XHJcbiAgICBUeXBlW1R5cGVbXCJPYnR1c2VcIl0gPSAzXSA9IFwiT2J0dXNlXCI7XHJcbn0pKFR5cGUgPSBleHBvcnRzLlR5cGUgfHwgKGV4cG9ydHMuVHlwZSA9IHt9KSk7XHJcbnZhciBUcmlhbmdsZTJEID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyaWFuZ2xlMkQocCkge1xyXG4gICAgICAgIGlmIChwID09PSB2b2lkIDApIHsgcCA9IFtdOyB9XHJcbiAgICAgICAgdmFyIGF4ID0gcFswXSA/IHBbMF0gOiAwO1xyXG4gICAgICAgIHZhciBheSA9IHBbMV0gPyBwWzFdIDogMDtcclxuICAgICAgICB2YXIgYnggPSBwWzJdID8gcFsyXSA6IDA7XHJcbiAgICAgICAgdmFyIGJ5ID0gcFszXSA/IHBbM10gOiAwO1xyXG4gICAgICAgIHZhciBjeCA9IHBbNF0gPyBwWzRdIDogMDtcclxuICAgICAgICB2YXIgY3kgPSBwWzVdID8gcFs1XSA6IDA7XHJcbiAgICAgICAgdGhpcy5fQSA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChheCwgYXkpO1xyXG4gICAgICAgIHRoaXMuX0IgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoYngsIGJ5KTtcclxuICAgICAgICB0aGlzLl9DID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGN4LCBjeSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9BOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9COyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9DOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQUJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQiwgdGhpcy5BKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQywgdGhpcy5CKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiQ0FcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQSwgdGhpcy5DKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkJDLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkNBLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkFCLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwic29ydGVkTGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbYSwgYiwgY107XHJcbiAgICAgICAgICAgIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYiAtIGE7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwibWF4U2lkZU5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYzogcmV0dXJuIFwiQUJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgYTogcmV0dXJuIFwiQkNcIjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIkNBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwibWluU2lkZU5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3RbMl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYzogcmV0dXJuIFwiQUJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgYTogcmV0dXJuIFwiQkNcIjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIkNBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTJELnByb3RvdHlwZS5nZXRMZW5ndGhBdCA9IGZ1bmN0aW9uIChzaWRlTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoc2lkZU5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiB0aGlzLmE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gdGhpcy5iO1xyXG4gICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIHRoaXMuYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcIm1heExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aEF0KHRoaXMubWF4U2lkZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJtaW5MZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZW5ndGhBdCh0aGlzLm1pblNpZGVOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwibWF4Q29ybmVyTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzaWRlID0gdGhpcy5tYXhTaWRlTmFtZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQkNcIjogcmV0dXJuIFwiQVwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBXCI6IHJldHVybiBcIkJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBQlwiOiByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcIm1pbkNvcm5lck5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2lkZSA9IHRoaXMubWluU2lkZU5hbWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiBcIkFcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gXCJCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJjb3NBXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGIsIDIpKSArIChNYXRoLnBvdyhjLCAyKSkgLSAoTWF0aC5wb3coYSwgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBiICogYztcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJjb3NCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGMsIDIpKSArIChNYXRoLnBvdyhhLCAyKSkgLSAoTWF0aC5wb3coYiwgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBjICogYTtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJjb3NDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGEsIDIpKSArIChNYXRoLnBvdyhiLCAyKSkgLSAoTWF0aC5wb3coYywgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBhICogYjtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJzaW5BXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NBID0gdGhpcy5jb3NBO1xyXG4gICAgICAgICAgICB2YXIgc2luID0gTWF0aC5zcXJ0KDEgLSAoTWF0aC5wb3coY29zQSwgMikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwic2luQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQiA9IHRoaXMuY29zQjtcclxuICAgICAgICAgICAgdmFyIHNpbiA9IE1hdGguc3FydCgxIC0gKE1hdGgucG93KGNvc0IsIDIpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcInNpbkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NDLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJ0YW5BXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkEgPSBfYS5zaW5BLCBjb3NBID0gX2EuY29zQTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkEgLyBjb3NBO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJ0YW5CXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkIgPSBfYS5zaW5CLCBjb3NCID0gX2EuY29zQjtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkIgLyBjb3NCO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJ0YW5DXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkMgPSBfYS5zaW5DLCBjb3NDID0gX2EuY29zQztcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkMgLyBOdW1iZXIoY29zQy50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyRC5wcm90b3R5cGUuZ2V0Q29zQXQgPSBmdW5jdGlvbiAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOiByZXR1cm4gdGhpcy5jb3NBO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlwiOiByZXR1cm4gdGhpcy5jb3NCO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gdGhpcy5jb3NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwibWF4Q29ybmVyQ29zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29zQXQodGhpcy5tYXhDb3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwibWluQ29ybmVyQ29zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29zQXQodGhpcy5taW5Db3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTJELnByb3RvdHlwZS5nZXRTaW5BdCA9IGZ1bmN0aW9uIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6IHJldHVybiB0aGlzLnNpbkE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6IHJldHVybiB0aGlzLnNpbkI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiB0aGlzLnNpbkM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJtYXhDb3JuZXJTaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaW5BdCh0aGlzLm1heENvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJtaW5Db3JuZXJTaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaW5BdCh0aGlzLm1pbkNvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMkQucHJvdG90eXBlLmdldFRhbkF0ID0gZnVuY3Rpb24gKGNvbm5lck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbm5lck5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjogcmV0dXJuIHRoaXMudGFuQTtcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjogcmV0dXJuIHRoaXMudGFuQjtcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIHRoaXMudGFuQztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcIm1heENvcm5lclRhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhbkF0KHRoaXMubWF4Q29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcIm1pbkNvcm5lclRhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhbkF0KHRoaXMubWluQ29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcInJhZEFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0EgPSB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcInJhZEJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0IgPSB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcInJhZENcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcImFyZWFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBiID0gX2EuYiwgYyA9IF9hLmMsIHNpbkEgPSBfYS5zaW5BO1xyXG4gICAgICAgICAgICByZXR1cm4gKGIgKiBjICogc2luQSkgKiAwLjU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMkQucHJvdG90eXBlLCBcIm91dGVyUmFkaXVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBzaW5BID0gX2Euc2luQTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgLyAoMiAqIHNpbkEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJpbm5lclJhZGl1c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jLCBhcmVhID0gX2EuYXJlYTtcclxuICAgICAgICAgICAgcmV0dXJuICgyICogYXJlYSkgLyAoYSArIGIgKyBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiY2VudGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkM7XHJcbiAgICAgICAgICAgIHZhciBnID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KCkuYWRkKEEpLmFkZChCKS5hZGQoQykudGltZXMoMSAvIDMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwib3V0ZXJDZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQywgcmFkQSA9IF9hLnJhZEEsIHJhZEIgPSBfYS5yYWRCLCByYWRDID0gX2EucmFkQztcclxuICAgICAgICAgICAgdmFyIHNpbjJBID0gTWF0aC5zaW4ocmFkQSAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgc2luMkIgPSBNYXRoLnNpbihyYWRCICogMik7XHJcbiAgICAgICAgICAgIHZhciBzaW4yQyA9IE1hdGguc2luKHJhZEMgKiAyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IEEuY2xvbmUoKS50aW1lcyhzaW4yQSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQi5jbG9uZSgpLnRpbWVzKHNpbjJCKSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQy5jbG9uZSgpLnRpbWVzKHNpbjJDKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gc2luMkEgKyBzaW4yQiArIHNpbjJDO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VudGVyLnRpbWVzKDEgLyBkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwiaW5uZXJDZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IEEuY2xvbmUoKS50aW1lcyhhKVxyXG4gICAgICAgICAgICAgICAgLmFkZChCLmNsb25lKCkudGltZXMoYikpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEMuY2xvbmUoKS50aW1lcyhjKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMSAvIChhICsgYiArIGMpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VudGVyLnRpbWVzKGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTJELnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYSA9IGxpc3RbMF0sIGIgPSBsaXN0WzFdLCBjID0gbGlzdFsyXTtcclxuICAgICAgICAgICAgcmV0dXJuICEoYSA8IGIgKyBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyRC5wcm90b3R5cGUsIFwidHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBUeXBlLk5vbmU7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMF0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIHZhciBtaWQgPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMV0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIHZhciBtaW4gPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMl0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIGlmIChtYXggPCBtaWQgKyBtaW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5BY3V0ZTtcclxuICAgICAgICAgICAgaWYgKG1heCA+IG1pZCArIG1pbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBUeXBlLk9idHVzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFR5cGUuUmlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyRC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQztcclxuICAgICAgICByZXR1cm4gXCJBXCIgKyBBICsgXCIsIEJcIiArIEIgKyBcIiwgQ1wiICsgQztcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJpYW5nbGUyRDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHJpYW5nbGUyRDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMih4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuZXF1YWwgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ID09PSB2LnggJiYgdGhpcy55ID09PSB2LnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueDtcclxuICAgICAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54IC09IHYueDtcclxuICAgICAgICB0aGlzLnkgLT0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnRpbWVzID0gZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB0aGlzLnggKj0gaztcclxuICAgICAgICB0aGlzLnkgKj0gaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJzcXJNYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJub3JtYWxpemVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWFnbml0dWRlID0gdGhpcy5tYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChtYWduaXR1ZGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBWZWN0b3IyLnplcm87XHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54IC8gbWFnbml0dWRlLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55IC8gbWFnbml0dWRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2LngsIHYueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInJhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgdmFyIHJhZCA9IE1hdGguYXRhbih5IC8geCk7XHJcbiAgICAgICAgICAgIGlmIChyYWQgPCAwICYmIHggPCAwIHx8IDAgPCByYWQgJiYgeSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYWQgKyBNYXRoLlBJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyYWQgPCAwICYmIDAgPCB4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFkICsgMiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJhZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyhyYWQpIC0geSAqIE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdGhpcy55ID0geCAqIE1hdGguc2luKHJhZCkgKyB5ICogTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB0aGlzLnggPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ID0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUubGVycCA9IGZ1bmN0aW9uICh0bywgdCkge1xyXG4gICAgICAgIHZhciB2ID0gVmVjdG9yMi5zdWIodG8sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkKHYudGltZXModCkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwib25lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInVwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcImRvd25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgLTEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcImxlZnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoLTEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInJpZ2h0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIuYWRkID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiB2MS5jbG9uZSgpLmFkZCh2Mik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5zdWIgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkuc3ViKHYyKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnRpbWVzID0gZnVuY3Rpb24gKHYsIGspIHtcclxuICAgICAgICByZXR1cm4gdi5jbG9uZSgpLnRpbWVzKGspO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaW52ZXJzZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHYuY2xvbmUoKS50aW1lcygtMSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1plcm8gPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiAodi54ID09PSAwICYmIHYueSA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1BhcmFsbGVsID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciB0ID0gVmVjdG9yMi5jcm9zcyh2MSwgdjIpO1xyXG4gICAgICAgIHJldHVybiAodCA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1ZlcnRpY2FsID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiAoVmVjdG9yMi5kb3QodjEsIHYyKSA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kb3QgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIGRvdCA9IHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnk7XHJcbiAgICAgICAgcmV0dXJuIGRvdDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmNyb3NzID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciBjcm9zcyA9IHYxLnggKiB2Mi55IC0gdjIueCAqIHYxLnk7XHJcbiAgICAgICAgcmV0dXJuIGNyb3NzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuYW5nbGUgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIG5lbXUgPSBWZWN0b3IyLmRvdCh2MSwgdjIpO1xyXG4gICAgICAgIHZhciBkZW5vID0gdjEubWFnbml0dWRlICogdjIubWFnbml0dWRlO1xyXG4gICAgICAgIHZhciBjb3MgPSBuZW11IC8gZGVubztcclxuICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvcyk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5zdWIodjEsIHYyKS5tYWduaXR1ZGU7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5sZXJwID0gZnVuY3Rpb24gKHYxLCB2MiwgdCkge1xyXG4gICAgICAgIHJldHVybiB2MS5jbG9uZSgpLmxlcnAodjIsIHQpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlByaW1pdGl2ZTJEID0gZXhwb3J0cy5UcmlhbmdsZTJEID0gZXhwb3J0cy5RdWFkcmF0aWMgPSBleHBvcnRzLkxpbmVhciA9IGV4cG9ydHMuVmVjdG9yMiA9IGV4cG9ydHMuVXRpbCA9IHZvaWQgMDtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbmV4cG9ydHMuVXRpbCA9IFV0aWw7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbmV4cG9ydHMuVmVjdG9yMiA9IFZlY3RvcjJfMS5kZWZhdWx0O1xyXG52YXIgUXVhZHJhdGljXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUXVhZHJhdGljXCIpKTtcclxuZXhwb3J0cy5RdWFkcmF0aWMgPSBRdWFkcmF0aWNfMS5kZWZhdWx0O1xyXG52YXIgTGluZWFyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGluZWFyXCIpKTtcclxuZXhwb3J0cy5MaW5lYXIgPSBMaW5lYXJfMS5kZWZhdWx0O1xyXG52YXIgVHJpYW5nbGUyRF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RyaWFuZ2xlMkRcIikpO1xyXG5leHBvcnRzLlRyaWFuZ2xlMkQgPSBUcmlhbmdsZTJEXzEuZGVmYXVsdDtcclxudmFyIFByaW1pdGl2ZTJEID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1ByaW1pdGl2ZTJEXCIpKTtcclxuZXhwb3J0cy5QcmltaXRpdmUyRCA9IFByaW1pdGl2ZTJEO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmNyYW1wID0gZXhwb3J0cy5yb3VuZCA9IGV4cG9ydHMucmFkMmRlZyA9IGV4cG9ydHMuZGVnMnJhZCA9IGV4cG9ydHMudW5pZnlTaWduID0gdm9pZCAwO1xyXG5leHBvcnRzLnVuaWZ5U2lnbiA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIHJldHVybiBhO1xyXG59O1xyXG5leHBvcnRzLmRlZzJyYWQgPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgLyAxODAgKiBkO1xyXG59O1xyXG5leHBvcnRzLnJhZDJkZWcgPSBmdW5jdGlvbiAocikge1xyXG4gICAgcmV0dXJuIDE4MCAvIE1hdGguUEkgKiByO1xyXG59O1xyXG5leHBvcnRzLnJvdW5kID0gZnVuY3Rpb24gKG51bSwgZml4ZWQpIHtcclxuICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgdmFyIGZpeCA9IE1hdGgucG93KDEwLCBmaXhlZCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBmaXgpIC8gZml4O1xyXG59O1xyXG5leHBvcnRzLmNyYW1wID0gZnVuY3Rpb24gKG5vLCBtaW4sIG1heCkge1xyXG4gICAgbm8gPSBNYXRoLm1pbihubywgbWF4KTtcclxuICAgIG5vID0gTWF0aC5tYXgobm8sIG1pbik7XHJcbiAgICByZXR1cm4gbm87XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=