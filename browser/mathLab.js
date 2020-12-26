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

/***/ "./src/Collision2/BoxAndBox.ts":
/*!*************************************!*\
  !*** ./src/Collision2/BoxAndBox.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isHitSquare = void 0;
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
function isHitSquare(box1, box2) {
    var distSq = __1.Vector2.sub(box1.p, box2.p).sqrMagnitude;
    if (distSq < Math.pow((box1.r.x + box2.r.x), 2))
        return true;
    var box1Vertex = [
        box1.p1, box1.p2, box1.p3, box1.p4
    ];
    var box2Vertex = [
        box2.p1, box2.p2, box2.p3, box2.p4
    ];
    for (var _i = 0, box2Vertex_1 = box2Vertex; _i < box2Vertex_1.length; _i++) {
        var vertex = box2Vertex_1[_i];
        if (_1.PointAndBox.isHit(vertex, box1))
            return true;
    }
    for (var _a = 0, box1Vertex_1 = box1Vertex; _a < box1Vertex_1.length; _a++) {
        var vertex = box1Vertex_1[_a];
        if (_1.PointAndBox.isHit(vertex, box2))
            return true;
    }
    return false;
}
exports.isHitSquare = isHitSquare;


/***/ }),

/***/ "./src/Collision2/CircleAndCircle.ts":
/*!*******************************************!*\
  !*** ./src/Collision2/CircleAndCircle.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(circle1, circle2) {
    var v = Vector2_1.default.sub(circle2.p, circle1.p);
    return (v.sqrMagnitude < Math.pow((circle1.r + circle2.r), 2));
}
exports.isHit = isHit;
function intercect(circle1, circle2) {
    var result = {
        hit: false,
        pos: [],
        vh: Vector2_1.default.zero,
        vv: Vector2_1.default.zero,
    };
    var C1 = circle1.p;
    var C2 = circle2.p;
    var vC1C2 = Vector2_1.default.sub(C2, C1);
    var a = vC1C2.magnitude;
    var sumR = circle1.r + circle2.r;
    if (sumR < a)
        return result;
    result.hit = true;
    var subR = Math.abs(circle1.r - circle2.r);
    if (a < subR) {
        return result;
    }
    if (a === sumR) {
        var n = vC1C2.normalize;
        var P = Vector2_1.default.add(circle1.p, n.times(circle1.r));
        result.pos.push(P);
        return result;
    }
    if (a === subR) {
        var n = vC1C2.normalize;
        var isLarge = (circle1.r > circle2.r);
        var P = Vector2_1.default.add(circle1.p, n.times(isLarge ? circle1.r : -circle1.r));
        result.pos.push(P);
        return result;
    }
    var b = circle1.r;
    var c = circle2.r;
    var cos = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
    var rc = b * cos;
    var rs = Math.sqrt(Math.pow(b, 2) - Math.pow(rc, 2));
    var n1 = vC1C2.normalize;
    var n2 = new Vector2_1.default(-n1.y, n1.x);
    var tn1 = n1.times(rc);
    var sn2 = n2.times(rs);
    result.vh = tn1;
    result.vv = sn2;
    result.pos.push(circle1.p.clone().add(tn1).add(sn2));
    result.pos.push(circle1.p.clone().add(tn1).sub(sn2));
    return result;
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/LineAndBox.ts":
/*!**************************************!*\
  !*** ./src/Collision2/LineAndBox.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(line, box) {
    var points = [
        box.p1,
        box.p2,
        box.p3,
        box.p4,
    ];
    var sign = 0;
    for (var i = 0; i < points.length; ++i) {
        var v1 = line.v;
        var v2 = Vector2_1.default.sub(points[i], line.p);
        var cross = Vector2_1.default.cross(v1, v2);
        if (cross === 0)
            return true;
        if (i == 0) {
            sign = Math.sign(cross);
        }
        else {
            if (sign !== Math.sign(cross))
                return true;
        }
    }
    return false;
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/LineAndCapsule.ts":
/*!******************************************!*\
  !*** ./src/Collision2/LineAndCapsule.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
function isHit(line, capsule) {
    if (Vector2_1.default.isParallel(line.v, capsule.s.v)) {
        var nd_1 = _1.PointAndLine.getNearestDistance(line.p, capsule.s.toLine());
        return (nd_1.distance <= capsule.r);
    }
    var nd = _1.LineAndLine.getNearestDistance(line, capsule.s.toLine());
    if (0 <= nd.t2 && nd.t2 <= 1.0) {
        return (nd.distance <= capsule.r);
    }
    var t2 = __1.Util.cramp(nd.t2, 0, 1);
    var p2 = Vector2_1.default.add(capsule.s.p1, Vector2_1.default.times(capsule.s.v, t2));
    var near = _1.PointAndLine.getNearestDistance(p2, line);
    return (near.distance < capsule.r);
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/LineAndCircle.ts":
/*!*****************************************!*\
  !*** ./src/Collision2/LineAndCircle.ts ***!
  \*****************************************/
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
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var PointAndLine = __importStar(__webpack_require__(/*! ./PointAndLine */ "./src/Collision2/PointAndLine.ts"));
function isHit(line, circle) {
    var p = PointAndLine.getNearestPoint(circle.p, line);
    var d = Vector2_1.default.sub(p, circle.p).sqrMagnitude;
    return (d < circle.r * circle.r);
}
exports.isHit = isHit;
function intercect(line, circle) {
    var result = {
        hit: false,
        pos: [],
        nearest: Vector2_1.default.zero,
    };
    var c = circle.p;
    var h = PointAndLine.getNearestPoint(c, line);
    result.nearest = h;
    var hp = Vector2_1.default.sub(h, circle.p);
    var hp_len = hp.magnitude;
    if (circle.r < hp_len)
        return result;
    result.hit = true;
    if (circle.r === hp_len) {
        result.pos.push(h);
        return result;
    }
    var t = Math.sqrt(Math.pow(circle.r, 2) - Math.pow(hp_len, 2));
    var tv = line.v.normalize.times(t);
    result.pos.push(Vector2_1.default.add(h, tv));
    result.pos.push(Vector2_1.default.sub(h, tv));
    return result;
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/LineAndEllipse.ts":
/*!******************************************!*\
  !*** ./src/Collision2/LineAndEllipse.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var Primitive2_1 = __webpack_require__(/*! ../Primitive2 */ "./src/Primitive2.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(line, ellipse) {
    var p1 = line.p.clone();
    var p2 = line.point(1);
    var c = ellipse.p;
    var rx = ellipse.rx, ry = ellipse.ry;
    p1.sub(c).rotate(-ellipse.rad);
    p1.y *= (rx / ry);
    p2.sub(c).rotate(-ellipse.rad);
    p2.y *= (rx / ry);
    var newLine = new Primitive2_1.Line(p1, Vector2_1.default.sub(p2, p1));
    var circle = new Primitive2_1.Circle(Vector2_1.default.zero, rx);
    return _1.LineAndCircle.isHit(newLine, circle);
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/LineAndLine.ts":
/*!***************************************!*\
  !*** ./src/Collision2/LineAndLine.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearestDistance2 = exports.getNearestDistance = exports.intercect = exports.getCollisionPoint = exports.isHitParallel = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(l1, l2) {
    return (Vector2_1.default.cross(l1.v, l2.v) !== 0);
}
exports.isHit = isHit;
function isHitParallel(l1, l2) {
    var v1 = l1.v;
    var v2 = Vector2_1.default.sub(l1.p, l2.p);
    return (Math.abs(Vector2_1.default.cross(v1, v2)) < __1.Define.EPSILON);
}
exports.isHitParallel = isHitParallel;
function getCollisionPoint(l1, l2) {
    var v = Vector2_1.default.sub(l2.p, l1.p);
    var v1 = l1.v;
    var v2 = l2.v;
    var t2 = Vector2_1.default.cross(v, v1) / Vector2_1.default.cross(v1, v2);
    return Vector2_1.default.add(l2.p, v2.clone().times(t2));
}
exports.getCollisionPoint = getCollisionPoint;
function intercect(l1, l2) {
    var hit = isHit(l1, l2);
    var hitParallel = isHitParallel(l1, l2);
    var pos = Vector2_1.default.zero;
    if (hit) {
        pos.copy(getCollisionPoint(l1, l2));
    }
    return {
        hit: hit,
        hitParallel: hitParallel,
        pos: pos
    };
}
exports.intercect = intercect;
function getNearestDistance(l1, l2) {
    if (Vector2_1.default.isParallel(l1.v, l2.v)) {
        var res = _1.PointAndLine.getNearestDistance(l1.p, l2);
        return {
            distance: res.distance,
            p1: l1.p.clone(),
            p2: res.h,
            t1: 0,
            t2: res.t,
        };
    }
    var v1 = l1.v;
    var v2 = l2.v;
    var v = Vector2_1.default.sub(l1.p, l2.p);
    var t1 = v.cross(v2) / v2.cross(v1);
    var t2 = v.times(-1).cross(v1) / v1.cross(v2);
    var p1 = Vector2_1.default.add(l1.p, Vector2_1.default.times(l1.v, t1));
    var p2 = Vector2_1.default.add(l2.p, Vector2_1.default.times(l2.v, t2));
    return {
        distance: Vector2_1.default.sub(p1, p2).magnitude,
        p1: p1, p2: p2, t1: t1, t2: t2
    };
}
exports.getNearestDistance = getNearestDistance;
function getNearestDistance2(l1, l2) {
    if (Vector2_1.default.isParallel(l1.v, l2.v)) {
        var res = _1.PointAndLine.getNearestDistance(l1.p, l2);
        return {
            distance: res.distance,
            p1: l1.p.clone(),
            p2: res.h,
            t1: 0,
            t2: res.t,
        };
    }
    var p1 = l1.p;
    var p2 = l2.p;
    var v1 = l1.v;
    var v2 = l2.v;
    var D12 = v1.dot(v2);
    var D11 = v1.sqrMagnitude;
    var D22 = v2.sqrMagnitude;
    var P12 = Vector2_1.default.sub(p1, p2);
    var t1 = (D12 * v2.dot(P12) - D22 * v1.dot(P12)) / (D11 * D22 - D12 * D12);
    var q1 = Vector2_1.default.add(p1, Vector2_1.default.times(v1, t1));
    var t2 = v2.dot(Vector2_1.default.sub(q1, p2)) / D22;
    var q2 = Vector2_1.default.add(p2, Vector2_1.default.times(v2, t2));
    return {
        distance: Vector2_1.default.sub(q2, q1).magnitude,
        p1: q1,
        p2: q2,
        t1: t1,
        t2: t2,
    };
}
exports.getNearestDistance2 = getNearestDistance2;


/***/ }),

/***/ "./src/Collision2/LineAndRay.ts":
/*!**************************************!*\
  !*** ./src/Collision2/LineAndRay.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
function isHit(line, ray) {
    var v = Vector2_1.default.sub(ray.p, line.p);
    var v1 = line.v;
    var v2 = ray.v;
    var c1 = Vector2_1.default.cross(v, v1);
    var c2 = Vector2_1.default.cross(v1, v2);
    if (Math.abs(c2) < __1.Define.EPSILON)
        return false;
    var t = c1 / c2;
    return (0 < t);
}
exports.isHit = isHit;
function intercect(line, ray) {
    var result = {
        hit: false,
        pos: Vector2_1.default.zero,
    };
    var v1 = line.v;
    var v2 = ray.v;
    var cross = Vector2_1.default.cross(v1, v2);
    if (Math.abs(cross) < __1.Define.EPSILON)
        return result;
    var v = Vector2_1.default.sub(ray.p, line.p);
    var t = Vector2_1.default.cross(v, v1) / cross;
    if (t < 0)
        return result;
    result.hit = true;
    result.pos = Vector2_1.default.add(ray.p, v2.clone().times(t));
    return result;
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/LineAndRect.ts":
/*!***************************************!*\
  !*** ./src/Collision2/LineAndRect.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(line, rect) {
    var points = [
        rect.p1,
        rect.p2,
        rect.p3,
        rect.p4,
    ];
    var sign = 0;
    for (var i = 0; i < points.length; ++i) {
        var v1 = line.v;
        var v2 = Vector2_1.default.sub(points[i], line.p);
        var cross = Vector2_1.default.cross(v1, v2);
        if (cross === 0)
            return true;
        if (i == 0) {
            sign = Math.sign(cross);
        }
        else {
            if (sign !== Math.sign(cross))
                return true;
        }
    }
    return false;
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/LineAndSegment.ts":
/*!******************************************!*\
  !*** ./src/Collision2/LineAndSegment.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
function isHit(line, seg) {
    var v = Vector2_1.default.sub(seg.p1, line.p);
    var v1 = line.v;
    var v2 = seg.v;
    var c1 = Vector2_1.default.cross(v, v1);
    var c2 = Vector2_1.default.cross(v1, v2);
    if (Math.abs(c2) < __1.Define.EPSILON)
        return false;
    var t = c1 / c2;
    return (0 <= t && t <= 1);
}
exports.isHit = isHit;
function intercect(line, seg) {
    var result = {
        hit: false,
        pos: Vector2_1.default.zero,
    };
    var v1 = line.v;
    var v2 = seg.v;
    var cross = Vector2_1.default.cross(v1, v2);
    if (Math.abs(cross) < __1.Define.EPSILON)
        return result;
    var v = Vector2_1.default.sub(seg.p1, line.p);
    var t = Vector2_1.default.cross(v, v1) / cross;
    if (t < 0 || 1 < t)
        return result;
    result.hit = true;
    result.pos = Vector2_1.default.add(seg.p1, v2.clone().times(t));
    return result;
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/LineAndTriangle.ts":
/*!*******************************************!*\
  !*** ./src/Collision2/LineAndTriangle.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(line, triangle) {
    var points = [
        triangle.p1,
        triangle.p2,
        triangle.p3,
    ];
    var sign = 0;
    for (var i = 0; i < points.length; ++i) {
        var v1 = line.v;
        var v2 = Vector2_1.default.sub(points[i], line.p);
        var cross = Vector2_1.default.cross(v1, v2);
        if (cross === 0)
            return true;
        if (i == 0) {
            sign = Math.sign(cross);
        }
        else {
            if (sign !== Math.sign(cross))
                return true;
        }
    }
    return false;
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/PointAndBox.ts":
/*!***************************************!*\
  !*** ./src/Collision2/PointAndBox.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, box) {
    var datas = [
        { v1: box.v1to2, v2: Vector2_1.default.sub(point, box.p1) },
        { v1: box.v2to3, v2: Vector2_1.default.sub(point, box.p2) },
        { v1: box.v3to4, v2: Vector2_1.default.sub(point, box.p3) },
        { v1: box.v4to1, v2: Vector2_1.default.sub(point, box.p4) }
    ];
    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
        var data = datas_1[_i];
        var cross = Vector2_1.default.cross(data.v1, data.v2);
        if (0 < cross)
            return false;
    }
    return true;
}
exports.isHit = isHit;
function intercect(point, box) {
    var hit = isHit(point, box);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndCapsule.ts":
/*!*******************************************!*\
  !*** ./src/Collision2/PointAndCapsule.ts ***!
  \*******************************************/
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
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var PointAndSegment = __importStar(__webpack_require__(/*! ./PointAndSegment */ "./src/Collision2/PointAndSegment.ts"));
function isHit(point, capsule) {
    var p = PointAndSegment.getNearestPoint(point, capsule.s);
    var v = Vector2_1.default.sub(point, p);
    return (v.sqrMagnitude < capsule.r * capsule.r);
}
exports.isHit = isHit;
function intercect(point, capsule) {
    var hit = isHit(point, capsule);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndCircle.ts":
/*!******************************************!*\
  !*** ./src/Collision2/PointAndCircle.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, circle) {
    var v = Vector2_1.default.sub(point, circle.p);
    return (v.sqrMagnitude < circle.r * circle.r);
}
exports.isHit = isHit;
function intercect(point, circle) {
    var hit = isHit(point, circle);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndEllipse.ts":
/*!*******************************************!*\
  !*** ./src/Collision2/PointAndEllipse.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, ellipse) {
    var p = point;
    var e = ellipse;
    var sin = Math.sin(e.rad);
    var cos = Math.cos(e.rad);
    var rx = ellipse.rx, ry = ellipse.ry;
    var px = (p.x - e.p.x) * cos + (p.y - e.p.y) * sin;
    var py = (rx / ry) * (-(p.x - e.p.x) * sin + (p.y - e.p.y) * cos);
    return (px * px + py * py) < rx * rx;
}
exports.isHit = isHit;
function intercect(point, ellipse) {
    var hit = isHit(point, ellipse);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndLine.ts":
/*!****************************************!*\
  !*** ./src/Collision2/PointAndLine.ts ***!
  \****************************************/
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
exports.getNearestDistance = exports.getNearestPoint = exports.intercect = exports.isHit = void 0;
var Define = __importStar(__webpack_require__(/*! ../Define */ "./src/Define.ts"));
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, line) {
    var a = line.v;
    var b = Vector2_1.default.sub(point, line.p);
    var c = Vector2_1.default.cross(a, b);
    return (Math.abs(c) < Define.EPSILON);
}
exports.isHit = isHit;
function intercect(point, line) {
    var hit = isHit(point, line);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;
function getNearestPoint(point, line) {
    var d = line.v;
    var p = Vector2_1.default.sub(point, line.p);
    var n = d.normalize;
    var dot = Vector2_1.default.dot(n, p);
    return Vector2_1.default.add(line.p, n.times(dot));
}
exports.getNearestPoint = getNearestPoint;
function getNearestDistance(point, line) {
    var result = {
        distance: 0,
        h: Vector2_1.default.zero,
        t: 0,
    };
    var p1 = point;
    var p2 = line.p;
    var v2 = line.v;
    if (Vector2_1.default.isZero(v2) == false) {
        result.t = Vector2_1.default.dot(v2, Vector2_1.default.sub(p1, p2)) / v2.sqrMagnitude;
    }
    var tv2 = Vector2_1.default.times(v2, result.t);
    result.h = Vector2_1.default.add(p2, tv2);
    result.distance = Vector2_1.default.sub(result.h, p1).magnitude;
    return result;
}
exports.getNearestDistance = getNearestDistance;
;


/***/ }),

/***/ "./src/Collision2/PointAndPoint.ts":
/*!*****************************************!*\
  !*** ./src/Collision2/PointAndPoint.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(p1, p2) {
    return p1.equal(p2);
}
exports.isHit = isHit;
function intercect(p1, p2) {
    var hit = isHit(p1, p2);
    var pos = (hit) ? p1.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndRay.ts":
/*!***************************************!*\
  !*** ./src/Collision2/PointAndRay.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearestDistance = exports.getNearestPoint = exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(point, ray) {
    var a = ray.v;
    var b = Vector2_1.default.sub(point, ray.p);
    var l = a.magnitude * b.magnitude;
    var d = Vector2_1.default.dot(a, b);
    return (Math.abs(d - l) < __1.Define.EPSILON);
}
exports.isHit = isHit;
function intercect(point, ray) {
    var hit = isHit(point, ray);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;
function getNearestPoint(point, ray) {
    var d = ray.v;
    var p = Vector2_1.default.sub(point, ray.p);
    if (Vector2_1.default.dot(d, p) < 0) {
        return ray.p.clone();
    }
    var n = d.normalize;
    var dot = Vector2_1.default.dot(n, p);
    return Vector2_1.default.add(ray.p, n.times(dot));
}
exports.getNearestPoint = getNearestPoint;
function getNearestDistance(point, ray) {
    var _a = _1.PointAndLine.getNearestDistance(point, ray), distance = _a.distance, h = _a.h, t = _a.t;
    var result = {
        distance: distance, h: h, t: t
    };
    if (t < 0) {
        result.distance = Vector2_1.default.sub(ray.p, point).magnitude;
        result.h = ray.p.clone();
    }
    return result;
}
exports.getNearestDistance = getNearestDistance;
;


/***/ }),

/***/ "./src/Collision2/PointAndRect.ts":
/*!****************************************!*\
  !*** ./src/Collision2/PointAndRect.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, rect) {
    var isContainX = (rect.p1.x <= point.x) && (point.x <= rect.p3.x);
    var isContainY = (rect.p3.y <= point.y) && (point.y <= rect.p1.y);
    return (isContainX && isContainY);
}
exports.isHit = isHit;
function intercect(point, rect) {
    var hit = isHit(point, rect);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/PointAndSegment.ts":
/*!*******************************************!*\
  !*** ./src/Collision2/PointAndSegment.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNearestDistance = exports.getNearestPoint = exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(point, segment) {
    var a = segment.v;
    var b = Vector2_1.default.sub(point, segment.p1);
    var al = a.magnitude;
    var bl = b.magnitude;
    var l = al * bl;
    var d = Vector2_1.default.dot(a, b);
    return (Math.abs(l - d) < __1.Define.EPSILON && al > bl);
}
exports.isHit = isHit;
function intercect(point, segment) {
    var hit = isHit(point, segment);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;
function getNearestPoint(point, segment) {
    var d = segment.v;
    var p1 = Vector2_1.default.sub(point, segment.p1);
    if (Vector2_1.default.dot(d, p1) < 0) {
        return segment.p1.clone();
    }
    var p2 = Vector2_1.default.sub(point, segment.p2);
    if (0 < Vector2_1.default.dot(d, p2)) {
        return segment.p2.clone();
    }
    var n = d.normalize;
    var dot = Vector2_1.default.dot(n, p1);
    return Vector2_1.default.add(segment.p1, n.times(dot));
}
exports.getNearestPoint = getNearestPoint;
function getNearestDistance(point, segment) {
    var _a = _1.PointAndLine.getNearestDistance(point, segment.toLine()), distance = _a.distance, h = _a.h, t = _a.t;
    var result = {
        distance: distance, h: h, t: t
    };
    if (t < 0) {
        result.distance = Vector2_1.default.sub(point, segment.p1).magnitude;
        result.h = segment.p1.clone();
    }
    if (1 < t) {
        result.distance = Vector2_1.default.sub(point, segment.p2).magnitude;
        result.h = segment.p2.clone();
    }
    return result;
}
exports.getNearestDistance = getNearestDistance;
;


/***/ }),

/***/ "./src/Collision2/PointAndTriangle.ts":
/*!********************************************!*\
  !*** ./src/Collision2/PointAndTriangle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
function isHit(point, tri) {
    var datas = [
        { axis: tri.v1to2, vertex: [tri.p1, tri.p3] },
        { axis: tri.v2to3, vertex: [tri.p2, tri.p1] },
        { axis: tri.v3to1, vertex: [tri.p3, tri.p2] },
    ];
    for (var _i = 0, datas_1 = datas; _i < datas_1.length; _i++) {
        var data = datas_1[_i];
        var axis = data.axis.normalize;
        axis.set(-axis.y, axis.x);
        var maybeMin = axis.dot(data.vertex[0]);
        var maybeMax = axis.dot(data.vertex[1]);
        var min = Math.min(maybeMin, maybeMax);
        var max = Math.max(maybeMin, maybeMax);
        var dot = axis.dot(point);
        if (dot < min || max < dot)
            return false;
    }
    return true;
}
exports.isHit = isHit;
function intercect(point, tri) {
    var hit = isHit(point, tri);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/RayAndRay.ts":
/*!*************************************!*\
  !*** ./src/Collision2/RayAndRay.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHitParallel = exports.isHit = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(ray1, ray2) {
    if (__1.Vector2.isParallel(ray1.v, ray2.v))
        return false;
    var result = _1.LineAndLine.getNearestDistance(ray1, ray2);
    return (0 <= result.t1 && 0 <= result.t2);
}
exports.isHit = isHit;
function isHitParallel(ray1, ray2) {
    if (__1.Vector2.isParallel(ray1.v, ray2.v) == false)
        return false;
    var dist = _1.PointAndRay.getNearestDistance(ray1.p, ray2);
    if (dist.distance < __1.Define.EPSILON)
        return true;
    dist = _1.PointAndRay.getNearestDistance(ray2.p, ray1);
    return (dist.distance < __1.Define.EPSILON);
}
exports.isHitParallel = isHitParallel;
function intercect(ray1, ray2) {
    var _a = _1.LineAndLine.getNearestDistance(ray1, ray2), distance = _a.distance, p1 = _a.p1, p2 = _a.p2, t1 = _a.t1, t2 = _a.t2;
    var hit;
    if (__1.Vector2.isParallel(ray1.v, ray2.v)) {
        hit = false;
    }
    else {
        hit = (0 <= t1 && 0 <= t2);
    }
    return {
        hit: hit,
        distance: distance,
        p1: p1,
        p2: p2,
        t1: t1,
        t2: t2,
    };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/RayAndSegment.ts":
/*!*****************************************!*\
  !*** ./src/Collision2/RayAndSegment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHitParallel = exports.isHit = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(ray, segment) {
    if (__1.Vector2.isParallel(ray.v, segment.v))
        return false;
    var result = _1.LineAndLine.getNearestDistance(ray, segment.toLine());
    return (0 <= result.t1 && 0 <= result.t2 && result.t2 <= 1);
}
exports.isHit = isHit;
function isHitParallel(ray, ray2) {
    if (__1.Vector2.isParallel(ray.v, ray2.v) == false)
        return false;
    var dist = _1.PointAndRay.getNearestDistance(ray.p, ray2);
    if (dist.distance < __1.Define.EPSILON)
        return true;
    dist = _1.PointAndRay.getNearestDistance(ray2.p, ray);
    return (dist.distance < __1.Define.EPSILON);
}
exports.isHitParallel = isHitParallel;
function intercect(ray, segment) {
    var _a = _1.LineAndLine.getNearestDistance(ray, segment.toLine()), p1 = _a.p1, t1 = _a.t1, t2 = _a.t2;
    var hit;
    if (__1.Vector2.isParallel(ray.v, segment.v)) {
        hit = false;
    }
    else {
        hit = (0 <= t1 && 0 <= t2 && t2 <= 1);
    }
    return {
        hit: hit,
        pos: p1,
        t1: t1,
        t2: t2,
    };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/RectAndRect.ts":
/*!***************************************!*\
  !*** ./src/Collision2/RectAndRect.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isHit = void 0;
function isHit(r1, r2) {
    if (r2.maxX < r1.minX)
        return false;
    if (r1.maxX < r2.minX)
        return false;
    if (r2.maxY < r1.minY)
        return false;
    if (r1.maxY < r2.minY)
        return false;
    return true;
}
exports.isHit = isHit;


/***/ }),

/***/ "./src/Collision2/SegmentAndSegment.ts":
/*!*********************************************!*\
  !*** ./src/Collision2/SegmentAndSegment.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.intercect = exports.isHitParallel = exports.isHit = void 0;
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
var _1 = __webpack_require__(/*! . */ "./src/Collision2/index.ts");
function isHit(seg1, seg2) {
    if (__1.Vector2.isParallel(seg1.v, seg2.v))
        return false;
    var result = _1.LineAndLine.getNearestDistance(seg1.toLine(), seg2.toLine());
    return (0 <= result.t1 && result.t1 <= 1) && (0 <= result.t2 && result.t2 <= 1);
}
exports.isHit = isHit;
function isHitParallel(seg1, seg2) {
    if (__1.Vector2.isParallel(seg1.v, seg2.v) == false)
        return false;
    var dist1 = _1.PointAndLine.getNearestDistance(seg1.p1, seg2.toLine());
    var dist2 = _1.PointAndLine.getNearestDistance(seg1.p2, seg2.toLine());
    if (__1.Define.EPSILON < dist1.distance)
        return false;
    var t1 = dist1.t;
    var t2 = dist2.t;
    if (t1 < 0 && t2 < 0)
        return false;
    if (t1 > 1 && t2 > 1)
        return false;
    return true;
}
exports.isHitParallel = isHitParallel;
function intercect(seg1, seg2) {
    var _a = _1.LineAndLine.getNearestDistance(seg1.toLine(), seg2.toLine()), distance = _a.distance, p1 = _a.p1, p2 = _a.p2, t1 = _a.t1, t2 = _a.t2;
    var hit;
    if (__1.Vector2.isParallel(seg1.v, seg2.v)) {
        hit = false;
    }
    else {
        hit = (0 <= t1 && t1 <= 1) && (0 <= t2 && t2 <= 1);
    }
    return {
        hit: hit,
        distance: distance,
        p1: p1,
        p2: p2,
        t1: t1,
        t2: t2,
    };
}
exports.intercect = intercect;


/***/ }),

/***/ "./src/Collision2/index.ts":
/*!*********************************!*\
  !*** ./src/Collision2/index.ts ***!
  \*********************************/
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
exports.BoxAndBox = exports.RectAndRect = exports.CircleAndCircle = exports.SegmentAndSegment = exports.RayAndSegment = exports.RayAndRay = exports.LineAndEllipse = exports.LineAndCapsule = exports.LineAndTriangle = exports.LineAndBox = exports.LineAndRect = exports.LineAndCircle = exports.LineAndSegment = exports.LineAndRay = exports.LineAndLine = exports.PointAndEllipse = exports.PointAndCapsule = exports.PointAndTriangle = exports.PointAndBox = exports.PointAndRect = exports.PointAndCircle = exports.PointAndSegment = exports.PointAndRay = exports.PointAndLine = exports.PointAndPoint = void 0;
var PointAndPoint = __importStar(__webpack_require__(/*! ./PointAndPoint */ "./src/Collision2/PointAndPoint.ts"));
exports.PointAndPoint = PointAndPoint;
var PointAndLine = __importStar(__webpack_require__(/*! ./PointAndLine */ "./src/Collision2/PointAndLine.ts"));
exports.PointAndLine = PointAndLine;
var PointAndRay = __importStar(__webpack_require__(/*! ./PointAndRay */ "./src/Collision2/PointAndRay.ts"));
exports.PointAndRay = PointAndRay;
var PointAndSegment = __importStar(__webpack_require__(/*! ./PointAndSegment */ "./src/Collision2/PointAndSegment.ts"));
exports.PointAndSegment = PointAndSegment;
var PointAndCircle = __importStar(__webpack_require__(/*! ./PointAndCircle */ "./src/Collision2/PointAndCircle.ts"));
exports.PointAndCircle = PointAndCircle;
var PointAndRect = __importStar(__webpack_require__(/*! ./PointAndRect */ "./src/Collision2/PointAndRect.ts"));
exports.PointAndRect = PointAndRect;
var PointAndBox = __importStar(__webpack_require__(/*! ./PointAndBox */ "./src/Collision2/PointAndBox.ts"));
exports.PointAndBox = PointAndBox;
var PointAndTriangle = __importStar(__webpack_require__(/*! ./PointAndTriangle */ "./src/Collision2/PointAndTriangle.ts"));
exports.PointAndTriangle = PointAndTriangle;
var PointAndCapsule = __importStar(__webpack_require__(/*! ./PointAndCapsule */ "./src/Collision2/PointAndCapsule.ts"));
exports.PointAndCapsule = PointAndCapsule;
var PointAndEllipse = __importStar(__webpack_require__(/*! ./PointAndEllipse */ "./src/Collision2/PointAndEllipse.ts"));
exports.PointAndEllipse = PointAndEllipse;
var LineAndLine = __importStar(__webpack_require__(/*! ./LineAndLine */ "./src/Collision2/LineAndLine.ts"));
exports.LineAndLine = LineAndLine;
var LineAndRay = __importStar(__webpack_require__(/*! ./LineAndRay */ "./src/Collision2/LineAndRay.ts"));
exports.LineAndRay = LineAndRay;
var LineAndSegment = __importStar(__webpack_require__(/*! ./LineAndSegment */ "./src/Collision2/LineAndSegment.ts"));
exports.LineAndSegment = LineAndSegment;
var LineAndCircle = __importStar(__webpack_require__(/*! ./LineAndCircle */ "./src/Collision2/LineAndCircle.ts"));
exports.LineAndCircle = LineAndCircle;
var LineAndRect = __importStar(__webpack_require__(/*! ./LineAndRect */ "./src/Collision2/LineAndRect.ts"));
exports.LineAndRect = LineAndRect;
var LineAndBox = __importStar(__webpack_require__(/*! ./LineAndBox */ "./src/Collision2/LineAndBox.ts"));
exports.LineAndBox = LineAndBox;
var LineAndTriangle = __importStar(__webpack_require__(/*! ./LineAndTriangle */ "./src/Collision2/LineAndTriangle.ts"));
exports.LineAndTriangle = LineAndTriangle;
var LineAndCapsule = __importStar(__webpack_require__(/*! ./LineAndCapsule */ "./src/Collision2/LineAndCapsule.ts"));
exports.LineAndCapsule = LineAndCapsule;
var LineAndEllipse = __importStar(__webpack_require__(/*! ./LineAndEllipse */ "./src/Collision2/LineAndEllipse.ts"));
exports.LineAndEllipse = LineAndEllipse;
var RayAndRay = __importStar(__webpack_require__(/*! ./RayAndRay */ "./src/Collision2/RayAndRay.ts"));
exports.RayAndRay = RayAndRay;
var RayAndSegment = __importStar(__webpack_require__(/*! ./RayAndSegment */ "./src/Collision2/RayAndSegment.ts"));
exports.RayAndSegment = RayAndSegment;
var SegmentAndSegment = __importStar(__webpack_require__(/*! ./SegmentAndSegment */ "./src/Collision2/SegmentAndSegment.ts"));
exports.SegmentAndSegment = SegmentAndSegment;
var CircleAndCircle = __importStar(__webpack_require__(/*! ./CircleAndCircle */ "./src/Collision2/CircleAndCircle.ts"));
exports.CircleAndCircle = CircleAndCircle;
var RectAndRect = __importStar(__webpack_require__(/*! ./RectAndRect */ "./src/Collision2/RectAndRect.ts"));
exports.RectAndRect = RectAndRect;
var BoxAndBox = __importStar(__webpack_require__(/*! ./BoxAndBox */ "./src/Collision2/BoxAndBox.ts"));
exports.BoxAndBox = BoxAndBox;


/***/ }),

/***/ "./src/Define.ts":
/*!***********************!*\
  !*** ./src/Define.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EPSILON = void 0;
exports.EPSILON = 0.00001;


/***/ }),

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

/***/ "./src/Matrix3.ts":
/*!************************!*\
  !*** ./src/Matrix3.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Matrix3 = (function () {
    function Matrix3(v) {
        this.v = v.slice();
    }
    Matrix3.prototype.translate = function (tx, ty) {
        return Matrix3.multiply(this, Matrix3.translation(tx, ty));
    };
    Matrix3.prototype.rotate = function (radian) {
        return Matrix3.multiply(this, Matrix3.rotation(radian));
    };
    Matrix3.prototype.scale = function (sx, sy) {
        return Matrix3.multiply(this, Matrix3.scaling(sx, sy));
    };
    Matrix3.prototype.multiply = function (m) {
        return Matrix3.multiply(this, m);
    };
    Object.defineProperty(Matrix3.prototype, "determinant", {
        get: function () {
            return Matrix3.determinant(this.v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix3.prototype, "trans", {
        get: function () {
            return Matrix3.trans(this.v);
        },
        enumerable: false,
        configurable: true
    });
    Matrix3.prototype.toString = function () {
        var v = this.v;
        return "[\n  " + v[0] + ", " + v[1] + ", " + v[2] + ",\n  " + v[3] + ", " + v[4] + ", " + v[5] + ",\n  " + v[6] + ", " + v[7] + ", " + v[8] + ",\n]";
    };
    Object.defineProperty(Matrix3, "identity", {
        get: function () {
            return new Matrix3([
                1, 0, 0,
                0, 1, 0,
                0, 0, 1,
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix3, "zero", {
        get: function () {
            return new Matrix3([
                0, 0, 0,
                0, 0, 0,
                0, 0, 0,
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Matrix3.translation = function (tx, ty) {
        return new Matrix3([
            1, 0, 0,
            0, 1, 0,
            tx, ty, 1
        ]);
    };
    Matrix3.rotation = function (radian) {
        var c = Math.cos(radian);
        var s = Math.sin(radian);
        return new Matrix3([
            c, -s, 0,
            s, c, 0,
            0, 0, 1,
        ]);
    };
    Matrix3.scaling = function (sx, sy) {
        return new Matrix3([
            sx, 0, 0,
            0, sy, 0,
            0, 0, 1,
        ]);
    };
    Matrix3.multiply = function (a, b) {
        var m = Matrix3.zero;
        for (var r = 0; r < 3; ++r) {
            for (var c = 0; c < 3; ++c) {
                for (var n = 0; n < 3; ++n) {
                    m.v[r * 3 + c] += a.v[r * 3 + n] * b.v[n * 3 + c];
                }
            }
        }
        return m;
    };
    Matrix3.projection = function (width, height) {
        var x = 1 / width;
        var y = 1 / height;
        return new Matrix3([
            x, 0, 0,
            0, y, 0,
            0, 0, 1,
        ]);
    };
    Matrix3.determinant = function (m) {
        var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], m4 = m[4], m5 = m[5], m6 = m[6], m7 = m[7], m8 = m[8];
        return (m0 * m4 * m8 + m1 * m5 * m6 + m2 * m3 * m7)
            - (m2 * m4 * m6 + m5 * m7 * m0 + m8 * m1 * m3);
    };
    Matrix3.trans = function (m) {
        return new Matrix3([
            m[0], m[3], m[6],
            m[1], m[4], m[7],
            m[2], m[5], m[8]
        ]);
    };
    Matrix3.cofactor = function (r, c, m) {
        var a = Math.pow((-1), (r + c));
        var d = m[0] * m[3] - m[1] * m[2];
        return a * d;
    };
    return Matrix3;
}());
exports.default = Matrix3;


/***/ }),

/***/ "./src/Matrix4.ts":
/*!************************!*\
  !*** ./src/Matrix4.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Matrix3_1 = __importDefault(__webpack_require__(/*! ./Matrix3 */ "./src/Matrix3.ts"));
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Vector3 */ "./src/Vector3.ts"));
var Matrix4 = (function () {
    function Matrix4(v) {
        this.v = v.slice();
    }
    Matrix4.prototype.translate = function (tx, ty, tz) {
        return Matrix4.multiply(this, Matrix4.translation(tx, ty, tz));
    };
    Matrix4.prototype.xRotate = function (radian) {
        return Matrix4.multiply(this, Matrix4.xRotation(radian));
    };
    Matrix4.prototype.yRotate = function (radian) {
        return Matrix4.multiply(this, Matrix4.yRotation(radian));
    };
    Matrix4.prototype.zRotate = function (radian) {
        return Matrix4.multiply(this, Matrix4.zRotation(radian));
    };
    Matrix4.prototype.scale = function (sx, sy, sz) {
        return Matrix4.multiply(this, Matrix4.scaling(sx, sy, sz));
    };
    Matrix4.prototype.multiply = function (m) {
        return Matrix4.multiply(this, m);
    };
    Object.defineProperty(Matrix4.prototype, "inverse", {
        get: function () {
            return Matrix4.inverse(this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4.prototype, "determinant", {
        get: function () {
            return Matrix4.determinant(this.v);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4.prototype, "trans", {
        get: function () {
            return Matrix4.trans(this.v);
        },
        enumerable: false,
        configurable: true
    });
    Matrix4.prototype.toString = function () {
        var v = this.v;
        return "[\n  " + v[0] + ", " + v[1] + ", " + v[2] + ", " + v[3] + "\n  " + v[4] + ", " + v[5] + ", " + v[6] + ", " + v[7] + "\n  " + v[8] + ", " + v[9] + ", " + v[10] + ", " + v[11] + "\n  " + v[12] + ", " + v[13] + ", " + v[14] + ", " + v[15] + "\n]";
    };
    Object.defineProperty(Matrix4, "identity", {
        get: function () {
            return new Matrix4([
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1,
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix4, "zero", {
        get: function () {
            return new Matrix4([
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
                0, 0, 0, 0,
            ]);
        },
        enumerable: false,
        configurable: true
    });
    Matrix4.translation = function (tx, ty, tz) {
        return new Matrix4([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            tx, ty, tz, 1,
        ]);
    };
    Matrix4.xRotation = function (radian) {
        var c = Math.cos(radian);
        var s = Math.sin(radian);
        return new Matrix4([
            1, 0, 0, 0,
            0, c, s, 0,
            0, -s, c, 0,
            0, 0, 0, 1,
        ]);
    };
    Matrix4.yRotation = function (radian) {
        var c = Math.cos(radian);
        var s = Math.sin(radian);
        return new Matrix4([
            c, 0, -s, 0,
            0, 1, 0, 0,
            s, 0, c, 0,
            0, 0, 0, 1,
        ]);
    };
    Matrix4.zRotation = function (radian) {
        var c = Math.cos(radian);
        var s = Math.sin(radian);
        return new Matrix4([
            c, -s, 0, 0,
            s, c, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1,
        ]);
    };
    Matrix4.scaling = function (sx, sy, sz) {
        return new Matrix4([
            sx, 0, 0, 0,
            0, sy, 0, 0,
            0, 0, sz, 0,
            0, 0, 0, 1,
        ]);
    };
    Matrix4.multiply = function (a, b) {
        var m = Matrix4.zero;
        for (var r = 0; r < 4; ++r) {
            for (var c = 0; c < 4; ++c) {
                for (var n = 0; n < 4; ++n) {
                    m.v[r * 4 + c] += a.v[r * 4 + n] * b.v[n * 4 + c];
                }
            }
        }
        return m;
    };
    Matrix4.orthographic = function (left, right, top, bottom, near, far) {
        var w = right - left;
        var h = bottom - top;
        var d = far - near;
        return new Matrix4([
            2 / w, 0, 0, 0,
            0, 2 / h, 0, 0,
            0, 0, 2 / d, 0,
            0, 0, 0, 1,
        ]);
    };
    Matrix4.perspective = function (fovY, aspect, near, far) {
        var f = Math.tan(Math.PI * 0.5 - 0.5 * fovY);
        var rangeInv = 1.0 / (far - near);
        return new Matrix4([
            f / aspect, 0, 0, 0,
            0, f, 0, 0,
            0, 0, (far + near) * rangeInv, 1,
            0, 0, -2 * near * far * rangeInv, 0,
        ]);
    };
    Matrix4.determinant = function (m) {
        var m0 = m[0], m1 = m[1], m2 = m[2], m3 = m[3], m4 = m[4], m5 = m[5], m6 = m[6], m7 = m[7], m8 = m[8], m9 = m[9], m10 = m[10], m11 = m[11], m12 = m[12], m13 = m[13], m14 = m[14], m15 = m[15];
        var t1 = m0 * Matrix3_1.default.determinant([
            m5, m6, m7,
            m9, m10, m11,
            m13, m14, m15,
        ]);
        var t2 = -m1 * Matrix3_1.default.determinant([
            m4, m6, m7,
            m8, m10, m11,
            m12, m14, m15,
        ]);
        var t3 = m2 * Matrix3_1.default.determinant([
            m4, m5, m7,
            m8, m9, m11,
            m12, m13, m15,
        ]);
        var t4 = -m3 * Matrix3_1.default.determinant([
            m4, m5, m6,
            m8, m9, m10,
            m12, m13, m14,
        ]);
        return t1 + t2 + t3 + t4;
    };
    Matrix4.trans = function (m) {
        return new Matrix4([
            m[0], m[4], m[8], m[12],
            m[1], m[5], m[9], m[13],
            m[2], m[6], m[10], m[14],
            m[3], m[7], m[11], m[15],
        ]);
    };
    Matrix4.inverse = function (m) {
        var _a = m.v, m0 = _a[0], m1 = _a[1], m2 = _a[2], m3 = _a[3], m4 = _a[4], m5 = _a[5], m6 = _a[6], m7 = _a[7], m8 = _a[8], m9 = _a[9], m10 = _a[10], m11 = _a[11], m12 = _a[12], m13 = _a[13], m14 = _a[14], m15 = _a[15];
        var d = 1.0 / Matrix4.determinant(m.v);
        var c11 = d * Matrix4.cofactor(1, 1, [m5, m6, m7, m9, m10, m11, m13, m14, m15]);
        var c12 = d * Matrix4.cofactor(1, 2, [m4, m6, m7, m8, m10, m11, m12, m14, m15]);
        var c13 = d * Matrix4.cofactor(1, 3, [m4, m5, m7, m8, m9, m11, m12, m13, m15]);
        var c14 = d * Matrix4.cofactor(1, 4, [m4, m5, m6, m8, m9, m10, m12, m13, m14]);
        var c21 = d * Matrix4.cofactor(2, 1, [m1, m2, m3, m9, m10, m11, m13, m14, m15]);
        var c22 = d * Matrix4.cofactor(2, 2, [m0, m2, m3, m8, m10, m11, m12, m14, m15]);
        var c23 = d * Matrix4.cofactor(2, 3, [m0, m1, m3, m8, m9, m11, m12, m13, m15]);
        var c24 = d * Matrix4.cofactor(2, 4, [m0, m1, m2, m8, m9, m10, m12, m13, m14]);
        var c31 = d * Matrix4.cofactor(3, 1, [m1, m2, m3, m5, m6, m7, m13, m14, m15]);
        var c32 = d * Matrix4.cofactor(3, 2, [m0, m2, m3, m4, m6, m7, m12, m14, m15]);
        var c33 = d * Matrix4.cofactor(3, 3, [m0, m1, m3, m4, m5, m7, m12, m13, m15]);
        var c34 = d * Matrix4.cofactor(3, 4, [m0, m1, m2, m4, m5, m6, m12, m13, m14]);
        var c41 = d * Matrix4.cofactor(4, 1, [m1, m2, m3, m5, m6, m7, m9, m10, m11]);
        var c42 = d * Matrix4.cofactor(4, 2, [m0, m2, m3, m4, m6, m7, m8, m10, m11]);
        var c43 = d * Matrix4.cofactor(4, 3, [m0, m1, m3, m4, m5, m7, m8, m9, m11]);
        var c44 = d * Matrix4.cofactor(4, 4, [m0, m1, m2, m4, m5, m6, m8, m9, m10]);
        return Matrix4.trans([
            c11, c12, c13, c14,
            c21, c22, c23, c24,
            c31, c32, c33, c34,
            c41, c42, c43, c44,
        ]);
    };
    Matrix4.inverse2 = function (mat) {
        var m = mat.v;
        var m00 = m[0 * 4 + 0];
        var m01 = m[0 * 4 + 1];
        var m02 = m[0 * 4 + 2];
        var m03 = m[0 * 4 + 3];
        var m10 = m[1 * 4 + 0];
        var m11 = m[1 * 4 + 1];
        var m12 = m[1 * 4 + 2];
        var m13 = m[1 * 4 + 3];
        var m20 = m[2 * 4 + 0];
        var m21 = m[2 * 4 + 1];
        var m22 = m[2 * 4 + 2];
        var m23 = m[2 * 4 + 3];
        var m30 = m[3 * 4 + 0];
        var m31 = m[3 * 4 + 1];
        var m32 = m[3 * 4 + 2];
        var m33 = m[3 * 4 + 3];
        var tmp_0 = m22 * m33;
        var tmp_1 = m32 * m23;
        var tmp_2 = m12 * m33;
        var tmp_3 = m32 * m13;
        var tmp_4 = m12 * m23;
        var tmp_5 = m22 * m13;
        var tmp_6 = m02 * m33;
        var tmp_7 = m32 * m03;
        var tmp_8 = m02 * m23;
        var tmp_9 = m22 * m03;
        var tmp_10 = m02 * m13;
        var tmp_11 = m12 * m03;
        var tmp_12 = m20 * m31;
        var tmp_13 = m30 * m21;
        var tmp_14 = m10 * m31;
        var tmp_15 = m30 * m11;
        var tmp_16 = m10 * m21;
        var tmp_17 = m20 * m11;
        var tmp_18 = m00 * m31;
        var tmp_19 = m30 * m01;
        var tmp_20 = m00 * m21;
        var tmp_21 = m20 * m01;
        var tmp_22 = m00 * m11;
        var tmp_23 = m10 * m01;
        var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
            (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
        var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
            (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
        var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
            (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
        var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
            (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
        var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
        return new Matrix4([
            d * t0,
            d * t1,
            d * t2,
            d * t3,
            d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
                (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
            d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
                (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
            d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
                (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
            d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
                (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
            d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
                (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
            d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
                (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
            d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
                (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
            d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
                (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
            d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
                (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
            d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
                (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
            d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
                (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
            d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
                (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
        ]);
    };
    Matrix4.cofactor = function (r, c, m) {
        var a = Math.pow((-1), (r + c));
        var d = Matrix3_1.default.determinant(m);
        return a * d;
    };
    Matrix4.lookAt = function (position, target, up) {
        var z = Vector3_1.default.sub(target, position).normalized;
        var x = Vector3_1.default.cross(up, z);
        var y = Vector3_1.default.cross(z, x);
        return new Matrix4([
            x.x, x.y, x.z, 0,
            y.x, y.y, y.z, 0,
            z.x, z.y, z.z, 0,
            position.x, position.y, position.z, 1,
        ]);
    };
    return Matrix4;
}());
exports.default = Matrix4;


/***/ }),

/***/ "./src/Primitive2.ts":
/*!***************************!*\
  !*** ./src/Primitive2.ts ***!
  \***************************/
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
exports.Triangle = exports.Box = exports.Rect = exports.Capsule = exports.Ellipse = exports.Circle = exports.Segment = exports.Ray = exports.Line = void 0;
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
    Line.prototype.point = function (f) {
        return Vector2_1.default.add(this.p, this.v.normalize.times(f));
    };
    Line.prototype.points = function (length) {
        var halfLength = length / 2;
        var p1 = this.point(-halfLength);
        var p2 = this.point(halfLength);
        return [p1.x, p1.y, p2.x, p2.y];
    };
    return Line;
}());
exports.Line = Line;
var Ray = (function (_super) {
    __extends(Ray, _super);
    function Ray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ray.prototype.points = function (length) {
        var p1 = this.p;
        var p2 = this.point(length);
        return [p1.x, p1.y, p2.x, p2.y];
    };
    return Ray;
}(Line));
exports.Ray = Ray;
var Segment = (function () {
    function Segment(p, v) {
        this._p = new Vector2_1.default(p.x, p.y);
        this._v = new Vector2_1.default(v.x, v.y);
    }
    Object.defineProperty(Segment.prototype, "p1", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "p2", {
        get: function () { return Vector2_1.default.add(this._p, this.v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "v", {
        get: function () { return this._v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Segment.prototype, "points", {
        get: function () {
            var _a = this, s = _a.p1, e = _a.p2;
            return [s.x, s.y, e.x, e.y];
        },
        enumerable: false,
        configurable: true
    });
    Segment.prototype.toLine = function () { return new Line(this._p, this._v); };
    return Segment;
}());
exports.Segment = Segment;
var Circle = (function () {
    function Circle(p, r) {
        this._p = p.clone();
        this._r = r;
    }
    Object.defineProperty(Circle.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "r", {
        get: function () { return this._r; },
        set: function (v) { this._r = v; },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
exports.Circle = Circle;
var Ellipse = (function () {
    function Ellipse(p, rx, ry, angle) {
        this._rad = 0;
        this._p = p.clone();
        this._r = new Vector2_1.default(rx, ry);
        this.angle = angle;
    }
    Object.defineProperty(Ellipse.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "r", {
        get: function () { return this._r; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "rx", {
        get: function () { return this._r.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "ry", {
        get: function () { return this._r.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "rad", {
        get: function () { return this._rad; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ellipse.prototype, "angle", {
        get: function () { return Util.rad2deg(this._rad); },
        set: function (v) { this._rad = Util.deg2rad(v); },
        enumerable: false,
        configurable: true
    });
    return Ellipse;
}());
exports.Ellipse = Ellipse;
var Capsule = (function () {
    function Capsule(s, r) {
        this._s = s;
        this._r = r;
    }
    Object.defineProperty(Capsule.prototype, "s", {
        get: function () { return this._s; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Capsule.prototype, "r", {
        get: function () { return this._r; },
        set: function (v) { this._r = v; },
        enumerable: false,
        configurable: true
    });
    return Capsule;
}());
exports.Capsule = Capsule;
var Rect = (function () {
    function Rect(p, w, h) {
        this._p = p;
        this._w = w;
        this._h = h;
    }
    Object.defineProperty(Rect.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "w", {
        get: function () { return this._w; },
        set: function (v) { this._w = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "h", {
        get: function () { return this._h; },
        set: function (v) { this._h = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "c", {
        get: function () {
            return new Vector2_1.default(this._p.x + this._w / 2, this._p.y - this._h / 2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "p1", {
        get: function () {
            return this.p.clone();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this.p.x + this.w, this.p.y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this.p.x + this.w, this.p.y - this.h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(this.p.x, this.p.y - this.h);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "v1to2", {
        get: function () {
            return Vector2_1.default.sub(this.p2, this.p1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "v2to3", {
        get: function () {
            return Vector2_1.default.sub(this.p3, this.p2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "v3to4", {
        get: function () {
            return Vector2_1.default.sub(this.p4, this.p3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "v4to1", {
        get: function () {
            return Vector2_1.default.sub(this.p1, this.p4);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "minX", {
        get: function () {
            return this._p.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "maxX", {
        get: function () {
            return this._p.x + this._w;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "minY", {
        get: function () {
            return this._p.y - this._h;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rect.prototype, "maxY", {
        get: function () {
            return this._p.y;
        },
        enumerable: false,
        configurable: true
    });
    return Rect;
}());
exports.Rect = Rect;
var Box = (function () {
    function Box(p, r, angle) {
        this._rad = 0;
        this._p = p;
        this._r = r;
        this.angle = angle;
    }
    Object.defineProperty(Box.prototype, "p", {
        get: function () { return this._p; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "r", {
        get: function () { return this._r; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "rx", {
        get: function () { return this._r.x; },
        set: function (v) { this._r.x = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "ry", {
        get: function () { return this._r.y; },
        set: function (v) { this._r.y = v; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "w", {
        get: function () { return this.rx * 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "h", {
        get: function () { return this.ry * 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "angle", {
        get: function () { return Util.rad2deg(this._rad); },
        set: function (v) { this._rad = Util.deg2rad(v); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "p1", {
        get: function () {
            return new Vector2_1.default(-this._r.x, this._r.y).rotate(this._rad).add(this.p);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "p2", {
        get: function () {
            return new Vector2_1.default(this._r.x, this._r.y).rotate(this._rad).add(this.p);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "p3", {
        get: function () {
            return new Vector2_1.default(this._r.x, -this._r.y).rotate(this._rad).add(this.p);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "p4", {
        get: function () {
            return new Vector2_1.default(-this._r.x, -this._r.y).rotate(this._rad).add(this.p);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "v1to2", {
        get: function () {
            return Vector2_1.default.sub(this.p2, this.p1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "v2to3", {
        get: function () {
            return Vector2_1.default.sub(this.p3, this.p2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "v3to4", {
        get: function () {
            return Vector2_1.default.sub(this.p4, this.p3);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Box.prototype, "v4to1", {
        get: function () {
            return Vector2_1.default.sub(this.p1, this.p4);
        },
        enumerable: false,
        configurable: true
    });
    return Box;
}());
exports.Box = Box;
var Triangle = (function () {
    function Triangle(p1, p2, p3) {
        this._p1 = p1;
        this._p2 = p2;
        this._p3 = p3;
    }
    Object.defineProperty(Triangle.prototype, "p1", {
        get: function () { return this._p1; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "p2", {
        get: function () { return this._p2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "p3", {
        get: function () { return this._p3; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "points", {
        get: function () {
            return [
                this._p1.x, this._p1.y,
                this._p2.x, this._p2.y,
                this._p3.x, this._p3.y,
            ];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "v1to2", {
        get: function () {
            return Vector2_1.default.sub(this.p2, this.p1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "v2to3", {
        get: function () {
            return Vector2_1.default.sub(this.p3, this.p2);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle.prototype, "v3to1", {
        get: function () {
            return Vector2_1.default.sub(this.p1, this.p3);
        },
        enumerable: false,
        configurable: true
    });
    return Triangle;
}());
exports.Triangle = Triangle;


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

/***/ "./src/Triangle2.ts":
/*!**************************!*\
  !*** ./src/Triangle2.ts ***!
  \**************************/
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
var Triangle2 = (function () {
    function Triangle2(p) {
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
    Object.defineProperty(Triangle2.prototype, "A", {
        get: function () { return this._A; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "B", {
        get: function () { return this._B; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "C", {
        get: function () { return this._C; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "AB", {
        get: function () {
            return Vector2_1.default.sub(this.B, this.A);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "BC", {
        get: function () {
            return Vector2_1.default.sub(this.C, this.B);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "CA", {
        get: function () {
            return Vector2_1.default.sub(this.A, this.C);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "a", {
        get: function () {
            return this.BC.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "b", {
        get: function () {
            return this.CA.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "c", {
        get: function () {
            return this.AB.magnitude;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "sortedLength", {
        get: function () {
            var _a = this, a = _a.a, b = _a.b, c = _a.c;
            var list = [a, b, c];
            list.sort(function (a, b) { return b - a; });
            return list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "maxSideName", {
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
    Object.defineProperty(Triangle2.prototype, "minSideName", {
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
    Triangle2.prototype.getLengthAt = function (sideName) {
        switch (sideName) {
            case "BC": return this.a;
            case "CA": return this.b;
            case "AB": return this.c;
        }
        return 0;
    };
    Object.defineProperty(Triangle2.prototype, "maxLength", {
        get: function () {
            return this.getLengthAt(this.maxSideName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "minLength", {
        get: function () {
            return this.getLengthAt(this.minSideName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "maxCornerName", {
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
    Object.defineProperty(Triangle2.prototype, "minCornerName", {
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
    Object.defineProperty(Triangle2.prototype, "cosA", {
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
    Object.defineProperty(Triangle2.prototype, "cosB", {
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
    Object.defineProperty(Triangle2.prototype, "cosC", {
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
    Object.defineProperty(Triangle2.prototype, "sinA", {
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
    Object.defineProperty(Triangle2.prototype, "sinB", {
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
    Object.defineProperty(Triangle2.prototype, "sinC", {
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
    Object.defineProperty(Triangle2.prototype, "tanA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinA = _a.sinA, cosA = _a.cosA;
            return sinA / cosA;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "tanB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinB = _a.sinB, cosB = _a.cosB;
            return sinB / cosB;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "tanC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, sinC = _a.sinC, cosC = _a.cosC;
            return sinC / Number(cosC.toFixed(15));
        },
        enumerable: false,
        configurable: true
    });
    Triangle2.prototype.getCosAt = function (cornerName) {
        switch (cornerName) {
            case "A": return this.cosA;
            case "B": return this.cosB;
            case "C": return this.cosC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2.prototype, "maxCornerCos", {
        get: function () {
            return this.getCosAt(this.maxCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "minCornerCos", {
        get: function () {
            return this.getCosAt(this.minCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Triangle2.prototype.getSinAt = function (cornerName) {
        switch (cornerName) {
            case "A": return this.sinA;
            case "B": return this.sinB;
            case "C": return this.sinC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2.prototype, "maxCornerSin", {
        get: function () {
            return this.getSinAt(this.maxCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "minCornerSin", {
        get: function () {
            return this.getSinAt(this.minCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Triangle2.prototype.getTanAt = function (connerName) {
        switch (connerName) {
            case "A": return this.tanA;
            case "B": return this.tanB;
            case "C": return this.tanC;
        }
        return 0;
    };
    Object.defineProperty(Triangle2.prototype, "maxCornerTan", {
        get: function () {
            return this.getTanAt(this.maxCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "minCornerTan", {
        get: function () {
            return this.getTanAt(this.minCornerName);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "radA", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosA = this.cosA;
            return Math.acos(cosA);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "radB", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosB = this.cosB;
            return Math.acos(cosB);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "radC", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var cosC = this.cosC;
            return Math.acos(cosC);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "area", {
        get: function () {
            var _a = this, b = _a.b, c = _a.c, sinA = _a.sinA;
            return (b * c * sinA) * 0.5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "outerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, sinA = _a.sinA;
            return a / (2 * sinA);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "innerRadius", {
        get: function () {
            if (this.isInvalid)
                return 0;
            var _a = this, a = _a.a, b = _a.b, c = _a.c, area = _a.area;
            return (2 * area) / (a + b + c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "center", {
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
    Object.defineProperty(Triangle2.prototype, "outerCenter", {
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
    Object.defineProperty(Triangle2.prototype, "innerCenter", {
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
    Object.defineProperty(Triangle2.prototype, "isInvalid", {
        get: function () {
            var list = this.sortedLength;
            var a = list[0], b = list[1], c = list[2];
            return !(a < b + c);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Triangle2.prototype, "type", {
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
    Triangle2.prototype.toString = function () {
        var _a = this, A = _a.A, B = _a.B, C = _a.C;
        return "A" + A + ", B" + B + ", C" + C;
    };
    return Triangle2;
}());
exports.default = Triangle2;


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
        return this;
    };
    Vector2.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };
    Vector2.prototype.dot = function (v) {
        return Vector2.dot(this, v);
    };
    Vector2.prototype.cross = function (v) {
        return Vector2.cross(this, v);
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
    Vector2.midpoint = function (v1, v2) {
        return v1.clone().add(v2).times(0.5);
    };
    Vector2.isAcuteAngle = function (base, p1, p2) {
        var v1 = Vector2.sub(p1, base);
        var v2 = Vector2.sub(p2, base);
        return (0 < v1.dot(v2));
    };
    Vector2.isObtuseAngle = function (base, p1, p2) {
        var v1 = Vector2.sub(p1, base);
        var v2 = Vector2.sub(p2, base);
        return (v1.dot(v2) < 0);
    };
    return Vector2;
}());
exports.default = Vector2;


/***/ }),

/***/ "./src/Vector3.ts":
/*!************************!*\
  !*** ./src/Vector3.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Vector3 = (function () {
    function Vector3(x, y, z) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (z === void 0) { z = 0; }
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Vector3.prototype.add = function (a) {
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;
        return this;
    };
    Vector3.prototype.sub = function (a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;
        return this;
    };
    Vector3.prototype.times = function (num) {
        this.x *= num;
        this.y *= num;
        this.z *= num;
        return this;
    };
    Vector3.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ", " + this.z + ")";
    };
    Object.defineProperty(Vector3.prototype, "normalized", {
        get: function () {
            return Vector3.normalize(this);
        },
        enumerable: false,
        configurable: true
    });
    Vector3.add = function (a, b) {
        return new Vector3(a.x + b.x, a.y + b.y, a.z + b.z);
    };
    Vector3.sub = function (a, b) {
        return new Vector3(a.x - b.x, a.y - b.y, a.z - b.z);
    };
    Vector3.times = function (a, num) {
        return new Vector3(a.x * num, a.y * num, a.z * num);
    };
    Vector3.normalize = function (v) {
        var length = Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2) + Math.pow(v.z, 2));
        if (0.00001 < length) {
            return new Vector3(v.x / length, v.y / length, v.z / length);
        }
        else {
            return Vector3.zero;
        }
    };
    Vector3.dot = function (a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    };
    Vector3.cross = function (a, b) {
        var x = a.y * b.z - a.z * b.y;
        var y = a.z * b.x - a.x * b.z;
        var z = a.x * b.y - a.y * b.x;
        return new Vector3(x, y, z);
    };
    Object.defineProperty(Vector3, "zero", {
        get: function () {
            return new Vector3(0, 0, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "one", {
        get: function () {
            return new Vector3(1, 1, 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "up", {
        get: function () {
            return new Vector3(0, 1, 0);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector3, "down", {
        get: function () {
            return new Vector3(0, -1, 0);
        },
        enumerable: false,
        configurable: true
    });
    return Vector3;
}());
exports.default = Vector3;


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
exports.Collision2 = exports.Primitive2 = exports.Triangle2 = exports.Matrix4 = exports.Matrix3 = exports.Vector3 = exports.Vector2 = exports.Quadratic = exports.Linear = exports.Define = exports.Util = void 0;
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/util.ts"));
exports.Util = Util;
var Define = __importStar(__webpack_require__(/*! ./Define */ "./src/Define.ts"));
exports.Define = Define;
var Vector2_1 = __importDefault(__webpack_require__(/*! ./Vector2 */ "./src/Vector2.ts"));
exports.Vector2 = Vector2_1.default;
var Vector3_1 = __importDefault(__webpack_require__(/*! ./Vector3 */ "./src/Vector3.ts"));
exports.Vector3 = Vector3_1.default;
var Matrix3_1 = __importDefault(__webpack_require__(/*! ./Matrix3 */ "./src/Matrix3.ts"));
exports.Matrix3 = Matrix3_1.default;
var Matrix4_1 = __importDefault(__webpack_require__(/*! ./Matrix4 */ "./src/Matrix4.ts"));
exports.Matrix4 = Matrix4_1.default;
var Quadratic_1 = __importDefault(__webpack_require__(/*! ./Quadratic */ "./src/Quadratic.ts"));
exports.Quadratic = Quadratic_1.default;
var Linear_1 = __importDefault(__webpack_require__(/*! ./Linear */ "./src/Linear.ts"));
exports.Linear = Linear_1.default;
var Triangle2_1 = __importDefault(__webpack_require__(/*! ./Triangle2 */ "./src/Triangle2.ts"));
exports.Triangle2 = Triangle2_1.default;
var Primitive2 = __importStar(__webpack_require__(/*! ./Primitive2 */ "./src/Primitive2.ts"));
exports.Primitive2 = Primitive2;
var Collision2 = __importStar(__webpack_require__(/*! ./Collision2 */ "./src/Collision2/index.ts"));
exports.Collision2 = Collision2;


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.lerp = exports.cramp = exports.round = exports.rad2deg = exports.deg2rad = exports.unifySign = void 0;
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
exports.lerp = function (from, to, rate) {
    return from + ((to - from) * rate);
};


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Cb3hBbmRCb3gudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0NpcmNsZUFuZENpcmNsZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvTGluZUFuZEJveC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvTGluZUFuZENhcHN1bGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0xpbmVBbmRDaXJjbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0xpbmVBbmRFbGxpcHNlLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9MaW5lQW5kTGluZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvTGluZUFuZFJheS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvTGluZUFuZFJlY3QudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0xpbmVBbmRTZWdtZW50LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9MaW5lQW5kVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kQm94LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZENhcHN1bGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kQ2lyY2xlLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZEVsbGlwc2UudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kTGluZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRQb2ludC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRSYXkudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kUmVjdC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRTZWdtZW50LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFRyaWFuZ2xlLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9SYXlBbmRSYXkudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1JheUFuZFNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1JlY3RBbmRSZWN0LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9TZWdtZW50QW5kU2VnbWVudC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9EZWZpbmUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9MaW5lYXIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9NYXRyaXgzLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTWF0cml4NC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL1ByaW1pdGl2ZTIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9RdWFkcmF0aWMudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9UcmlhbmdsZTIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9WZWN0b3IyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVmVjdG9yMy50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCLFVBQVUsbUJBQU8sQ0FBQywwQkFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQywwQkFBMEI7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsMEJBQTBCO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDM0JhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzRGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMvQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCLFVBQVUsbUJBQU8sQ0FBQywwQkFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BELGdDQUFnQyxtQkFBTyxDQUFDLHdEQUFnQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pEYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRCxtQkFBbUIsbUJBQU8sQ0FBQywwQ0FBZTtBQUMxQyxTQUFTLG1CQUFPLENBQUMsb0NBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRCxVQUFVLG1CQUFPLENBQUMsMEJBQUk7QUFDdEIsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEdhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BELFVBQVUsbUJBQU8sQ0FBQywwQkFBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9CYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRCxVQUFVLG1CQUFPLENBQUMsMEJBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQSxTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLDBEQUEwRDtBQUNuRSxTQUFTLDBEQUEwRDtBQUNuRSxTQUFTO0FBQ1Q7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQsbUNBQW1DLG1CQUFPLENBQUMsOERBQW1CO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2QmE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLDBCQUEwQixtQkFBTyxDQUFDLGtDQUFXO0FBQzdDLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRWE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRCxVQUFVLG1CQUFPLENBQUMsMEJBQUk7QUFDdEIsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRCxVQUFVLG1CQUFPLENBQUMsMEJBQUk7QUFDdEIsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeERhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQSxTQUFTLDRDQUE0QztBQUNyRCxTQUFTLDRDQUE0QztBQUNyRCxTQUFTLDRDQUE0QztBQUNyRDtBQUNBLHFDQUFxQyxxQkFBcUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxVQUFVLG1CQUFPLENBQUMsMEJBQUk7QUFDdEIsU0FBUyxtQkFBTyxDQUFDLG9DQUFHO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3hDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLDBCQUFJO0FBQ3RCLFNBQVMsbUJBQU8sQ0FBQyxvQ0FBRztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLFVBQVUsbUJBQU8sQ0FBQywwQkFBSTtBQUN0QixTQUFTLG1CQUFPLENBQUMsb0NBQUc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDOUNhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsaUNBQWlDLG1CQUFPLENBQUMsMERBQWlCO0FBQzFEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsd0RBQWdCO0FBQ3hEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsc0RBQWU7QUFDdEQ7QUFDQSxtQ0FBbUMsbUJBQU8sQ0FBQyw4REFBbUI7QUFDOUQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0REFBa0I7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBZ0I7QUFDeEQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxzREFBZTtBQUN0RDtBQUNBLG9DQUFvQyxtQkFBTyxDQUFDLGdFQUFvQjtBQUNoRTtBQUNBLG1DQUFtQyxtQkFBTyxDQUFDLDhEQUFtQjtBQUM5RDtBQUNBLG1DQUFtQyxtQkFBTyxDQUFDLDhEQUFtQjtBQUM5RDtBQUNBLCtCQUErQixtQkFBTyxDQUFDLHNEQUFlO0FBQ3REO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMsb0RBQWM7QUFDcEQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw0REFBa0I7QUFDNUQ7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBaUI7QUFDMUQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxzREFBZTtBQUN0RDtBQUNBLDhCQUE4QixtQkFBTyxDQUFDLG9EQUFjO0FBQ3BEO0FBQ0EsbUNBQW1DLG1CQUFPLENBQUMsOERBQW1CO0FBQzlEO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNERBQWtCO0FBQzVEO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsNERBQWtCO0FBQzVEO0FBQ0EsNkJBQTZCLG1CQUFPLENBQUMsa0RBQWE7QUFDbEQ7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBaUI7QUFDMUQ7QUFDQSxxQ0FBcUMsbUJBQU8sQ0FBQyxrRUFBcUI7QUFDbEU7QUFDQSxtQ0FBbUMsbUJBQU8sQ0FBQyw4REFBbUI7QUFDOUQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxzREFBZTtBQUN0RDtBQUNBLDZCQUE2QixtQkFBTyxDQUFDLGtEQUFhO0FBQ2xEOzs7Ozs7Ozs7Ozs7O0FDdkVhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLDJCQUEyQixPQUFPO0FBQ2xDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxVGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25ELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsK0NBQStDLEVBQUU7QUFDM0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsNENBQTRDLG1DQUFtQztBQUMvRTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDLDJCQUEyQixhQUFhLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVELDJCQUEyQiw2QkFBNkIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsYUFBYSxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUMsMkJBQTJCLGVBQWUsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDLDJCQUEyQixlQUFlLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixvQkFBb0IsRUFBRTtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLG9CQUFvQixFQUFFO0FBQ2hEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUIsRUFBRTtBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGlCQUFpQixFQUFFO0FBQzdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsaUJBQWlCLEVBQUU7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDbmRhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLHFCQUFxQixFQUFFO0FBQ2xEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsVUFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFnRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOVhhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQTJDO0FBQzVDO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWMsRUFBRTtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUM5TWE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hHYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNkJBQVE7QUFDeEM7QUFDQSwwQkFBMEIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUM1QztBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUNBQWE7QUFDdkQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZEO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMseUNBQWM7QUFDcEQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQywrQ0FBYztBQUNwRDs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYXRoTGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWF0aExhYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNYXRoTGFiXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0hpdFNxdWFyZSA9IHZvaWQgMDtcclxudmFyIF8xID0gcmVxdWlyZShcIi5cIik7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0U3F1YXJlKGJveDEsIGJveDIpIHtcclxuICAgIHZhciBkaXN0U3EgPSBfXzEuVmVjdG9yMi5zdWIoYm94MS5wLCBib3gyLnApLnNxck1hZ25pdHVkZTtcclxuICAgIGlmIChkaXN0U3EgPCBNYXRoLnBvdygoYm94MS5yLnggKyBib3gyLnIueCksIDIpKVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgdmFyIGJveDFWZXJ0ZXggPSBbXHJcbiAgICAgICAgYm94MS5wMSwgYm94MS5wMiwgYm94MS5wMywgYm94MS5wNFxyXG4gICAgXTtcclxuICAgIHZhciBib3gyVmVydGV4ID0gW1xyXG4gICAgICAgIGJveDIucDEsIGJveDIucDIsIGJveDIucDMsIGJveDIucDRcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGJveDJWZXJ0ZXhfMSA9IGJveDJWZXJ0ZXg7IF9pIDwgYm94MlZlcnRleF8xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciB2ZXJ0ZXggPSBib3gyVmVydGV4XzFbX2ldO1xyXG4gICAgICAgIGlmIChfMS5Qb2ludEFuZEJveC5pc0hpdCh2ZXJ0ZXgsIGJveDEpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGZvciAodmFyIF9hID0gMCwgYm94MVZlcnRleF8xID0gYm94MVZlcnRleDsgX2EgPCBib3gxVmVydGV4XzEubGVuZ3RoOyBfYSsrKSB7XHJcbiAgICAgICAgdmFyIHZlcnRleCA9IGJveDFWZXJ0ZXhfMVtfYV07XHJcbiAgICAgICAgaWYgKF8xLlBvaW50QW5kQm94LmlzSGl0KHZlcnRleCwgYm94MikpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXRTcXVhcmUgPSBpc0hpdFNxdWFyZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQoY2lyY2xlMSwgY2lyY2xlMikge1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIoY2lyY2xlMi5wLCBjaXJjbGUxLnApO1xyXG4gICAgcmV0dXJuICh2LnNxck1hZ25pdHVkZSA8IE1hdGgucG93KChjaXJjbGUxLnIgKyBjaXJjbGUyLnIpLCAyKSk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QoY2lyY2xlMSwgY2lyY2xlMikge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgIHBvczogW10sXHJcbiAgICAgICAgdmg6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm8sXHJcbiAgICAgICAgdnY6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm8sXHJcbiAgICB9O1xyXG4gICAgdmFyIEMxID0gY2lyY2xlMS5wO1xyXG4gICAgdmFyIEMyID0gY2lyY2xlMi5wO1xyXG4gICAgdmFyIHZDMUMyID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKEMyLCBDMSk7XHJcbiAgICB2YXIgYSA9IHZDMUMyLm1hZ25pdHVkZTtcclxuICAgIHZhciBzdW1SID0gY2lyY2xlMS5yICsgY2lyY2xlMi5yO1xyXG4gICAgaWYgKHN1bVIgPCBhKVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICByZXN1bHQuaGl0ID0gdHJ1ZTtcclxuICAgIHZhciBzdWJSID0gTWF0aC5hYnMoY2lyY2xlMS5yIC0gY2lyY2xlMi5yKTtcclxuICAgIGlmIChhIDwgc3ViUikge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBpZiAoYSA9PT0gc3VtUikge1xyXG4gICAgICAgIHZhciBuID0gdkMxQzIubm9ybWFsaXplO1xyXG4gICAgICAgIHZhciBQID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGNpcmNsZTEucCwgbi50aW1lcyhjaXJjbGUxLnIpKTtcclxuICAgICAgICByZXN1bHQucG9zLnB1c2goUCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGlmIChhID09PSBzdWJSKSB7XHJcbiAgICAgICAgdmFyIG4gPSB2QzFDMi5ub3JtYWxpemU7XHJcbiAgICAgICAgdmFyIGlzTGFyZ2UgPSAoY2lyY2xlMS5yID4gY2lyY2xlMi5yKTtcclxuICAgICAgICB2YXIgUCA9IFZlY3RvcjJfMS5kZWZhdWx0LmFkZChjaXJjbGUxLnAsIG4udGltZXMoaXNMYXJnZSA/IGNpcmNsZTEuciA6IC1jaXJjbGUxLnIpKTtcclxuICAgICAgICByZXN1bHQucG9zLnB1c2goUCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHZhciBiID0gY2lyY2xlMS5yO1xyXG4gICAgdmFyIGMgPSBjaXJjbGUyLnI7XHJcbiAgICB2YXIgY29zID0gKE1hdGgucG93KGEsIDIpICsgTWF0aC5wb3coYiwgMikgLSBNYXRoLnBvdyhjLCAyKSkgLyAoMiAqIGEgKiBiKTtcclxuICAgIHZhciByYyA9IGIgKiBjb3M7XHJcbiAgICB2YXIgcnMgPSBNYXRoLnNxcnQoTWF0aC5wb3coYiwgMikgLSBNYXRoLnBvdyhyYywgMikpO1xyXG4gICAgdmFyIG4xID0gdkMxQzIubm9ybWFsaXplO1xyXG4gICAgdmFyIG4yID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KC1uMS55LCBuMS54KTtcclxuICAgIHZhciB0bjEgPSBuMS50aW1lcyhyYyk7XHJcbiAgICB2YXIgc24yID0gbjIudGltZXMocnMpO1xyXG4gICAgcmVzdWx0LnZoID0gdG4xO1xyXG4gICAgcmVzdWx0LnZ2ID0gc24yO1xyXG4gICAgcmVzdWx0LnBvcy5wdXNoKGNpcmNsZTEucC5jbG9uZSgpLmFkZCh0bjEpLmFkZChzbjIpKTtcclxuICAgIHJlc3VsdC5wb3MucHVzaChjaXJjbGUxLnAuY2xvbmUoKS5hZGQodG4xKS5zdWIoc24yKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgYm94KSB7XHJcbiAgICB2YXIgcG9pbnRzID0gW1xyXG4gICAgICAgIGJveC5wMSxcclxuICAgICAgICBib3gucDIsXHJcbiAgICAgICAgYm94LnAzLFxyXG4gICAgICAgIGJveC5wNCxcclxuICAgIF07XHJcbiAgICB2YXIgc2lnbiA9IDA7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgICAgICB2YXIgdjIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnRzW2ldLCBsaW5lLnApO1xyXG4gICAgICAgIHZhciBjcm9zcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYxLCB2Mik7XHJcbiAgICAgICAgaWYgKGNyb3NzID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoaSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHNpZ24gPSBNYXRoLnNpZ24oY3Jvc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNpZ24gIT09IE1hdGguc2lnbihjcm9zcykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIF8xID0gcmVxdWlyZShcIi5cIik7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0KGxpbmUsIGNhcHN1bGUpIHtcclxuICAgIGlmIChWZWN0b3IyXzEuZGVmYXVsdC5pc1BhcmFsbGVsKGxpbmUudiwgY2Fwc3VsZS5zLnYpKSB7XHJcbiAgICAgICAgdmFyIG5kXzEgPSBfMS5Qb2ludEFuZExpbmUuZ2V0TmVhcmVzdERpc3RhbmNlKGxpbmUucCwgY2Fwc3VsZS5zLnRvTGluZSgpKTtcclxuICAgICAgICByZXR1cm4gKG5kXzEuZGlzdGFuY2UgPD0gY2Fwc3VsZS5yKTtcclxuICAgIH1cclxuICAgIHZhciBuZCA9IF8xLkxpbmVBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShsaW5lLCBjYXBzdWxlLnMudG9MaW5lKCkpO1xyXG4gICAgaWYgKDAgPD0gbmQudDIgJiYgbmQudDIgPD0gMS4wKSB7XHJcbiAgICAgICAgcmV0dXJuIChuZC5kaXN0YW5jZSA8PSBjYXBzdWxlLnIpO1xyXG4gICAgfVxyXG4gICAgdmFyIHQyID0gX18xLlV0aWwuY3JhbXAobmQudDIsIDAsIDEpO1xyXG4gICAgdmFyIHAyID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGNhcHN1bGUucy5wMSwgVmVjdG9yMl8xLmRlZmF1bHQudGltZXMoY2Fwc3VsZS5zLnYsIHQyKSk7XHJcbiAgICB2YXIgbmVhciA9IF8xLlBvaW50QW5kTGluZS5nZXROZWFyZXN0RGlzdGFuY2UocDIsIGxpbmUpO1xyXG4gICAgcmV0dXJuIChuZWFyLmRpc3RhbmNlIDwgY2Fwc3VsZS5yKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBQb2ludEFuZExpbmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRMaW5lXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgY2lyY2xlKSB7XHJcbiAgICB2YXIgcCA9IFBvaW50QW5kTGluZS5nZXROZWFyZXN0UG9pbnQoY2lyY2xlLnAsIGxpbmUpO1xyXG4gICAgdmFyIGQgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocCwgY2lyY2xlLnApLnNxck1hZ25pdHVkZTtcclxuICAgIHJldHVybiAoZCA8IGNpcmNsZS5yICogY2lyY2xlLnIpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KGxpbmUsIGNpcmNsZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgIHBvczogW10sXHJcbiAgICAgICAgbmVhcmVzdDogVmVjdG9yMl8xLmRlZmF1bHQuemVybyxcclxuICAgIH07XHJcbiAgICB2YXIgYyA9IGNpcmNsZS5wO1xyXG4gICAgdmFyIGggPSBQb2ludEFuZExpbmUuZ2V0TmVhcmVzdFBvaW50KGMsIGxpbmUpO1xyXG4gICAgcmVzdWx0Lm5lYXJlc3QgPSBoO1xyXG4gICAgdmFyIGhwID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKGgsIGNpcmNsZS5wKTtcclxuICAgIHZhciBocF9sZW4gPSBocC5tYWduaXR1ZGU7XHJcbiAgICBpZiAoY2lyY2xlLnIgPCBocF9sZW4pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHJlc3VsdC5oaXQgPSB0cnVlO1xyXG4gICAgaWYgKGNpcmNsZS5yID09PSBocF9sZW4pIHtcclxuICAgICAgICByZXN1bHQucG9zLnB1c2goaCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHZhciB0ID0gTWF0aC5zcXJ0KE1hdGgucG93KGNpcmNsZS5yLCAyKSAtIE1hdGgucG93KGhwX2xlbiwgMikpO1xyXG4gICAgdmFyIHR2ID0gbGluZS52Lm5vcm1hbGl6ZS50aW1lcyh0KTtcclxuICAgIHJlc3VsdC5wb3MucHVzaChWZWN0b3IyXzEuZGVmYXVsdC5hZGQoaCwgdHYpKTtcclxuICAgIHJlc3VsdC5wb3MucHVzaChWZWN0b3IyXzEuZGVmYXVsdC5zdWIoaCwgdHYpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgUHJpbWl0aXZlMl8xID0gcmVxdWlyZShcIi4uL1ByaW1pdGl2ZTJcIik7XHJcbnZhciBfMSA9IHJlcXVpcmUoXCIuXCIpO1xyXG5mdW5jdGlvbiBpc0hpdChsaW5lLCBlbGxpcHNlKSB7XHJcbiAgICB2YXIgcDEgPSBsaW5lLnAuY2xvbmUoKTtcclxuICAgIHZhciBwMiA9IGxpbmUucG9pbnQoMSk7XHJcbiAgICB2YXIgYyA9IGVsbGlwc2UucDtcclxuICAgIHZhciByeCA9IGVsbGlwc2UucngsIHJ5ID0gZWxsaXBzZS5yeTtcclxuICAgIHAxLnN1YihjKS5yb3RhdGUoLWVsbGlwc2UucmFkKTtcclxuICAgIHAxLnkgKj0gKHJ4IC8gcnkpO1xyXG4gICAgcDIuc3ViKGMpLnJvdGF0ZSgtZWxsaXBzZS5yYWQpO1xyXG4gICAgcDIueSAqPSAocnggLyByeSk7XHJcbiAgICB2YXIgbmV3TGluZSA9IG5ldyBQcmltaXRpdmUyXzEuTGluZShwMSwgVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHAyLCBwMSkpO1xyXG4gICAgdmFyIGNpcmNsZSA9IG5ldyBQcmltaXRpdmUyXzEuQ2lyY2xlKFZlY3RvcjJfMS5kZWZhdWx0Lnplcm8sIHJ4KTtcclxuICAgIHJldHVybiBfMS5MaW5lQW5kQ2lyY2xlLmlzSGl0KG5ld0xpbmUsIGNpcmNsZSk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZTIgPSBleHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZSA9IGV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5nZXRDb2xsaXNpb25Qb2ludCA9IGV4cG9ydHMuaXNIaXRQYXJhbGxlbCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgXzEgPSByZXF1aXJlKFwiLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQobDEsIGwyKSB7XHJcbiAgICByZXR1cm4gKFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGwxLnYsIGwyLnYpICE9PSAwKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGlzSGl0UGFyYWxsZWwobDEsIGwyKSB7XHJcbiAgICB2YXIgdjEgPSBsMS52O1xyXG4gICAgdmFyIHYyID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKGwxLnAsIGwyLnApO1xyXG4gICAgcmV0dXJuIChNYXRoLmFicyhWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2MSwgdjIpKSA8IF9fMS5EZWZpbmUuRVBTSUxPTik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdFBhcmFsbGVsID0gaXNIaXRQYXJhbGxlbDtcclxuZnVuY3Rpb24gZ2V0Q29sbGlzaW9uUG9pbnQobDEsIGwyKSB7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihsMi5wLCBsMS5wKTtcclxuICAgIHZhciB2MSA9IGwxLnY7XHJcbiAgICB2YXIgdjIgPSBsMi52O1xyXG4gICAgdmFyIHQyID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModiwgdjEpIC8gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQobDIucCwgdjIuY2xvbmUoKS50aW1lcyh0MikpO1xyXG59XHJcbmV4cG9ydHMuZ2V0Q29sbGlzaW9uUG9pbnQgPSBnZXRDb2xsaXNpb25Qb2ludDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KGwxLCBsMikge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KGwxLCBsMik7XHJcbiAgICB2YXIgaGl0UGFyYWxsZWwgPSBpc0hpdFBhcmFsbGVsKGwxLCBsMik7XHJcbiAgICB2YXIgcG9zID0gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIGlmIChoaXQpIHtcclxuICAgICAgICBwb3MuY29weShnZXRDb2xsaXNpb25Qb2ludChsMSwgbDIpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGl0OiBoaXQsXHJcbiAgICAgICAgaGl0UGFyYWxsZWw6IGhpdFBhcmFsbGVsLFxyXG4gICAgICAgIHBvczogcG9zXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0RGlzdGFuY2UobDEsIGwyKSB7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuaXNQYXJhbGxlbChsMS52LCBsMi52KSkge1xyXG4gICAgICAgIHZhciByZXMgPSBfMS5Qb2ludEFuZExpbmUuZ2V0TmVhcmVzdERpc3RhbmNlKGwxLnAsIGwyKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBkaXN0YW5jZTogcmVzLmRpc3RhbmNlLFxyXG4gICAgICAgICAgICBwMTogbDEucC5jbG9uZSgpLFxyXG4gICAgICAgICAgICBwMjogcmVzLmgsXHJcbiAgICAgICAgICAgIHQxOiAwLFxyXG4gICAgICAgICAgICB0MjogcmVzLnQsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIHZhciB2MSA9IGwxLnY7XHJcbiAgICB2YXIgdjIgPSBsMi52O1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIobDEucCwgbDIucCk7XHJcbiAgICB2YXIgdDEgPSB2LmNyb3NzKHYyKSAvIHYyLmNyb3NzKHYxKTtcclxuICAgIHZhciB0MiA9IHYudGltZXMoLTEpLmNyb3NzKHYxKSAvIHYxLmNyb3NzKHYyKTtcclxuICAgIHZhciBwMSA9IFZlY3RvcjJfMS5kZWZhdWx0LmFkZChsMS5wLCBWZWN0b3IyXzEuZGVmYXVsdC50aW1lcyhsMS52LCB0MSkpO1xyXG4gICAgdmFyIHAyID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGwyLnAsIFZlY3RvcjJfMS5kZWZhdWx0LnRpbWVzKGwyLnYsIHQyKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRpc3RhbmNlOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocDEsIHAyKS5tYWduaXR1ZGUsXHJcbiAgICAgICAgcDE6IHAxLCBwMjogcDIsIHQxOiB0MSwgdDI6IHQyXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdERpc3RhbmNlID0gZ2V0TmVhcmVzdERpc3RhbmNlO1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0RGlzdGFuY2UyKGwxLCBsMikge1xyXG4gICAgaWYgKFZlY3RvcjJfMS5kZWZhdWx0LmlzUGFyYWxsZWwobDEudiwgbDIudikpIHtcclxuICAgICAgICB2YXIgcmVzID0gXzEuUG9pbnRBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShsMS5wLCBsMik7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZGlzdGFuY2U6IHJlcy5kaXN0YW5jZSxcclxuICAgICAgICAgICAgcDE6IGwxLnAuY2xvbmUoKSxcclxuICAgICAgICAgICAgcDI6IHJlcy5oLFxyXG4gICAgICAgICAgICB0MTogMCxcclxuICAgICAgICAgICAgdDI6IHJlcy50LFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICB2YXIgcDEgPSBsMS5wO1xyXG4gICAgdmFyIHAyID0gbDIucDtcclxuICAgIHZhciB2MSA9IGwxLnY7XHJcbiAgICB2YXIgdjIgPSBsMi52O1xyXG4gICAgdmFyIEQxMiA9IHYxLmRvdCh2Mik7XHJcbiAgICB2YXIgRDExID0gdjEuc3FyTWFnbml0dWRlO1xyXG4gICAgdmFyIEQyMiA9IHYyLnNxck1hZ25pdHVkZTtcclxuICAgIHZhciBQMTIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocDEsIHAyKTtcclxuICAgIHZhciB0MSA9IChEMTIgKiB2Mi5kb3QoUDEyKSAtIEQyMiAqIHYxLmRvdChQMTIpKSAvIChEMTEgKiBEMjIgLSBEMTIgKiBEMTIpO1xyXG4gICAgdmFyIHExID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHAxLCBWZWN0b3IyXzEuZGVmYXVsdC50aW1lcyh2MSwgdDEpKTtcclxuICAgIHZhciB0MiA9IHYyLmRvdChWZWN0b3IyXzEuZGVmYXVsdC5zdWIocTEsIHAyKSkgLyBEMjI7XHJcbiAgICB2YXIgcTIgPSBWZWN0b3IyXzEuZGVmYXVsdC5hZGQocDIsIFZlY3RvcjJfMS5kZWZhdWx0LnRpbWVzKHYyLCB0MikpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkaXN0YW5jZTogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHEyLCBxMSkubWFnbml0dWRlLFxyXG4gICAgICAgIHAxOiBxMSxcclxuICAgICAgICBwMjogcTIsXHJcbiAgICAgICAgdDE6IHQxLFxyXG4gICAgICAgIHQyOiB0MixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0RGlzdGFuY2UyID0gZ2V0TmVhcmVzdERpc3RhbmNlMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgcmF5KSB7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihyYXkucCwgbGluZS5wKTtcclxuICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgIHZhciB2MiA9IHJheS52O1xyXG4gICAgdmFyIGMxID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModiwgdjEpO1xyXG4gICAgdmFyIGMyID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIGlmIChNYXRoLmFicyhjMikgPCBfXzEuRGVmaW5lLkVQU0lMT04pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHQgPSBjMSAvIGMyO1xyXG4gICAgcmV0dXJuICgwIDwgdCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QobGluZSwgcmF5KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgcG9zOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvLFxyXG4gICAgfTtcclxuICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgIHZhciB2MiA9IHJheS52O1xyXG4gICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIGlmIChNYXRoLmFicyhjcm9zcykgPCBfXzEuRGVmaW5lLkVQU0lMT04pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHJheS5wLCBsaW5lLnApO1xyXG4gICAgdmFyIHQgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2LCB2MSkgLyBjcm9zcztcclxuICAgIGlmICh0IDwgMClcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgcmVzdWx0LmhpdCA9IHRydWU7XHJcbiAgICByZXN1bHQucG9zID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHJheS5wLCB2Mi5jbG9uZSgpLnRpbWVzKHQpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChsaW5lLCByZWN0KSB7XHJcbiAgICB2YXIgcG9pbnRzID0gW1xyXG4gICAgICAgIHJlY3QucDEsXHJcbiAgICAgICAgcmVjdC5wMixcclxuICAgICAgICByZWN0LnAzLFxyXG4gICAgICAgIHJlY3QucDQsXHJcbiAgICBdO1xyXG4gICAgdmFyIHNpZ24gPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICB2YXIgdjEgPSBsaW5lLnY7XHJcbiAgICAgICAgdmFyIHYyID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50c1tpXSwgbGluZS5wKTtcclxuICAgICAgICB2YXIgY3Jvc3MgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2MSwgdjIpO1xyXG4gICAgICAgIGlmIChjcm9zcyA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGkgPT0gMCkge1xyXG4gICAgICAgICAgICBzaWduID0gTWF0aC5zaWduKGNyb3NzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChzaWduICE9PSBNYXRoLnNpZ24oY3Jvc3MpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgc2VnKSB7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihzZWcucDEsIGxpbmUucCk7XHJcbiAgICB2YXIgdjEgPSBsaW5lLnY7XHJcbiAgICB2YXIgdjIgPSBzZWcudjtcclxuICAgIHZhciBjMSA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYsIHYxKTtcclxuICAgIHZhciBjMiA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYxLCB2Mik7XHJcbiAgICBpZiAoTWF0aC5hYnMoYzIpIDwgX18xLkRlZmluZS5FUFNJTE9OKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciB0ID0gYzEgLyBjMjtcclxuICAgIHJldHVybiAoMCA8PSB0ICYmIHQgPD0gMSk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QobGluZSwgc2VnKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgcG9zOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvLFxyXG4gICAgfTtcclxuICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgIHZhciB2MiA9IHNlZy52O1xyXG4gICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIGlmIChNYXRoLmFicyhjcm9zcykgPCBfXzEuRGVmaW5lLkVQU0lMT04pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHNlZy5wMSwgbGluZS5wKTtcclxuICAgIHZhciB0ID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModiwgdjEpIC8gY3Jvc3M7XHJcbiAgICBpZiAodCA8IDAgfHwgMSA8IHQpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHJlc3VsdC5oaXQgPSB0cnVlO1xyXG4gICAgcmVzdWx0LnBvcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmFkZChzZWcucDEsIHYyLmNsb25lKCkudGltZXModCkpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KGxpbmUsIHRyaWFuZ2xlKSB7XHJcbiAgICB2YXIgcG9pbnRzID0gW1xyXG4gICAgICAgIHRyaWFuZ2xlLnAxLFxyXG4gICAgICAgIHRyaWFuZ2xlLnAyLFxyXG4gICAgICAgIHRyaWFuZ2xlLnAzLFxyXG4gICAgXTtcclxuICAgIHZhciBzaWduID0gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgdmFyIHYxID0gbGluZS52O1xyXG4gICAgICAgIHZhciB2MiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludHNbaV0sIGxpbmUucCk7XHJcbiAgICAgICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgICAgICBpZiAoY3Jvc3MgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgc2lnbiA9IE1hdGguc2lnbihjcm9zcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoc2lnbiAhPT0gTWF0aC5zaWduKGNyb3NzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBib3gpIHtcclxuICAgIHZhciBkYXRhcyA9IFtcclxuICAgICAgICB7IHYxOiBib3gudjF0bzIsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMSkgfSxcclxuICAgICAgICB7IHYxOiBib3gudjJ0bzMsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMikgfSxcclxuICAgICAgICB7IHYxOiBib3gudjN0bzQsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMykgfSxcclxuICAgICAgICB7IHYxOiBib3gudjR0bzEsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wNCkgfVxyXG4gICAgXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YXNfMSA9IGRhdGFzOyBfaSA8IGRhdGFzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBkYXRhc18xW19pXTtcclxuICAgICAgICB2YXIgY3Jvc3MgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyhkYXRhLnYxLCBkYXRhLnYyKTtcclxuICAgICAgICBpZiAoMCA8IGNyb3NzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgYm94KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGJveCk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgUG9pbnRBbmRTZWdtZW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kU2VnbWVudFwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBjYXBzdWxlKSB7XHJcbiAgICB2YXIgcCA9IFBvaW50QW5kU2VnbWVudC5nZXROZWFyZXN0UG9pbnQocG9pbnQsIGNhcHN1bGUucyk7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgcCk7XHJcbiAgICByZXR1cm4gKHYuc3FyTWFnbml0dWRlIDwgY2Fwc3VsZS5yICogY2Fwc3VsZS5yKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgY2Fwc3VsZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBjYXBzdWxlKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBjaXJjbGUpIHtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBjaXJjbGUucCk7XHJcbiAgICByZXR1cm4gKHYuc3FyTWFnbml0dWRlIDwgY2lyY2xlLnIgKiBjaXJjbGUucik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGNpcmNsZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBjaXJjbGUpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGVsbGlwc2UpIHtcclxuICAgIHZhciBwID0gcG9pbnQ7XHJcbiAgICB2YXIgZSA9IGVsbGlwc2U7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4oZS5yYWQpO1xyXG4gICAgdmFyIGNvcyA9IE1hdGguY29zKGUucmFkKTtcclxuICAgIHZhciByeCA9IGVsbGlwc2UucngsIHJ5ID0gZWxsaXBzZS5yeTtcclxuICAgIHZhciBweCA9IChwLnggLSBlLnAueCkgKiBjb3MgKyAocC55IC0gZS5wLnkpICogc2luO1xyXG4gICAgdmFyIHB5ID0gKHJ4IC8gcnkpICogKC0ocC54IC0gZS5wLngpICogc2luICsgKHAueSAtIGUucC55KSAqIGNvcyk7XHJcbiAgICByZXR1cm4gKHB4ICogcHggKyBweSAqIHB5KSA8IHJ4ICogcng7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGVsbGlwc2UpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgZWxsaXBzZSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZSA9IGV4cG9ydHMuZ2V0TmVhcmVzdFBvaW50ID0gZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgRGVmaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9EZWZpbmVcIikpO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGxpbmUpIHtcclxuICAgIHZhciBhID0gbGluZS52O1xyXG4gICAgdmFyIGIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGxpbmUucCk7XHJcbiAgICB2YXIgYyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGEsIGIpO1xyXG4gICAgcmV0dXJuIChNYXRoLmFicyhjKSA8IERlZmluZS5FUFNJTE9OKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBsaW5lKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3RQb2ludChwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIGQgPSBsaW5lLnY7XHJcbiAgICB2YXIgcCA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgbGluZS5wKTtcclxuICAgIHZhciBuID0gZC5ub3JtYWxpemU7XHJcbiAgICB2YXIgZG90ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KG4sIHApO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZChsaW5lLnAsIG4udGltZXMoZG90KSk7XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0UG9pbnQgPSBnZXROZWFyZXN0UG9pbnQ7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3REaXN0YW5jZShwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBkaXN0YW5jZTogMCxcclxuICAgICAgICBoOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvLFxyXG4gICAgICAgIHQ6IDAsXHJcbiAgICB9O1xyXG4gICAgdmFyIHAxID0gcG9pbnQ7XHJcbiAgICB2YXIgcDIgPSBsaW5lLnA7XHJcbiAgICB2YXIgdjIgPSBsaW5lLnY7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuaXNaZXJvKHYyKSA9PSBmYWxzZSkge1xyXG4gICAgICAgIHJlc3VsdC50ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KHYyLCBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocDEsIHAyKSkgLyB2Mi5zcXJNYWduaXR1ZGU7XHJcbiAgICB9XHJcbiAgICB2YXIgdHYyID0gVmVjdG9yMl8xLmRlZmF1bHQudGltZXModjIsIHJlc3VsdC50KTtcclxuICAgIHJlc3VsdC5oID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHAyLCB0djIpO1xyXG4gICAgcmVzdWx0LmRpc3RhbmNlID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHJlc3VsdC5oLCBwMSkubWFnbml0dWRlO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZSA9IGdldE5lYXJlc3REaXN0YW5jZTtcclxuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwMSwgcDIpIHtcclxuICAgIHJldHVybiBwMS5lcXVhbChwMik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocDEsIHAyKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocDEsIHAyKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHAxLmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdERpc3RhbmNlID0gZXhwb3J0cy5nZXROZWFyZXN0UG9pbnQgPSBleHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgXzEgPSByZXF1aXJlKFwiLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIGEgPSByYXkudjtcclxuICAgIHZhciBiID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCByYXkucCk7XHJcbiAgICB2YXIgbCA9IGEubWFnbml0dWRlICogYi5tYWduaXR1ZGU7XHJcbiAgICB2YXIgZCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChhLCBiKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMoZCAtIGwpIDwgX18xLkRlZmluZS5FUFNJTE9OKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgcmF5KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIHJheSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0UG9pbnQocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIGQgPSByYXkudjtcclxuICAgIHZhciBwID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCByYXkucCk7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHApIDwgMCkge1xyXG4gICAgICAgIHJldHVybiByYXkucC5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIG4gPSBkLm5vcm1hbGl6ZTtcclxuICAgIHZhciBkb3QgPSBWZWN0b3IyXzEuZGVmYXVsdC5kb3QobiwgcCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHJheS5wLCBuLnRpbWVzKGRvdCkpO1xyXG59XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdFBvaW50ID0gZ2V0TmVhcmVzdFBvaW50O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0RGlzdGFuY2UocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIF9hID0gXzEuUG9pbnRBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShwb2ludCwgcmF5KSwgZGlzdGFuY2UgPSBfYS5kaXN0YW5jZSwgaCA9IF9hLmgsIHQgPSBfYS50O1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UsIGg6IGgsIHQ6IHRcclxuICAgIH07XHJcbiAgICBpZiAodCA8IDApIHtcclxuICAgICAgICByZXN1bHQuZGlzdGFuY2UgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocmF5LnAsIHBvaW50KS5tYWduaXR1ZGU7XHJcbiAgICAgICAgcmVzdWx0LmggPSByYXkucC5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZSA9IGdldE5lYXJlc3REaXN0YW5jZTtcclxuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgcmVjdCkge1xyXG4gICAgdmFyIGlzQ29udGFpblggPSAocmVjdC5wMS54IDw9IHBvaW50LngpICYmIChwb2ludC54IDw9IHJlY3QucDMueCk7XHJcbiAgICB2YXIgaXNDb250YWluWSA9IChyZWN0LnAzLnkgPD0gcG9pbnQueSkgJiYgKHBvaW50LnkgPD0gcmVjdC5wMS55KTtcclxuICAgIHJldHVybiAoaXNDb250YWluWCAmJiBpc0NvbnRhaW5ZKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgcmVjdCkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCByZWN0KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdERpc3RhbmNlID0gZXhwb3J0cy5nZXROZWFyZXN0UG9pbnQgPSBleHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgXzEgPSByZXF1aXJlKFwiLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIHNlZ21lbnQpIHtcclxuICAgIHZhciBhID0gc2VnbWVudC52O1xyXG4gICAgdmFyIGIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHNlZ21lbnQucDEpO1xyXG4gICAgdmFyIGFsID0gYS5tYWduaXR1ZGU7XHJcbiAgICB2YXIgYmwgPSBiLm1hZ25pdHVkZTtcclxuICAgIHZhciBsID0gYWwgKiBibDtcclxuICAgIHZhciBkID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KGEsIGIpO1xyXG4gICAgcmV0dXJuIChNYXRoLmFicyhsIC0gZCkgPCBfXzEuRGVmaW5lLkVQU0lMT04gJiYgYWwgPiBibCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIHNlZ21lbnQpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgc2VnbWVudCk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0UG9pbnQocG9pbnQsIHNlZ21lbnQpIHtcclxuICAgIHZhciBkID0gc2VnbWVudC52O1xyXG4gICAgdmFyIHAxID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBzZWdtZW50LnAxKTtcclxuICAgIGlmIChWZWN0b3IyXzEuZGVmYXVsdC5kb3QoZCwgcDEpIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnAxLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgcDIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHNlZ21lbnQucDIpO1xyXG4gICAgaWYgKDAgPCBWZWN0b3IyXzEuZGVmYXVsdC5kb3QoZCwgcDIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQucDIuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIHZhciBuID0gZC5ub3JtYWxpemU7XHJcbiAgICB2YXIgZG90ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KG4sIHAxKTtcclxuICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQoc2VnbWVudC5wMSwgbi50aW1lcyhkb3QpKTtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3RQb2ludCA9IGdldE5lYXJlc3RQb2ludDtcclxuZnVuY3Rpb24gZ2V0TmVhcmVzdERpc3RhbmNlKHBvaW50LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgX2EgPSBfMS5Qb2ludEFuZExpbmUuZ2V0TmVhcmVzdERpc3RhbmNlKHBvaW50LCBzZWdtZW50LnRvTGluZSgpKSwgZGlzdGFuY2UgPSBfYS5kaXN0YW5jZSwgaCA9IF9hLmgsIHQgPSBfYS50O1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UsIGg6IGgsIHQ6IHRcclxuICAgIH07XHJcbiAgICBpZiAodCA8IDApIHtcclxuICAgICAgICByZXN1bHQuZGlzdGFuY2UgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHNlZ21lbnQucDEpLm1hZ25pdHVkZTtcclxuICAgICAgICByZXN1bHQuaCA9IHNlZ21lbnQucDEuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIGlmICgxIDwgdCkge1xyXG4gICAgICAgIHJlc3VsdC5kaXN0YW5jZSA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgc2VnbWVudC5wMikubWFnbml0dWRlO1xyXG4gICAgICAgIHJlc3VsdC5oID0gc2VnbWVudC5wMi5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3REaXN0YW5jZSA9IGdldE5lYXJlc3REaXN0YW5jZTtcclxuO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgdHJpKSB7XHJcbiAgICB2YXIgZGF0YXMgPSBbXHJcbiAgICAgICAgeyBheGlzOiB0cmkudjF0bzIsIHZlcnRleDogW3RyaS5wMSwgdHJpLnAzXSB9LFxyXG4gICAgICAgIHsgYXhpczogdHJpLnYydG8zLCB2ZXJ0ZXg6IFt0cmkucDIsIHRyaS5wMV0gfSxcclxuICAgICAgICB7IGF4aXM6IHRyaS52M3RvMSwgdmVydGV4OiBbdHJpLnAzLCB0cmkucDJdIH0sXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhc18xID0gZGF0YXM7IF9pIDwgZGF0YXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGRhdGFzXzFbX2ldO1xyXG4gICAgICAgIHZhciBheGlzID0gZGF0YS5heGlzLm5vcm1hbGl6ZTtcclxuICAgICAgICBheGlzLnNldCgtYXhpcy55LCBheGlzLngpO1xyXG4gICAgICAgIHZhciBtYXliZU1pbiA9IGF4aXMuZG90KGRhdGEudmVydGV4WzBdKTtcclxuICAgICAgICB2YXIgbWF5YmVNYXggPSBheGlzLmRvdChkYXRhLnZlcnRleFsxXSk7XHJcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKG1heWJlTWluLCBtYXliZU1heCk7XHJcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KG1heWJlTWluLCBtYXliZU1heCk7XHJcbiAgICAgICAgdmFyIGRvdCA9IGF4aXMuZG90KHBvaW50KTtcclxuICAgICAgICBpZiAoZG90IDwgbWluIHx8IG1heCA8IGRvdClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIHRyaSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCB0cmkpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0UGFyYWxsZWwgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgXzEgPSByZXF1aXJlKFwiLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQocmF5MSwgcmF5Mikge1xyXG4gICAgaWYgKF9fMS5WZWN0b3IyLmlzUGFyYWxsZWwocmF5MS52LCByYXkyLnYpKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciByZXN1bHQgPSBfMS5MaW5lQW5kTGluZS5nZXROZWFyZXN0RGlzdGFuY2UocmF5MSwgcmF5Mik7XHJcbiAgICByZXR1cm4gKDAgPD0gcmVzdWx0LnQxICYmIDAgPD0gcmVzdWx0LnQyKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGlzSGl0UGFyYWxsZWwocmF5MSwgcmF5Mikge1xyXG4gICAgaWYgKF9fMS5WZWN0b3IyLmlzUGFyYWxsZWwocmF5MS52LCByYXkyLnYpID09IGZhbHNlKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHZhciBkaXN0ID0gXzEuUG9pbnRBbmRSYXkuZ2V0TmVhcmVzdERpc3RhbmNlKHJheTEucCwgcmF5Mik7XHJcbiAgICBpZiAoZGlzdC5kaXN0YW5jZSA8IF9fMS5EZWZpbmUuRVBTSUxPTilcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGRpc3QgPSBfMS5Qb2ludEFuZFJheS5nZXROZWFyZXN0RGlzdGFuY2UocmF5Mi5wLCByYXkxKTtcclxuICAgIHJldHVybiAoZGlzdC5kaXN0YW5jZSA8IF9fMS5EZWZpbmUuRVBTSUxPTik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdFBhcmFsbGVsID0gaXNIaXRQYXJhbGxlbDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHJheTEsIHJheTIpIHtcclxuICAgIHZhciBfYSA9IF8xLkxpbmVBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShyYXkxLCByYXkyKSwgZGlzdGFuY2UgPSBfYS5kaXN0YW5jZSwgcDEgPSBfYS5wMSwgcDIgPSBfYS5wMiwgdDEgPSBfYS50MSwgdDIgPSBfYS50MjtcclxuICAgIHZhciBoaXQ7XHJcbiAgICBpZiAoX18xLlZlY3RvcjIuaXNQYXJhbGxlbChyYXkxLnYsIHJheTIudikpIHtcclxuICAgICAgICBoaXQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGhpdCA9ICgwIDw9IHQxICYmIDAgPD0gdDIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBoaXQ6IGhpdCxcclxuICAgICAgICBkaXN0YW5jZTogZGlzdGFuY2UsXHJcbiAgICAgICAgcDE6IHAxLFxyXG4gICAgICAgIHAyOiBwMixcclxuICAgICAgICB0MTogdDEsXHJcbiAgICAgICAgdDI6IHQyLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0UGFyYWxsZWwgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG52YXIgXzEgPSByZXF1aXJlKFwiLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQocmF5LCBzZWdtZW50KSB7XHJcbiAgICBpZiAoX18xLlZlY3RvcjIuaXNQYXJhbGxlbChyYXkudiwgc2VnbWVudC52KSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgcmVzdWx0ID0gXzEuTGluZUFuZExpbmUuZ2V0TmVhcmVzdERpc3RhbmNlKHJheSwgc2VnbWVudC50b0xpbmUoKSk7XHJcbiAgICByZXR1cm4gKDAgPD0gcmVzdWx0LnQxICYmIDAgPD0gcmVzdWx0LnQyICYmIHJlc3VsdC50MiA8PSAxKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGlzSGl0UGFyYWxsZWwocmF5LCByYXkyKSB7XHJcbiAgICBpZiAoX18xLlZlY3RvcjIuaXNQYXJhbGxlbChyYXkudiwgcmF5Mi52KSA9PSBmYWxzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgZGlzdCA9IF8xLlBvaW50QW5kUmF5LmdldE5lYXJlc3REaXN0YW5jZShyYXkucCwgcmF5Mik7XHJcbiAgICBpZiAoZGlzdC5kaXN0YW5jZSA8IF9fMS5EZWZpbmUuRVBTSUxPTilcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIGRpc3QgPSBfMS5Qb2ludEFuZFJheS5nZXROZWFyZXN0RGlzdGFuY2UocmF5Mi5wLCByYXkpO1xyXG4gICAgcmV0dXJuIChkaXN0LmRpc3RhbmNlIDwgX18xLkRlZmluZS5FUFNJTE9OKTtcclxufVxyXG5leHBvcnRzLmlzSGl0UGFyYWxsZWwgPSBpc0hpdFBhcmFsbGVsO1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocmF5LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgX2EgPSBfMS5MaW5lQW5kTGluZS5nZXROZWFyZXN0RGlzdGFuY2UocmF5LCBzZWdtZW50LnRvTGluZSgpKSwgcDEgPSBfYS5wMSwgdDEgPSBfYS50MSwgdDIgPSBfYS50MjtcclxuICAgIHZhciBoaXQ7XHJcbiAgICBpZiAoX18xLlZlY3RvcjIuaXNQYXJhbGxlbChyYXkudiwgc2VnbWVudC52KSkge1xyXG4gICAgICAgIGhpdCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaGl0ID0gKDAgPD0gdDEgJiYgMCA8PSB0MiAmJiB0MiA8PSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGl0OiBoaXQsXHJcbiAgICAgICAgcG9zOiBwMSxcclxuICAgICAgICB0MTogdDEsXHJcbiAgICAgICAgdDI6IHQyLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxuZnVuY3Rpb24gaXNIaXQocjEsIHIyKSB7XHJcbiAgICBpZiAocjIubWF4WCA8IHIxLm1pblgpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKHIxLm1heFggPCByMi5taW5YKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmIChyMi5tYXhZIDwgcjEubWluWSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAocjEubWF4WSA8IHIyLm1pblkpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXRQYXJhbGxlbCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbnZhciBfMSA9IHJlcXVpcmUoXCIuXCIpO1xyXG5mdW5jdGlvbiBpc0hpdChzZWcxLCBzZWcyKSB7XHJcbiAgICBpZiAoX18xLlZlY3RvcjIuaXNQYXJhbGxlbChzZWcxLnYsIHNlZzIudikpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHJlc3VsdCA9IF8xLkxpbmVBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShzZWcxLnRvTGluZSgpLCBzZWcyLnRvTGluZSgpKTtcclxuICAgIHJldHVybiAoMCA8PSByZXN1bHQudDEgJiYgcmVzdWx0LnQxIDw9IDEpICYmICgwIDw9IHJlc3VsdC50MiAmJiByZXN1bHQudDIgPD0gMSk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpc0hpdFBhcmFsbGVsKHNlZzEsIHNlZzIpIHtcclxuICAgIGlmIChfXzEuVmVjdG9yMi5pc1BhcmFsbGVsKHNlZzEudiwgc2VnMi52KSA9PSBmYWxzZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgZGlzdDEgPSBfMS5Qb2ludEFuZExpbmUuZ2V0TmVhcmVzdERpc3RhbmNlKHNlZzEucDEsIHNlZzIudG9MaW5lKCkpO1xyXG4gICAgdmFyIGRpc3QyID0gXzEuUG9pbnRBbmRMaW5lLmdldE5lYXJlc3REaXN0YW5jZShzZWcxLnAyLCBzZWcyLnRvTGluZSgpKTtcclxuICAgIGlmIChfXzEuRGVmaW5lLkVQU0lMT04gPCBkaXN0MS5kaXN0YW5jZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgdDEgPSBkaXN0MS50O1xyXG4gICAgdmFyIHQyID0gZGlzdDIudDtcclxuICAgIGlmICh0MSA8IDAgJiYgdDIgPCAwKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIGlmICh0MSA+IDEgJiYgdDIgPiAxKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXRQYXJhbGxlbCA9IGlzSGl0UGFyYWxsZWw7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChzZWcxLCBzZWcyKSB7XHJcbiAgICB2YXIgX2EgPSBfMS5MaW5lQW5kTGluZS5nZXROZWFyZXN0RGlzdGFuY2Uoc2VnMS50b0xpbmUoKSwgc2VnMi50b0xpbmUoKSksIGRpc3RhbmNlID0gX2EuZGlzdGFuY2UsIHAxID0gX2EucDEsIHAyID0gX2EucDIsIHQxID0gX2EudDEsIHQyID0gX2EudDI7XHJcbiAgICB2YXIgaGl0O1xyXG4gICAgaWYgKF9fMS5WZWN0b3IyLmlzUGFyYWxsZWwoc2VnMS52LCBzZWcyLnYpKSB7XHJcbiAgICAgICAgaGl0ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBoaXQgPSAoMCA8PSB0MSAmJiB0MSA8PSAxKSAmJiAoMCA8PSB0MiAmJiB0MiA8PSAxKTtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGl0OiBoaXQsXHJcbiAgICAgICAgZGlzdGFuY2U6IGRpc3RhbmNlLFxyXG4gICAgICAgIHAxOiBwMSxcclxuICAgICAgICBwMjogcDIsXHJcbiAgICAgICAgdDE6IHQxLFxyXG4gICAgICAgIHQyOiB0MixcclxuICAgIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQm94QW5kQm94ID0gZXhwb3J0cy5SZWN0QW5kUmVjdCA9IGV4cG9ydHMuQ2lyY2xlQW5kQ2lyY2xlID0gZXhwb3J0cy5TZWdtZW50QW5kU2VnbWVudCA9IGV4cG9ydHMuUmF5QW5kU2VnbWVudCA9IGV4cG9ydHMuUmF5QW5kUmF5ID0gZXhwb3J0cy5MaW5lQW5kRWxsaXBzZSA9IGV4cG9ydHMuTGluZUFuZENhcHN1bGUgPSBleHBvcnRzLkxpbmVBbmRUcmlhbmdsZSA9IGV4cG9ydHMuTGluZUFuZEJveCA9IGV4cG9ydHMuTGluZUFuZFJlY3QgPSBleHBvcnRzLkxpbmVBbmRDaXJjbGUgPSBleHBvcnRzLkxpbmVBbmRTZWdtZW50ID0gZXhwb3J0cy5MaW5lQW5kUmF5ID0gZXhwb3J0cy5MaW5lQW5kTGluZSA9IGV4cG9ydHMuUG9pbnRBbmRFbGxpcHNlID0gZXhwb3J0cy5Qb2ludEFuZENhcHN1bGUgPSBleHBvcnRzLlBvaW50QW5kVHJpYW5nbGUgPSBleHBvcnRzLlBvaW50QW5kQm94ID0gZXhwb3J0cy5Qb2ludEFuZFJlY3QgPSBleHBvcnRzLlBvaW50QW5kQ2lyY2xlID0gZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBleHBvcnRzLlBvaW50QW5kUmF5ID0gZXhwb3J0cy5Qb2ludEFuZExpbmUgPSBleHBvcnRzLlBvaW50QW5kUG9pbnQgPSB2b2lkIDA7XHJcbnZhciBQb2ludEFuZFBvaW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kUG9pbnRcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUG9pbnQgPSBQb2ludEFuZFBvaW50O1xyXG52YXIgUG9pbnRBbmRMaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kTGluZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRMaW5lID0gUG9pbnRBbmRMaW5lO1xyXG52YXIgUG9pbnRBbmRSYXkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRSYXlcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmF5ID0gUG9pbnRBbmRSYXk7XHJcbnZhciBQb2ludEFuZFNlZ21lbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRTZWdtZW50XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBQb2ludEFuZFNlZ21lbnQ7XHJcbnZhciBQb2ludEFuZENpcmNsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENpcmNsZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRDaXJjbGUgPSBQb2ludEFuZENpcmNsZTtcclxudmFyIFBvaW50QW5kUmVjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFJlY3RcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmVjdCA9IFBvaW50QW5kUmVjdDtcclxudmFyIFBvaW50QW5kQm94ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kQm94XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZEJveCA9IFBvaW50QW5kQm94O1xyXG52YXIgUG9pbnRBbmRUcmlhbmdsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFRyaWFuZ2xlXCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFRyaWFuZ2xlID0gUG9pbnRBbmRUcmlhbmdsZTtcclxudmFyIFBvaW50QW5kQ2Fwc3VsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENhcHN1bGVcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kQ2Fwc3VsZSA9IFBvaW50QW5kQ2Fwc3VsZTtcclxudmFyIFBvaW50QW5kRWxsaXBzZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZEVsbGlwc2VcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kRWxsaXBzZSA9IFBvaW50QW5kRWxsaXBzZTtcclxudmFyIExpbmVBbmRMaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xpbmVBbmRMaW5lXCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kTGluZSA9IExpbmVBbmRMaW5lO1xyXG52YXIgTGluZUFuZFJheSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kUmF5XCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kUmF5ID0gTGluZUFuZFJheTtcclxudmFyIExpbmVBbmRTZWdtZW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xpbmVBbmRTZWdtZW50XCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kU2VnbWVudCA9IExpbmVBbmRTZWdtZW50O1xyXG52YXIgTGluZUFuZENpcmNsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kQ2lyY2xlXCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kQ2lyY2xlID0gTGluZUFuZENpcmNsZTtcclxudmFyIExpbmVBbmRSZWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xpbmVBbmRSZWN0XCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kUmVjdCA9IExpbmVBbmRSZWN0O1xyXG52YXIgTGluZUFuZEJveCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kQm94XCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kQm94ID0gTGluZUFuZEJveDtcclxudmFyIExpbmVBbmRUcmlhbmdsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kVHJpYW5nbGVcIikpO1xyXG5leHBvcnRzLkxpbmVBbmRUcmlhbmdsZSA9IExpbmVBbmRUcmlhbmdsZTtcclxudmFyIExpbmVBbmRDYXBzdWxlID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xpbmVBbmRDYXBzdWxlXCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kQ2Fwc3VsZSA9IExpbmVBbmRDYXBzdWxlO1xyXG52YXIgTGluZUFuZEVsbGlwc2UgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTGluZUFuZEVsbGlwc2VcIikpO1xyXG5leHBvcnRzLkxpbmVBbmRFbGxpcHNlID0gTGluZUFuZEVsbGlwc2U7XHJcbnZhciBSYXlBbmRSYXkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUmF5QW5kUmF5XCIpKTtcclxuZXhwb3J0cy5SYXlBbmRSYXkgPSBSYXlBbmRSYXk7XHJcbnZhciBSYXlBbmRTZWdtZW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1JheUFuZFNlZ21lbnRcIikpO1xyXG5leHBvcnRzLlJheUFuZFNlZ21lbnQgPSBSYXlBbmRTZWdtZW50O1xyXG52YXIgU2VnbWVudEFuZFNlZ21lbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vU2VnbWVudEFuZFNlZ21lbnRcIikpO1xyXG5leHBvcnRzLlNlZ21lbnRBbmRTZWdtZW50ID0gU2VnbWVudEFuZFNlZ21lbnQ7XHJcbnZhciBDaXJjbGVBbmRDaXJjbGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ2lyY2xlQW5kQ2lyY2xlXCIpKTtcclxuZXhwb3J0cy5DaXJjbGVBbmRDaXJjbGUgPSBDaXJjbGVBbmRDaXJjbGU7XHJcbnZhciBSZWN0QW5kUmVjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9SZWN0QW5kUmVjdFwiKSk7XHJcbmV4cG9ydHMuUmVjdEFuZFJlY3QgPSBSZWN0QW5kUmVjdDtcclxudmFyIEJveEFuZEJveCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Cb3hBbmRCb3hcIikpO1xyXG5leHBvcnRzLkJveEFuZEJveCA9IEJveEFuZEJveDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FUFNJTE9OID0gdm9pZCAwO1xyXG5leHBvcnRzLkVQU0lMT04gPSAwLjAwMDAxO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIExpbmVhciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lYXIoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSB2b2lkIDApIHsgYSA9IDA7IH1cclxuICAgICAgICBpZiAoYiA9PT0gdm9pZCAwKSB7IGIgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IGI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2E7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9hID0gVXRpbC51bmlmeVNpZ24odik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcImJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fYjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2IgPSBVdGlsLnVuaWZ5U2lnbih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5meCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB2YXIgX2MgPSB0aGlzLCBhID0gX2MuYSwgYiA9IF9jLmI7XHJcbiAgICAgICAgcmV0dXJuIGEgKiB4ICsgYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRTdGFuZGFyZEZvcm0gPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHRoaXMuYSA9IGEsIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0R2VuZXJhbEZvcm0gPSBmdW5jdGlvbiAoQSwgQiwgQykge1xyXG4gICAgICAgIEE7XHJcbiAgICAgICAgQjtcclxuICAgICAgICBDO1xyXG4gICAgICAgIHRoaXMuYSA9IC1BIC8gQjtcclxuICAgICAgICB0aGlzLmIgPSBDIC8gQjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeVNsb3BlQW5kUG9pbnQgPSBmdW5jdGlvbiAoYSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBiID0geSAtIGEgKiB4O1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeTJQb2ludCA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBudW1lID0geTIgLSB5MTtcclxuICAgICAgICB2YXIgZGVubyA9IHgyIC0geDE7XHJcbiAgICAgICAgdmFyIGEgPSBudW1lIC8gZGVubztcclxuICAgICAgICB0aGlzLmluaXRCeVNsb3BlQW5kUG9pbnQoYSwgeDEsIHkxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLmEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMuYikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaXNQZXJwV2l0aCA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobGluZWFyLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5hICogbGluZWFyLmEgPT09IC0xKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJwZXJwU2xvcGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xvcGUgPSAtKDEgLyB0aGlzLmEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKE51bWJlci5pc0Zpbml0ZShzbG9wZSkpID8gc2xvcGUgOiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwieT1cIiArIHRoaXMuYSArIFwieCtcIiArIHRoaXMuYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgcG9pbnRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG51bWUgPSBiLmIgLSBhLmI7XHJcbiAgICAgICAgdmFyIGRlbm8gPSBhLmEgLSBiLmE7XHJcbiAgICAgICAgdmFyIHggPSBudW1lIC8gZGVubztcclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB2YXIgeSA9IGEuZngoeCk7XHJcbiAgICAgICAgcmVzdWx0LmNvdW50ID0gMTtcclxuICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGluZWFyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5lYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXgzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdHJpeDModikge1xyXG4gICAgICAgIHRoaXMudiA9IHYuc2xpY2UoKTtcclxuICAgIH1cclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBNYXRyaXgzLnRyYW5zbGF0aW9uKHR4LCB0eSkpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBNYXRyaXgzLnJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHN4LCBzeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgzLm11bHRpcGx5KHRoaXMsIE1hdHJpeDMuc2NhbGluZyhzeCwgc3kpKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDMubXVsdGlwbHkodGhpcywgbSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMucHJvdG90eXBlLCBcImRldGVybWluYW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDMuZGV0ZXJtaW5hbnQodGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4My5wcm90b3R5cGUsIFwidHJhbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4My50cmFucyh0aGlzLnYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52O1xyXG4gICAgICAgIHJldHVybiBcIltcXG4gIFwiICsgdlswXSArIFwiLCBcIiArIHZbMV0gKyBcIiwgXCIgKyB2WzJdICsgXCIsXFxuICBcIiArIHZbM10gKyBcIiwgXCIgKyB2WzRdICsgXCIsIFwiICsgdls1XSArIFwiLFxcbiAgXCIgKyB2WzZdICsgXCIsIFwiICsgdls3XSArIFwiLCBcIiArIHZbOF0gKyBcIixcXG5dXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMsIFwiaWRlbnRpdHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4MywgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0cml4My50cmFuc2xhdGlvbiA9IGZ1bmN0aW9uICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICB0eCwgdHksIDFcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgYywgLXMsIDAsXHJcbiAgICAgICAgICAgIHMsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5zY2FsaW5nID0gZnVuY3Rpb24gKHN4LCBzeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgbSA9IE1hdHJpeDMuemVybztcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDM7ICsrcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDM7ICsrYykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCAzOyArK24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtLnZbciAqIDMgKyBjXSArPSBhLnZbciAqIDMgKyBuXSAqIGIudltuICogMyArIGNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvamVjdGlvbiA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdmFyIHggPSAxIC8gd2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSAxIC8gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIHgsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHksIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgdmFyIG0wID0gbVswXSwgbTEgPSBtWzFdLCBtMiA9IG1bMl0sIG0zID0gbVszXSwgbTQgPSBtWzRdLCBtNSA9IG1bNV0sIG02ID0gbVs2XSwgbTcgPSBtWzddLCBtOCA9IG1bOF07XHJcbiAgICAgICAgcmV0dXJuIChtMCAqIG00ICogbTggKyBtMSAqIG01ICogbTYgKyBtMiAqIG0zICogbTcpXHJcbiAgICAgICAgICAgIC0gKG0yICogbTQgKiBtNiArIG01ICogbTcgKiBtMCArIG04ICogbTEgKiBtMyk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My50cmFucyA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgbVswXSwgbVszXSwgbVs2XSxcclxuICAgICAgICAgICAgbVsxXSwgbVs0XSwgbVs3XSxcclxuICAgICAgICAgICAgbVsyXSwgbVs1XSwgbVs4XVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMuY29mYWN0b3IgPSBmdW5jdGlvbiAociwgYywgbSkge1xyXG4gICAgICAgIHZhciBhID0gTWF0aC5wb3coKC0xKSwgKHIgKyBjKSk7XHJcbiAgICAgICAgdmFyIGQgPSBtWzBdICogbVszXSAtIG1bMV0gKiBtWzJdO1xyXG4gICAgICAgIHJldHVybiBhICogZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0cml4MztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4MztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeDNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXgzXCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IzXCIpKTtcclxudmFyIE1hdHJpeDQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0cml4NCh2KSB7XHJcbiAgICAgICAgdGhpcy52ID0gdi5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgTWF0cml4NC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS54Um90YXRlID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQueFJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnlSb3RhdGUgPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC55Um90YXRpb24ocmFkaWFuKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUuelJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnpSb3RhdGlvbihyYWRpYW4pKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC5zY2FsaW5nKHN4LCBzeSwgc3opKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgbSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQucHJvdG90eXBlLCBcImludmVyc2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4NC5pbnZlcnNlKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LnByb3RvdHlwZSwgXCJkZXRlcm1pbmFudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXg0LmRldGVybWluYW50KHRoaXMudik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQucHJvdG90eXBlLCBcInRyYW5zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDQudHJhbnModGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdiA9IHRoaXMudjtcclxuICAgICAgICByZXR1cm4gXCJbXFxuICBcIiArIHZbMF0gKyBcIiwgXCIgKyB2WzFdICsgXCIsIFwiICsgdlsyXSArIFwiLCBcIiArIHZbM10gKyBcIlxcbiAgXCIgKyB2WzRdICsgXCIsIFwiICsgdls1XSArIFwiLCBcIiArIHZbNl0gKyBcIiwgXCIgKyB2WzddICsgXCJcXG4gIFwiICsgdls4XSArIFwiLCBcIiArIHZbOV0gKyBcIiwgXCIgKyB2WzEwXSArIFwiLCBcIiArIHZbMTFdICsgXCJcXG4gIFwiICsgdlsxMl0gKyBcIiwgXCIgKyB2WzEzXSArIFwiLCBcIiArIHZbMTRdICsgXCIsIFwiICsgdlsxNV0gKyBcIlxcbl1cIjtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NCwgXCJpZGVudGl0eVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NCwgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDQudHJhbnNsYXRpb24gPSBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC54Um90YXRpb24gPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnlSb3RhdGlvbiA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuelJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgYywgLXMsIDAsIDAsXHJcbiAgICAgICAgICAgIHMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5zY2FsaW5nID0gZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIHN6LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBtID0gTWF0cml4NC56ZXJvO1xyXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgNDsgKytyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgNDsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDQ7ICsrbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG0udltyICogNCArIGNdICs9IGEudltyICogNCArIG5dICogYi52W24gKiA0ICsgY107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5vcnRob2dyYXBoaWMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgdyA9IHJpZ2h0IC0gbGVmdDtcclxuICAgICAgICB2YXIgaCA9IGJvdHRvbSAtIHRvcDtcclxuICAgICAgICB2YXIgZCA9IGZhciAtIG5lYXI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgMiAvIHcsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDIgLyBoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAyIC8gZCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnBlcnNwZWN0aXZlID0gZnVuY3Rpb24gKGZvdlksIGFzcGVjdCwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZm92WSk7XHJcbiAgICAgICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKGZhciAtIG5lYXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGYgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGYsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIChmYXIgKyBuZWFyKSAqIHJhbmdlSW52LCAxLFxyXG4gICAgICAgICAgICAwLCAwLCAtMiAqIG5lYXIgKiBmYXIgKiByYW5nZUludiwgMCxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LmRldGVybWluYW50ID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgbTAgPSBtWzBdLCBtMSA9IG1bMV0sIG0yID0gbVsyXSwgbTMgPSBtWzNdLCBtNCA9IG1bNF0sIG01ID0gbVs1XSwgbTYgPSBtWzZdLCBtNyA9IG1bN10sIG04ID0gbVs4XSwgbTkgPSBtWzldLCBtMTAgPSBtWzEwXSwgbTExID0gbVsxMV0sIG0xMiA9IG1bMTJdLCBtMTMgPSBtWzEzXSwgbTE0ID0gbVsxNF0sIG0xNSA9IG1bMTVdO1xyXG4gICAgICAgIHZhciB0MSA9IG0wICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNSwgbTYsIG03LFxyXG4gICAgICAgICAgICBtOSwgbTEwLCBtMTEsXHJcbiAgICAgICAgICAgIG0xMywgbTE0LCBtMTUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIHQyID0gLW0xICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNCwgbTYsIG03LFxyXG4gICAgICAgICAgICBtOCwgbTEwLCBtMTEsXHJcbiAgICAgICAgICAgIG0xMiwgbTE0LCBtMTUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIHQzID0gbTIgKiBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChbXHJcbiAgICAgICAgICAgIG00LCBtNSwgbTcsXHJcbiAgICAgICAgICAgIG04LCBtOSwgbTExLFxyXG4gICAgICAgICAgICBtMTIsIG0xMywgbTE1LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciB0NCA9IC1tMyAqIE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KFtcclxuICAgICAgICAgICAgbTQsIG01LCBtNixcclxuICAgICAgICAgICAgbTgsIG05LCBtMTAsXHJcbiAgICAgICAgICAgIG0xMiwgbTEzLCBtMTQsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIHQxICsgdDIgKyB0MyArIHQ0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQudHJhbnMgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIG1bMF0sIG1bNF0sIG1bOF0sIG1bMTJdLFxyXG4gICAgICAgICAgICBtWzFdLCBtWzVdLCBtWzldLCBtWzEzXSxcclxuICAgICAgICAgICAgbVsyXSwgbVs2XSwgbVsxMF0sIG1bMTRdLFxyXG4gICAgICAgICAgICBtWzNdLCBtWzddLCBtWzExXSwgbVsxNV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5pbnZlcnNlID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgX2EgPSBtLnYsIG0wID0gX2FbMF0sIG0xID0gX2FbMV0sIG0yID0gX2FbMl0sIG0zID0gX2FbM10sIG00ID0gX2FbNF0sIG01ID0gX2FbNV0sIG02ID0gX2FbNl0sIG03ID0gX2FbN10sIG04ID0gX2FbOF0sIG05ID0gX2FbOV0sIG0xMCA9IF9hWzEwXSwgbTExID0gX2FbMTFdLCBtMTIgPSBfYVsxMl0sIG0xMyA9IF9hWzEzXSwgbTE0ID0gX2FbMTRdLCBtMTUgPSBfYVsxNV07XHJcbiAgICAgICAgdmFyIGQgPSAxLjAgLyBNYXRyaXg0LmRldGVybWluYW50KG0udik7XHJcbiAgICAgICAgdmFyIGMxMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDEsIDEsIFttNSwgbTYsIG03LCBtOSwgbTEwLCBtMTEsIG0xMywgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzEyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgMiwgW200LCBtNiwgbTcsIG04LCBtMTAsIG0xMSwgbTEyLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMTMgPSBkICogTWF0cml4NC5jb2ZhY3RvcigxLCAzLCBbbTQsIG01LCBtNywgbTgsIG05LCBtMTEsIG0xMiwgbTEzLCBtMTVdKTtcclxuICAgICAgICB2YXIgYzE0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgNCwgW200LCBtNSwgbTYsIG04LCBtOSwgbTEwLCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGMyMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDIsIDEsIFttMSwgbTIsIG0zLCBtOSwgbTEwLCBtMTEsIG0xMywgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzIyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgMiwgW20wLCBtMiwgbTMsIG04LCBtMTAsIG0xMSwgbTEyLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMjMgPSBkICogTWF0cml4NC5jb2ZhY3RvcigyLCAzLCBbbTAsIG0xLCBtMywgbTgsIG05LCBtMTEsIG0xMiwgbTEzLCBtMTVdKTtcclxuICAgICAgICB2YXIgYzI0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgNCwgW20wLCBtMSwgbTIsIG04LCBtOSwgbTEwLCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGMzMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDEsIFttMSwgbTIsIG0zLCBtNSwgbTYsIG03LCBtMTMsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzMiA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDIsIFttMCwgbTIsIG0zLCBtNCwgbTYsIG03LCBtMTIsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzMyA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDMsIFttMCwgbTEsIG0zLCBtNCwgbTUsIG03LCBtMTIsIG0xMywgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzNCA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDQsIFttMCwgbTEsIG0yLCBtNCwgbTUsIG02LCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGM0MSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDQsIDEsIFttMSwgbTIsIG0zLCBtNSwgbTYsIG03LCBtOSwgbTEwLCBtMTFdKTtcclxuICAgICAgICB2YXIgYzQyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgMiwgW20wLCBtMiwgbTMsIG00LCBtNiwgbTcsIG04LCBtMTAsIG0xMV0pO1xyXG4gICAgICAgIHZhciBjNDMgPSBkICogTWF0cml4NC5jb2ZhY3Rvcig0LCAzLCBbbTAsIG0xLCBtMywgbTQsIG01LCBtNywgbTgsIG05LCBtMTFdKTtcclxuICAgICAgICB2YXIgYzQ0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgNCwgW20wLCBtMSwgbTIsIG00LCBtNSwgbTYsIG04LCBtOSwgbTEwXSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQudHJhbnMoW1xyXG4gICAgICAgICAgICBjMTEsIGMxMiwgYzEzLCBjMTQsXHJcbiAgICAgICAgICAgIGMyMSwgYzIyLCBjMjMsIGMyNCxcclxuICAgICAgICAgICAgYzMxLCBjMzIsIGMzMywgYzM0LFxyXG4gICAgICAgICAgICBjNDEsIGM0MiwgYzQzLCBjNDQsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5pbnZlcnNlMiA9IGZ1bmN0aW9uIChtYXQpIHtcclxuICAgICAgICB2YXIgbSA9IG1hdC52O1xyXG4gICAgICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xyXG4gICAgICAgIHZhciB0bXBfMSA9IG0zMiAqIG0yMztcclxuICAgICAgICB2YXIgdG1wXzIgPSBtMTIgKiBtMzM7XHJcbiAgICAgICAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xyXG4gICAgICAgIHZhciB0bXBfNCA9IG0xMiAqIG0yMztcclxuICAgICAgICB2YXIgdG1wXzUgPSBtMjIgKiBtMTM7XHJcbiAgICAgICAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xyXG4gICAgICAgIHZhciB0bXBfNyA9IG0zMiAqIG0wMztcclxuICAgICAgICB2YXIgdG1wXzggPSBtMDIgKiBtMjM7XHJcbiAgICAgICAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xyXG4gICAgICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XHJcbiAgICAgICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcclxuICAgICAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xyXG4gICAgICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XHJcbiAgICAgICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcclxuICAgICAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xyXG4gICAgICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XHJcbiAgICAgICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcclxuICAgICAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xyXG4gICAgICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XHJcbiAgICAgICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcclxuICAgICAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xyXG4gICAgICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XHJcbiAgICAgICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcclxuICAgICAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXHJcbiAgICAgICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xyXG4gICAgICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cclxuICAgICAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XHJcbiAgICAgICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cclxuICAgICAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xyXG4gICAgICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXHJcbiAgICAgICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcclxuICAgICAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgZCAqIHQwLFxyXG4gICAgICAgICAgICBkICogdDEsXHJcbiAgICAgICAgICAgIGQgKiB0MixcclxuICAgICAgICAgICAgZCAqIHQzLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzAgKiBtMDAgKyB0bXBfNyAqIG0yMCArIHRtcF84ICogbTMwKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xMiAqIG0xMyArIHRtcF8xNSAqIG0yMyArIHRtcF8xNiAqIG0zMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xNyAqIG0wMyArIHRtcF8yMCAqIG0xMyArIHRtcF8yMyAqIG0yMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xOCAqIG0xMiArIHRtcF8yMyAqIG0zMiArIHRtcF8xNSAqIG0wMikgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuY29mYWN0b3IgPSBmdW5jdGlvbiAociwgYywgbSkge1xyXG4gICAgICAgIHZhciBhID0gTWF0aC5wb3coKC0xKSwgKHIgKyBjKSk7XHJcbiAgICAgICAgdmFyIGQgPSBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChtKTtcclxuICAgICAgICByZXR1cm4gYSAqIGQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5sb29rQXQgPSBmdW5jdGlvbiAocG9zaXRpb24sIHRhcmdldCwgdXApIHtcclxuICAgICAgICB2YXIgeiA9IFZlY3RvcjNfMS5kZWZhdWx0LnN1Yih0YXJnZXQsIHBvc2l0aW9uKS5ub3JtYWxpemVkO1xyXG4gICAgICAgIHZhciB4ID0gVmVjdG9yM18xLmRlZmF1bHQuY3Jvc3ModXAsIHopO1xyXG4gICAgICAgIHZhciB5ID0gVmVjdG9yM18xLmRlZmF1bHQuY3Jvc3MoeiwgeCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgeC54LCB4LnksIHgueiwgMCxcclxuICAgICAgICAgICAgeS54LCB5LnksIHkueiwgMCxcclxuICAgICAgICAgICAgei54LCB6LnksIHoueiwgMCxcclxuICAgICAgICAgICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueiwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0cml4NDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4NDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVHJpYW5nbGUgPSBleHBvcnRzLkJveCA9IGV4cG9ydHMuUmVjdCA9IGV4cG9ydHMuQ2Fwc3VsZSA9IGV4cG9ydHMuRWxsaXBzZSA9IGV4cG9ydHMuQ2lyY2xlID0gZXhwb3J0cy5TZWdtZW50ID0gZXhwb3J0cy5SYXkgPSBleHBvcnRzLkxpbmUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgTGluZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lKHAsIHYpIHtcclxuICAgICAgICB0aGlzLl9wID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLl92ID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHYueCwgdi55KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJ2XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Y7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmUucHJvdG90eXBlLnBvaW50ID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMucCwgdGhpcy52Lm5vcm1hbGl6ZS50aW1lcyhmKSk7XHJcbiAgICB9O1xyXG4gICAgTGluZS5wcm90b3R5cGUucG9pbnRzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgICAgIHZhciBoYWxmTGVuZ3RoID0gbGVuZ3RoIC8gMjtcclxuICAgICAgICB2YXIgcDEgPSB0aGlzLnBvaW50KC1oYWxmTGVuZ3RoKTtcclxuICAgICAgICB2YXIgcDIgPSB0aGlzLnBvaW50KGhhbGZMZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBbcDEueCwgcDEueSwgcDIueCwgcDIueV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbnZhciBSYXkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJheSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBSYXkucHJvdG90eXBlLnBvaW50cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcclxuICAgICAgICB2YXIgcDEgPSB0aGlzLnA7XHJcbiAgICAgICAgdmFyIHAyID0gdGhpcy5wb2ludChsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBbcDEueCwgcDEueSwgcDIueCwgcDIueV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJheTtcclxufShMaW5lKSk7XHJcbmV4cG9ydHMuUmF5ID0gUmF5O1xyXG52YXIgU2VnbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZWdtZW50KHAsIHYpIHtcclxuICAgICAgICB0aGlzLl9wID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLl92ID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHYueCwgdi55KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJwMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMuX3AsIHRoaXMudik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ2XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Y7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJwb2ludHNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzID0gX2EucDEsIGUgPSBfYS5wMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgZS54LCBlLnldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFNlZ21lbnQucHJvdG90eXBlLnRvTGluZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBMaW5lKHRoaXMuX3AsIHRoaXMuX3YpOyB9O1xyXG4gICAgcmV0dXJuIFNlZ21lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VnbWVudCA9IFNlZ21lbnQ7XHJcbnZhciBDaXJjbGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2lyY2xlKHAsIHIpIHtcclxuICAgICAgICB0aGlzLl9wID0gcC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuX3IgPSByO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENpcmNsZS5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2lyY2xlLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufSgpKTtcclxuZXhwb3J0cy5DaXJjbGUgPSBDaXJjbGU7XHJcbnZhciBFbGxpcHNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVsbGlwc2UocCwgcngsIHJ5LCBhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuX3JhZCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcCA9IHAuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLl9yID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHJ4LCByeSk7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yYWQ7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnJhZDJkZWcodGhpcy5fcmFkKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3JhZCA9IFV0aWwuZGVnMnJhZCh2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEVsbGlwc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRWxsaXBzZSA9IEVsbGlwc2U7XHJcbnZhciBDYXBzdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhcHN1bGUocywgcikge1xyXG4gICAgICAgIHRoaXMuX3MgPSBzO1xyXG4gICAgICAgIHRoaXMuX3IgPSByO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcHN1bGUucHJvdG90eXBlLCBcInNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fczsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcHN1bGUucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IgPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQ2Fwc3VsZTtcclxufSgpKTtcclxuZXhwb3J0cy5DYXBzdWxlID0gQ2Fwc3VsZTtcclxudmFyIFJlY3QgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjdChwLCB3LCBoKSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IHA7XHJcbiAgICAgICAgdGhpcy5fdyA9IHc7XHJcbiAgICAgICAgdGhpcy5faCA9IGg7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl93OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fdyA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2g7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9oID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcImNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMuX3AueCArIHRoaXMuX3cgLyAyLCB0aGlzLl9wLnkgLSB0aGlzLl9oIC8gMik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucC5jbG9uZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5wLnggKyB0aGlzLncsIHRoaXMucC55KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMucC54ICsgdGhpcy53LCB0aGlzLnAueSAtIHRoaXMuaCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInA0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLnAueCwgdGhpcy5wLnkgLSB0aGlzLmgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJ2MXRvMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMiwgdGhpcy5wMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInYydG8zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAzLCB0aGlzLnAyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwidjN0bzRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDQsIHRoaXMucDMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJ2NHRvMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMSwgdGhpcy5wNCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcIm1pblhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcC54O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJtYXhYXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3AueCArIHRoaXMuX3c7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcIm1pbllcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcC55IC0gdGhpcy5faDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwibWF4WVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wLnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFJlY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVjdCA9IFJlY3Q7XHJcbnZhciBCb3ggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm94KHAsIHIsIGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5fcmFkID0gMDtcclxuICAgICAgICB0aGlzLl9wID0gcDtcclxuICAgICAgICB0aGlzLl9yID0gcjtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicnhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci54OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fci54ID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicnlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci55OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fci55ID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnJ4ICogMjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwiaFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnJ5ICogMjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwiYW5nbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC5yYWQyZGVnKHRoaXMuX3JhZCk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yYWQgPSBVdGlsLmRlZzJyYWQodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgtdGhpcy5fci54LCB0aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLl9yLngsIHRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMuX3IueCwgLXRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KC10aGlzLl9yLngsIC10aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInYxdG8yXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAyLCB0aGlzLnAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ2MnRvM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMywgdGhpcy5wMik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwidjN0bzRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDQsIHRoaXMucDMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInY0dG8xXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAxLCB0aGlzLnA0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQm94O1xyXG59KCkpO1xyXG5leHBvcnRzLkJveCA9IEJveDtcclxudmFyIFRyaWFuZ2xlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyaWFuZ2xlKHAxLCBwMiwgcDMpIHtcclxuICAgICAgICB0aGlzLl9wMSA9IHAxO1xyXG4gICAgICAgIHRoaXMuX3AyID0gcDI7XHJcbiAgICAgICAgdGhpcy5fcDMgPSBwMztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDE7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDI7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDM7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicG9pbnRzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3AxLngsIHRoaXMuX3AxLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wMi54LCB0aGlzLl9wMi55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcDMueCwgdGhpcy5fcDMueSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYxdG8yXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAyLCB0aGlzLnAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYydG8zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAzLCB0aGlzLnAyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYzdG8xXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAxLCB0aGlzLnAzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gVHJpYW5nbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJpYW5nbGUgPSBUcmlhbmdsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBRdWFkcmF0aWMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVhZHJhdGljKCkge1xyXG4gICAgICAgIHRoaXMuX2EgPSAwO1xyXG4gICAgICAgIHRoaXMuX2IgPSAwO1xyXG4gICAgICAgIHRoaXMuX2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX2EgPSB0aGlzLl9iID0gdGhpcy5fYyA9IDA7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwudW5pZnlTaWduKHRoaXMuX2EpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYSA9IE51bWJlcih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnVuaWZ5U2lnbih0aGlzLl9iKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2IgPSBOdW1iZXIodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC51bmlmeVNpZ24odGhpcy5fYyk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9jID0gTnVtYmVyKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwudW5pZnlTaWduKFF1YWRyYXRpYy5jYWxjUF9CeV9hYih0aGlzLmEsIHRoaXMuYikpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC51bmlmeVNpZ24oUXVhZHJhdGljLmNhbGNRX0J5X2FiYyh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0R2VuZXJhbEZvcm0gPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhLCB0aGlzLl9iID0gYiwgdGhpcy5fYyA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0U3RhbmRhcmRGb3JtID0gZnVuY3Rpb24gKGEsIHAsIHEpIHtcclxuICAgICAgICB0aGlzLl9hID0gYTtcclxuICAgICAgICB0aGlzLl9iID0gUXVhZHJhdGljLmNhbGNCX0J5X2FwKGEsIHApO1xyXG4gICAgICAgIHRoaXMuX2MgPSBRdWFkcmF0aWMuY2FsY0NfQnlfcHEoYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0RmFjdG9yaXphdGlvbkZvcm0gPSBmdW5jdGlvbiAoYSwgcywgdCkge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhO1xyXG4gICAgICAgIHRoaXMuX2IgPSBRdWFkcmF0aWMuY2FsY0JfQnlfYXN0KGEsIHMsIHQpO1xyXG4gICAgICAgIHRoaXMuX2MgPSBRdWFkcmF0aWMuY2FsY0NfQnlfYXN0KGEsIHMsIHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEJ5QXBleEFuZFBhc3NQb2ludCA9IGZ1bmN0aW9uIChwLCBxLCB4LCB5KSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfcHF4eShwLCBxLCB4LCB5KTtcclxuICAgICAgICB0aGlzLmluaXRTdGFuZGFyZEZvcm0oYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnlBeGlzQW5kMlBhc3NQb2ludHMgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfYXhpeFhfeDF5MV94MnkyKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdmFyIHEgPSBRdWFkcmF0aWMuY2FsY1FfQnlfYXhpeFhfeDF5MV94MnkyKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdmFyIHAgPSBheGlzWDtcclxuICAgICAgICB0aGlzLmluaXRTdGFuZGFyZEZvcm0oYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnkzUGFzc1BvaW50cyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGIgPSBRdWFkcmF0aWMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGMgPSBRdWFkcmF0aWMuY2FsY0NfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdGhpcy5pbml0R2VuZXJhbEZvcm0oYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5meCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgcCA9IF9kLnAsIHEgPSBfZC5xO1xyXG4gICAgICAgIHJldHVybiBhICogKCh4IC0gcCkgKiAoeCAtIHApKSArIHE7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5nZXRQb2ludHMgPSBmdW5jdGlvbiAoZnJvbVgsIHRvWCwgc3RlcCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIHZhciBwID0gW107XHJcbiAgICAgICAgdG9YICs9IHN0ZXAgKiAwLjE7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IGZyb21YOyB4IDw9IHRvWDsgeCArPSBzdGVwKSB7XHJcbiAgICAgICAgICAgIHAucHVzaCh4LCB0aGlzLmZ4KHgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5nZXRQb2ludHNPZlNsb3BlQXRZVGFuZ2VudCA9IGZ1bmN0aW9uIChmcm9tWCwgdG9YKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgdmFyIHkxID0gdGhpcy5iICogZnJvbVggKyB0aGlzLmM7XHJcbiAgICAgICAgdmFyIHkyID0gdGhpcy5iICogdG9YICsgdGhpcy5jO1xyXG4gICAgICAgIHJldHVybiBbZnJvbVgsIHkxLCB0b1gsIHkyXTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJhcGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5wLCB5OiB0aGlzLnEgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJheGlzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIVF1YWRyYXRpYy5pc1ZhbGlkQSh0aGlzLmEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImhhc0FwZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaGFzQXBleChwLCBxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJtYXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoMCA8PSB0aGlzLmEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcGV4Lnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwibWluXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBleC55O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImRpc2NyaW1pbmFudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInNvbHV0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5zb2x1dGlvbihhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc1Bvc2l0aXZlRGVmaW5pdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmlzUG9zaXRpdmVEZWZpbml0ZShhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc05lZ2F0aXZlRGVmaW5pdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmlzTmVnYXRpdmVEZWZpbml0ZShhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZTbG9wZSA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS50b0ZpeGVkKGZpeGVkKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZBeGlzID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FwZXgpXHJcbiAgICAgICAgICAgIHJldHVybiBcIuOBquOBl1wiO1xyXG4gICAgICAgIHZhciBheGlzID0gdGhpcy5heGlzLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIng9XCIgKyBheGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkFwZXggPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQXBleClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmFwZXgueC50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgeSA9IHRoaXMuYXBleC55LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mTGF0ZXhBUFEgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIjtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgcCA9IHRoaXMucC50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgcSA9IHRoaXMucS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICByZXR1cm4gXCIkJHk9XCIgKyBhICsgXCIoeCAtIChcIiArIHAgKyBcIikpXjIgKyAoXCIgKyBxICsgXCIpJCRcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZMYXRleEFCQyA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBjID0gdGhpcy5jLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIiQkeT1cIiArIGEgKyBcInheMiArIChcIiArIGIgKyBcIil4ICsgKFwiICsgYyArIFwiKSQkXCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ0Fib3V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBpZiAoYSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiK44Gr5Ye4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLkuIvjgavlh7hcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgcmV0dXJuIFwie2E6XCIgKyBhICsgXCIsIGI6XCIgKyBiICsgXCIsIGM6XCIgKyBjICsgXCIsIHA6XCIgKyBwICsgXCIsIHE6XCIgKyBxICsgXCJ9XCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNQX0J5X2FiID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gLWIgLyAoMiAqIGEpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjUV9CeV9hYmMgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHJldHVybiAtKChNYXRoLnBvdyhiLCAyKSkgLSAoNCAqIGEgKiBjKSkgLyAoNCAqIGEpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQl9CeV9hcCA9IGZ1bmN0aW9uIChhLCBwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0yICogYSAqIHA7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X2FzdCA9IGZ1bmN0aW9uIChhLCBzLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuICgtYSAqIHQpICsgKC1hICogcyk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNDX0J5X3BxID0gZnVuY3Rpb24gKGEsIHAsIHEpIHtcclxuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KHAsIDIpICsgcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfYXN0ID0gZnVuY3Rpb24gKGEsIHMsIHQpIHtcclxuICAgICAgICByZXR1cm4gYSAqIHMgKiB0O1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV9wcXh5ID0gZnVuY3Rpb24gKHAsIHEsIHgsIHkpIHtcclxuICAgICAgICB2YXIgbnVtZSA9IHkgLSBxO1xyXG4gICAgICAgIHZhciBkZW5vID0gTWF0aC5wb3coKHggLSBwKSwgMik7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5MSAtIHkyO1xyXG4gICAgICAgIHZhciBkZW5vID0gKE1hdGgucG93KCh4MSAtIGF4aXNYKSwgMikpIC0gKE1hdGgucG93KCh4MiAtIGF4aXNYKSwgMikpO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY1FfQnlfYXhpeFhfeDF5MV94MnkyID0gZnVuY3Rpb24gKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcSA9IHkxIC0gKGEgKiBNYXRoLnBvdygoeDEgLSBheGlzWCksIDIpKTtcclxuICAgICAgICByZXR1cm4gcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBudW1lID0gKCh5MSAtIHkyKSAqICh4MSAtIHgzKSAtICh5MSAtIHkzKSAqICh4MSAtIHgyKSk7XHJcbiAgICAgICAgdmFyIGRlbm8gPSAoKHgxIC0geDIpICogKHgxIC0geDMpICogKHgyIC0geDMpKTtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X3gxeTFfeDJ5Ml94M3kzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5MSAtIHkyIC0gKGEgKiAoTWF0aC5wb3coeDEsIDIpIC0gTWF0aC5wb3coeDIsIDIpKSk7XHJcbiAgICAgICAgdmFyIGRlbm8gPSB4MSAtIHgyO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYiA9IHRoaXMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGMgPSB5MSArICgtYSAqICh4MSAqIHgxKSAtIGIgKiB4MSk7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmRpc2NyaW1pbmFudCA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgcmV0dXJuIChNYXRoLnBvdyhiLCAyKSkgLSAoNCAqIGEgKiBjKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuc29sdXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHZhciBkID0gUXVhZHJhdGljLmRpc2NyaW1pbmFudChhLCBiLCBjKTtcclxuICAgICAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoZCA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgZGVubyA9IDIgKiBhO1xyXG4gICAgICAgIHZhciB4MSA9IFV0aWwudW5pZnlTaWduKCgtYiAtIE1hdGguc3FydChkKSkgLyBkZW5vKTtcclxuICAgICAgICB2YXIgeDIgPSBVdGlsLnVuaWZ5U2lnbigoLWIgKyBNYXRoLnNxcnQoZCkpIC8gZGVubyk7XHJcbiAgICAgICAgaWYgKGQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbeDFdO1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oeDEsIHgyKSwgTWF0aC5tYXgoeDEsIHgyKV07XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzVmFsaWRBID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChpc05hTihhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChJbmZpbml0eSA9PSBNYXRoLmFicyhhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5oYXNBcGV4ID0gZnVuY3Rpb24gKHAsIHEpIHtcclxuICAgICAgICBpZiAoaXNOYU4ocCkgfHwgaXNOYU4ocSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoSW5maW5pdHkgPT09IE1hdGguYWJzKHApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKEluZmluaXR5ID09PSBNYXRoLmFicyhxKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pc1Bvc2l0aXZlRGVmaW5pdGUgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIGlmICghUXVhZHJhdGljLmlzVmFsaWRBKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGEgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIHJldHVybiAoZCA8IDApO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pc05lZ2F0aXZlRGVmaW5pdGUgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIGlmICghUXVhZHJhdGljLmlzVmFsaWRBKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKDAgPCBhKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIHJldHVybiAoZCA8IDApO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBwb2ludHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYS5pc0ludmFsaWQgfHwgYi5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGEuYSAtIGIuYSA9PT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtZSA9IGIuYyAtIGEuYztcclxuICAgICAgICAgICAgdmFyIGRlbm8gPSBhLmIgLSBiLmI7XHJcbiAgICAgICAgICAgIGlmIChkZW5vID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHggPSBudW1lIC8gZGVubztcclxuICAgICAgICAgICAgdmFyIHkgPSBhLmZ4KHgpO1xyXG4gICAgICAgICAgICByZXN1bHQuY291bnQgPSAxO1xyXG4gICAgICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjID0gbmV3IFF1YWRyYXRpYygpLmluaXRHZW5lcmFsRm9ybShhLmEgLSBiLmEsIGEuYiAtIGIuYiwgYS5jIC0gYi5jKTtcclxuICAgICAgICB2YXIgcHggPSBjLnNvbHV0aW9uO1xyXG4gICAgICAgIGlmIChweCA9PT0gdW5kZWZpbmVkIHx8IHB4Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBweC5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNvdW50Kys7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb2ludHMucHVzaCh4LCBhLmZ4KHgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWFkcmF0aWM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFF1YWRyYXRpYztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UeXBlID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjJcIikpO1xyXG52YXIgVHlwZTtcclxuKGZ1bmN0aW9uIChUeXBlKSB7XHJcbiAgICBUeXBlW1R5cGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIFR5cGVbVHlwZVtcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XHJcbiAgICBUeXBlW1R5cGVbXCJBY3V0ZVwiXSA9IDJdID0gXCJBY3V0ZVwiO1xyXG4gICAgVHlwZVtUeXBlW1wiT2J0dXNlXCJdID0gM10gPSBcIk9idHVzZVwiO1xyXG59KShUeXBlID0gZXhwb3J0cy5UeXBlIHx8IChleHBvcnRzLlR5cGUgPSB7fSkpO1xyXG52YXIgVHJpYW5nbGUyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyaWFuZ2xlMihwKSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgeyBwID0gW107IH1cclxuICAgICAgICB2YXIgYXggPSBwWzBdID8gcFswXSA6IDA7XHJcbiAgICAgICAgdmFyIGF5ID0gcFsxXSA/IHBbMV0gOiAwO1xyXG4gICAgICAgIHZhciBieCA9IHBbMl0gPyBwWzJdIDogMDtcclxuICAgICAgICB2YXIgYnkgPSBwWzNdID8gcFszXSA6IDA7XHJcbiAgICAgICAgdmFyIGN4ID0gcFs0XSA/IHBbNF0gOiAwO1xyXG4gICAgICAgIHZhciBjeSA9IHBbNV0gPyBwWzVdIDogMDtcclxuICAgICAgICB0aGlzLl9BID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGF4LCBheSk7XHJcbiAgICAgICAgdGhpcy5fQiA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChieCwgYnkpO1xyXG4gICAgICAgIHRoaXMuX0MgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoY3gsIGN5KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fQTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9COyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX0M7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkFCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLkIsIHRoaXMuQSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQywgdGhpcy5CKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJDQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5BLCB0aGlzLkMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5CQy5tYWduaXR1ZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkNBLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQUIubWFnbml0dWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNvcnRlZExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW2EsIGIsIGNdO1xyXG4gICAgICAgICAgICBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGIgLSBhOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4U2lkZU5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYzogcmV0dXJuIFwiQUJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgYTogcmV0dXJuIFwiQkNcIjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIkNBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5TaWRlTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGlzdFsyXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjOiByZXR1cm4gXCJBQlwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhOiByZXR1cm4gXCJCQ1wiO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwiQ0FcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0TGVuZ3RoQXQgPSBmdW5jdGlvbiAoc2lkZU5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHNpZGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCQ1wiOiByZXR1cm4gdGhpcy5hO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0FcIjogcmV0dXJuIHRoaXMuYjtcclxuICAgICAgICAgICAgY2FzZSBcIkFCXCI6IHJldHVybiB0aGlzLmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aEF0KHRoaXMubWF4U2lkZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkxlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aEF0KHRoaXMubWluU2lkZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lck5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2lkZSA9IHRoaXMubWF4U2lkZU5hbWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiBcIkFcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gXCJCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lck5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2lkZSA9IHRoaXMubWluU2lkZU5hbWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiBcIkFcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gXCJCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNvc0FcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIG4gPSAoTWF0aC5wb3coYiwgMikpICsgKE1hdGgucG93KGMsIDIpKSAtIChNYXRoLnBvdyhhLCAyKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMiAqIGIgKiBjO1xyXG4gICAgICAgICAgICB2YXIgY29zID0gbiAvIGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY29zQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgbiA9IChNYXRoLnBvdyhjLCAyKSkgKyAoTWF0aC5wb3coYSwgMikpIC0gKE1hdGgucG93KGIsIDIpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAyICogYyAqIGE7XHJcbiAgICAgICAgICAgIHZhciBjb3MgPSBuIC8gZDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjb3NDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGEsIDIpKSArIChNYXRoLnBvdyhiLCAyKSkgLSAoTWF0aC5wb3coYywgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBhICogYjtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0EgPSB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NBLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0IgPSB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NCLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NDLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInRhbkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgc2luQSA9IF9hLnNpbkEsIGNvc0EgPSBfYS5jb3NBO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luQSAvIGNvc0E7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwidGFuQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzaW5CID0gX2Euc2luQiwgY29zQiA9IF9hLmNvc0I7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW5CIC8gY29zQjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJ0YW5DXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkMgPSBfYS5zaW5DLCBjb3NDID0gX2EuY29zQztcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkMgLyBOdW1iZXIoY29zQy50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS5nZXRDb3NBdCA9IGZ1bmN0aW9uIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6IHJldHVybiB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6IHJldHVybiB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiB0aGlzLmNvc0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lckNvc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvc0F0KHRoaXMubWF4Q29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluQ29ybmVyQ29zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29zQXQodGhpcy5taW5Db3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLmdldFNpbkF0ID0gZnVuY3Rpb24gKGNvcm5lck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvcm5lck5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjogcmV0dXJuIHRoaXMuc2luQTtcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjogcmV0dXJuIHRoaXMuc2luQjtcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIHRoaXMuc2luQztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4Q29ybmVyU2luXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2luQXQodGhpcy5tYXhDb3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5Db3JuZXJTaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaW5BdCh0aGlzLm1pbkNvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0VGFuQXQgPSBmdW5jdGlvbiAoY29ubmVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29ubmVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOiByZXR1cm4gdGhpcy50YW5BO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlwiOiByZXR1cm4gdGhpcy50YW5CO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gdGhpcy50YW5DO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhDb3JuZXJUYW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYW5BdCh0aGlzLm1heENvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lclRhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhbkF0KHRoaXMubWluQ29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwicmFkQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQSA9IHRoaXMuY29zQTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NBKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJyYWRCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NCID0gdGhpcy5jb3NCO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc0IpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInJhZENcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiYXJlYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGIgPSBfYS5iLCBjID0gX2EuYywgc2luQSA9IF9hLnNpbkE7XHJcbiAgICAgICAgICAgIHJldHVybiAoYiAqIGMgKiBzaW5BKSAqIDAuNTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJvdXRlclJhZGl1c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgc2luQSA9IF9hLnNpbkE7XHJcbiAgICAgICAgICAgIHJldHVybiBhIC8gKDIgKiBzaW5BKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJpbm5lclJhZGl1c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jLCBhcmVhID0gX2EuYXJlYTtcclxuICAgICAgICAgICAgcmV0dXJuICgyICogYXJlYSkgLyAoYSArIGIgKyBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQztcclxuICAgICAgICAgICAgdmFyIGcgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoKS5hZGQoQSkuYWRkKEIpLmFkZChDKS50aW1lcygxIC8gMyk7XHJcbiAgICAgICAgICAgIHJldHVybiBnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm91dGVyQ2VudGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkMsIHJhZEEgPSBfYS5yYWRBLCByYWRCID0gX2EucmFkQiwgcmFkQyA9IF9hLnJhZEM7XHJcbiAgICAgICAgICAgIHZhciBzaW4yQSA9IE1hdGguc2luKHJhZEEgKiAyKTtcclxuICAgICAgICAgICAgdmFyIHNpbjJCID0gTWF0aC5zaW4ocmFkQiAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgc2luMkMgPSBNYXRoLnNpbihyYWRDICogMik7XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSBBLmNsb25lKCkudGltZXMoc2luMkEpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEIuY2xvbmUoKS50aW1lcyhzaW4yQikpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEMuY2xvbmUoKS50aW1lcyhzaW4yQykpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IHNpbjJBICsgc2luMkIgKyBzaW4yQztcclxuICAgICAgICAgICAgcmV0dXJuIGNlbnRlci50aW1lcygxIC8gZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiaW5uZXJDZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IEEuY2xvbmUoKS50aW1lcyhhKVxyXG4gICAgICAgICAgICAgICAgLmFkZChCLmNsb25lKCkudGltZXMoYikpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEMuY2xvbmUoKS50aW1lcyhjKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMSAvIChhICsgYiArIGMpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VudGVyLnRpbWVzKGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImlzSW52YWxpZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBhID0gbGlzdFswXSwgYiA9IGxpc3RbMV0sIGMgPSBsaXN0WzJdO1xyXG4gICAgICAgICAgICByZXR1cm4gIShhIDwgYiArIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5Ob25lO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzBdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICB2YXIgbWlkID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzFdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICB2YXIgbWluID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzJdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICBpZiAobWF4IDwgbWlkICsgbWluKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR5cGUuQWN1dGU7XHJcbiAgICAgICAgICAgIGlmIChtYXggPiBtaWQgKyBtaW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5PYnR1c2U7XHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlLlJpZ2h0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQztcclxuICAgICAgICByZXR1cm4gXCJBXCIgKyBBICsgXCIsIEJcIiArIEIgKyBcIiwgQ1wiICsgQztcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJpYW5nbGUyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUcmlhbmdsZTI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmVxdWFsID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PT0gdi54ICYmIHRoaXMueSA9PT0gdi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ICs9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICAgICAgdGhpcy55IC09IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS50aW1lcyA9IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IGs7XHJcbiAgICAgICAgdGhpcy55ICo9IGs7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcIm1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwic3FyTWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICByZXR1cm4geCAqIHggKyB5ICogeTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibm9ybWFsaXplXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hZ25pdHVkZSA9IHRoaXMubWFnbml0dWRlO1xyXG4gICAgICAgICAgICBpZiAobWFnbml0dWRlID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMi56ZXJvO1xyXG4gICAgICAgICAgICB2YXIgdiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCAvIG1hZ25pdHVkZSxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSAvIG1hZ25pdHVkZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodi54LCB2LnkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJyYWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHZhciByYWQgPSBNYXRoLmF0YW4oeSAvIHgpO1xyXG4gICAgICAgICAgICBpZiAocmFkIDwgMCAmJiB4IDwgMCB8fCAwIDwgcmFkICYmIHkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFkICsgTWF0aC5QSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFkIDwgMCAmJiAwIDwgeCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhZCArIDIgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICB0aGlzLnggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHRoaXMueSA9IHggKiBNYXRoLnNpbihyYWQpICsgeSAqIE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54O1xyXG4gICAgICAgIHRoaXMueSA9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmxlcnAgPSBmdW5jdGlvbiAodG8sIHQpIHtcclxuICAgICAgICB2YXIgdiA9IFZlY3RvcjIuc3ViKHRvLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZCh2LnRpbWVzKHQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5kb3QgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLmRvdCh0aGlzLCB2KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5jcm9zcyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuY3Jvc3ModGhpcywgdik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwiemVyb1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJvbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwidXBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwiZG93blwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwibGVmdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwicmlnaHRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5hZGQgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkuYWRkKHYyKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnN1YiA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gdjEuY2xvbmUoKS5zdWIodjIpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIudGltZXMgPSBmdW5jdGlvbiAodiwgaykge1xyXG4gICAgICAgIHJldHVybiB2LmNsb25lKCkudGltZXMoayk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pbnZlcnNlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdi5jbG9uZSgpLnRpbWVzKC0xKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzWmVybyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuICh2LnggPT09IDAgJiYgdi55ID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzUGFyYWxsZWwgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIHQgPSBWZWN0b3IyLmNyb3NzKHYxLCB2Mik7XHJcbiAgICAgICAgcmV0dXJuICh0ID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzVmVydGljYWwgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIChWZWN0b3IyLmRvdCh2MSwgdjIpID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRvdCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgZG90ID0gdjEueCAqIHYyLnggKyB2MS55ICogdjIueTtcclxuICAgICAgICByZXR1cm4gZG90O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuY3Jvc3MgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIGNyb3NzID0gdjEueCAqIHYyLnkgLSB2Mi54ICogdjEueTtcclxuICAgICAgICByZXR1cm4gY3Jvc3M7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5hbmdsZSA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgbmVtdSA9IFZlY3RvcjIuZG90KHYxLCB2Mik7XHJcbiAgICAgICAgdmFyIGRlbm8gPSB2MS5tYWduaXR1ZGUgKiB2Mi5tYWduaXR1ZGU7XHJcbiAgICAgICAgdmFyIGNvcyA9IG5lbXUgLyBkZW5vO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRpc3RhbmNlID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLnN1Yih2MSwgdjIpLm1hZ25pdHVkZTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmxlcnAgPSBmdW5jdGlvbiAodjEsIHYyLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkubGVycCh2MiwgdCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5taWRwb2ludCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gdjEuY2xvbmUoKS5hZGQodjIpLnRpbWVzKDAuNSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc0FjdXRlQW5nbGUgPSBmdW5jdGlvbiAoYmFzZSwgcDEsIHAyKSB7XHJcbiAgICAgICAgdmFyIHYxID0gVmVjdG9yMi5zdWIocDEsIGJhc2UpO1xyXG4gICAgICAgIHZhciB2MiA9IFZlY3RvcjIuc3ViKHAyLCBiYXNlKTtcclxuICAgICAgICByZXR1cm4gKDAgPCB2MS5kb3QodjIpKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzT2J0dXNlQW5nbGUgPSBmdW5jdGlvbiAoYmFzZSwgcDEsIHAyKSB7XHJcbiAgICAgICAgdmFyIHYxID0gVmVjdG9yMi5zdWIocDEsIGJhc2UpO1xyXG4gICAgICAgIHZhciB2MiA9IFZlY3RvcjIuc3ViKHAyLCBiYXNlKTtcclxuICAgICAgICByZXR1cm4gKHYxLmRvdCh2MikgPCAwKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMyh4LCB5LCB6KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICBpZiAoeiA9PT0gdm9pZCAwKSB7IHogPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHRoaXMueCArPSBhLng7XHJcbiAgICAgICAgdGhpcy55ICs9IGEueTtcclxuICAgICAgICB0aGlzLnogKz0gYS56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdGhpcy54IC09IGEueDtcclxuICAgICAgICB0aGlzLnkgLT0gYS55O1xyXG4gICAgICAgIHRoaXMueiAtPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IG51bTtcclxuICAgICAgICB0aGlzLnkgKj0gbnVtO1xyXG4gICAgICAgIHRoaXMueiAqPSBudW07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIsIFwiICsgdGhpcy56ICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcIm5vcm1hbGl6ZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMy5ub3JtYWxpemUodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMy5hZGQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnN1YiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnopO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMudGltZXMgPSBmdW5jdGlvbiAoYSwgbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGEueCAqIG51bSwgYS55ICogbnVtLCBhLnogKiBudW0pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMubm9ybWFsaXplID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KE1hdGgucG93KHYueCwgMikgKyBNYXRoLnBvdyh2LnksIDIpICsgTWF0aC5wb3codi56LCAyKSk7XHJcbiAgICAgICAgaWYgKDAuMDAwMDEgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYueCAvIGxlbmd0aCwgdi55IC8gbGVuZ3RoLCB2LnogLyBsZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjMuemVybztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5kb3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5jcm9zcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIHggPSBhLnkgKiBiLnogLSBhLnogKiBiLnk7XHJcbiAgICAgICAgdmFyIHkgPSBhLnogKiBiLnggLSBhLnggKiBiLno7XHJcbiAgICAgICAgdmFyIHogPSBhLnggKiBiLnkgLSBhLnkgKiBiLng7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMsIFwib25lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcInVwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcImRvd25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgLTEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBWZWN0b3IzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbGxpc2lvbjIgPSBleHBvcnRzLlByaW1pdGl2ZTIgPSBleHBvcnRzLlRyaWFuZ2xlMiA9IGV4cG9ydHMuTWF0cml4NCA9IGV4cG9ydHMuTWF0cml4MyA9IGV4cG9ydHMuVmVjdG9yMyA9IGV4cG9ydHMuVmVjdG9yMiA9IGV4cG9ydHMuUXVhZHJhdGljID0gZXhwb3J0cy5MaW5lYXIgPSBleHBvcnRzLkRlZmluZSA9IGV4cG9ydHMuVXRpbCA9IHZvaWQgMDtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbmV4cG9ydHMuVXRpbCA9IFV0aWw7XHJcbnZhciBEZWZpbmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vRGVmaW5lXCIpKTtcclxuZXhwb3J0cy5EZWZpbmUgPSBEZWZpbmU7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbmV4cG9ydHMuVmVjdG9yMiA9IFZlY3RvcjJfMS5kZWZhdWx0O1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjNcIikpO1xyXG5leHBvcnRzLlZlY3RvcjMgPSBWZWN0b3IzXzEuZGVmYXVsdDtcclxudmFyIE1hdHJpeDNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXgzXCIpKTtcclxuZXhwb3J0cy5NYXRyaXgzID0gTWF0cml4M18xLmRlZmF1bHQ7XHJcbnZhciBNYXRyaXg0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4NFwiKSk7XHJcbmV4cG9ydHMuTWF0cml4NCA9IE1hdHJpeDRfMS5kZWZhdWx0O1xyXG52YXIgUXVhZHJhdGljXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUXVhZHJhdGljXCIpKTtcclxuZXhwb3J0cy5RdWFkcmF0aWMgPSBRdWFkcmF0aWNfMS5kZWZhdWx0O1xyXG52YXIgTGluZWFyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGluZWFyXCIpKTtcclxuZXhwb3J0cy5MaW5lYXIgPSBMaW5lYXJfMS5kZWZhdWx0O1xyXG52YXIgVHJpYW5nbGUyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJpYW5nbGUyXCIpKTtcclxuZXhwb3J0cy5UcmlhbmdsZTIgPSBUcmlhbmdsZTJfMS5kZWZhdWx0O1xyXG52YXIgUHJpbWl0aXZlMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9QcmltaXRpdmUyXCIpKTtcclxuZXhwb3J0cy5QcmltaXRpdmUyID0gUHJpbWl0aXZlMjtcclxudmFyIENvbGxpc2lvbjIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ29sbGlzaW9uMlwiKSk7XHJcbmV4cG9ydHMuQ29sbGlzaW9uMiA9IENvbGxpc2lvbjI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubGVycCA9IGV4cG9ydHMuY3JhbXAgPSBleHBvcnRzLnJvdW5kID0gZXhwb3J0cy5yYWQyZGVnID0gZXhwb3J0cy5kZWcycmFkID0gZXhwb3J0cy51bmlmeVNpZ24gPSB2b2lkIDA7XHJcbmV4cG9ydHMudW5pZnlTaWduID0gZnVuY3Rpb24gKGEpIHtcclxuICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIGE7XHJcbn07XHJcbmV4cG9ydHMuZGVnMnJhZCA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICByZXR1cm4gTWF0aC5QSSAvIDE4MCAqIGQ7XHJcbn07XHJcbmV4cG9ydHMucmFkMmRlZyA9IGZ1bmN0aW9uIChyKSB7XHJcbiAgICByZXR1cm4gMTgwIC8gTWF0aC5QSSAqIHI7XHJcbn07XHJcbmV4cG9ydHMucm91bmQgPSBmdW5jdGlvbiAobnVtLCBmaXhlZCkge1xyXG4gICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICB2YXIgZml4ID0gTWF0aC5wb3coMTAsIGZpeGVkKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIGZpeCkgLyBmaXg7XHJcbn07XHJcbmV4cG9ydHMuY3JhbXAgPSBmdW5jdGlvbiAobm8sIG1pbiwgbWF4KSB7XHJcbiAgICBubyA9IE1hdGgubWluKG5vLCBtYXgpO1xyXG4gICAgbm8gPSBNYXRoLm1heChubywgbWluKTtcclxuICAgIHJldHVybiBubztcclxufTtcclxuZXhwb3J0cy5sZXJwID0gZnVuY3Rpb24gKGZyb20sIHRvLCByYXRlKSB7XHJcbiAgICByZXR1cm4gZnJvbSArICgodG8gLSBmcm9tKSAqIHJhdGUpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9