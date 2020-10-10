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
    };
    var A = circle1.p;
    var B = circle2.p;
    var vAB = Vector2_1.default.sub(B, A);
    var a = vAB.magnitude;
    var sumR = circle1.r + circle2.r;
    if (sumR < a)
        return result;
    result.hit = true;
    var subR = Math.abs(circle1.r - circle2.r);
    if (a < subR) {
        return result;
    }
    if (a === sumR || a === subR) {
        var n = vAB.normalize;
        var large = (circle1.r < circle2.r) ? circle2 : circle1;
        var C = Vector2_1.default.add(large.p, n.times(-large.r));
        result.pos.push(C);
        return result;
    }
    var b = circle1.r;
    var c = circle2.r;
    var cosA = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);
    var t = b * cosA;
    var s = Math.sqrt(Math.pow(b, 2) - Math.pow(t, 2));
    var n1 = vAB.normalize;
    var n2 = new Vector2_1.default(-n1.y, n1.x);
    var tn1 = n1.times(t);
    var sn2 = n2.times(s);
    result.pos.push(circle1.p.clone().add(tn1).add(sn2));
    result.pos.push(circle1.p.clone().add(tn1).sub(sn2));
    return result;
}
exports.intercect = intercect;


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
    var p = PointAndLine.getNearestNeighborPoint(circle.p, line);
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
    var p = PointAndLine.getNearestNeighborPoint(circle.p, line);
    result.nearest = p;
    var cp = Vector2_1.default.sub(p, circle.p);
    var t = cp.magnitude;
    if (circle.r < t)
        return result;
    result.hit = true;
    if (circle.r === t) {
        result.pos.push(Vector2_1.default.add(circle.p, cp.normalize.times(circle.r)));
        return result;
    }
    var s = Math.sqrt(Math.pow(circle.r, 2) - Math.pow(t, 2));
    var sv = line.v.normalize.times(s);
    result.pos.push(Vector2_1.default.add(p, sv));
    result.pos.push(Vector2_1.default.sub(p, sv));
    return result;
}
exports.intercect = intercect;


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
exports.intercect = exports.getCollisionPoint = exports.isHitParallel = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
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
    var p = PointAndSegment.getNearestNeighborPoint(point, capsule.s);
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
exports.getNearestNeighborPoint = exports.intercect = exports.isHit = void 0;
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
function getNearestNeighborPoint(point, line) {
    var d = line.v;
    var p = Vector2_1.default.sub(point, line.p);
    var n = d.normalize;
    var dot = Vector2_1.default.dot(n, p);
    return Vector2_1.default.add(line.p, n.times(dot));
}
exports.getNearestNeighborPoint = getNearestNeighborPoint;


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
exports.getNearestNeighborPoint = exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
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
function getNearestNeighborPoint(point, ray) {
    var d = ray.v;
    var p = Vector2_1.default.sub(point, ray.p);
    if (Vector2_1.default.dot(d, p) < 0) {
        return ray.p.clone();
    }
    var n = d.normalize;
    var dot = Vector2_1.default.dot(n, p);
    return Vector2_1.default.add(ray.p, n.times(dot));
}
exports.getNearestNeighborPoint = getNearestNeighborPoint;


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
exports.getNearestNeighborPoint = exports.intercect = exports.isHit = void 0;
var Vector2_1 = __importDefault(__webpack_require__(/*! ../Vector2 */ "./src/Vector2.ts"));
var __1 = __webpack_require__(/*! .. */ "./src/index.ts");
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
function getNearestNeighborPoint(point, segment) {
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
exports.getNearestNeighborPoint = getNearestNeighborPoint;


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
        { v1: tri.v1to2, v2: Vector2_1.default.sub(point, tri.p1) },
        { v1: tri.v2to3, v2: Vector2_1.default.sub(point, tri.p2) },
        { v1: tri.v3to1, v2: Vector2_1.default.sub(point, tri.p3) },
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
function intercect(point, tri) {
    var hit = isHit(point, tri);
    var pos = (hit) ? point.clone() : Vector2_1.default.zero;
    return { hit: hit, pos: pos };
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
exports.CircleAndCircle = exports.LineAndCircle = exports.LineAndSegment = exports.LineAndRay = exports.LineAndLine = exports.PointAndEllipse = exports.PointAndCapsule = exports.PointAndTriangle = exports.PointAndBox = exports.PointAndRect = exports.PointAndCircle = exports.PointAndSegment = exports.PointAndRay = exports.PointAndLine = exports.PointAndPoint = void 0;
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
var CircleAndCircle = __importStar(__webpack_require__(/*! ./CircleAndCircle */ "./src/Collision2/CircleAndCircle.ts"));
exports.CircleAndCircle = CircleAndCircle;


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
    Ray.prototype.point = function (f) {
        return Vector2_1.default.add(this.p, this.v.normalize.times(Math.abs(f)));
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9DaXJjbGVBbmRDaXJjbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0xpbmVBbmRDaXJjbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL0xpbmVBbmRMaW5lLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9MaW5lQW5kUmF5LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9MaW5lQW5kU2VnbWVudC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRCb3gudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRDaXJjbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kRWxsaXBzZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRMaW5lLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFBvaW50LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFJheS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRSZWN0LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL2luZGV4LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvRGVmaW5lLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTGluZWFyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTWF0cml4My50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL01hdHJpeDQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9QcmltaXRpdmUyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvUXVhZHJhdGljLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVHJpYW5nbGUyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1C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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN0SGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeEhhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRCxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsT0FBTztBQUNsQywrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixXQUFXO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGdFQUFnRTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOVhhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsMkNBQTJDO0FBQzVDO0FBQ0E7QUFDQSwyQkFBMkIsUUFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGNBQWMsRUFBRTtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hkYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDOUxhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUNoR2E7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0EsMEJBQTBCLG1CQUFPLENBQUMsaUNBQVU7QUFDNUM7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZEO0FBQ0EsK0JBQStCLG1CQUFPLENBQUMsaUNBQVU7QUFDakQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2RDtBQUNBLDhCQUE4QixtQkFBTyxDQUFDLHlDQUFjO0FBQ3BEO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMsK0NBQWM7QUFDcEQ7Ozs7Ozs7Ozs7Ozs7QUM5Q2E7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWF0aExhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1hdGhMYWJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTWF0aExhYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KGNpcmNsZTEsIGNpcmNsZTIpIHtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKGNpcmNsZTIucCwgY2lyY2xlMS5wKTtcclxuICAgIHJldHVybiAodi5zcXJNYWduaXR1ZGUgPCBNYXRoLnBvdygoY2lyY2xlMS5yICsgY2lyY2xlMi5yKSwgMikpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KGNpcmNsZTEsIGNpcmNsZTIpIHtcclxuICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgaGl0OiBmYWxzZSxcclxuICAgICAgICBwb3M6IFtdLFxyXG4gICAgfTtcclxuICAgIHZhciBBID0gY2lyY2xlMS5wO1xyXG4gICAgdmFyIEIgPSBjaXJjbGUyLnA7XHJcbiAgICB2YXIgdkFCID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKEIsIEEpO1xyXG4gICAgdmFyIGEgPSB2QUIubWFnbml0dWRlO1xyXG4gICAgdmFyIHN1bVIgPSBjaXJjbGUxLnIgKyBjaXJjbGUyLnI7XHJcbiAgICBpZiAoc3VtUiA8IGEpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHJlc3VsdC5oaXQgPSB0cnVlO1xyXG4gICAgdmFyIHN1YlIgPSBNYXRoLmFicyhjaXJjbGUxLnIgLSBjaXJjbGUyLnIpO1xyXG4gICAgaWYgKGEgPCBzdWJSKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGlmIChhID09PSBzdW1SIHx8IGEgPT09IHN1YlIpIHtcclxuICAgICAgICB2YXIgbiA9IHZBQi5ub3JtYWxpemU7XHJcbiAgICAgICAgdmFyIGxhcmdlID0gKGNpcmNsZTEuciA8IGNpcmNsZTIucikgPyBjaXJjbGUyIDogY2lyY2xlMTtcclxuICAgICAgICB2YXIgQyA9IFZlY3RvcjJfMS5kZWZhdWx0LmFkZChsYXJnZS5wLCBuLnRpbWVzKC1sYXJnZS5yKSk7XHJcbiAgICAgICAgcmVzdWx0LnBvcy5wdXNoKEMpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB2YXIgYiA9IGNpcmNsZTEucjtcclxuICAgIHZhciBjID0gY2lyY2xlMi5yO1xyXG4gICAgdmFyIGNvc0EgPSAoTWF0aC5wb3coYSwgMikgKyBNYXRoLnBvdyhiLCAyKSAtIE1hdGgucG93KGMsIDIpKSAvICgyICogYSAqIGIpO1xyXG4gICAgdmFyIHQgPSBiICogY29zQTtcclxuICAgIHZhciBzID0gTWF0aC5zcXJ0KE1hdGgucG93KGIsIDIpIC0gTWF0aC5wb3codCwgMikpO1xyXG4gICAgdmFyIG4xID0gdkFCLm5vcm1hbGl6ZTtcclxuICAgIHZhciBuMiA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgtbjEueSwgbjEueCk7XHJcbiAgICB2YXIgdG4xID0gbjEudGltZXModCk7XHJcbiAgICB2YXIgc24yID0gbjIudGltZXMocyk7XHJcbiAgICByZXN1bHQucG9zLnB1c2goY2lyY2xlMS5wLmNsb25lKCkuYWRkKHRuMSkuYWRkKHNuMikpO1xyXG4gICAgcmVzdWx0LnBvcy5wdXNoKGNpcmNsZTEucC5jbG9uZSgpLmFkZCh0bjEpLnN1YihzbjIpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBQb2ludEFuZExpbmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRMaW5lXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgY2lyY2xlKSB7XHJcbiAgICB2YXIgcCA9IFBvaW50QW5kTGluZS5nZXROZWFyZXN0TmVpZ2hib3JQb2ludChjaXJjbGUucCwgbGluZSk7XHJcbiAgICB2YXIgZCA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihwLCBjaXJjbGUucCkuc3FyTWFnbml0dWRlO1xyXG4gICAgcmV0dXJuIChkIDwgY2lyY2xlLnIgKiBjaXJjbGUucik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QobGluZSwgY2lyY2xlKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgcG9zOiBbXSxcclxuICAgICAgICBuZWFyZXN0OiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvLFxyXG4gICAgfTtcclxuICAgIHZhciBwID0gUG9pbnRBbmRMaW5lLmdldE5lYXJlc3ROZWlnaGJvclBvaW50KGNpcmNsZS5wLCBsaW5lKTtcclxuICAgIHJlc3VsdC5uZWFyZXN0ID0gcDtcclxuICAgIHZhciBjcCA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihwLCBjaXJjbGUucCk7XHJcbiAgICB2YXIgdCA9IGNwLm1hZ25pdHVkZTtcclxuICAgIGlmIChjaXJjbGUuciA8IHQpXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHJlc3VsdC5oaXQgPSB0cnVlO1xyXG4gICAgaWYgKGNpcmNsZS5yID09PSB0KSB7XHJcbiAgICAgICAgcmVzdWx0LnBvcy5wdXNoKFZlY3RvcjJfMS5kZWZhdWx0LmFkZChjaXJjbGUucCwgY3Aubm9ybWFsaXplLnRpbWVzKGNpcmNsZS5yKSkpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICB2YXIgcyA9IE1hdGguc3FydChNYXRoLnBvdyhjaXJjbGUuciwgMikgLSBNYXRoLnBvdyh0LCAyKSk7XHJcbiAgICB2YXIgc3YgPSBsaW5lLnYubm9ybWFsaXplLnRpbWVzKHMpO1xyXG4gICAgcmVzdWx0LnBvcy5wdXNoKFZlY3RvcjJfMS5kZWZhdWx0LmFkZChwLCBzdikpO1xyXG4gICAgcmVzdWx0LnBvcy5wdXNoKFZlY3RvcjJfMS5kZWZhdWx0LnN1YihwLCBzdikpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmdldENvbGxpc2lvblBvaW50ID0gZXhwb3J0cy5pc0hpdFBhcmFsbGVsID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0KGwxLCBsMikge1xyXG4gICAgcmV0dXJuIChWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyhsMS52LCBsMi52KSAhPT0gMCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpc0hpdFBhcmFsbGVsKGwxLCBsMikge1xyXG4gICAgdmFyIHYxID0gbDEudjtcclxuICAgIHZhciB2MiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihsMS5wLCBsMi5wKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMoVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKSkgPCBfXzEuRGVmaW5lLkVQU0lMT04pO1xyXG59XHJcbmV4cG9ydHMuaXNIaXRQYXJhbGxlbCA9IGlzSGl0UGFyYWxsZWw7XHJcbmZ1bmN0aW9uIGdldENvbGxpc2lvblBvaW50KGwxLCBsMikge1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIobDIucCwgbDEucCk7XHJcbiAgICB2YXIgdjEgPSBsMS52O1xyXG4gICAgdmFyIHYyID0gbDIudjtcclxuICAgIHZhciB0MiA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYsIHYxKSAvIFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYxLCB2Mik7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGwyLnAsIHYyLmNsb25lKCkudGltZXModDIpKTtcclxufVxyXG5leHBvcnRzLmdldENvbGxpc2lvblBvaW50ID0gZ2V0Q29sbGlzaW9uUG9pbnQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChsMSwgbDIpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChsMSwgbDIpO1xyXG4gICAgdmFyIGhpdFBhcmFsbGVsID0gaXNIaXRQYXJhbGxlbChsMSwgbDIpO1xyXG4gICAgdmFyIHBvcyA9IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICBpZiAoaGl0KSB7XHJcbiAgICAgICAgcG9zLmNvcHkoZ2V0Q29sbGlzaW9uUG9pbnQobDEsIGwyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhpdDogaGl0LFxyXG4gICAgICAgIGhpdFBhcmFsbGVsOiBoaXRQYXJhbGxlbCxcclxuICAgICAgICBwb3M6IHBvc1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQobGluZSwgcmF5KSB7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihyYXkucCwgbGluZS5wKTtcclxuICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgIHZhciB2MiA9IHJheS52O1xyXG4gICAgdmFyIGMxID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModiwgdjEpO1xyXG4gICAgdmFyIGMyID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIGlmIChNYXRoLmFicyhjMikgPCBfXzEuRGVmaW5lLkVQU0lMT04pXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgdmFyIHQgPSBjMSAvIGMyO1xyXG4gICAgcmV0dXJuICgwIDwgdCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QobGluZSwgcmF5KSB7XHJcbiAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIGhpdDogZmFsc2UsXHJcbiAgICAgICAgcG9zOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvLFxyXG4gICAgfTtcclxuICAgIHZhciB2MSA9IGxpbmUudjtcclxuICAgIHZhciB2MiA9IHJheS52O1xyXG4gICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKTtcclxuICAgIGlmIChNYXRoLmFicyhjcm9zcykgPCBfXzEuRGVmaW5lLkVQU0lMT04pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHJheS5wLCBsaW5lLnApO1xyXG4gICAgdmFyIHQgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2LCB2MSkgLyBjcm9zcztcclxuICAgIGlmICh0IDwgMClcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgcmVzdWx0LmhpdCA9IHRydWU7XHJcbiAgICByZXN1bHQucG9zID0gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHJheS5wLCB2Mi5jbG9uZSgpLnRpbWVzKHQpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0KGxpbmUsIHNlZykge1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIoc2VnLnAxLCBsaW5lLnApO1xyXG4gICAgdmFyIHYxID0gbGluZS52O1xyXG4gICAgdmFyIHYyID0gc2VnLnY7XHJcbiAgICB2YXIgYzEgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2LCB2MSk7XHJcbiAgICB2YXIgYzIgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyh2MSwgdjIpO1xyXG4gICAgaWYgKE1hdGguYWJzKGMyKSA8IF9fMS5EZWZpbmUuRVBTSUxPTilcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB2YXIgdCA9IGMxIC8gYzI7XHJcbiAgICByZXR1cm4gKDAgPD0gdCAmJiB0IDw9IDEpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KGxpbmUsIHNlZykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICBoaXQ6IGZhbHNlLFxyXG4gICAgICAgIHBvczogVmVjdG9yMl8xLmRlZmF1bHQuemVybyxcclxuICAgIH07XHJcbiAgICB2YXIgdjEgPSBsaW5lLnY7XHJcbiAgICB2YXIgdjIgPSBzZWcudjtcclxuICAgIHZhciBjcm9zcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYxLCB2Mik7XHJcbiAgICBpZiAoTWF0aC5hYnMoY3Jvc3MpIDwgX18xLkRlZmluZS5FUFNJTE9OKVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihzZWcucDEsIGxpbmUucCk7XHJcbiAgICB2YXIgdCA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYsIHYxKSAvIGNyb3NzO1xyXG4gICAgaWYgKHQgPCAwIHx8IDEgPCB0KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICByZXN1bHQuaGl0ID0gdHJ1ZTtcclxuICAgIHJlc3VsdC5wb3MgPSBWZWN0b3IyXzEuZGVmYXVsdC5hZGQoc2VnLnAxLCB2Mi5jbG9uZSgpLnRpbWVzKHQpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBib3gpIHtcclxuICAgIHZhciBkYXRhcyA9IFtcclxuICAgICAgICB7IHYxOiBib3gudjF0bzIsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMSkgfSxcclxuICAgICAgICB7IHYxOiBib3gudjJ0bzMsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMikgfSxcclxuICAgICAgICB7IHYxOiBib3gudjN0bzQsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wMykgfSxcclxuICAgICAgICB7IHYxOiBib3gudjR0bzEsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGJveC5wNCkgfVxyXG4gICAgXTtcclxuICAgIGZvciAodmFyIF9pID0gMCwgZGF0YXNfMSA9IGRhdGFzOyBfaSA8IGRhdGFzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBkYXRhc18xW19pXTtcclxuICAgICAgICB2YXIgY3Jvc3MgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyhkYXRhLnYxLCBkYXRhLnYyKTtcclxuICAgICAgICBpZiAoMCA8IGNyb3NzKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgYm94KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGJveCk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgUG9pbnRBbmRTZWdtZW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kU2VnbWVudFwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBjYXBzdWxlKSB7XHJcbiAgICB2YXIgcCA9IFBvaW50QW5kU2VnbWVudC5nZXROZWFyZXN0TmVpZ2hib3JQb2ludChwb2ludCwgY2Fwc3VsZS5zKTtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBwKTtcclxuICAgIHJldHVybiAodi5zcXJNYWduaXR1ZGUgPCBjYXBzdWxlLnIgKiBjYXBzdWxlLnIpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBjYXBzdWxlKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGNhcHN1bGUpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGNpcmNsZSkge1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGNpcmNsZS5wKTtcclxuICAgIHJldHVybiAodi5zcXJNYWduaXR1ZGUgPCBjaXJjbGUuciAqIGNpcmNsZS5yKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgY2lyY2xlKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGNpcmNsZSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgZWxsaXBzZSkge1xyXG4gICAgdmFyIHAgPSBwb2ludDtcclxuICAgIHZhciBlID0gZWxsaXBzZTtcclxuICAgIHZhciBzaW4gPSBNYXRoLnNpbihlLnJhZCk7XHJcbiAgICB2YXIgY29zID0gTWF0aC5jb3MoZS5yYWQpO1xyXG4gICAgdmFyIHJ4ID0gZWxsaXBzZS5yeCwgcnkgPSBlbGxpcHNlLnJ5O1xyXG4gICAgdmFyIHB4ID0gKHAueCAtIGUucC54KSAqIGNvcyArIChwLnkgLSBlLnAueSkgKiBzaW47XHJcbiAgICB2YXIgcHkgPSAocnggLyByeSkgKiAoLShwLnggLSBlLnAueCkgKiBzaW4gKyAocC55IC0gZS5wLnkpICogY29zKTtcclxuICAgIHJldHVybiAocHggKiBweCArIHB5ICogcHkpIDwgcnggKiByeDtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgZWxsaXBzZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBlbGxpcHNlKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQgPSBleHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBEZWZpbmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4uL0RlZmluZVwiKSk7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIGEgPSBsaW5lLnY7XHJcbiAgICB2YXIgYiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgbGluZS5wKTtcclxuICAgIHZhciBjID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3MoYSwgYik7XHJcbiAgICByZXR1cm4gKE1hdGguYWJzKGMpIDwgRGVmaW5lLkVQU0lMT04pO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBsaW5lKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGxpbmUpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuZnVuY3Rpb24gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQocG9pbnQsIGxpbmUpIHtcclxuICAgIHZhciBkID0gbGluZS52O1xyXG4gICAgdmFyIHAgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGxpbmUucCk7XHJcbiAgICB2YXIgbiA9IGQubm9ybWFsaXplO1xyXG4gICAgdmFyIGRvdCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChuLCBwKTtcclxuICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQobGluZS5wLCBuLnRpbWVzKGRvdCkpO1xyXG59XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQgPSBnZXROZWFyZXN0TmVpZ2hib3JQb2ludDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocDEsIHAyKSB7XHJcbiAgICByZXR1cm4gcDEuZXF1YWwocDIpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHAxLCBwMikge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHAxLCBwMik7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwMS5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIF9fMSA9IHJlcXVpcmUoXCIuLlwiKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIGEgPSByYXkudjtcclxuICAgIHZhciBiID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCByYXkucCk7XHJcbiAgICB2YXIgbCA9IGEubWFnbml0dWRlICogYi5tYWduaXR1ZGU7XHJcbiAgICB2YXIgZCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChhLCBiKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMoZCAtIGwpIDwgX18xLkRlZmluZS5FUFNJTE9OKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgcmF5KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIHJheSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0TmVpZ2hib3JQb2ludChwb2ludCwgcmF5KSB7XHJcbiAgICB2YXIgZCA9IHJheS52O1xyXG4gICAgdmFyIHAgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHJheS5wKTtcclxuICAgIGlmIChWZWN0b3IyXzEuZGVmYXVsdC5kb3QoZCwgcCkgPCAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHJheS5wLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbiA9IGQubm9ybWFsaXplO1xyXG4gICAgdmFyIGRvdCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChuLCBwKTtcclxuICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQocmF5LnAsIG4udGltZXMoZG90KSk7XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGdldE5lYXJlc3ROZWlnaGJvclBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgcmVjdCkge1xyXG4gICAgdmFyIGlzQ29udGFpblggPSAocmVjdC5wMS54IDw9IHBvaW50LngpICYmIChwb2ludC54IDw9IHJlY3QucDMueCk7XHJcbiAgICB2YXIgaXNDb250YWluWSA9IChyZWN0LnAzLnkgPD0gcG9pbnQueSkgJiYgKHBvaW50LnkgPD0gcmVjdC5wMS55KTtcclxuICAgIHJldHVybiAoaXNDb250YWluWCAmJiBpc0NvbnRhaW5ZKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgcmVjdCkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCByZWN0KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQgPSBleHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgc2VnbWVudCkge1xyXG4gICAgdmFyIGEgPSBzZWdtZW50LnY7XHJcbiAgICB2YXIgYiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgc2VnbWVudC5wMSk7XHJcbiAgICB2YXIgYWwgPSBhLm1hZ25pdHVkZTtcclxuICAgIHZhciBibCA9IGIubWFnbml0dWRlO1xyXG4gICAgdmFyIGwgPSBhbCAqIGJsO1xyXG4gICAgdmFyIGQgPSBWZWN0b3IyXzEuZGVmYXVsdC5kb3QoYSwgYik7XHJcbiAgICByZXR1cm4gKE1hdGguYWJzKGwgLSBkKSA8IF9fMS5EZWZpbmUuRVBTSUxPTiAmJiBhbCA+IGJsKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgc2VnbWVudCkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBzZWdtZW50KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3ROZWlnaGJvclBvaW50KHBvaW50LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgZCA9IHNlZ21lbnQudjtcclxuICAgIHZhciBwMSA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgc2VnbWVudC5wMSk7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHAxKSA8IDApIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5wMS5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIHAyID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBzZWdtZW50LnAyKTtcclxuICAgIGlmICgwIDwgVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHAyKSkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnAyLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbiA9IGQubm9ybWFsaXplO1xyXG4gICAgdmFyIGRvdCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChuLCBwMSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHNlZ21lbnQucDEsIG4udGltZXMoZG90KSk7XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGdldE5lYXJlc3ROZWlnaGJvclBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgdHJpKSB7XHJcbiAgICB2YXIgZGF0YXMgPSBbXHJcbiAgICAgICAgeyB2MTogdHJpLnYxdG8yLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDEpIH0sXHJcbiAgICAgICAgeyB2MTogdHJpLnYydG8zLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDIpIH0sXHJcbiAgICAgICAgeyB2MTogdHJpLnYzdG8xLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDMpIH0sXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhc18xID0gZGF0YXM7IF9pIDwgZGF0YXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGRhdGFzXzFbX2ldO1xyXG4gICAgICAgIHZhciBjcm9zcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGRhdGEudjEsIGRhdGEudjIpO1xyXG4gICAgICAgIGlmICgwIDwgY3Jvc3MpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCB0cmkpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgdHJpKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ2lyY2xlQW5kQ2lyY2xlID0gZXhwb3J0cy5MaW5lQW5kQ2lyY2xlID0gZXhwb3J0cy5MaW5lQW5kU2VnbWVudCA9IGV4cG9ydHMuTGluZUFuZFJheSA9IGV4cG9ydHMuTGluZUFuZExpbmUgPSBleHBvcnRzLlBvaW50QW5kRWxsaXBzZSA9IGV4cG9ydHMuUG9pbnRBbmRDYXBzdWxlID0gZXhwb3J0cy5Qb2ludEFuZFRyaWFuZ2xlID0gZXhwb3J0cy5Qb2ludEFuZEJveCA9IGV4cG9ydHMuUG9pbnRBbmRSZWN0ID0gZXhwb3J0cy5Qb2ludEFuZENpcmNsZSA9IGV4cG9ydHMuUG9pbnRBbmRTZWdtZW50ID0gZXhwb3J0cy5Qb2ludEFuZFJheSA9IGV4cG9ydHMuUG9pbnRBbmRMaW5lID0gZXhwb3J0cy5Qb2ludEFuZFBvaW50ID0gdm9pZCAwO1xyXG52YXIgUG9pbnRBbmRQb2ludCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFBvaW50XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFBvaW50ID0gUG9pbnRBbmRQb2ludDtcclxudmFyIFBvaW50QW5kTGluZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZExpbmVcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kTGluZSA9IFBvaW50QW5kTGluZTtcclxudmFyIFBvaW50QW5kUmF5ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kUmF5XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFJheSA9IFBvaW50QW5kUmF5O1xyXG52YXIgUG9pbnRBbmRTZWdtZW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kU2VnbWVudFwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRTZWdtZW50ID0gUG9pbnRBbmRTZWdtZW50O1xyXG52YXIgUG9pbnRBbmRDaXJjbGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRDaXJjbGVcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kQ2lyY2xlID0gUG9pbnRBbmRDaXJjbGU7XHJcbnZhciBQb2ludEFuZFJlY3QgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRSZWN0XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFJlY3QgPSBQb2ludEFuZFJlY3Q7XHJcbnZhciBQb2ludEFuZEJveCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZEJveFwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRCb3ggPSBQb2ludEFuZEJveDtcclxudmFyIFBvaW50QW5kVHJpYW5nbGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRUcmlhbmdsZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRUcmlhbmdsZSA9IFBvaW50QW5kVHJpYW5nbGU7XHJcbnZhciBQb2ludEFuZENhcHN1bGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRDYXBzdWxlXCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZENhcHN1bGUgPSBQb2ludEFuZENhcHN1bGU7XHJcbnZhciBQb2ludEFuZEVsbGlwc2UgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRFbGxpcHNlXCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZEVsbGlwc2UgPSBQb2ludEFuZEVsbGlwc2U7XHJcbnZhciBMaW5lQW5kTGluZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kTGluZVwiKSk7XHJcbmV4cG9ydHMuTGluZUFuZExpbmUgPSBMaW5lQW5kTGluZTtcclxudmFyIExpbmVBbmRSYXkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTGluZUFuZFJheVwiKSk7XHJcbmV4cG9ydHMuTGluZUFuZFJheSA9IExpbmVBbmRSYXk7XHJcbnZhciBMaW5lQW5kU2VnbWVudCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9MaW5lQW5kU2VnbWVudFwiKSk7XHJcbmV4cG9ydHMuTGluZUFuZFNlZ21lbnQgPSBMaW5lQW5kU2VnbWVudDtcclxudmFyIExpbmVBbmRDaXJjbGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vTGluZUFuZENpcmNsZVwiKSk7XHJcbmV4cG9ydHMuTGluZUFuZENpcmNsZSA9IExpbmVBbmRDaXJjbGU7XHJcbnZhciBDaXJjbGVBbmRDaXJjbGUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ2lyY2xlQW5kQ2lyY2xlXCIpKTtcclxuZXhwb3J0cy5DaXJjbGVBbmRDaXJjbGUgPSBDaXJjbGVBbmRDaXJjbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuRVBTSUxPTiA9IHZvaWQgMDtcclxuZXhwb3J0cy5FUFNJTE9OID0gMC4wMDAwMTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBMaW5lYXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGluZWFyKGEsIGIpIHtcclxuICAgICAgICBpZiAoYSA9PT0gdm9pZCAwKSB7IGEgPSAwOyB9XHJcbiAgICAgICAgaWYgKGIgPT09IHZvaWQgMCkgeyBiID0gMDsgfVxyXG4gICAgICAgIHRoaXMuX2EgPSBhO1xyXG4gICAgICAgIHRoaXMuX2IgPSBiO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmVhci5wcm90b3R5cGUsIFwiYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9hOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYSA9IFV0aWwudW5pZnlTaWduKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJiXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2I7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9iID0gVXRpbC51bmlmeVNpZ24odik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuZnggPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgdmFyIF9jID0gdGhpcywgYSA9IF9jLmEsIGIgPSBfYy5iO1xyXG4gICAgICAgIHJldHVybiBhICogeCArIGI7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0U3RhbmRhcmRGb3JtID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB0aGlzLmEgPSBhLCB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaW5pdEdlbmVyYWxGb3JtID0gZnVuY3Rpb24gKEEsIEIsIEMpIHtcclxuICAgICAgICBBO1xyXG4gICAgICAgIEI7XHJcbiAgICAgICAgQztcclxuICAgICAgICB0aGlzLmEgPSAtQSAvIEI7XHJcbiAgICAgICAgdGhpcy5iID0gQyAvIEI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0QnlTbG9wZUFuZFBvaW50ID0gZnVuY3Rpb24gKGEsIHgsIHkpIHtcclxuICAgICAgICB2YXIgYiA9IHkgLSBhICogeDtcclxuICAgICAgICB0aGlzLmEgPSBhO1xyXG4gICAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0QnkyUG9pbnQgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgbnVtZSA9IHkyIC0geTE7XHJcbiAgICAgICAgdmFyIGRlbm8gPSB4MiAtIHgxO1xyXG4gICAgICAgIHZhciBhID0gbnVtZSAvIGRlbm87XHJcbiAgICAgICAgdGhpcy5pbml0QnlTbG9wZUFuZFBvaW50KGEsIHgxLCB5MSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmVhci5wcm90b3R5cGUsIFwiaXNJbnZhbGlkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodGhpcy5hKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLmIpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmlzUGVycFdpdGggPSBmdW5jdGlvbiAobGluZWFyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGxpbmVhci5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKHRoaXMuYSAqIGxpbmVhci5hID09PSAtMSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmVhci5wcm90b3R5cGUsIFwicGVycFNsb3BlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNsb3BlID0gLSgxIC8gdGhpcy5hKTtcclxuICAgICAgICAgICAgcmV0dXJuIChOdW1iZXIuaXNGaW5pdGUoc2xvcGUpKSA/IHNsb3BlIDogMDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcInk9XCIgKyB0aGlzLmEgKyBcIngrXCIgKyB0aGlzLmI7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLmludGVyc2VjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIHBvaW50czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBudW1lID0gYi5iIC0gYS5iO1xyXG4gICAgICAgIHZhciBkZW5vID0gYS5hIC0gYi5hO1xyXG4gICAgICAgIHZhciB4ID0gbnVtZSAvIGRlbm87XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeCkpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgdmFyIHkgPSBhLmZ4KHgpO1xyXG4gICAgICAgIHJlc3VsdC5jb3VudCA9IDE7XHJcbiAgICAgICAgcmVzdWx0LnBvaW50cy5wdXNoKHgsIHkpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpbmVhcjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTGluZWFyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4MyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRyaXgzKHYpIHtcclxuICAgICAgICB0aGlzLnYgPSB2LnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDMubXVsdGlwbHkodGhpcywgTWF0cml4My50cmFuc2xhdGlvbih0eCwgdHkpKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDMubXVsdGlwbHkodGhpcywgTWF0cml4My5yb3RhdGlvbihyYWRpYW4pKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uIChzeCwgc3kpIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBNYXRyaXgzLnNjYWxpbmcoc3gsIHN5KSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgzLm11bHRpcGx5KHRoaXMsIG0pO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXgzLnByb3RvdHlwZSwgXCJkZXRlcm1pbmFudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXgzLmRldGVybWluYW50KHRoaXMudik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMucHJvdG90eXBlLCBcInRyYW5zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDMudHJhbnModGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdiA9IHRoaXMudjtcclxuICAgICAgICByZXR1cm4gXCJbXFxuICBcIiArIHZbMF0gKyBcIiwgXCIgKyB2WzFdICsgXCIsIFwiICsgdlsyXSArIFwiLFxcbiAgXCIgKyB2WzNdICsgXCIsIFwiICsgdls0XSArIFwiLCBcIiArIHZbNV0gKyBcIixcXG4gIFwiICsgdls2XSArIFwiLCBcIiArIHZbN10gKyBcIiwgXCIgKyB2WzhdICsgXCIsXFxuXVwiO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXgzLCBcImlkZW50aXR5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMsIFwiemVyb1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDMudHJhbnNsYXRpb24gPSBmdW5jdGlvbiAodHgsIHR5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCAxXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5yb3RhdGlvbiA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIGMsIC1zLCAwLFxyXG4gICAgICAgICAgICBzLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMuc2NhbGluZyA9IGZ1bmN0aW9uIChzeCwgc3kpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5tdWx0aXBseSA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRyaXgzLnplcm87XHJcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCAzOyArK3IpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCAzOyArK2MpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgMzsgKytuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbS52W3IgKiAzICsgY10gKz0gYS52W3IgKiAzICsgbl0gKiBiLnZbbiAqIDMgKyBjXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnByb2plY3Rpb24gPSBmdW5jdGlvbiAod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHZhciB4ID0gMSAvIHdpZHRoO1xyXG4gICAgICAgIHZhciB5ID0gMSAvIGhlaWdodDtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICB4LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCB5LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMuZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHZhciBtMCA9IG1bMF0sIG0xID0gbVsxXSwgbTIgPSBtWzJdLCBtMyA9IG1bM10sIG00ID0gbVs0XSwgbTUgPSBtWzVdLCBtNiA9IG1bNl0sIG03ID0gbVs3XSwgbTggPSBtWzhdO1xyXG4gICAgICAgIHJldHVybiAobTAgKiBtNCAqIG04ICsgbTEgKiBtNSAqIG02ICsgbTIgKiBtMyAqIG03KVxyXG4gICAgICAgICAgICAtIChtMiAqIG00ICogbTYgKyBtNSAqIG03ICogbTAgKyBtOCAqIG0xICogbTMpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMudHJhbnMgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIG1bMF0sIG1bM10sIG1bNl0sXHJcbiAgICAgICAgICAgIG1bMV0sIG1bNF0sIG1bN10sXHJcbiAgICAgICAgICAgIG1bMl0sIG1bNV0sIG1bOF1cclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLmNvZmFjdG9yID0gZnVuY3Rpb24gKHIsIGMsIG0pIHtcclxuICAgICAgICB2YXIgYSA9IE1hdGgucG93KCgtMSksIChyICsgYykpO1xyXG4gICAgICAgIHZhciBkID0gbVswXSAqIG1bM10gLSBtWzFdICogbVsyXTtcclxuICAgICAgICByZXR1cm4gYSAqIGQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdHJpeDM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdHJpeDM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXgzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4M1wiKSk7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yM1wiKSk7XHJcbnZhciBNYXRyaXg0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdHJpeDQodikge1xyXG4gICAgICAgIHRoaXMudiA9IHYuc2xpY2UoKTtcclxuICAgIH1cclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0eCwgdHksIHR6KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC50cmFuc2xhdGlvbih0eCwgdHksIHR6KSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUueFJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnhSb3RhdGlvbihyYWRpYW4pKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS55Um90YXRlID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQueVJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnpSb3RhdGUgPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC56Um90YXRpb24ocmFkaWFuKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoc3gsIHN5LCBzeikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQuc2NhbGluZyhzeCwgc3ksIHN6KSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIG0pO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LnByb3RvdHlwZSwgXCJpbnZlcnNlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDQuaW52ZXJzZSh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NC5wcm90b3R5cGUsIFwiZGV0ZXJtaW5hbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4NC5kZXRlcm1pbmFudCh0aGlzLnYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LnByb3RvdHlwZSwgXCJ0cmFuc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXg0LnRyYW5zKHRoaXMudik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHYgPSB0aGlzLnY7XHJcbiAgICAgICAgcmV0dXJuIFwiW1xcbiAgXCIgKyB2WzBdICsgXCIsIFwiICsgdlsxXSArIFwiLCBcIiArIHZbMl0gKyBcIiwgXCIgKyB2WzNdICsgXCJcXG4gIFwiICsgdls0XSArIFwiLCBcIiArIHZbNV0gKyBcIiwgXCIgKyB2WzZdICsgXCIsIFwiICsgdls3XSArIFwiXFxuICBcIiArIHZbOF0gKyBcIiwgXCIgKyB2WzldICsgXCIsIFwiICsgdlsxMF0gKyBcIiwgXCIgKyB2WzExXSArIFwiXFxuICBcIiArIHZbMTJdICsgXCIsIFwiICsgdlsxM10gKyBcIiwgXCIgKyB2WzE0XSArIFwiLCBcIiArIHZbMTVdICsgXCJcXG5dXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQsIFwiaWRlbnRpdHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQsIFwiemVyb1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRyaXg0LnRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICB0eCwgdHksIHR6LCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQueFJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgYywgcywgMCxcclxuICAgICAgICAgICAgMCwgLXMsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC55Um90YXRpb24gPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBjLCAwLCAtcywgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgcywgMCwgYywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnpSb3RhdGlvbiA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGMsIC1zLCAwLCAwLFxyXG4gICAgICAgICAgICBzLCBjLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuc2NhbGluZyA9IGZ1bmN0aW9uIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCBzeiwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0Lm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgbSA9IE1hdHJpeDQuemVybztcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDQ7ICsrcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDQ7ICsrYykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCA0OyArK24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtLnZbciAqIDQgKyBjXSArPSBhLnZbciAqIDQgKyBuXSAqIGIudltuICogNCArIGNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQub3J0aG9ncmFwaGljID0gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgdmFyIHcgPSByaWdodCAtIGxlZnQ7XHJcbiAgICAgICAgdmFyIGggPSBib3R0b20gLSB0b3A7XHJcbiAgICAgICAgdmFyIGQgPSBmYXIgLSBuZWFyO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIDIgLyB3LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAyIC8gaCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMiAvIGQsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wZXJzcGVjdGl2ZSA9IGZ1bmN0aW9uIChmb3ZZLCBhc3BlY3QsIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciBmID0gTWF0aC50YW4oTWF0aC5QSSAqIDAuNSAtIDAuNSAqIGZvdlkpO1xyXG4gICAgICAgIHZhciByYW5nZUludiA9IDEuMCAvIChmYXIgLSBuZWFyKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBmIC8gYXNwZWN0LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBmLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAoZmFyICsgbmVhcikgKiByYW5nZUludiwgMSxcclxuICAgICAgICAgICAgMCwgMCwgLTIgKiBuZWFyICogZmFyICogcmFuZ2VJbnYsIDAsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgdmFyIG0wID0gbVswXSwgbTEgPSBtWzFdLCBtMiA9IG1bMl0sIG0zID0gbVszXSwgbTQgPSBtWzRdLCBtNSA9IG1bNV0sIG02ID0gbVs2XSwgbTcgPSBtWzddLCBtOCA9IG1bOF0sIG05ID0gbVs5XSwgbTEwID0gbVsxMF0sIG0xMSA9IG1bMTFdLCBtMTIgPSBtWzEyXSwgbTEzID0gbVsxM10sIG0xNCA9IG1bMTRdLCBtMTUgPSBtWzE1XTtcclxuICAgICAgICB2YXIgdDEgPSBtMCAqIE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KFtcclxuICAgICAgICAgICAgbTUsIG02LCBtNyxcclxuICAgICAgICAgICAgbTksIG0xMCwgbTExLFxyXG4gICAgICAgICAgICBtMTMsIG0xNCwgbTE1LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciB0MiA9IC1tMSAqIE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KFtcclxuICAgICAgICAgICAgbTQsIG02LCBtNyxcclxuICAgICAgICAgICAgbTgsIG0xMCwgbTExLFxyXG4gICAgICAgICAgICBtMTIsIG0xNCwgbTE1LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciB0MyA9IG0yICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNCwgbTUsIG03LFxyXG4gICAgICAgICAgICBtOCwgbTksIG0xMSxcclxuICAgICAgICAgICAgbTEyLCBtMTMsIG0xNSxcclxuICAgICAgICBdKTtcclxuICAgICAgICB2YXIgdDQgPSAtbTMgKiBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChbXHJcbiAgICAgICAgICAgIG00LCBtNSwgbTYsXHJcbiAgICAgICAgICAgIG04LCBtOSwgbTEwLFxyXG4gICAgICAgICAgICBtMTIsIG0xMywgbTE0LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHJldHVybiB0MSArIHQyICsgdDMgKyB0NDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnRyYW5zID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBtWzBdLCBtWzRdLCBtWzhdLCBtWzEyXSxcclxuICAgICAgICAgICAgbVsxXSwgbVs1XSwgbVs5XSwgbVsxM10sXHJcbiAgICAgICAgICAgIG1bMl0sIG1bNl0sIG1bMTBdLCBtWzE0XSxcclxuICAgICAgICAgICAgbVszXSwgbVs3XSwgbVsxMV0sIG1bMTVdLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuaW52ZXJzZSA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgdmFyIF9hID0gbS52LCBtMCA9IF9hWzBdLCBtMSA9IF9hWzFdLCBtMiA9IF9hWzJdLCBtMyA9IF9hWzNdLCBtNCA9IF9hWzRdLCBtNSA9IF9hWzVdLCBtNiA9IF9hWzZdLCBtNyA9IF9hWzddLCBtOCA9IF9hWzhdLCBtOSA9IF9hWzldLCBtMTAgPSBfYVsxMF0sIG0xMSA9IF9hWzExXSwgbTEyID0gX2FbMTJdLCBtMTMgPSBfYVsxM10sIG0xNCA9IF9hWzE0XSwgbTE1ID0gX2FbMTVdO1xyXG4gICAgICAgIHZhciBkID0gMS4wIC8gTWF0cml4NC5kZXRlcm1pbmFudChtLnYpO1xyXG4gICAgICAgIHZhciBjMTEgPSBkICogTWF0cml4NC5jb2ZhY3RvcigxLCAxLCBbbTUsIG02LCBtNywgbTksIG0xMCwgbTExLCBtMTMsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMxMiA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDEsIDIsIFttNCwgbTYsIG03LCBtOCwgbTEwLCBtMTEsIG0xMiwgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzEzID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgMywgW200LCBtNSwgbTcsIG04LCBtOSwgbTExLCBtMTIsIG0xMywgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMxNCA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDEsIDQsIFttNCwgbTUsIG02LCBtOCwgbTksIG0xMCwgbTEyLCBtMTMsIG0xNF0pO1xyXG4gICAgICAgIHZhciBjMjEgPSBkICogTWF0cml4NC5jb2ZhY3RvcigyLCAxLCBbbTEsIG0yLCBtMywgbTksIG0xMCwgbTExLCBtMTMsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMyMiA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDIsIDIsIFttMCwgbTIsIG0zLCBtOCwgbTEwLCBtMTEsIG0xMiwgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzIzID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgMywgW20wLCBtMSwgbTMsIG04LCBtOSwgbTExLCBtMTIsIG0xMywgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMyNCA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDIsIDQsIFttMCwgbTEsIG0yLCBtOCwgbTksIG0xMCwgbTEyLCBtMTMsIG0xNF0pO1xyXG4gICAgICAgIHZhciBjMzEgPSBkICogTWF0cml4NC5jb2ZhY3RvcigzLCAxLCBbbTEsIG0yLCBtMywgbTUsIG02LCBtNywgbTEzLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMzIgPSBkICogTWF0cml4NC5jb2ZhY3RvcigzLCAyLCBbbTAsIG0yLCBtMywgbTQsIG02LCBtNywgbTEyLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMzMgPSBkICogTWF0cml4NC5jb2ZhY3RvcigzLCAzLCBbbTAsIG0xLCBtMywgbTQsIG01LCBtNywgbTEyLCBtMTMsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMzQgPSBkICogTWF0cml4NC5jb2ZhY3RvcigzLCA0LCBbbTAsIG0xLCBtMiwgbTQsIG01LCBtNiwgbTEyLCBtMTMsIG0xNF0pO1xyXG4gICAgICAgIHZhciBjNDEgPSBkICogTWF0cml4NC5jb2ZhY3Rvcig0LCAxLCBbbTEsIG0yLCBtMywgbTUsIG02LCBtNywgbTksIG0xMCwgbTExXSk7XHJcbiAgICAgICAgdmFyIGM0MiA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDQsIDIsIFttMCwgbTIsIG0zLCBtNCwgbTYsIG03LCBtOCwgbTEwLCBtMTFdKTtcclxuICAgICAgICB2YXIgYzQzID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgMywgW20wLCBtMSwgbTMsIG00LCBtNSwgbTcsIG04LCBtOSwgbTExXSk7XHJcbiAgICAgICAgdmFyIGM0NCA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDQsIDQsIFttMCwgbTEsIG0yLCBtNCwgbTUsIG02LCBtOCwgbTksIG0xMF0pO1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0LnRyYW5zKFtcclxuICAgICAgICAgICAgYzExLCBjMTIsIGMxMywgYzE0LFxyXG4gICAgICAgICAgICBjMjEsIGMyMiwgYzIzLCBjMjQsXHJcbiAgICAgICAgICAgIGMzMSwgYzMyLCBjMzMsIGMzNCxcclxuICAgICAgICAgICAgYzQxLCBjNDIsIGM0MywgYzQ0LFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuaW52ZXJzZTIgPSBmdW5jdGlvbiAobWF0KSB7XHJcbiAgICAgICAgdmFyIG0gPSBtYXQudjtcclxuICAgICAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xyXG4gICAgICAgIHZhciBtMDEgPSBtWzAgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xyXG4gICAgICAgIHZhciBtMTAgPSBtWzEgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMTMgPSBtWzEgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xyXG4gICAgICAgIHZhciBtMjIgPSBtWzIgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xyXG4gICAgICAgIHZhciBtMzEgPSBtWzMgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xyXG4gICAgICAgIHZhciB0bXBfMCA9IG0yMiAqIG0zMztcclxuICAgICAgICB2YXIgdG1wXzEgPSBtMzIgKiBtMjM7XHJcbiAgICAgICAgdmFyIHRtcF8yID0gbTEyICogbTMzO1xyXG4gICAgICAgIHZhciB0bXBfMyA9IG0zMiAqIG0xMztcclxuICAgICAgICB2YXIgdG1wXzQgPSBtMTIgKiBtMjM7XHJcbiAgICAgICAgdmFyIHRtcF81ID0gbTIyICogbTEzO1xyXG4gICAgICAgIHZhciB0bXBfNiA9IG0wMiAqIG0zMztcclxuICAgICAgICB2YXIgdG1wXzcgPSBtMzIgKiBtMDM7XHJcbiAgICAgICAgdmFyIHRtcF84ID0gbTAyICogbTIzO1xyXG4gICAgICAgIHZhciB0bXBfOSA9IG0yMiAqIG0wMztcclxuICAgICAgICB2YXIgdG1wXzEwID0gbTAyICogbTEzO1xyXG4gICAgICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XHJcbiAgICAgICAgdmFyIHRtcF8xMiA9IG0yMCAqIG0zMTtcclxuICAgICAgICB2YXIgdG1wXzEzID0gbTMwICogbTIxO1xyXG4gICAgICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XHJcbiAgICAgICAgdmFyIHRtcF8xNSA9IG0zMCAqIG0xMTtcclxuICAgICAgICB2YXIgdG1wXzE2ID0gbTEwICogbTIxO1xyXG4gICAgICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XHJcbiAgICAgICAgdmFyIHRtcF8xOCA9IG0wMCAqIG0zMTtcclxuICAgICAgICB2YXIgdG1wXzE5ID0gbTMwICogbTAxO1xyXG4gICAgICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XHJcbiAgICAgICAgdmFyIHRtcF8yMSA9IG0yMCAqIG0wMTtcclxuICAgICAgICB2YXIgdG1wXzIyID0gbTAwICogbTExO1xyXG4gICAgICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XHJcbiAgICAgICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxyXG4gICAgICAgICAgICAodG1wXzEgKiBtMTEgKyB0bXBfMiAqIG0yMSArIHRtcF81ICogbTMxKTtcclxuICAgICAgICB2YXIgdDEgPSAodG1wXzEgKiBtMDEgKyB0bXBfNiAqIG0yMSArIHRtcF85ICogbTMxKSAtXHJcbiAgICAgICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xyXG4gICAgICAgIHZhciB0MiA9ICh0bXBfMiAqIG0wMSArIHRtcF83ICogbTExICsgdG1wXzEwICogbTMxKSAtXHJcbiAgICAgICAgICAgICh0bXBfMyAqIG0wMSArIHRtcF82ICogbTExICsgdG1wXzExICogbTMxKTtcclxuICAgICAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxyXG4gICAgICAgICAgICAodG1wXzQgKiBtMDEgKyB0bXBfOSAqIG0xMSArIHRtcF8xMCAqIG0yMSk7XHJcbiAgICAgICAgdmFyIGQgPSAxLjAgLyAobTAwICogdDAgKyBtMTAgKiB0MSArIG0yMCAqIHQyICsgbTMwICogdDMpO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGQgKiB0MCxcclxuICAgICAgICAgICAgZCAqIHQxLFxyXG4gICAgICAgICAgICBkICogdDIsXHJcbiAgICAgICAgICAgIGQgKiB0MyxcclxuICAgICAgICAgICAgZCAqICgodG1wXzEgKiBtMTAgKyB0bXBfMiAqIG0yMCArIHRtcF81ICogbTMwKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzAgKiBtMTAgKyB0bXBfMyAqIG0yMCArIHRtcF80ICogbTMwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8wICogbTAwICsgdG1wXzcgKiBtMjAgKyB0bXBfOCAqIG0zMCkgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMyAqIG0wMCArIHRtcF82ICogbTEwICsgdG1wXzExICogbTMwKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzIgKiBtMDAgKyB0bXBfNyAqIG0xMCArIHRtcF8xMCAqIG0zMCkpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfNCAqIG0wMCArIHRtcF85ICogbTEwICsgdG1wXzEwICogbTIwKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzUgKiBtMDAgKyB0bXBfOCAqIG0xMCArIHRtcF8xMSAqIG0yMCkpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTIgKiBtMTMgKyB0bXBfMTUgKiBtMjMgKyB0bXBfMTYgKiBtMzMpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzEzICogbTAzICsgdG1wXzE4ICogbTIzICsgdG1wXzIxICogbTMzKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzEyICogbTAzICsgdG1wXzE5ICogbTIzICsgdG1wXzIwICogbTMzKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xNCAqIG0wMyArIHRtcF8xOSAqIG0xMyArIHRtcF8yMiAqIG0zMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xNSAqIG0wMyArIHRtcF8xOCAqIG0xMyArIHRtcF8yMyAqIG0zMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTcgKiBtMDMgKyB0bXBfMjAgKiBtMTMgKyB0bXBfMjMgKiBtMjMpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzE0ICogbTIyICsgdG1wXzE3ICogbTMyICsgdG1wXzEzICogbTEyKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE2ICogbTMyICsgdG1wXzEyICogbTEyICsgdG1wXzE1ICogbTIyKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8yMCAqIG0zMiArIHRtcF8xMiAqIG0wMiArIHRtcF8xOSAqIG0yMikgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xOCAqIG0yMiArIHRtcF8yMSAqIG0zMiArIHRtcF8xMyAqIG0wMikpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTggKiBtMTIgKyB0bXBfMjMgKiBtMzIgKyB0bXBfMTUgKiBtMDIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzIyICogbTIyICsgdG1wXzE2ICogbTAyICsgdG1wXzIxICogbTEyKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzIwICogbTEyICsgdG1wXzIzICogbTIyICsgdG1wXzE3ICogbTAyKSlcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LmNvZmFjdG9yID0gZnVuY3Rpb24gKHIsIGMsIG0pIHtcclxuICAgICAgICB2YXIgYSA9IE1hdGgucG93KCgtMSksIChyICsgYykpO1xyXG4gICAgICAgIHZhciBkID0gTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQobSk7XHJcbiAgICAgICAgcmV0dXJuIGEgKiBkO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQubG9va0F0ID0gZnVuY3Rpb24gKHBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XHJcbiAgICAgICAgdmFyIHogPSBWZWN0b3IzXzEuZGVmYXVsdC5zdWIodGFyZ2V0LCBwb3NpdGlvbikubm9ybWFsaXplZDtcclxuICAgICAgICB2YXIgeCA9IFZlY3RvcjNfMS5kZWZhdWx0LmNyb3NzKHVwLCB6KTtcclxuICAgICAgICB2YXIgeSA9IFZlY3RvcjNfMS5kZWZhdWx0LmNyb3NzKHosIHgpO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIHgueCwgeC55LCB4LnosIDAsXHJcbiAgICAgICAgICAgIHkueCwgeS55LCB5LnosIDAsXHJcbiAgICAgICAgICAgIHoueCwgei55LCB6LnosIDAsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uLngsIHBvc2l0aW9uLnksIHBvc2l0aW9uLnosIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIE1hdHJpeDQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE1hdHJpeDQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICAgICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG4gICAgfTtcclxufSkoKTtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlRyaWFuZ2xlID0gZXhwb3J0cy5Cb3ggPSBleHBvcnRzLlJlY3QgPSBleHBvcnRzLkNhcHN1bGUgPSBleHBvcnRzLkVsbGlwc2UgPSBleHBvcnRzLkNpcmNsZSA9IGV4cG9ydHMuU2VnbWVudCA9IGV4cG9ydHMuUmF5ID0gZXhwb3J0cy5MaW5lID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjJcIikpO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIExpbmUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTGluZShwLCB2KSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChwLngsIHAueSk7XHJcbiAgICAgICAgdGhpcy5fdiA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh2LngsIHYueSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZS5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZS5wcm90b3R5cGUsIFwidlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl92OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBMaW5lLnByb3RvdHlwZS5wb2ludCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZCh0aGlzLnAsIHRoaXMudi5ub3JtYWxpemUudGltZXMoZikpO1xyXG4gICAgfTtcclxuICAgIExpbmUucHJvdG90eXBlLnBvaW50cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcclxuICAgICAgICB2YXIgaGFsZkxlbmd0aCA9IGxlbmd0aCAvIDI7XHJcbiAgICAgICAgdmFyIHAxID0gdGhpcy5wb2ludCgtaGFsZkxlbmd0aCk7XHJcbiAgICAgICAgdmFyIHAyID0gdGhpcy5wb2ludChoYWxmTGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gW3AxLngsIHAxLnksIHAyLngsIHAyLnldO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaW5lO1xyXG59KCkpO1xyXG5leHBvcnRzLkxpbmUgPSBMaW5lO1xyXG52YXIgUmF5ID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcclxuICAgIF9fZXh0ZW5kcyhSYXksIF9zdXBlcik7XHJcbiAgICBmdW5jdGlvbiBSYXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xyXG4gICAgfVxyXG4gICAgUmF5LnByb3RvdHlwZS5wb2ludCA9IGZ1bmN0aW9uIChmKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZCh0aGlzLnAsIHRoaXMudi5ub3JtYWxpemUudGltZXMoTWF0aC5hYnMoZikpKTtcclxuICAgIH07XHJcbiAgICBSYXkucHJvdG90eXBlLnBvaW50cyA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcclxuICAgICAgICB2YXIgcDEgPSB0aGlzLnA7XHJcbiAgICAgICAgdmFyIHAyID0gdGhpcy5wb2ludChsZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBbcDEueCwgcDEueSwgcDIueCwgcDIueV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJheTtcclxufShMaW5lKSk7XHJcbmV4cG9ydHMuUmF5ID0gUmF5O1xyXG52YXIgU2VnbWVudCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBTZWdtZW50KHAsIHYpIHtcclxuICAgICAgICB0aGlzLl9wID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLl92ID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHYueCwgdi55KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJwMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMuX3AsIHRoaXMudik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJ2XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Y7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJwb2ludHNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzID0gX2EucDEsIGUgPSBfYS5wMjtcclxuICAgICAgICAgICAgcmV0dXJuIFtzLngsIHMueSwgZS54LCBlLnldO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBTZWdtZW50O1xyXG59KCkpO1xyXG5leHBvcnRzLlNlZ21lbnQgPSBTZWdtZW50O1xyXG52YXIgQ2lyY2xlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENpcmNsZShwLCByKSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IHAuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLl9yID0gcjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaXJjbGUucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENpcmNsZS5wcm90b3R5cGUsIFwiclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fciA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBDaXJjbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2lyY2xlID0gQ2lyY2xlO1xyXG52YXIgRWxsaXBzZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbGxpcHNlKHAsIHJ4LCByeSwgYW5nbGUpIHtcclxuICAgICAgICB0aGlzLl9yYWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3AgPSBwLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5fciA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChyeCwgcnkpO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJyeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yLng7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJyeVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yLnk7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJyYWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcmFkOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwiYW5nbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC5yYWQyZGVnKHRoaXMuX3JhZCk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yYWQgPSBVdGlsLmRlZzJyYWQodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBFbGxpcHNlO1xyXG59KCkpO1xyXG5leHBvcnRzLkVsbGlwc2UgPSBFbGxpcHNlO1xyXG52YXIgQ2Fwc3VsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDYXBzdWxlKHMsIHIpIHtcclxuICAgICAgICB0aGlzLl9zID0gcztcclxuICAgICAgICB0aGlzLl9yID0gcjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXBzdWxlLnByb3RvdHlwZSwgXCJzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3M7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDYXBzdWxlLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENhcHN1bGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQ2Fwc3VsZSA9IENhcHN1bGU7XHJcbnZhciBSZWN0ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJlY3QocCwgdywgaCkge1xyXG4gICAgICAgIHRoaXMuX3AgPSBwO1xyXG4gICAgICAgIHRoaXMuX3cgPSB3O1xyXG4gICAgICAgIHRoaXMuX2ggPSBoO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcIndcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdzsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3cgPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwiaFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9oOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5faCA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnAuY2xvbmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMucC54ICsgdGhpcy53LCB0aGlzLnAueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInAzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLnAueCArIHRoaXMudywgdGhpcy5wLnkgLSB0aGlzLmgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwNFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5wLngsIHRoaXMucC55IC0gdGhpcy5oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gUmVjdDtcclxufSgpKTtcclxuZXhwb3J0cy5SZWN0ID0gUmVjdDtcclxudmFyIEJveCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBCb3gocCwgciwgYW5nbGUpIHtcclxuICAgICAgICB0aGlzLl9yYWQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3AgPSBwO1xyXG4gICAgICAgIHRoaXMuX3IgPSByO1xyXG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwiclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJyeFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yLng7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yLnggPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJyeVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yLnk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yLnkgPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ3XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMucnggKiAyOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMucnkgKiAyOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnJhZDJkZWcodGhpcy5fcmFkKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3JhZCA9IFV0aWwuZGVnMnJhZCh2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KC10aGlzLl9yLngsIHRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMuX3IueCwgdGhpcy5fci55KS5yb3RhdGUodGhpcy5fcmFkKS5hZGQodGhpcy5wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5fci54LCAtdGhpcy5fci55KS5yb3RhdGUodGhpcy5fcmFkKS5hZGQodGhpcy5wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwNFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoLXRoaXMuX3IueCwgLXRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwidjF0bzJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDIsIHRoaXMucDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInYydG8zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAzLCB0aGlzLnAyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ2M3RvNFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wNCwgdGhpcy5wMyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwidjR0bzFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDEsIHRoaXMucDQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBCb3g7XHJcbn0oKSk7XHJcbmV4cG9ydHMuQm94ID0gQm94O1xyXG52YXIgVHJpYW5nbGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJpYW5nbGUocDEsIHAyLCBwMykge1xyXG4gICAgICAgIHRoaXMuX3AxID0gcDE7XHJcbiAgICAgICAgdGhpcy5fcDIgPSBwMjtcclxuICAgICAgICB0aGlzLl9wMyA9IHAzO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJwMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wMTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJwMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wMjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJwM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wMzsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJwb2ludHNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcDEueCwgdGhpcy5fcDEueSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3AyLngsIHRoaXMuX3AyLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wMy54LCB0aGlzLl9wMy55LFxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwidjF0bzJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDIsIHRoaXMucDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwidjJ0bzNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDMsIHRoaXMucDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwidjN0bzFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDEsIHRoaXMucDMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBUcmlhbmdsZTtcclxufSgpKTtcclxuZXhwb3J0cy5UcmlhbmdsZSA9IFRyaWFuZ2xlO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIFF1YWRyYXRpYyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBRdWFkcmF0aWMoKSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IDA7XHJcbiAgICAgICAgdGhpcy5fYiA9IDA7XHJcbiAgICAgICAgdGhpcy5fYyA9IDA7XHJcbiAgICAgICAgdGhpcy5fYSA9IHRoaXMuX2IgPSB0aGlzLl9jID0gMDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC51bmlmeVNpZ24odGhpcy5fYSk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9hID0gTnVtYmVyKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJiXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwudW5pZnlTaWduKHRoaXMuX2IpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYiA9IE51bWJlcih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnVuaWZ5U2lnbih0aGlzLl9jKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2MgPSBOdW1iZXIodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC51bmlmeVNpZ24oUXVhZHJhdGljLmNhbGNQX0J5X2FiKHRoaXMuYSwgdGhpcy5iKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwicVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLnVuaWZ5U2lnbihRdWFkcmF0aWMuY2FsY1FfQnlfYWJjKHRoaXMuYSwgdGhpcy5iLCB0aGlzLmMpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRHZW5lcmFsRm9ybSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IGEsIHRoaXMuX2IgPSBiLCB0aGlzLl9jID0gYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRTdGFuZGFyZEZvcm0gPSBmdW5jdGlvbiAoYSwgcCwgcSkge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhO1xyXG4gICAgICAgIHRoaXMuX2IgPSBRdWFkcmF0aWMuY2FsY0JfQnlfYXAoYSwgcCk7XHJcbiAgICAgICAgdGhpcy5fYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV9wcShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRGYWN0b3JpemF0aW9uRm9ybSA9IGZ1bmN0aW9uIChhLCBzLCB0KSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IFF1YWRyYXRpYy5jYWxjQl9CeV9hc3QoYSwgcywgdCk7XHJcbiAgICAgICAgdGhpcy5fYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV9hc3QoYSwgcywgdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnlBcGV4QW5kUGFzc1BvaW50ID0gZnVuY3Rpb24gKHAsIHEsIHgsIHkpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV9wcXh5KHAsIHEsIHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW5pdFN0YW5kYXJkRm9ybShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRCeUF4aXNBbmQyUGFzc1BvaW50cyA9IGZ1bmN0aW9uIChheGlzWCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcSA9IFF1YWRyYXRpYy5jYWxjUV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcCA9IGF4aXNYO1xyXG4gICAgICAgIHRoaXMuaW5pdFN0YW5kYXJkRm9ybShhLCBwLCBxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRCeTNQYXNzUG9pbnRzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgYSA9IFF1YWRyYXRpYy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYiA9IFF1YWRyYXRpYy5jYWxjQl9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYyA9IFF1YWRyYXRpYy5jYWxjQ19CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB0aGlzLmluaXRHZW5lcmFsRm9ybShhLCBiLCBjKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmZ4ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgcmV0dXJuIGEgKiAoKHggLSBwKSAqICh4IC0gcCkpICsgcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmdldFBvaW50cyA9IGZ1bmN0aW9uIChmcm9tWCwgdG9YLCBzdGVwKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgdmFyIHAgPSBbXTtcclxuICAgICAgICB0b1ggKz0gc3RlcCAqIDAuMTtcclxuICAgICAgICBmb3IgKHZhciB4ID0gZnJvbVg7IHggPD0gdG9YOyB4ICs9IHN0ZXApIHtcclxuICAgICAgICAgICAgcC5wdXNoKHgsIHRoaXMuZngoeCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcDtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmdldFBvaW50c09mU2xvcGVBdFlUYW5nZW50ID0gZnVuY3Rpb24gKGZyb21YLCB0b1gpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgeTEgPSB0aGlzLmIgKiBmcm9tWCArIHRoaXMuYztcclxuICAgICAgICB2YXIgeTIgPSB0aGlzLmIgKiB0b1ggKyB0aGlzLmM7XHJcbiAgICAgICAgcmV0dXJuIFtmcm9tWCwgeTEsIHRvWCwgeTJdO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImFwZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyB4OiB0aGlzLnAsIHk6IHRoaXMucSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImF4aXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzSW52YWxpZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhUXVhZHJhdGljLmlzVmFsaWRBKHRoaXMuYSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiaGFzQXBleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIHAgPSBfZC5wLCBxID0gX2QucTtcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5oYXNBcGV4KHAsIHEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcIm1heFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICgwIDw9IHRoaXMuYSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwZXgueTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJtaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hIDw9IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcGV4Lnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiZGlzY3JpbWluYW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwic29sdXRpb25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLnNvbHV0aW9uKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzUG9zaXRpdmVEZWZpbml0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaXNQb3NpdGl2ZURlZmluaXRlKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImlzTmVnYXRpdmVEZWZpbml0ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaXNOZWdhdGl2ZURlZmluaXRlKGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZlNsb3BlID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCLjgarjgZdcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkF4aXMgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQXBleClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgdmFyIGF4aXMgPSB0aGlzLmF4aXMudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwieD1cIiArIGF4aXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mQXBleCA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBcGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gXCLjgarjgZdcIjtcclxuICAgICAgICB2YXIgeCA9IHRoaXMuYXBleC54LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciB5ID0gdGhpcy5hcGV4LnkudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZMYXRleEFQUSA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBwID0gdGhpcy5wLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBxID0gdGhpcy5xLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIiQkeT1cIiArIGEgKyBcIih4IC0gKFwiICsgcCArIFwiKSleMiArIChcIiArIHEgKyBcIikkJFwiO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkxhdGV4QUJDID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmEudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIGIgPSB0aGlzLmIudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIGMgPSB0aGlzLmMudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwiJCR5PVwiICsgYSArIFwieF4yICsgKFwiICsgYiArIFwiKXggKyAoXCIgKyBjICsgXCIpJCRcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nQWJvdXRTaGFwZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYTtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIGlmIChhIDwgMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLkuIrjgavlh7hcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuS4i+OBq+WHuFwiO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmMsIHAgPSBfZC5wLCBxID0gX2QucTtcclxuICAgICAgICByZXR1cm4gXCJ7YTpcIiArIGEgKyBcIiwgYjpcIiArIGIgKyBcIiwgYzpcIiArIGMgKyBcIiwgcDpcIiArIHAgKyBcIiwgcTpcIiArIHEgKyBcIn1cIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY1BfQnlfYWIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiAtYiAvICgyICogYSk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNRX0J5X2FiYyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgcmV0dXJuIC0oKE1hdGgucG93KGIsIDIpKSAtICg0ICogYSAqIGMpKSAvICg0ICogYSk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X2FwID0gZnVuY3Rpb24gKGEsIHApIHtcclxuICAgICAgICByZXR1cm4gLTIgKiBhICogcDtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0JfQnlfYXN0ID0gZnVuY3Rpb24gKGEsIHMsIHQpIHtcclxuICAgICAgICByZXR1cm4gKC1hICogdCkgKyAoLWEgKiBzKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfcHEgPSBmdW5jdGlvbiAoYSwgcCwgcSkge1xyXG4gICAgICAgIHJldHVybiBhICogTWF0aC5wb3cocCwgMikgKyBxO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQ19CeV9hc3QgPSBmdW5jdGlvbiAoYSwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiBhICogcyAqIHQ7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNBX0J5X3BxeHkgPSBmdW5jdGlvbiAocCwgcSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBudW1lID0geSAtIHE7XHJcbiAgICAgICAgdmFyIGRlbm8gPSBNYXRoLnBvdygoeCAtIHApLCAyKTtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNBX0J5X2F4aXhYX3gxeTFfeDJ5MiA9IGZ1bmN0aW9uIChheGlzWCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgbnVtZSA9IHkxIC0geTI7XHJcbiAgICAgICAgdmFyIGRlbm8gPSAoTWF0aC5wb3coKHgxIC0gYXhpc1gpLCAyKSkgLSAoTWF0aC5wb3coKHgyIC0gYXhpc1gpLCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjUV9CeV9heGl4WF94MXkxX3gyeTIgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNhbGNBX0J5X2F4aXhYX3gxeTFfeDJ5MihheGlzWCwgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgICAgIHZhciBxID0geTEgLSAoYSAqIE1hdGgucG93KCh4MSAtIGF4aXNYKSwgMikpO1xyXG4gICAgICAgIHJldHVybiBxO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5MyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSAoKHkxIC0geTIpICogKHgxIC0geDMpIC0gKHkxIC0geTMpICogKHgxIC0geDIpKTtcclxuICAgICAgICB2YXIgZGVubyA9ICgoeDEgLSB4MikgKiAoeDEgLSB4MykgKiAoeDIgLSB4MykpO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgbnVtZSA9IHkxIC0geTIgLSAoYSAqIChNYXRoLnBvdyh4MSwgMikgLSBNYXRoLnBvdyh4MiwgMikpKTtcclxuICAgICAgICB2YXIgZGVubyA9IHgxIC0geDI7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQ19CeV94MXkxX3gyeTJfeDN5MyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNhbGNBX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5jYWxjQl9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYyA9IHkxICsgKC1hICogKHgxICogeDEpIC0gYiAqIHgxKTtcclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuZGlzY3JpbWluYW50ID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICByZXR1cm4gKE1hdGgucG93KGIsIDIpKSAtICg0ICogYSAqIGMpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5zb2x1dGlvbiA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChkIDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIHZhciBkZW5vID0gMiAqIGE7XHJcbiAgICAgICAgdmFyIHgxID0gVXRpbC51bmlmeVNpZ24oKC1iIC0gTWF0aC5zcXJ0KGQpKSAvIGRlbm8pO1xyXG4gICAgICAgIHZhciB4MiA9IFV0aWwudW5pZnlTaWduKCgtYiArIE1hdGguc3FydChkKSkgLyBkZW5vKTtcclxuICAgICAgICBpZiAoZCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIFt4MV07XHJcbiAgICAgICAgcmV0dXJuIFtNYXRoLm1pbih4MSwgeDIpLCBNYXRoLm1heCh4MSwgeDIpXTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaXNWYWxpZEEgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGlzTmFOKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKEluZmluaXR5ID09IE1hdGguYWJzKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmhhc0FwZXggPSBmdW5jdGlvbiAocCwgcSkge1xyXG4gICAgICAgIGlmIChpc05hTihwKSB8fCBpc05hTihxKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChJbmZpbml0eSA9PT0gTWF0aC5hYnMocCkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoSW5maW5pdHkgPT09IE1hdGguYWJzKHEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzUG9zaXRpdmVEZWZpbml0ZSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKCFRdWFkcmF0aWMuaXNWYWxpZEEoYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoYSA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZCA9IFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIChkIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzTmVnYXRpdmVEZWZpbml0ZSA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgaWYgKCFRdWFkcmF0aWMuaXNWYWxpZEEoYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoMCA8IGEpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgZCA9IFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIChkIDwgMCk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmludGVyc2VjdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtcclxuICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgIHBvaW50czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChhLmlzSW52YWxpZCB8fCBiLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBpZiAoYS5hIC0gYi5hID09PSAwKSB7XHJcbiAgICAgICAgICAgIHZhciBudW1lID0gYi5jIC0gYS5jO1xyXG4gICAgICAgICAgICB2YXIgZGVubyA9IGEuYiAtIGIuYjtcclxuICAgICAgICAgICAgaWYgKGRlbm8gPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgeCA9IG51bWUgLyBkZW5vO1xyXG4gICAgICAgICAgICB2YXIgeSA9IGEuZngoeCk7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb3VudCA9IDE7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb2ludHMucHVzaCh4LCB5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGMgPSBuZXcgUXVhZHJhdGljKCkuaW5pdEdlbmVyYWxGb3JtKGEuYSAtIGIuYSwgYS5iIC0gYi5iLCBhLmMgLSBiLmMpO1xyXG4gICAgICAgIHZhciBweCA9IGMuc29sdXRpb247XHJcbiAgICAgICAgaWYgKHB4ID09PSB1bmRlZmluZWQgfHwgcHgubGVuZ3RoID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHB4Lm1hcChmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgICAgICByZXN1bHQuY291bnQrKztcclxuICAgICAgICAgICAgcmVzdWx0LnBvaW50cy5wdXNoKHgsIGEuZngoeCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFF1YWRyYXRpYztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gUXVhZHJhdGljO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlR5cGUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbnZhciBUeXBlO1xyXG4oZnVuY3Rpb24gKFR5cGUpIHtcclxuICAgIFR5cGVbVHlwZVtcIk5vbmVcIl0gPSAwXSA9IFwiTm9uZVwiO1xyXG4gICAgVHlwZVtUeXBlW1wiUmlnaHRcIl0gPSAxXSA9IFwiUmlnaHRcIjtcclxuICAgIFR5cGVbVHlwZVtcIkFjdXRlXCJdID0gMl0gPSBcIkFjdXRlXCI7XHJcbiAgICBUeXBlW1R5cGVbXCJPYnR1c2VcIl0gPSAzXSA9IFwiT2J0dXNlXCI7XHJcbn0pKFR5cGUgPSBleHBvcnRzLlR5cGUgfHwgKGV4cG9ydHMuVHlwZSA9IHt9KSk7XHJcbnZhciBUcmlhbmdsZTIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVHJpYW5nbGUyKHApIHtcclxuICAgICAgICBpZiAocCA9PT0gdm9pZCAwKSB7IHAgPSBbXTsgfVxyXG4gICAgICAgIHZhciBheCA9IHBbMF0gPyBwWzBdIDogMDtcclxuICAgICAgICB2YXIgYXkgPSBwWzFdID8gcFsxXSA6IDA7XHJcbiAgICAgICAgdmFyIGJ4ID0gcFsyXSA/IHBbMl0gOiAwO1xyXG4gICAgICAgIHZhciBieSA9IHBbM10gPyBwWzNdIDogMDtcclxuICAgICAgICB2YXIgY3ggPSBwWzRdID8gcFs0XSA6IDA7XHJcbiAgICAgICAgdmFyIGN5ID0gcFs1XSA/IHBbNV0gOiAwO1xyXG4gICAgICAgIHRoaXMuX0EgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoYXgsIGF5KTtcclxuICAgICAgICB0aGlzLl9CID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGJ4LCBieSk7XHJcbiAgICAgICAgdGhpcy5fQyA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChjeCwgY3kpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9BOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX0I7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fQzsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQUJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQiwgdGhpcy5BKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJCQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5DLCB0aGlzLkIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkNBXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLkEsIHRoaXMuQyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkJDLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJiXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQ0EubWFnbml0dWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5BQi5tYWduaXR1ZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwic29ydGVkTGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSBbYSwgYiwgY107XHJcbiAgICAgICAgICAgIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYiAtIGE7IH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbGlzdDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhTaWRlTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGlzdFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjOiByZXR1cm4gXCJBQlwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhOiByZXR1cm4gXCJCQ1wiO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwiQ0FcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pblNpZGVOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBjID0gX2EuYztcclxuICAgICAgICAgICAgc3dpdGNoIChsaXN0WzJdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGM6IHJldHVybiBcIkFCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGE6IHJldHVybiBcIkJDXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJDQVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS5nZXRMZW5ndGhBdCA9IGZ1bmN0aW9uIChzaWRlTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoc2lkZU5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiB0aGlzLmE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gdGhpcy5iO1xyXG4gICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIHRoaXMuYztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4TGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGVuZ3RoQXQodGhpcy5tYXhTaWRlTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluTGVuZ3RoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGVuZ3RoQXQodGhpcy5taW5TaWRlTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4Q29ybmVyTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzaWRlID0gdGhpcy5tYXhTaWRlTmFtZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQkNcIjogcmV0dXJuIFwiQVwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBXCI6IHJldHVybiBcIkJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBQlwiOiByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluQ29ybmVyTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzaWRlID0gdGhpcy5taW5TaWRlTmFtZTtcclxuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQkNcIjogcmV0dXJuIFwiQVwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkNBXCI6IHJldHVybiBcIkJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBQlwiOiByZXR1cm4gXCJDXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY29zQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgbiA9IChNYXRoLnBvdyhiLCAyKSkgKyAoTWF0aC5wb3coYywgMikpIC0gKE1hdGgucG93KGEsIDIpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAyICogYiAqIGM7XHJcbiAgICAgICAgICAgIHZhciBjb3MgPSBuIC8gZDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjb3NCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGMsIDIpKSArIChNYXRoLnBvdyhhLCAyKSkgLSAoTWF0aC5wb3coYiwgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBjICogYTtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNvc0NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIG4gPSAoTWF0aC5wb3coYSwgMikpICsgKE1hdGgucG93KGIsIDIpKSAtIChNYXRoLnBvdyhjLCAyKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMiAqIGEgKiBiO1xyXG4gICAgICAgICAgICB2YXIgY29zID0gbiAvIGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwic2luQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQSA9IHRoaXMuY29zQTtcclxuICAgICAgICAgICAgdmFyIHNpbiA9IE1hdGguc3FydCgxIC0gKE1hdGgucG93KGNvc0EsIDIpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwic2luQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQiA9IHRoaXMuY29zQjtcclxuICAgICAgICAgICAgdmFyIHNpbiA9IE1hdGguc3FydCgxIC0gKE1hdGgucG93KGNvc0IsIDIpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwic2luQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQyA9IHRoaXMuY29zQztcclxuICAgICAgICAgICAgdmFyIHNpbiA9IE1hdGguc3FydCgxIC0gKE1hdGgucG93KGNvc0MsIDIpKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW47XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwidGFuQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzaW5BID0gX2Euc2luQSwgY29zQSA9IF9hLmNvc0E7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW5BIC8gY29zQTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJ0YW5CXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkIgPSBfYS5zaW5CLCBjb3NCID0gX2EuY29zQjtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkIgLyBjb3NCO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInRhbkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgc2luQyA9IF9hLnNpbkMsIGNvc0MgPSBfYS5jb3NDO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luQyAvIE51bWJlcihjb3NDLnRvRml4ZWQoMTUpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLmdldENvc0F0ID0gZnVuY3Rpb24gKGNvcm5lck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvcm5lck5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjogcmV0dXJuIHRoaXMuY29zQTtcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjogcmV0dXJuIHRoaXMuY29zQjtcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIHRoaXMuY29zQztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4Q29ybmVyQ29zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29zQXQodGhpcy5tYXhDb3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5Db3JuZXJDb3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3NBdCh0aGlzLm1pbkNvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0U2luQXQgPSBmdW5jdGlvbiAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOiByZXR1cm4gdGhpcy5zaW5BO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlwiOiByZXR1cm4gdGhpcy5zaW5CO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gdGhpcy5zaW5DO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhDb3JuZXJTaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaW5BdCh0aGlzLm1heENvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lclNpblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpbkF0KHRoaXMubWluQ29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS5nZXRUYW5BdCA9IGZ1bmN0aW9uIChjb25uZXJOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb25uZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6IHJldHVybiB0aGlzLnRhbkE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6IHJldHVybiB0aGlzLnRhbkI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiB0aGlzLnRhbkM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lclRhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhbkF0KHRoaXMubWF4Q29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluQ29ybmVyVGFuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFuQXQodGhpcy5taW5Db3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJyYWRBXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NBID0gdGhpcy5jb3NBO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc0EpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInJhZEJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0IgPSB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwicmFkQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQyA9IHRoaXMuY29zQztcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NDKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJhcmVhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYiA9IF9hLmIsIGMgPSBfYS5jLCBzaW5BID0gX2Euc2luQTtcclxuICAgICAgICAgICAgcmV0dXJuIChiICogYyAqIHNpbkEpICogMC41O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm91dGVyUmFkaXVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBzaW5BID0gX2Euc2luQTtcclxuICAgICAgICAgICAgcmV0dXJuIGEgLyAoMiAqIHNpbkEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImlubmVyUmFkaXVzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmMsIGFyZWEgPSBfYS5hcmVhO1xyXG4gICAgICAgICAgICByZXR1cm4gKDIgKiBhcmVhKSAvIChhICsgYiArIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNlbnRlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBBID0gX2EuQSwgQiA9IF9hLkIsIEMgPSBfYS5DO1xyXG4gICAgICAgICAgICB2YXIgZyA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgpLmFkZChBKS5hZGQoQikuYWRkKEMpLnRpbWVzKDEgLyAzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwib3V0ZXJDZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQywgcmFkQSA9IF9hLnJhZEEsIHJhZEIgPSBfYS5yYWRCLCByYWRDID0gX2EucmFkQztcclxuICAgICAgICAgICAgdmFyIHNpbjJBID0gTWF0aC5zaW4ocmFkQSAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgc2luMkIgPSBNYXRoLnNpbihyYWRCICogMik7XHJcbiAgICAgICAgICAgIHZhciBzaW4yQyA9IE1hdGguc2luKHJhZEMgKiAyKTtcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IEEuY2xvbmUoKS50aW1lcyhzaW4yQSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQi5jbG9uZSgpLnRpbWVzKHNpbjJCKSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQy5jbG9uZSgpLnRpbWVzKHNpbjJDKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gc2luMkEgKyBzaW4yQiArIHNpbjJDO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VudGVyLnRpbWVzKDEgLyBkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJpbm5lckNlbnRlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBBID0gX2EuQSwgQiA9IF9hLkIsIEMgPSBfYS5DLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgY2VudGVyID0gQS5jbG9uZSgpLnRpbWVzKGEpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEIuY2xvbmUoKS50aW1lcyhiKSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQy5jbG9uZSgpLnRpbWVzKGMpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAxIC8gKGEgKyBiICsgYyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjZW50ZXIudGltZXMoZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiaXNJbnZhbGlkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIGEgPSBsaXN0WzBdLCBiID0gbGlzdFsxXSwgYyA9IGxpc3RbMl07XHJcbiAgICAgICAgICAgIHJldHVybiAhKGEgPCBiICsgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwidHlwZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBUeXBlLk5vbmU7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBtYXggPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMF0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIHZhciBtaWQgPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMV0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIHZhciBtaW4gPSBOdW1iZXIoKE1hdGgucG93KGxpc3RbMl0sIDIpKS50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgICAgIGlmIChtYXggPCBtaWQgKyBtaW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5BY3V0ZTtcclxuICAgICAgICAgICAgaWYgKG1heCA+IG1pZCArIG1pbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBUeXBlLk9idHVzZTtcclxuICAgICAgICAgICAgcmV0dXJuIFR5cGUuUmlnaHQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLCBBID0gX2EuQSwgQiA9IF9hLkIsIEMgPSBfYS5DO1xyXG4gICAgICAgIHJldHVybiBcIkFcIiArIEEgKyBcIiwgQlwiICsgQiArIFwiLCBDXCIgKyBDO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUcmlhbmdsZTI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFRyaWFuZ2xlMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMih4LCB5KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuZXF1YWwgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ID09PSB2LnggJiYgdGhpcy55ID09PSB2LnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHYueDtcclxuICAgICAgICB0aGlzLnkgKz0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54IC09IHYueDtcclxuICAgICAgICB0aGlzLnkgLT0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnRpbWVzID0gZnVuY3Rpb24gKGspIHtcclxuICAgICAgICB0aGlzLnggKj0gaztcclxuICAgICAgICB0aGlzLnkgKj0gaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KHggKiB4ICsgeSAqIHkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJzcXJNYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHJldHVybiB4ICogeCArIHkgKiB5O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJub3JtYWxpemVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbWFnbml0dWRlID0gdGhpcy5tYWduaXR1ZGU7XHJcbiAgICAgICAgICAgIGlmIChtYWduaXR1ZGUgPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBWZWN0b3IyLnplcm87XHJcbiAgICAgICAgICAgIHZhciB2ID0ge1xyXG4gICAgICAgICAgICAgICAgeDogdGhpcy54IC8gbWFnbml0dWRlLFxyXG4gICAgICAgICAgICAgICAgeTogdGhpcy55IC8gbWFnbml0dWRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih2LngsIHYueSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInJhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgdmFyIHJhZCA9IE1hdGguYXRhbih5IC8geCk7XHJcbiAgICAgICAgICAgIGlmIChyYWQgPCAwICYmIHggPCAwIHx8IDAgPCByYWQgJiYgeSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYWQgKyBNYXRoLlBJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyYWQgPCAwICYmIDAgPCB4KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFkICsgMiAqIE1hdGguUEk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJhZDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5yb3RhdGUgPSBmdW5jdGlvbiAocmFkKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgIHRoaXMueCA9IHggKiBNYXRoLmNvcyhyYWQpIC0geSAqIE1hdGguc2luKHJhZCk7XHJcbiAgICAgICAgdGhpcy55ID0geCAqIE1hdGguc2luKHJhZCkgKyB5ICogTWF0aC5jb3MocmFkKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB0aGlzLnggPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ID0gdi55O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUubGVycCA9IGZ1bmN0aW9uICh0bywgdCkge1xyXG4gICAgICAgIHZhciB2ID0gVmVjdG9yMi5zdWIodG8sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkKHYudGltZXModCkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiKVwiO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwib25lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInVwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcImRvd25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgLTEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcImxlZnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoLTEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcInJpZ2h0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIuYWRkID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiB2MS5jbG9uZSgpLmFkZCh2Mik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5zdWIgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkuc3ViKHYyKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnRpbWVzID0gZnVuY3Rpb24gKHYsIGspIHtcclxuICAgICAgICByZXR1cm4gdi5jbG9uZSgpLnRpbWVzKGspO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaW52ZXJzZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuIHYuY2xvbmUoKS50aW1lcygtMSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1plcm8gPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiAodi54ID09PSAwICYmIHYueSA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1BhcmFsbGVsID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciB0ID0gVmVjdG9yMi5jcm9zcyh2MSwgdjIpO1xyXG4gICAgICAgIHJldHVybiAodCA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pc1ZlcnRpY2FsID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiAoVmVjdG9yMi5kb3QodjEsIHYyKSA9PT0gMCk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kb3QgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIGRvdCA9IHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnk7XHJcbiAgICAgICAgcmV0dXJuIGRvdDtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmNyb3NzID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciBjcm9zcyA9IHYxLnggKiB2Mi55IC0gdjIueCAqIHYxLnk7XHJcbiAgICAgICAgcmV0dXJuIGNyb3NzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuYW5nbGUgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIG5lbXUgPSBWZWN0b3IyLmRvdCh2MSwgdjIpO1xyXG4gICAgICAgIHZhciBkZW5vID0gdjEubWFnbml0dWRlICogdjIubWFnbml0dWRlO1xyXG4gICAgICAgIHZhciBjb3MgPSBuZW11IC8gZGVubztcclxuICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvcyk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5zdWIodjEsIHYyKS5tYWduaXR1ZGU7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5sZXJwID0gZnVuY3Rpb24gKHYxLCB2MiwgdCkge1xyXG4gICAgICAgIHJldHVybiB2MS5jbG9uZSgpLmxlcnAodjIsIHQpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubWlkcG9pbnQgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkuYWRkKHYyKS50aW1lcygwLjUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBWZWN0b3IyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IzKHgsIHksIHopIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIGlmICh6ID09PSB2b2lkIDApIHsgeiA9IDA7IH1cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy56ID0gejtcclxuICAgIH1cclxuICAgIFZlY3RvcjMucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IGEueDtcclxuICAgICAgICB0aGlzLnkgKz0gYS55O1xyXG4gICAgICAgIHRoaXMueiArPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB0aGlzLnggLT0gYS54O1xyXG4gICAgICAgIHRoaXMueSAtPSBhLnk7XHJcbiAgICAgICAgdGhpcy56IC09IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS50aW1lcyA9IGZ1bmN0aW9uIChudW0pIHtcclxuICAgICAgICB0aGlzLnggKj0gbnVtO1xyXG4gICAgICAgIHRoaXMueSAqPSBudW07XHJcbiAgICAgICAgdGhpcy56ICo9IG51bTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIiwgXCIgKyB0aGlzLnogKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMy5wcm90b3R5cGUsIFwibm9ybWFsaXplZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IzLm5vcm1hbGl6ZSh0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IzLmFkZCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGEueCArIGIueCwgYS55ICsgYi55LCBhLnogKyBiLnopO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMuc3ViID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoYS54IC0gYi54LCBhLnkgLSBiLnksIGEueiAtIGIueik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy50aW1lcyA9IGZ1bmN0aW9uIChhLCBudW0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoYS54ICogbnVtLCBhLnkgKiBudW0sIGEueiAqIG51bSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5ub3JtYWxpemUgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSBNYXRoLnNxcnQoTWF0aC5wb3codi54LCAyKSArIE1hdGgucG93KHYueSwgMikgKyBNYXRoLnBvdyh2LnosIDIpKTtcclxuICAgICAgICBpZiAoMC4wMDAwMSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjModi54IC8gbGVuZ3RoLCB2LnkgLyBsZW5ndGgsIHYueiAvIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMy56ZXJvO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBWZWN0b3IzLmRvdCA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueSArIGEueiAqIGIuejtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLmNyb3NzID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgeCA9IGEueSAqIGIueiAtIGEueiAqIGIueTtcclxuICAgICAgICB2YXIgeSA9IGEueiAqIGIueCAtIGEueCAqIGIuejtcclxuICAgICAgICB2YXIgeiA9IGEueCAqIGIueSAtIGEueSAqIGIueDtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoeCwgeSwgeik7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMsIFwiemVyb1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMywgXCJvbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMSwgMSwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMsIFwidXBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMsIFwiZG93blwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAtMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFZlY3RvcjM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQ29sbGlzaW9uMiA9IGV4cG9ydHMuUHJpbWl0aXZlMiA9IGV4cG9ydHMuVHJpYW5nbGUyID0gZXhwb3J0cy5NYXRyaXg0ID0gZXhwb3J0cy5NYXRyaXgzID0gZXhwb3J0cy5WZWN0b3IzID0gZXhwb3J0cy5WZWN0b3IyID0gZXhwb3J0cy5RdWFkcmF0aWMgPSBleHBvcnRzLkxpbmVhciA9IGV4cG9ydHMuRGVmaW5lID0gZXhwb3J0cy5VdGlsID0gdm9pZCAwO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxuZXhwb3J0cy5VdGlsID0gVXRpbDtcclxudmFyIERlZmluZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9EZWZpbmVcIikpO1xyXG5leHBvcnRzLkRlZmluZSA9IERlZmluZTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IyXCIpKTtcclxuZXhwb3J0cy5WZWN0b3IyID0gVmVjdG9yMl8xLmRlZmF1bHQ7XHJcbnZhciBWZWN0b3IzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yM1wiKSk7XHJcbmV4cG9ydHMuVmVjdG9yMyA9IFZlY3RvcjNfMS5kZWZhdWx0O1xyXG52YXIgTWF0cml4M18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdHJpeDNcIikpO1xyXG5leHBvcnRzLk1hdHJpeDMgPSBNYXRyaXgzXzEuZGVmYXVsdDtcclxudmFyIE1hdHJpeDRfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXg0XCIpKTtcclxuZXhwb3J0cy5NYXRyaXg0ID0gTWF0cml4NF8xLmRlZmF1bHQ7XHJcbnZhciBRdWFkcmF0aWNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9RdWFkcmF0aWNcIikpO1xyXG5leHBvcnRzLlF1YWRyYXRpYyA9IFF1YWRyYXRpY18xLmRlZmF1bHQ7XHJcbnZhciBMaW5lYXJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9MaW5lYXJcIikpO1xyXG5leHBvcnRzLkxpbmVhciA9IExpbmVhcl8xLmRlZmF1bHQ7XHJcbnZhciBUcmlhbmdsZTJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9UcmlhbmdsZTJcIikpO1xyXG5leHBvcnRzLlRyaWFuZ2xlMiA9IFRyaWFuZ2xlMl8xLmRlZmF1bHQ7XHJcbnZhciBQcmltaXRpdmUyID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1ByaW1pdGl2ZTJcIikpO1xyXG5leHBvcnRzLlByaW1pdGl2ZTIgPSBQcmltaXRpdmUyO1xyXG52YXIgQ29sbGlzaW9uMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Db2xsaXNpb24yXCIpKTtcclxuZXhwb3J0cy5Db2xsaXNpb24yID0gQ29sbGlzaW9uMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5sZXJwID0gZXhwb3J0cy5jcmFtcCA9IGV4cG9ydHMucm91bmQgPSBleHBvcnRzLnJhZDJkZWcgPSBleHBvcnRzLmRlZzJyYWQgPSBleHBvcnRzLnVuaWZ5U2lnbiA9IHZvaWQgMDtcclxuZXhwb3J0cy51bmlmeVNpZ24gPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICByZXR1cm4gYTtcclxufTtcclxuZXhwb3J0cy5kZWcycmFkID0gZnVuY3Rpb24gKGQpIHtcclxuICAgIHJldHVybiBNYXRoLlBJIC8gMTgwICogZDtcclxufTtcclxuZXhwb3J0cy5yYWQyZGVnID0gZnVuY3Rpb24gKHIpIHtcclxuICAgIHJldHVybiAxODAgLyBNYXRoLlBJICogcjtcclxufTtcclxuZXhwb3J0cy5yb3VuZCA9IGZ1bmN0aW9uIChudW0sIGZpeGVkKSB7XHJcbiAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgIHZhciBmaXggPSBNYXRoLnBvdygxMCwgZml4ZWQpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQobnVtICogZml4KSAvIGZpeDtcclxufTtcclxuZXhwb3J0cy5jcmFtcCA9IGZ1bmN0aW9uIChubywgbWluLCBtYXgpIHtcclxuICAgIG5vID0gTWF0aC5taW4obm8sIG1heCk7XHJcbiAgICBubyA9IE1hdGgubWF4KG5vLCBtaW4pO1xyXG4gICAgcmV0dXJuIG5vO1xyXG59O1xyXG5leHBvcnRzLmxlcnAgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIHJhdGUpIHtcclxuICAgIHJldHVybiBmcm9tICsgKCh0byAtIGZyb20pICogcmF0ZSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=