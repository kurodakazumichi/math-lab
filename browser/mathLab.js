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
function isHit(point, ray) {
    var a = ray.v;
    var b = Vector2_1.default.sub(point, ray.p);
    var l = a.magnitude * b.magnitude;
    var d = Vector2_1.default.dot(a, b);
    l = Math.floor(l * 1000000) / 1000000;
    d = Math.floor(d * 1000000) / 1000000;
    return (d === l);
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
function isHit(point, segment) {
    var a = segment.v;
    var b = Vector2_1.default.sub(point, segment.p1);
    var al = a.magnitude;
    var bl = b.magnitude;
    var l = Math.floor(al * bl * 1000000) / 1000000;
    var d = Math.floor(Vector2_1.default.dot(a, b) * 1000000) / 1000000;
    return (d === l && al > bl);
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
exports.PointAndEllipse = exports.PointAndCapsule = exports.PointAndTriangle = exports.PointAndBox = exports.PointAndRect = exports.PointAndCircle = exports.PointAndSegment = exports.PointAndRay = exports.PointAndLine = exports.PointAndPoint = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZEJveC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRDYXBzdWxlLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZENpcmNsZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRFbGxpcHNlLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZExpbmUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kUG9pbnQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kUmF5LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFJlY3QudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kU2VnbWVudC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRUcmlhbmdsZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9EZWZpbmUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9MaW5lYXIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9NYXRyaXgzLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTWF0cml4NC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL1ByaW1pdGl2ZTIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9RdWFkcmF0aWMudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9UcmlhbmdsZTIudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9WZWN0b3IyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVmVjdG9yMy50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0EsU0FBUywwREFBMEQ7QUFDbkUsU0FBUywwREFBMEQ7QUFDbkUsU0FBUywwREFBMEQ7QUFDbkUsU0FBUztBQUNUO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM1QmE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BELG1DQUFtQyxtQkFBTyxDQUFDLDhEQUFtQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqQmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkJhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSwwQkFBMEIsbUJBQU8sQ0FBQyxrQ0FBVztBQUM3QyxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9DYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxvQ0FBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEJhO0FBQ2I7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG9DQUFZO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQ2E7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsb0NBQVk7QUFDcEQ7QUFDQTtBQUNBLFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsMERBQTBEO0FBQ25FLFNBQVMsMERBQTBEO0FBQ25FO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMzQmE7QUFDYjtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxpQ0FBaUMsbUJBQU8sQ0FBQywwREFBaUI7QUFDMUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyx3REFBZ0I7QUFDeEQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxzREFBZTtBQUN0RDtBQUNBLG1DQUFtQyxtQkFBTyxDQUFDLDhEQUFtQjtBQUM5RDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDREQUFrQjtBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLHdEQUFnQjtBQUN4RDtBQUNBLCtCQUErQixtQkFBTyxDQUFDLHNEQUFlO0FBQ3REO0FBQ0Esb0NBQW9DLG1CQUFPLENBQUMsZ0VBQW9CO0FBQ2hFO0FBQ0EsbUNBQW1DLG1CQUFPLENBQUMsOERBQW1CO0FBQzlEO0FBQ0EsbUNBQW1DLG1CQUFPLENBQUMsOERBQW1CO0FBQzlEOzs7Ozs7Ozs7Ozs7O0FDekNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0hhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDdEhhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLDJCQUEyQixPQUFPO0FBQ2xDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3hIYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUIsMkJBQTJCLE9BQU87QUFDbEMsK0JBQStCLE9BQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMxVGE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxjQUFjLGdCQUFnQixzQ0FBc0MsaUJBQWlCLEVBQUU7QUFDdkYsNkJBQTZCLHVEQUF1RDtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0Esa0NBQWtDLG9DQUFvQyxhQUFhLEVBQUUsRUFBRTtBQUN2RixDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHlDQUF5Qyw2QkFBNkI7QUFDdEUsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25ELHdCQUF3QixtQkFBTyxDQUFDLDZCQUFRO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsK0NBQStDLEVBQUU7QUFDM0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QywyQkFBMkIsYUFBYSxFQUFFO0FBQzFDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQ0FBZ0MsRUFBRTtBQUM1RCwyQkFBMkIsNkJBQTZCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDLDJCQUEyQixhQUFhLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDLDJCQUEyQixhQUFhLEVBQUU7QUFDMUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDLDJCQUEyQixlQUFlLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRTtBQUM5QywyQkFBMkIsZUFBZSxFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsb0JBQW9CLEVBQUU7QUFDaEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixvQkFBb0IsRUFBRTtBQUNoRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVELDJCQUEyQiw2QkFBNkIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCLEVBQUU7QUFDN0M7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixpQkFBaUIsRUFBRTtBQUM3QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGlCQUFpQixFQUFFO0FBQzdDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RaYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RCx3QkFBd0IsbUJBQU8sQ0FBQyw2QkFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVELDJCQUEyQixxQkFBcUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVELDJCQUEyQixxQkFBcUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdDQUFnQyxFQUFFO0FBQzVELDJCQUEyQixxQkFBcUIsRUFBRTtBQUNsRDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFVBQVU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsV0FBVztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLFdBQVc7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnRUFBZ0U7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzlYYTtBQUNiO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLDJDQUEyQztBQUM1QztBQUNBO0FBQ0EsMkJBQTJCLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxjQUFjLEVBQUU7QUFDdkQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4ZGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQzNMYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQywyQkFBMkIsT0FBTztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDaEdhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSx3QkFBd0IsbUJBQU8sQ0FBQyw2QkFBUTtBQUN4QztBQUNBLDBCQUEwQixtQkFBTyxDQUFDLGlDQUFVO0FBQzVDO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN2RDtBQUNBLCtCQUErQixtQkFBTyxDQUFDLGlDQUFVO0FBQ2pEO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUNBQWE7QUFDdkQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQyx5Q0FBYztBQUNwRDtBQUNBLDhCQUE4QixtQkFBTyxDQUFDLCtDQUFjO0FBQ3BEOzs7Ozs7Ozs7Ozs7O0FDOUNhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsV0FBVztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1hdGhMYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJNYXRoTGFiXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIk1hdGhMYWJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgYm94KSB7XHJcbiAgICB2YXIgZGF0YXMgPSBbXHJcbiAgICAgICAgeyB2MTogYm94LnYxdG8yLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBib3gucDEpIH0sXHJcbiAgICAgICAgeyB2MTogYm94LnYydG8zLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBib3gucDIpIH0sXHJcbiAgICAgICAgeyB2MTogYm94LnYzdG80LCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBib3gucDMpIH0sXHJcbiAgICAgICAgeyB2MTogYm94LnY0dG8xLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBib3gucDQpIH1cclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFzXzEgPSBkYXRhczsgX2kgPCBkYXRhc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBkYXRhID0gZGF0YXNfMVtfaV07XHJcbiAgICAgICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3MoZGF0YS52MSwgZGF0YS52Mik7XHJcbiAgICAgICAgaWYgKDAgPCBjcm9zcylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGJveCkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBib3gpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxudmFyIFBvaW50QW5kU2VnbWVudCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFNlZ21lbnRcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgY2Fwc3VsZSkge1xyXG4gICAgdmFyIHAgPSBQb2ludEFuZFNlZ21lbnQuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQocG9pbnQsIGNhcHN1bGUucyk7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgcCk7XHJcbiAgICByZXR1cm4gKHYuc3FyTWFnbml0dWRlIDwgY2Fwc3VsZS5yICogY2Fwc3VsZS5yKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgY2Fwc3VsZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBjYXBzdWxlKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBjaXJjbGUpIHtcclxuICAgIHZhciB2ID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBjaXJjbGUucCk7XHJcbiAgICByZXR1cm4gKHYuc3FyTWFnbml0dWRlIDwgY2lyY2xlLnIgKiBjaXJjbGUucik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGNpcmNsZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBjaXJjbGUpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGVsbGlwc2UpIHtcclxuICAgIHZhciBwID0gcG9pbnQ7XHJcbiAgICB2YXIgZSA9IGVsbGlwc2U7XHJcbiAgICB2YXIgc2luID0gTWF0aC5zaW4oZS5yYWQpO1xyXG4gICAgdmFyIGNvcyA9IE1hdGguY29zKGUucmFkKTtcclxuICAgIHZhciByeCA9IGVsbGlwc2UucngsIHJ5ID0gZWxsaXBzZS5yeTtcclxuICAgIHZhciBweCA9IChwLnggLSBlLnAueCkgKiBjb3MgKyAocC55IC0gZS5wLnkpICogc2luO1xyXG4gICAgdmFyIHB5ID0gKHJ4IC8gcnkpICogKC0ocC54IC0gZS5wLngpICogc2luICsgKHAueSAtIGUucC55KSAqIGNvcyk7XHJcbiAgICByZXR1cm4gKHB4ICogcHggKyBweSAqIHB5KSA8IHJ4ICogcng7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGVsbGlwc2UpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgZWxsaXBzZSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgRGVmaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuLi9EZWZpbmVcIikpO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGxpbmUpIHtcclxuICAgIHZhciBhID0gbGluZS52O1xyXG4gICAgdmFyIGIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIGxpbmUucCk7XHJcbiAgICB2YXIgYyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGEsIGIpO1xyXG4gICAgcmV0dXJuIChNYXRoLmFicyhjKSA8IERlZmluZS5FUFNJTE9OKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBsaW5lKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3ROZWlnaGJvclBvaW50KHBvaW50LCBsaW5lKSB7XHJcbiAgICB2YXIgZCA9IGxpbmUudjtcclxuICAgIHZhciBwID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBsaW5lLnApO1xyXG4gICAgdmFyIG4gPSBkLm5vcm1hbGl6ZTtcclxuICAgIHZhciBkb3QgPSBWZWN0b3IyXzEuZGVmYXVsdC5kb3QobiwgcCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGxpbmUucCwgbi50aW1lcyhkb3QpKTtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHAxLCBwMikge1xyXG4gICAgcmV0dXJuIHAxLmVxdWFsKHAyKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwMSwgcDIpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwMSwgcDIpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcDEuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCByYXkpIHtcclxuICAgIHZhciBhID0gcmF5LnY7XHJcbiAgICB2YXIgYiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgcmF5LnApO1xyXG4gICAgdmFyIGwgPSBhLm1hZ25pdHVkZSAqIGIubWFnbml0dWRlO1xyXG4gICAgdmFyIGQgPSBWZWN0b3IyXzEuZGVmYXVsdC5kb3QoYSwgYik7XHJcbiAgICBsID0gTWF0aC5mbG9vcihsICogMTAwMDAwMCkgLyAxMDAwMDAwO1xyXG4gICAgZCA9IE1hdGguZmxvb3IoZCAqIDEwMDAwMDApIC8gMTAwMDAwMDtcclxuICAgIHJldHVybiAoZCA9PT0gbCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCByYXkpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuZnVuY3Rpb24gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQocG9pbnQsIHJheSkge1xyXG4gICAgdmFyIGQgPSByYXkudjtcclxuICAgIHZhciBwID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCByYXkucCk7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHApIDwgMCkge1xyXG4gICAgICAgIHJldHVybiByYXkucC5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIG4gPSBkLm5vcm1hbGl6ZTtcclxuICAgIHZhciBkb3QgPSBWZWN0b3IyXzEuZGVmYXVsdC5kb3QobiwgcCk7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHJheS5wLCBuLnRpbWVzKGRvdCkpO1xyXG59XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQgPSBnZXROZWFyZXN0TmVpZ2hib3JQb2ludDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIHJlY3QpIHtcclxuICAgIHZhciBpc0NvbnRhaW5YID0gKHJlY3QucDEueCA8PSBwb2ludC54KSAmJiAocG9pbnQueCA8PSByZWN0LnAzLngpO1xyXG4gICAgdmFyIGlzQ29udGFpblkgPSAocmVjdC5wMy55IDw9IHBvaW50LnkpICYmIChwb2ludC55IDw9IHJlY3QucDEueSk7XHJcbiAgICByZXR1cm4gKGlzQ29udGFpblggJiYgaXNDb250YWluWSk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIHJlY3QpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgcmVjdCk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIHNlZ21lbnQpIHtcclxuICAgIHZhciBhID0gc2VnbWVudC52O1xyXG4gICAgdmFyIGIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHNlZ21lbnQucDEpO1xyXG4gICAgdmFyIGFsID0gYS5tYWduaXR1ZGU7XHJcbiAgICB2YXIgYmwgPSBiLm1hZ25pdHVkZTtcclxuICAgIHZhciBsID0gTWF0aC5mbG9vcihhbCAqIGJsICogMTAwMDAwMCkgLyAxMDAwMDAwO1xyXG4gICAgdmFyIGQgPSBNYXRoLmZsb29yKFZlY3RvcjJfMS5kZWZhdWx0LmRvdChhLCBiKSAqIDEwMDAwMDApIC8gMTAwMDAwMDtcclxuICAgIHJldHVybiAoZCA9PT0gbCAmJiBhbCA+IGJsKTtcclxufVxyXG5leHBvcnRzLmlzSGl0ID0gaXNIaXQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChwb2ludCwgc2VnbWVudCkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCBzZWdtZW50KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3ROZWlnaGJvclBvaW50KHBvaW50LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgZCA9IHNlZ21lbnQudjtcclxuICAgIHZhciBwMSA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgc2VnbWVudC5wMSk7XHJcbiAgICBpZiAoVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHAxKSA8IDApIHtcclxuICAgICAgICByZXR1cm4gc2VnbWVudC5wMS5jbG9uZSgpO1xyXG4gICAgfVxyXG4gICAgdmFyIHAyID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBzZWdtZW50LnAyKTtcclxuICAgIGlmICgwIDwgVmVjdG9yMl8xLmRlZmF1bHQuZG90KGQsIHAyKSkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnAyLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgbiA9IGQubm9ybWFsaXplO1xyXG4gICAgdmFyIGRvdCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChuLCBwMSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHNlZ21lbnQucDEsIG4udGltZXMoZG90KSk7XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGdldE5lYXJlc3ROZWlnaGJvclBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgdHJpKSB7XHJcbiAgICB2YXIgZGF0YXMgPSBbXHJcbiAgICAgICAgeyB2MTogdHJpLnYxdG8yLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDEpIH0sXHJcbiAgICAgICAgeyB2MTogdHJpLnYydG8zLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDIpIH0sXHJcbiAgICAgICAgeyB2MTogdHJpLnYzdG8xLCB2MjogVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCB0cmkucDMpIH0sXHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhc18xID0gZGF0YXM7IF9pIDwgZGF0YXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGRhdGFzXzFbX2ldO1xyXG4gICAgICAgIHZhciBjcm9zcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGRhdGEudjEsIGRhdGEudjIpO1xyXG4gICAgICAgIGlmICgwIDwgY3Jvc3MpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCB0cmkpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgdHJpKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRFbGxpcHNlID0gZXhwb3J0cy5Qb2ludEFuZENhcHN1bGUgPSBleHBvcnRzLlBvaW50QW5kVHJpYW5nbGUgPSBleHBvcnRzLlBvaW50QW5kQm94ID0gZXhwb3J0cy5Qb2ludEFuZFJlY3QgPSBleHBvcnRzLlBvaW50QW5kQ2lyY2xlID0gZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBleHBvcnRzLlBvaW50QW5kUmF5ID0gZXhwb3J0cy5Qb2ludEFuZExpbmUgPSBleHBvcnRzLlBvaW50QW5kUG9pbnQgPSB2b2lkIDA7XHJcbnZhciBQb2ludEFuZFBvaW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kUG9pbnRcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUG9pbnQgPSBQb2ludEFuZFBvaW50O1xyXG52YXIgUG9pbnRBbmRMaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kTGluZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRMaW5lID0gUG9pbnRBbmRMaW5lO1xyXG52YXIgUG9pbnRBbmRSYXkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRSYXlcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmF5ID0gUG9pbnRBbmRSYXk7XHJcbnZhciBQb2ludEFuZFNlZ21lbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRTZWdtZW50XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBQb2ludEFuZFNlZ21lbnQ7XHJcbnZhciBQb2ludEFuZENpcmNsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENpcmNsZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRDaXJjbGUgPSBQb2ludEFuZENpcmNsZTtcclxudmFyIFBvaW50QW5kUmVjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFJlY3RcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmVjdCA9IFBvaW50QW5kUmVjdDtcclxudmFyIFBvaW50QW5kQm94ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kQm94XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZEJveCA9IFBvaW50QW5kQm94O1xyXG52YXIgUG9pbnRBbmRUcmlhbmdsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFRyaWFuZ2xlXCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFRyaWFuZ2xlID0gUG9pbnRBbmRUcmlhbmdsZTtcclxudmFyIFBvaW50QW5kQ2Fwc3VsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENhcHN1bGVcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kQ2Fwc3VsZSA9IFBvaW50QW5kQ2Fwc3VsZTtcclxudmFyIFBvaW50QW5kRWxsaXBzZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZEVsbGlwc2VcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kRWxsaXBzZSA9IFBvaW50QW5kRWxsaXBzZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5FUFNJTE9OID0gdm9pZCAwO1xyXG5leHBvcnRzLkVQU0lMT04gPSAwLjAwMDAxO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVXRpbCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi91dGlsXCIpKTtcclxudmFyIExpbmVhciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lYXIoYSwgYikge1xyXG4gICAgICAgIGlmIChhID09PSB2b2lkIDApIHsgYSA9IDA7IH1cclxuICAgICAgICBpZiAoYiA9PT0gdm9pZCAwKSB7IGIgPSAwOyB9XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IGI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2E7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9hID0gVXRpbC51bmlmeVNpZ24odik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcImJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fYjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2IgPSBVdGlsLnVuaWZ5U2lnbih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5meCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB2YXIgX2MgPSB0aGlzLCBhID0gX2MuYSwgYiA9IF9jLmI7XHJcbiAgICAgICAgcmV0dXJuIGEgKiB4ICsgYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRTdGFuZGFyZEZvcm0gPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHRoaXMuYSA9IGEsIHRoaXMuYiA9IGI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pbml0R2VuZXJhbEZvcm0gPSBmdW5jdGlvbiAoQSwgQiwgQykge1xyXG4gICAgICAgIEE7XHJcbiAgICAgICAgQjtcclxuICAgICAgICBDO1xyXG4gICAgICAgIHRoaXMuYSA9IC1BIC8gQjtcclxuICAgICAgICB0aGlzLmIgPSBDIC8gQjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeVNsb3BlQW5kUG9pbnQgPSBmdW5jdGlvbiAoYSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBiID0geSAtIGEgKiB4O1xyXG4gICAgICAgIHRoaXMuYSA9IGE7XHJcbiAgICAgICAgdGhpcy5iID0gYjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRCeTJQb2ludCA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBudW1lID0geTIgLSB5MTtcclxuICAgICAgICB2YXIgZGVubyA9IHgyIC0geDE7XHJcbiAgICAgICAgdmFyIGEgPSBudW1lIC8gZGVubztcclxuICAgICAgICB0aGlzLmluaXRCeVNsb3BlQW5kUG9pbnQoYSwgeDEsIHkxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh0aGlzLmEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMuYikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaXNQZXJwV2l0aCA9IGZ1bmN0aW9uIChsaW5lYXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAobGluZWFyLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5hICogbGluZWFyLmEgPT09IC0xKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTGluZWFyLnByb3RvdHlwZSwgXCJwZXJwU2xvcGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2xvcGUgPSAtKDEgLyB0aGlzLmEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKE51bWJlci5pc0Zpbml0ZShzbG9wZSkpID8gc2xvcGUgOiAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmVhci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwieT1cIiArIHRoaXMuYSArIFwieCtcIiArIHRoaXMuYjtcclxuICAgIH07XHJcbiAgICBMaW5lYXIuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgcG9pbnRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIG51bWUgPSBiLmIgLSBhLmI7XHJcbiAgICAgICAgdmFyIGRlbm8gPSBhLmEgLSBiLmE7XHJcbiAgICAgICAgdmFyIHggPSBudW1lIC8gZGVubztcclxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh4KSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB2YXIgeSA9IGEuZngoeCk7XHJcbiAgICAgICAgcmVzdWx0LmNvdW50ID0gMTtcclxuICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGluZWFyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5lYXI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBNYXRyaXgzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1hdHJpeDModikge1xyXG4gICAgICAgIHRoaXMudiA9IHYuc2xpY2UoKTtcclxuICAgIH1cclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBNYXRyaXgzLnRyYW5zbGF0aW9uKHR4LCB0eSkpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBNYXRyaXgzLnJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHN4LCBzeSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgzLm11bHRpcGx5KHRoaXMsIE1hdHJpeDMuc2NhbGluZyhzeCwgc3kpKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDMubXVsdGlwbHkodGhpcywgbSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMucHJvdG90eXBlLCBcImRldGVybWluYW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDMuZGV0ZXJtaW5hbnQodGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4My5wcm90b3R5cGUsIFwidHJhbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4My50cmFucyh0aGlzLnYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52O1xyXG4gICAgICAgIHJldHVybiBcIltcXG4gIFwiICsgdlswXSArIFwiLCBcIiArIHZbMV0gKyBcIiwgXCIgKyB2WzJdICsgXCIsXFxuICBcIiArIHZbM10gKyBcIiwgXCIgKyB2WzRdICsgXCIsIFwiICsgdls1XSArIFwiLFxcbiAgXCIgKyB2WzZdICsgXCIsIFwiICsgdls3XSArIFwiLCBcIiArIHZbOF0gKyBcIixcXG5dXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDMsIFwiaWRlbnRpdHlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4MywgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0cml4My50cmFuc2xhdGlvbiA9IGZ1bmN0aW9uICh0eCwgdHkpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICAxLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLFxyXG4gICAgICAgICAgICB0eCwgdHksIDFcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgYywgLXMsIDAsXHJcbiAgICAgICAgICAgIHMsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5zY2FsaW5nID0gZnVuY3Rpb24gKHN4LCBzeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLm11bHRpcGx5ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgbSA9IE1hdHJpeDMuemVybztcclxuICAgICAgICBmb3IgKHZhciByID0gMDsgciA8IDM7ICsrcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IDM7ICsrYykge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCAzOyArK24pIHtcclxuICAgICAgICAgICAgICAgICAgICBtLnZbciAqIDMgKyBjXSArPSBhLnZbciAqIDMgKyBuXSAqIGIudltuICogMyArIGNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvamVjdGlvbiA9IGZ1bmN0aW9uICh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdmFyIHggPSAxIC8gd2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSAxIC8gaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIHgsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHksIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5kZXRlcm1pbmFudCA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgdmFyIG0wID0gbVswXSwgbTEgPSBtWzFdLCBtMiA9IG1bMl0sIG0zID0gbVszXSwgbTQgPSBtWzRdLCBtNSA9IG1bNV0sIG02ID0gbVs2XSwgbTcgPSBtWzddLCBtOCA9IG1bOF07XHJcbiAgICAgICAgcmV0dXJuIChtMCAqIG00ICogbTggKyBtMSAqIG01ICogbTYgKyBtMiAqIG0zICogbTcpXHJcbiAgICAgICAgICAgIC0gKG0yICogbTQgKiBtNiArIG01ICogbTcgKiBtMCArIG04ICogbTEgKiBtMyk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My50cmFucyA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgbVswXSwgbVszXSwgbVs2XSxcclxuICAgICAgICAgICAgbVsxXSwgbVs0XSwgbVs3XSxcclxuICAgICAgICAgICAgbVsyXSwgbVs1XSwgbVs4XVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMuY29mYWN0b3IgPSBmdW5jdGlvbiAociwgYywgbSkge1xyXG4gICAgICAgIHZhciBhID0gTWF0aC5wb3coKC0xKSwgKHIgKyBjKSk7XHJcbiAgICAgICAgdmFyIGQgPSBtWzBdICogbVszXSAtIG1bMV0gKiBtWzJdO1xyXG4gICAgICAgIHJldHVybiBhICogZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0cml4MztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4MztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeDNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXgzXCIpKTtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IzXCIpKTtcclxudmFyIE1hdHJpeDQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0cml4NCh2KSB7XHJcbiAgICAgICAgdGhpcy52ID0gdi5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgTWF0cml4NC5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHR4LCB0eSwgdHopIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnRyYW5zbGF0aW9uKHR4LCB0eSwgdHopKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS54Um90YXRlID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQueFJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnlSb3RhdGUgPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC55Um90YXRpb24ocmFkaWFuKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUuelJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnpSb3RhdGlvbihyYWRpYW4pKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS5zY2FsZSA9IGZ1bmN0aW9uIChzeCwgc3ksIHN6KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC5zY2FsaW5nKHN4LCBzeSwgc3opKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS5tdWx0aXBseSA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgbSk7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQucHJvdG90eXBlLCBcImludmVyc2VcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4NC5pbnZlcnNlKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LnByb3RvdHlwZSwgXCJkZXRlcm1pbmFudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXg0LmRldGVybWluYW50KHRoaXMudik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQucHJvdG90eXBlLCBcInRyYW5zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDQudHJhbnModGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdiA9IHRoaXMudjtcclxuICAgICAgICByZXR1cm4gXCJbXFxuICBcIiArIHZbMF0gKyBcIiwgXCIgKyB2WzFdICsgXCIsIFwiICsgdlsyXSArIFwiLCBcIiArIHZbM10gKyBcIlxcbiAgXCIgKyB2WzRdICsgXCIsIFwiICsgdls1XSArIFwiLCBcIiArIHZbNl0gKyBcIiwgXCIgKyB2WzddICsgXCJcXG4gIFwiICsgdls4XSArIFwiLCBcIiArIHZbOV0gKyBcIiwgXCIgKyB2WzEwXSArIFwiLCBcIiArIHZbMTFdICsgXCJcXG4gIFwiICsgdlsxMl0gKyBcIiwgXCIgKyB2WzEzXSArIFwiLCBcIiArIHZbMTRdICsgXCIsIFwiICsgdlsxNV0gKyBcIlxcbl1cIjtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NCwgXCJpZGVudGl0eVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NCwgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDQudHJhbnNsYXRpb24gPSBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgdHosIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC54Um90YXRpb24gPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBjLCBzLCAwLFxyXG4gICAgICAgICAgICAwLCAtcywgYywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnlSb3RhdGlvbiA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGMsIDAsIC1zLCAwLFxyXG4gICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICBzLCAwLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuelJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgYywgLXMsIDAsIDAsXHJcbiAgICAgICAgICAgIHMsIGMsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5zY2FsaW5nID0gZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBzeCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgc3ksIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIHN6LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBtID0gTWF0cml4NC56ZXJvO1xyXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgNDsgKytyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgNDsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDQ7ICsrbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG0udltyICogNCArIGNdICs9IGEudltyICogNCArIG5dICogYi52W24gKiA0ICsgY107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5vcnRob2dyYXBoaWMgPSBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIHRvcCwgYm90dG9tLCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgdyA9IHJpZ2h0IC0gbGVmdDtcclxuICAgICAgICB2YXIgaCA9IGJvdHRvbSAtIHRvcDtcclxuICAgICAgICB2YXIgZCA9IGZhciAtIG5lYXI7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgMiAvIHcsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDIgLyBoLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAyIC8gZCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnBlcnNwZWN0aXZlID0gZnVuY3Rpb24gKGZvdlksIGFzcGVjdCwgbmVhciwgZmFyKSB7XHJcbiAgICAgICAgdmFyIGYgPSBNYXRoLnRhbihNYXRoLlBJICogMC41IC0gMC41ICogZm92WSk7XHJcbiAgICAgICAgdmFyIHJhbmdlSW52ID0gMS4wIC8gKGZhciAtIG5lYXIpO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIGYgLyBhc3BlY3QsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGYsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIChmYXIgKyBuZWFyKSAqIHJhbmdlSW52LCAxLFxyXG4gICAgICAgICAgICAwLCAwLCAtMiAqIG5lYXIgKiBmYXIgKiByYW5nZUludiwgMCxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LmRldGVybWluYW50ID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgbTAgPSBtWzBdLCBtMSA9IG1bMV0sIG0yID0gbVsyXSwgbTMgPSBtWzNdLCBtNCA9IG1bNF0sIG01ID0gbVs1XSwgbTYgPSBtWzZdLCBtNyA9IG1bN10sIG04ID0gbVs4XSwgbTkgPSBtWzldLCBtMTAgPSBtWzEwXSwgbTExID0gbVsxMV0sIG0xMiA9IG1bMTJdLCBtMTMgPSBtWzEzXSwgbTE0ID0gbVsxNF0sIG0xNSA9IG1bMTVdO1xyXG4gICAgICAgIHZhciB0MSA9IG0wICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNSwgbTYsIG03LFxyXG4gICAgICAgICAgICBtOSwgbTEwLCBtMTEsXHJcbiAgICAgICAgICAgIG0xMywgbTE0LCBtMTUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIHQyID0gLW0xICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNCwgbTYsIG03LFxyXG4gICAgICAgICAgICBtOCwgbTEwLCBtMTEsXHJcbiAgICAgICAgICAgIG0xMiwgbTE0LCBtMTUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIHQzID0gbTIgKiBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChbXHJcbiAgICAgICAgICAgIG00LCBtNSwgbTcsXHJcbiAgICAgICAgICAgIG04LCBtOSwgbTExLFxyXG4gICAgICAgICAgICBtMTIsIG0xMywgbTE1LFxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHZhciB0NCA9IC1tMyAqIE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KFtcclxuICAgICAgICAgICAgbTQsIG01LCBtNixcclxuICAgICAgICAgICAgbTgsIG05LCBtMTAsXHJcbiAgICAgICAgICAgIG0xMiwgbTEzLCBtMTQsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgcmV0dXJuIHQxICsgdDIgKyB0MyArIHQ0O1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQudHJhbnMgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIG1bMF0sIG1bNF0sIG1bOF0sIG1bMTJdLFxyXG4gICAgICAgICAgICBtWzFdLCBtWzVdLCBtWzldLCBtWzEzXSxcclxuICAgICAgICAgICAgbVsyXSwgbVs2XSwgbVsxMF0sIG1bMTRdLFxyXG4gICAgICAgICAgICBtWzNdLCBtWzddLCBtWzExXSwgbVsxNV0sXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5pbnZlcnNlID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgX2EgPSBtLnYsIG0wID0gX2FbMF0sIG0xID0gX2FbMV0sIG0yID0gX2FbMl0sIG0zID0gX2FbM10sIG00ID0gX2FbNF0sIG01ID0gX2FbNV0sIG02ID0gX2FbNl0sIG03ID0gX2FbN10sIG04ID0gX2FbOF0sIG05ID0gX2FbOV0sIG0xMCA9IF9hWzEwXSwgbTExID0gX2FbMTFdLCBtMTIgPSBfYVsxMl0sIG0xMyA9IF9hWzEzXSwgbTE0ID0gX2FbMTRdLCBtMTUgPSBfYVsxNV07XHJcbiAgICAgICAgdmFyIGQgPSAxLjAgLyBNYXRyaXg0LmRldGVybWluYW50KG0udik7XHJcbiAgICAgICAgdmFyIGMxMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDEsIDEsIFttNSwgbTYsIG03LCBtOSwgbTEwLCBtMTEsIG0xMywgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzEyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgMiwgW200LCBtNiwgbTcsIG04LCBtMTAsIG0xMSwgbTEyLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMTMgPSBkICogTWF0cml4NC5jb2ZhY3RvcigxLCAzLCBbbTQsIG01LCBtNywgbTgsIG05LCBtMTEsIG0xMiwgbTEzLCBtMTVdKTtcclxuICAgICAgICB2YXIgYzE0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgNCwgW200LCBtNSwgbTYsIG04LCBtOSwgbTEwLCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGMyMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDIsIDEsIFttMSwgbTIsIG0zLCBtOSwgbTEwLCBtMTEsIG0xMywgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzIyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgMiwgW20wLCBtMiwgbTMsIG04LCBtMTAsIG0xMSwgbTEyLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMjMgPSBkICogTWF0cml4NC5jb2ZhY3RvcigyLCAzLCBbbTAsIG0xLCBtMywgbTgsIG05LCBtMTEsIG0xMiwgbTEzLCBtMTVdKTtcclxuICAgICAgICB2YXIgYzI0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgNCwgW20wLCBtMSwgbTIsIG04LCBtOSwgbTEwLCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGMzMSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDEsIFttMSwgbTIsIG0zLCBtNSwgbTYsIG03LCBtMTMsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzMiA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDIsIFttMCwgbTIsIG0zLCBtNCwgbTYsIG03LCBtMTIsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzMyA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDMsIFttMCwgbTEsIG0zLCBtNCwgbTUsIG03LCBtMTIsIG0xMywgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMzNCA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDMsIDQsIFttMCwgbTEsIG0yLCBtNCwgbTUsIG02LCBtMTIsIG0xMywgbTE0XSk7XHJcbiAgICAgICAgdmFyIGM0MSA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDQsIDEsIFttMSwgbTIsIG0zLCBtNSwgbTYsIG03LCBtOSwgbTEwLCBtMTFdKTtcclxuICAgICAgICB2YXIgYzQyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgMiwgW20wLCBtMiwgbTMsIG00LCBtNiwgbTcsIG04LCBtMTAsIG0xMV0pO1xyXG4gICAgICAgIHZhciBjNDMgPSBkICogTWF0cml4NC5jb2ZhY3Rvcig0LCAzLCBbbTAsIG0xLCBtMywgbTQsIG01LCBtNywgbTgsIG05LCBtMTFdKTtcclxuICAgICAgICB2YXIgYzQ0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgNCwgW20wLCBtMSwgbTIsIG00LCBtNSwgbTYsIG04LCBtOSwgbTEwXSk7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQudHJhbnMoW1xyXG4gICAgICAgICAgICBjMTEsIGMxMiwgYzEzLCBjMTQsXHJcbiAgICAgICAgICAgIGMyMSwgYzIyLCBjMjMsIGMyNCxcclxuICAgICAgICAgICAgYzMxLCBjMzIsIGMzMywgYzM0LFxyXG4gICAgICAgICAgICBjNDEsIGM0MiwgYzQzLCBjNDQsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5pbnZlcnNlMiA9IGZ1bmN0aW9uIChtYXQpIHtcclxuICAgICAgICB2YXIgbSA9IG1hdC52O1xyXG4gICAgICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTAyID0gbVswICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgbTExID0gbVsxICogNCArIDFdO1xyXG4gICAgICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgbTIwID0gbVsyICogNCArIDBdO1xyXG4gICAgICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgbTIzID0gbVsyICogNCArIDNdO1xyXG4gICAgICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTMyID0gbVszICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xyXG4gICAgICAgIHZhciB0bXBfMSA9IG0zMiAqIG0yMztcclxuICAgICAgICB2YXIgdG1wXzIgPSBtMTIgKiBtMzM7XHJcbiAgICAgICAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xyXG4gICAgICAgIHZhciB0bXBfNCA9IG0xMiAqIG0yMztcclxuICAgICAgICB2YXIgdG1wXzUgPSBtMjIgKiBtMTM7XHJcbiAgICAgICAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xyXG4gICAgICAgIHZhciB0bXBfNyA9IG0zMiAqIG0wMztcclxuICAgICAgICB2YXIgdG1wXzggPSBtMDIgKiBtMjM7XHJcbiAgICAgICAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xyXG4gICAgICAgIHZhciB0bXBfMTAgPSBtMDIgKiBtMTM7XHJcbiAgICAgICAgdmFyIHRtcF8xMSA9IG0xMiAqIG0wMztcclxuICAgICAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xyXG4gICAgICAgIHZhciB0bXBfMTMgPSBtMzAgKiBtMjE7XHJcbiAgICAgICAgdmFyIHRtcF8xNCA9IG0xMCAqIG0zMTtcclxuICAgICAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xyXG4gICAgICAgIHZhciB0bXBfMTYgPSBtMTAgKiBtMjE7XHJcbiAgICAgICAgdmFyIHRtcF8xNyA9IG0yMCAqIG0xMTtcclxuICAgICAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xyXG4gICAgICAgIHZhciB0bXBfMTkgPSBtMzAgKiBtMDE7XHJcbiAgICAgICAgdmFyIHRtcF8yMCA9IG0wMCAqIG0yMTtcclxuICAgICAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xyXG4gICAgICAgIHZhciB0bXBfMjIgPSBtMDAgKiBtMTE7XHJcbiAgICAgICAgdmFyIHRtcF8yMyA9IG0xMCAqIG0wMTtcclxuICAgICAgICB2YXIgdDAgPSAodG1wXzAgKiBtMTEgKyB0bXBfMyAqIG0yMSArIHRtcF80ICogbTMxKSAtXHJcbiAgICAgICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xyXG4gICAgICAgIHZhciB0MSA9ICh0bXBfMSAqIG0wMSArIHRtcF82ICogbTIxICsgdG1wXzkgKiBtMzEpIC1cclxuICAgICAgICAgICAgKHRtcF8wICogbTAxICsgdG1wXzcgKiBtMjEgKyB0bXBfOCAqIG0zMSk7XHJcbiAgICAgICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cclxuICAgICAgICAgICAgKHRtcF8zICogbTAxICsgdG1wXzYgKiBtMTEgKyB0bXBfMTEgKiBtMzEpO1xyXG4gICAgICAgIHZhciB0MyA9ICh0bXBfNSAqIG0wMSArIHRtcF84ICogbTExICsgdG1wXzExICogbTIxKSAtXHJcbiAgICAgICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcclxuICAgICAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgZCAqIHQwLFxyXG4gICAgICAgICAgICBkICogdDEsXHJcbiAgICAgICAgICAgIGQgKiB0MixcclxuICAgICAgICAgICAgZCAqIHQzLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzAgKiBtMDAgKyB0bXBfNyAqIG0yMCArIHRtcF84ICogbTMwKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzEgKiBtMDAgKyB0bXBfNiAqIG0yMCArIHRtcF85ICogbTMwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xMiAqIG0xMyArIHRtcF8xNSAqIG0yMyArIHRtcF8xNiAqIG0zMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xMyAqIG0xMyArIHRtcF8xNCAqIG0yMyArIHRtcF8xNyAqIG0zMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xNyAqIG0wMyArIHRtcF8yMCAqIG0xMyArIHRtcF8yMyAqIG0yMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xNiAqIG0wMyArIHRtcF8yMSAqIG0xMyArIHRtcF8yMiAqIG0yMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xOCAqIG0xMiArIHRtcF8yMyAqIG0zMiArIHRtcF8xNSAqIG0wMikgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8yMiAqIG0zMiArIHRtcF8xNCAqIG0wMiArIHRtcF8xOSAqIG0xMikpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuY29mYWN0b3IgPSBmdW5jdGlvbiAociwgYywgbSkge1xyXG4gICAgICAgIHZhciBhID0gTWF0aC5wb3coKC0xKSwgKHIgKyBjKSk7XHJcbiAgICAgICAgdmFyIGQgPSBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChtKTtcclxuICAgICAgICByZXR1cm4gYSAqIGQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5sb29rQXQgPSBmdW5jdGlvbiAocG9zaXRpb24sIHRhcmdldCwgdXApIHtcclxuICAgICAgICB2YXIgeiA9IFZlY3RvcjNfMS5kZWZhdWx0LnN1Yih0YXJnZXQsIHBvc2l0aW9uKS5ub3JtYWxpemVkO1xyXG4gICAgICAgIHZhciB4ID0gVmVjdG9yM18xLmRlZmF1bHQuY3Jvc3ModXAsIHopO1xyXG4gICAgICAgIHZhciB5ID0gVmVjdG9yM18xLmRlZmF1bHQuY3Jvc3MoeiwgeCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgeC54LCB4LnksIHgueiwgMCxcclxuICAgICAgICAgICAgeS54LCB5LnksIHkueiwgMCxcclxuICAgICAgICAgICAgei54LCB6LnksIHoueiwgMCxcclxuICAgICAgICAgICAgcG9zaXRpb24ueCwgcG9zaXRpb24ueSwgcG9zaXRpb24ueiwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTWF0cml4NDtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gTWF0cml4NDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkLCBiKSB7XHJcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgICAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgICAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVHJpYW5nbGUgPSBleHBvcnRzLkJveCA9IGV4cG9ydHMuUmVjdCA9IGV4cG9ydHMuQ2Fwc3VsZSA9IGV4cG9ydHMuRWxsaXBzZSA9IGV4cG9ydHMuQ2lyY2xlID0gZXhwb3J0cy5TZWdtZW50ID0gZXhwb3J0cy5SYXkgPSBleHBvcnRzLkxpbmUgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgTGluZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBMaW5lKHAsIHYpIHtcclxuICAgICAgICB0aGlzLl9wID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHAueCwgcC55KTtcclxuICAgICAgICB0aGlzLl92ID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHYueCwgdi55KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lLnByb3RvdHlwZSwgXCJ2XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Y7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIExpbmUucHJvdG90eXBlLnBvaW50ID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMucCwgdGhpcy52Lm5vcm1hbGl6ZS50aW1lcyhmKSk7XHJcbiAgICB9O1xyXG4gICAgTGluZS5wcm90b3R5cGUucG9pbnRzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgICAgIHZhciBoYWxmTGVuZ3RoID0gbGVuZ3RoIC8gMjtcclxuICAgICAgICB2YXIgcDEgPSB0aGlzLnBvaW50KC1oYWxmTGVuZ3RoKTtcclxuICAgICAgICB2YXIgcDIgPSB0aGlzLnBvaW50KGhhbGZMZW5ndGgpO1xyXG4gICAgICAgIHJldHVybiBbcDEueCwgcDEueSwgcDIueCwgcDIueV07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIExpbmU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuTGluZSA9IExpbmU7XHJcbnZhciBSYXkgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xyXG4gICAgX19leHRlbmRzKFJheSwgX3N1cGVyKTtcclxuICAgIGZ1bmN0aW9uIFJheSgpIHtcclxuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XHJcbiAgICB9XHJcbiAgICBSYXkucHJvdG90eXBlLnBvaW50ID0gZnVuY3Rpb24gKGYpIHtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKHRoaXMucCwgdGhpcy52Lm5vcm1hbGl6ZS50aW1lcyhNYXRoLmFicyhmKSkpO1xyXG4gICAgfTtcclxuICAgIFJheS5wcm90b3R5cGUucG9pbnRzID0gZnVuY3Rpb24gKGxlbmd0aCkge1xyXG4gICAgICAgIHZhciBwMSA9IHRoaXMucDtcclxuICAgICAgICB2YXIgcDIgPSB0aGlzLnBvaW50KGxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIFtwMS54LCBwMS55LCBwMi54LCBwMi55XTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmF5O1xyXG59KExpbmUpKTtcclxuZXhwb3J0cy5SYXkgPSBSYXk7XHJcbnZhciBTZWdtZW50ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFNlZ21lbnQocCwgdikge1xyXG4gICAgICAgIHRoaXMuX3AgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQocC54LCBwLnkpO1xyXG4gICAgICAgIHRoaXMuX3YgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodi54LCB2LnkpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZWdtZW50LnByb3RvdHlwZSwgXCJwMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQodGhpcy5fcCwgdGhpcy52KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInZcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInBvaW50c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHMgPSBfYS5wMSwgZSA9IF9hLnAyO1xyXG4gICAgICAgICAgICByZXR1cm4gW3MueCwgcy55LCBlLngsIGUueV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFNlZ21lbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydHMuU2VnbWVudCA9IFNlZ21lbnQ7XHJcbnZhciBDaXJjbGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2lyY2xlKHAsIHIpIHtcclxuICAgICAgICB0aGlzLl9wID0gcC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuX3IgPSByO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENpcmNsZS5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2lyY2xlLnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIENpcmNsZTtcclxufSgpKTtcclxuZXhwb3J0cy5DaXJjbGUgPSBDaXJjbGU7XHJcbnZhciBFbGxpcHNlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEVsbGlwc2UocCwgcngsIHJ5LCBhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuX3JhZCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcCA9IHAuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLl9yID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHJ4LCByeSk7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcInJhZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yYWQ7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGxpcHNlLnByb3RvdHlwZSwgXCJhbmdsZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnJhZDJkZWcodGhpcy5fcmFkKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3JhZCA9IFV0aWwuZGVnMnJhZCh2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEVsbGlwc2U7XHJcbn0oKSk7XHJcbmV4cG9ydHMuRWxsaXBzZSA9IEVsbGlwc2U7XHJcbnZhciBDYXBzdWxlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENhcHN1bGUocywgcikge1xyXG4gICAgICAgIHRoaXMuX3MgPSBzO1xyXG4gICAgICAgIHRoaXMuX3IgPSByO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcHN1bGUucHJvdG90eXBlLCBcInNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fczsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KENhcHN1bGUucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IgPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQ2Fwc3VsZTtcclxufSgpKTtcclxuZXhwb3J0cy5DYXBzdWxlID0gQ2Fwc3VsZTtcclxudmFyIFJlY3QgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUmVjdChwLCB3LCBoKSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IHA7XHJcbiAgICAgICAgdGhpcy5fdyA9IHc7XHJcbiAgICAgICAgdGhpcy5faCA9IGg7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl93OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fdyA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJoXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2g7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9oID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucC5jbG9uZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5wLnggKyB0aGlzLncsIHRoaXMucC55KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMucC54ICsgdGhpcy53LCB0aGlzLnAueSAtIHRoaXMuaCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInA0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLnAueCwgdGhpcy5wLnkgLSB0aGlzLmgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBSZWN0O1xyXG59KCkpO1xyXG5leHBvcnRzLlJlY3QgPSBSZWN0O1xyXG52YXIgQm94ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEJveChwLCByLCBhbmdsZSkge1xyXG4gICAgICAgIHRoaXMuX3JhZCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcCA9IHA7XHJcbiAgICAgICAgdGhpcy5fciA9IHI7XHJcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3I7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInJ4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueDsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IueCA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInJ5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3IueTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IueSA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcIndcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5yeCAqIDI7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcImhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5yeSAqIDI7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcImFuZ2xlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwucmFkMmRlZyh0aGlzLl9yYWQpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fcmFkID0gVXRpbC5kZWcycmFkKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoLXRoaXMuX3IueCwgdGhpcy5fci55KS5yb3RhdGUodGhpcy5fcmFkKS5hZGQodGhpcy5wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5fci54LCB0aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInAzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLl9yLngsIC10aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInA0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgtdGhpcy5fci54LCAtdGhpcy5fci55KS5yb3RhdGUodGhpcy5fcmFkKS5hZGQodGhpcy5wKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ2MXRvMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMiwgdGhpcy5wMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwidjJ0bzNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDMsIHRoaXMucDIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInYzdG80XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnA0LCB0aGlzLnAzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ2NHRvMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMSwgdGhpcy5wNCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIEJveDtcclxufSgpKTtcclxuZXhwb3J0cy5Cb3ggPSBCb3g7XHJcbnZhciBUcmlhbmdsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmlhbmdsZShwMSwgcDIsIHAzKSB7XHJcbiAgICAgICAgdGhpcy5fcDEgPSBwMTtcclxuICAgICAgICB0aGlzLl9wMiA9IHAyO1xyXG4gICAgICAgIHRoaXMuX3AzID0gcDM7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3AxOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3AyOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInAzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3AzOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInBvaW50c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wMS54LCB0aGlzLl9wMS55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcDIueCwgdGhpcy5fcDIueSxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3AzLngsIHRoaXMuX3AzLnksXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJ2MXRvMlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMiwgdGhpcy5wMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJ2MnRvM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMywgdGhpcy5wMik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlLnByb3RvdHlwZSwgXCJ2M3RvMVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMSwgdGhpcy5wMyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFRyaWFuZ2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLlRyaWFuZ2xlID0gVHJpYW5nbGU7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgUXVhZHJhdGljID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFF1YWRyYXRpYygpIHtcclxuICAgICAgICB0aGlzLl9hID0gMDtcclxuICAgICAgICB0aGlzLl9iID0gMDtcclxuICAgICAgICB0aGlzLl9jID0gMDtcclxuICAgICAgICB0aGlzLl9hID0gdGhpcy5fYiA9IHRoaXMuX2MgPSAwO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnVuaWZ5U2lnbih0aGlzLl9hKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2EgPSBOdW1iZXIodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC51bmlmeVNpZ24odGhpcy5fYik7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9iID0gTnVtYmVyKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJjXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwudW5pZnlTaWduKHRoaXMuX2MpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYyA9IE51bWJlcih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBVdGlsLnVuaWZ5U2lnbihRdWFkcmF0aWMuY2FsY1BfQnlfYWIodGhpcy5hLCB0aGlzLmIpKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwudW5pZnlTaWduKFF1YWRyYXRpYy5jYWxjUV9CeV9hYmModGhpcy5hLCB0aGlzLmIsIHRoaXMuYykpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEdlbmVyYWxGb3JtID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICB0aGlzLl9hID0gYSwgdGhpcy5fYiA9IGIsIHRoaXMuX2MgPSBjO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdFN0YW5kYXJkRm9ybSA9IGZ1bmN0aW9uIChhLCBwLCBxKSB7XHJcbiAgICAgICAgdGhpcy5fYSA9IGE7XHJcbiAgICAgICAgdGhpcy5fYiA9IFF1YWRyYXRpYy5jYWxjQl9CeV9hcChhLCBwKTtcclxuICAgICAgICB0aGlzLl9jID0gUXVhZHJhdGljLmNhbGNDX0J5X3BxKGEsIHAsIHEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEZhY3Rvcml6YXRpb25Gb3JtID0gZnVuY3Rpb24gKGEsIHMsIHQpIHtcclxuICAgICAgICB0aGlzLl9hID0gYTtcclxuICAgICAgICB0aGlzLl9iID0gUXVhZHJhdGljLmNhbGNCX0J5X2FzdChhLCBzLCB0KTtcclxuICAgICAgICB0aGlzLl9jID0gUXVhZHJhdGljLmNhbGNDX0J5X2FzdChhLCBzLCB0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLmluaXRCeUFwZXhBbmRQYXNzUG9pbnQgPSBmdW5jdGlvbiAocCwgcSwgeCwgeSkge1xyXG4gICAgICAgIHZhciBhID0gUXVhZHJhdGljLmNhbGNBX0J5X3BxeHkocCwgcSwgeCwgeSk7XHJcbiAgICAgICAgdGhpcy5pbml0U3RhbmRhcmRGb3JtKGEsIHAsIHEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEJ5QXhpc0FuZDJQYXNzUG9pbnRzID0gZnVuY3Rpb24gKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBhID0gUXVhZHJhdGljLmNhbGNBX0J5X2F4aXhYX3gxeTFfeDJ5MihheGlzWCwgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgICAgIHZhciBxID0gUXVhZHJhdGljLmNhbGNRX0J5X2F4aXhYX3gxeTFfeDJ5MihheGlzWCwgeDEsIHkxLCB4MiwgeTIpO1xyXG4gICAgICAgIHZhciBwID0gYXhpc1g7XHJcbiAgICAgICAgdGhpcy5pbml0U3RhbmRhcmRGb3JtKGEsIHAsIHEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEJ5M1Bhc3NQb2ludHMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBhID0gUXVhZHJhdGljLmNhbGNBX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBiID0gUXVhZHJhdGljLmNhbGNCX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBjID0gUXVhZHJhdGljLmNhbGNDX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHRoaXMuaW5pdEdlbmVyYWxGb3JtKGEsIGIsIGMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuZnggPSBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIHAgPSBfZC5wLCBxID0gX2QucTtcclxuICAgICAgICByZXR1cm4gYSAqICgoeCAtIHApICogKHggLSBwKSkgKyBxO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuZ2V0UG9pbnRzID0gZnVuY3Rpb24gKGZyb21YLCB0b1gsIHN0ZXApIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgcCA9IFtdO1xyXG4gICAgICAgIHRvWCArPSBzdGVwICogMC4xO1xyXG4gICAgICAgIGZvciAodmFyIHggPSBmcm9tWDsgeCA8PSB0b1g7IHggKz0gc3RlcCkge1xyXG4gICAgICAgICAgICBwLnB1c2goeCwgdGhpcy5meCh4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuZ2V0UG9pbnRzT2ZTbG9wZUF0WVRhbmdlbnQgPSBmdW5jdGlvbiAoZnJvbVgsIHRvWCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIHZhciB5MSA9IHRoaXMuYiAqIGZyb21YICsgdGhpcy5jO1xyXG4gICAgICAgIHZhciB5MiA9IHRoaXMuYiAqIHRvWCArIHRoaXMuYztcclxuICAgICAgICByZXR1cm4gW2Zyb21YLCB5MSwgdG9YLCB5Ml07XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiYXBleFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHg6IHRoaXMucCwgeTogdGhpcy5xIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiYXhpc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiaXNJbnZhbGlkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICFRdWFkcmF0aWMuaXNWYWxpZEEodGhpcy5hKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJoYXNBcGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgcCA9IF9kLnAsIHEgPSBfZC5xO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmhhc0FwZXgocCwgcSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwibWF4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKDAgPD0gdGhpcy5hKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBleC55O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcIm1pblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmEgPD0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwZXgueTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJkaXNjcmltaW5hbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmRpc2NyaW1pbmFudChhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJzb2x1dGlvblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuc29sdXRpb24oYSwgYiwgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiaXNQb3NpdGl2ZURlZmluaXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5pc1Bvc2l0aXZlRGVmaW5pdGUoYSwgYiwgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiaXNOZWdhdGl2ZURlZmluaXRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5pc05lZ2F0aXZlRGVmaW5pdGUoYSwgYiwgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mU2xvcGUgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIuOBquOBl1wiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmEudG9GaXhlZChmaXhlZCk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mQXhpcyA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICghdGhpcy5oYXNBcGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gXCLjgarjgZdcIjtcclxuICAgICAgICB2YXIgYXhpcyA9IHRoaXMuYXhpcy50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICByZXR1cm4gXCJ4PVwiICsgYXhpcztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZBcGV4ID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FwZXgpXHJcbiAgICAgICAgICAgIHJldHVybiBcIuOBquOBl1wiO1xyXG4gICAgICAgIHZhciB4ID0gdGhpcy5hcGV4LngudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIHkgPSB0aGlzLmFwZXgueS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICByZXR1cm4gXCIoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkxhdGV4QVBRID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmEudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIHAgPSB0aGlzLnAudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgdmFyIHEgPSB0aGlzLnEudG9GaXhlZChmaXhlZCk7XHJcbiAgICAgICAgcmV0dXJuIFwiJCR5PVwiICsgYSArIFwiKHggLSAoXCIgKyBwICsgXCIpKV4yICsgKFwiICsgcSArIFwiKSQkXCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mTGF0ZXhBQkMgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIjtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgYiA9IHRoaXMuYi50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgYyA9IHRoaXMuYy50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICByZXR1cm4gXCIkJHk9XCIgKyBhICsgXCJ4XjIgKyAoXCIgKyBiICsgXCIpeCArIChcIiArIGMgKyBcIikkJFwiO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdBYm91dFNoYXBlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hO1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgaWYgKGEgPCAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIuS4iuOBq+WHuFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiL44Gr5Ye4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYywgcCA9IF9kLnAsIHEgPSBfZC5xO1xyXG4gICAgICAgIHJldHVybiBcInthOlwiICsgYSArIFwiLCBiOlwiICsgYiArIFwiLCBjOlwiICsgYyArIFwiLCBwOlwiICsgcCArIFwiLCBxOlwiICsgcSArIFwifVwiO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjUF9CeV9hYiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIC1iIC8gKDIgKiBhKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY1FfQnlfYWJjID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICByZXR1cm4gLSgoTWF0aC5wb3coYiwgMikpIC0gKDQgKiBhICogYykpIC8gKDQgKiBhKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0JfQnlfYXAgPSBmdW5jdGlvbiAoYSwgcCkge1xyXG4gICAgICAgIHJldHVybiAtMiAqIGEgKiBwO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQl9CeV9hc3QgPSBmdW5jdGlvbiAoYSwgcywgdCkge1xyXG4gICAgICAgIHJldHVybiAoLWEgKiB0KSArICgtYSAqIHMpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQ19CeV9wcSA9IGZ1bmN0aW9uIChhLCBwLCBxKSB7XHJcbiAgICAgICAgcmV0dXJuIGEgKiBNYXRoLnBvdyhwLCAyKSArIHE7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNDX0J5X2FzdCA9IGZ1bmN0aW9uIChhLCBzLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIGEgKiBzICogdDtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0FfQnlfcHF4eSA9IGZ1bmN0aW9uIChwLCBxLCB4LCB5KSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5IC0gcTtcclxuICAgICAgICB2YXIgZGVubyA9IE1hdGgucG93KCh4IC0gcCksIDIpO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0FfQnlfYXhpeFhfeDF5MV94MnkyID0gZnVuY3Rpb24gKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBudW1lID0geTEgLSB5MjtcclxuICAgICAgICB2YXIgZGVubyA9IChNYXRoLnBvdygoeDEgLSBheGlzWCksIDIpKSAtIChNYXRoLnBvdygoeDIgLSBheGlzWCksIDIpKTtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNRX0J5X2F4aXhYX3gxeTFfeDJ5MiA9IGZ1bmN0aW9uIChheGlzWCwgeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuY2FsY0FfQnlfYXhpeFhfeDF5MV94MnkyKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdmFyIHEgPSB5MSAtIChhICogTWF0aC5wb3coKHgxIC0gYXhpc1gpLCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIHE7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNBX0J5X3gxeTFfeDJ5Ml94M3kzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgbnVtZSA9ICgoeTEgLSB5MikgKiAoeDEgLSB4MykgLSAoeTEgLSB5MykgKiAoeDEgLSB4MikpO1xyXG4gICAgICAgIHZhciBkZW5vID0gKCh4MSAtIHgyKSAqICh4MSAtIHgzKSAqICh4MiAtIHgzKSk7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQl9CeV94MXkxX3gyeTJfeDN5MyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmNhbGNBX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBudW1lID0geTEgLSB5MiAtIChhICogKE1hdGgucG93KHgxLCAyKSAtIE1hdGgucG93KHgyLCAyKSkpO1xyXG4gICAgICAgIHZhciBkZW5vID0geDEgLSB4MjtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNDX0J5X3gxeTFfeDJ5Ml94M3kzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGIgPSB0aGlzLmNhbGNCX0J5X3gxeTFfeDJ5Ml94M3kzKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpO1xyXG4gICAgICAgIHZhciBjID0geTEgKyAoLWEgKiAoeDEgKiB4MSkgLSBiICogeDEpO1xyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5kaXNjcmltaW5hbnQgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHJldHVybiAoTWF0aC5wb3coYiwgMikpIC0gKDQgKiBhICogYyk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnNvbHV0aW9uID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICB2YXIgZCA9IFF1YWRyYXRpYy5kaXNjcmltaW5hbnQoYSwgYiwgYyk7XHJcbiAgICAgICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgaWYgKGQgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgdmFyIGRlbm8gPSAyICogYTtcclxuICAgICAgICB2YXIgeDEgPSBVdGlsLnVuaWZ5U2lnbigoLWIgLSBNYXRoLnNxcnQoZCkpIC8gZGVubyk7XHJcbiAgICAgICAgdmFyIHgyID0gVXRpbC51bmlmeVNpZ24oKC1iICsgTWF0aC5zcXJ0KGQpKSAvIGRlbm8pO1xyXG4gICAgICAgIGlmIChkID09PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gW3gxXTtcclxuICAgICAgICByZXR1cm4gW01hdGgubWluKHgxLCB4MiksIE1hdGgubWF4KHgxLCB4MildO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pc1ZhbGlkQSA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgaWYgKGEgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoaXNOYU4oYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoSW5maW5pdHkgPT0gTWF0aC5hYnMoYSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaGFzQXBleCA9IGZ1bmN0aW9uIChwLCBxKSB7XHJcbiAgICAgICAgaWYgKGlzTmFOKHApIHx8IGlzTmFOKHEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKEluZmluaXR5ID09PSBNYXRoLmFicyhwKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChJbmZpbml0eSA9PT0gTWF0aC5hYnMocSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaXNQb3NpdGl2ZURlZmluaXRlID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoIVF1YWRyYXRpYy5pc1ZhbGlkQShhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChhIDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBkID0gUXVhZHJhdGljLmRpc2NyaW1pbmFudChhLCBiLCBjKTtcclxuICAgICAgICByZXR1cm4gKGQgPCAwKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaXNOZWdhdGl2ZURlZmluaXRlID0gZnVuY3Rpb24gKGEsIGIsIGMpIHtcclxuICAgICAgICBpZiAoIVF1YWRyYXRpYy5pc1ZhbGlkQShhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICgwIDwgYSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHZhciBkID0gUXVhZHJhdGljLmRpc2NyaW1pbmFudChhLCBiLCBjKTtcclxuICAgICAgICByZXR1cm4gKGQgPCAwKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuaW50ZXJzZWN0ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgICAgICBjb3VudDogMCxcclxuICAgICAgICAgICAgcG9pbnRzOiBbXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGEuaXNJbnZhbGlkIHx8IGIuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIGlmIChhLmEgLSBiLmEgPT09IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bWUgPSBiLmMgLSBhLmM7XHJcbiAgICAgICAgICAgIHZhciBkZW5vID0gYS5iIC0gYi5iO1xyXG4gICAgICAgICAgICBpZiAoZGVubyA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIHZhciB4ID0gbnVtZSAvIGRlbm87XHJcbiAgICAgICAgICAgIHZhciB5ID0gYS5meCh4KTtcclxuICAgICAgICAgICAgcmVzdWx0LmNvdW50ID0gMTtcclxuICAgICAgICAgICAgcmVzdWx0LnBvaW50cy5wdXNoKHgsIHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYyA9IG5ldyBRdWFkcmF0aWMoKS5pbml0R2VuZXJhbEZvcm0oYS5hIC0gYi5hLCBhLmIgLSBiLmIsIGEuYyAtIGIuYyk7XHJcbiAgICAgICAgdmFyIHB4ID0gYy5zb2x1dGlvbjtcclxuICAgICAgICBpZiAocHggPT09IHVuZGVmaW5lZCB8fCBweC5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgcHgubWFwKGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5jb3VudCsrO1xyXG4gICAgICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgYS5meCh4KSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUXVhZHJhdGljO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBRdWFkcmF0aWM7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuVHlwZSA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IyXCIpKTtcclxudmFyIFR5cGU7XHJcbihmdW5jdGlvbiAoVHlwZSkge1xyXG4gICAgVHlwZVtUeXBlW1wiTm9uZVwiXSA9IDBdID0gXCJOb25lXCI7XHJcbiAgICBUeXBlW1R5cGVbXCJSaWdodFwiXSA9IDFdID0gXCJSaWdodFwiO1xyXG4gICAgVHlwZVtUeXBlW1wiQWN1dGVcIl0gPSAyXSA9IFwiQWN1dGVcIjtcclxuICAgIFR5cGVbVHlwZVtcIk9idHVzZVwiXSA9IDNdID0gXCJPYnR1c2VcIjtcclxufSkoVHlwZSA9IGV4cG9ydHMuVHlwZSB8fCAoZXhwb3J0cy5UeXBlID0ge30pKTtcclxudmFyIFRyaWFuZ2xlMiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUcmlhbmdsZTIocCkge1xyXG4gICAgICAgIGlmIChwID09PSB2b2lkIDApIHsgcCA9IFtdOyB9XHJcbiAgICAgICAgdmFyIGF4ID0gcFswXSA/IHBbMF0gOiAwO1xyXG4gICAgICAgIHZhciBheSA9IHBbMV0gPyBwWzFdIDogMDtcclxuICAgICAgICB2YXIgYnggPSBwWzJdID8gcFsyXSA6IDA7XHJcbiAgICAgICAgdmFyIGJ5ID0gcFszXSA/IHBbM10gOiAwO1xyXG4gICAgICAgIHZhciBjeCA9IHBbNF0gPyBwWzRdIDogMDtcclxuICAgICAgICB2YXIgY3kgPSBwWzVdID8gcFs1XSA6IDA7XHJcbiAgICAgICAgdGhpcy5fQSA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChheCwgYXkpO1xyXG4gICAgICAgIHRoaXMuX0IgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoYngsIGJ5KTtcclxuICAgICAgICB0aGlzLl9DID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGN4LCBjeSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJBXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX0E7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fQjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9DOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJBQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5CLCB0aGlzLkEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkJDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLkMsIHRoaXMuQik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQ0FcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQSwgdGhpcy5DKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQkMubWFnbml0dWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5DQS5tYWduaXR1ZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkFCLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJzb3J0ZWRMZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IFthLCBiLCBjXTtcclxuICAgICAgICAgICAgbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBiIC0gYTsgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heFNpZGVOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBjID0gX2EuYztcclxuICAgICAgICAgICAgc3dpdGNoIChsaXN0WzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGM6IHJldHVybiBcIkFCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGE6IHJldHVybiBcIkJDXCI7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gXCJDQVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluU2lkZU5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3RbMl0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYzogcmV0dXJuIFwiQUJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgYTogcmV0dXJuIFwiQkNcIjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIkNBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLmdldExlbmd0aEF0ID0gZnVuY3Rpb24gKHNpZGVOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChzaWRlTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQkNcIjogcmV0dXJuIHRoaXMuYTtcclxuICAgICAgICAgICAgY2FzZSBcIkNBXCI6IHJldHVybiB0aGlzLmI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBQlwiOiByZXR1cm4gdGhpcy5jO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhMZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZW5ndGhBdCh0aGlzLm1heFNpZGVOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5MZW5ndGhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZW5ndGhBdCh0aGlzLm1pblNpZGVOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhDb3JuZXJOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNpZGUgPSB0aGlzLm1heFNpZGVOYW1lO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCQ1wiOiByZXR1cm4gXCJBXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ0FcIjogcmV0dXJuIFwiQlwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFCXCI6IHJldHVybiBcIkNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5Db3JuZXJOYW1lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHNpZGUgPSB0aGlzLm1pblNpZGVOYW1lO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHNpZGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCQ1wiOiByZXR1cm4gXCJBXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQ0FcIjogcmV0dXJuIFwiQlwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFCXCI6IHJldHVybiBcIkNcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjb3NBXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGIsIDIpKSArIChNYXRoLnBvdyhjLCAyKSkgLSAoTWF0aC5wb3coYSwgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBiICogYztcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNvc0JcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIG4gPSAoTWF0aC5wb3coYywgMikpICsgKE1hdGgucG93KGEsIDIpKSAtIChNYXRoLnBvdyhiLCAyKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMiAqIGMgKiBhO1xyXG4gICAgICAgICAgICB2YXIgY29zID0gbiAvIGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY29zQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgbiA9IChNYXRoLnBvdyhhLCAyKSkgKyAoTWF0aC5wb3coYiwgMikpIC0gKE1hdGgucG93KGMsIDIpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAyICogYSAqIGI7XHJcbiAgICAgICAgICAgIHZhciBjb3MgPSBuIC8gZDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJzaW5BXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NBID0gdGhpcy5jb3NBO1xyXG4gICAgICAgICAgICB2YXIgc2luID0gTWF0aC5zcXJ0KDEgLSAoTWF0aC5wb3coY29zQSwgMikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJzaW5CXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NCID0gdGhpcy5jb3NCO1xyXG4gICAgICAgICAgICB2YXIgc2luID0gTWF0aC5zcXJ0KDEgLSAoTWF0aC5wb3coY29zQiwgMikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJzaW5DXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NDID0gdGhpcy5jb3NDO1xyXG4gICAgICAgICAgICB2YXIgc2luID0gTWF0aC5zcXJ0KDEgLSAoTWF0aC5wb3coY29zQywgMikpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJ0YW5BXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkEgPSBfYS5zaW5BLCBjb3NBID0gX2EuY29zQTtcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkEgLyBjb3NBO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInRhbkJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgc2luQiA9IF9hLnNpbkIsIGNvc0IgPSBfYS5jb3NCO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luQiAvIGNvc0I7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwidGFuQ1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzaW5DID0gX2Euc2luQywgY29zQyA9IF9hLmNvc0M7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW5DIC8gTnVtYmVyKGNvc0MudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0Q29zQXQgPSBmdW5jdGlvbiAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29ybmVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOiByZXR1cm4gdGhpcy5jb3NBO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlwiOiByZXR1cm4gdGhpcy5jb3NCO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gdGhpcy5jb3NDO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhDb3JuZXJDb3NcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb3NBdCh0aGlzLm1heENvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lckNvc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvc0F0KHRoaXMubWluQ29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS5nZXRTaW5BdCA9IGZ1bmN0aW9uIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6IHJldHVybiB0aGlzLnNpbkE7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6IHJldHVybiB0aGlzLnNpbkI7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiB0aGlzLnNpbkM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lclNpblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNpbkF0KHRoaXMubWF4Q29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluQ29ybmVyU2luXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2luQXQodGhpcy5taW5Db3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLmdldFRhbkF0ID0gZnVuY3Rpb24gKGNvbm5lck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvbm5lck5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjogcmV0dXJuIHRoaXMudGFuQTtcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjogcmV0dXJuIHRoaXMudGFuQjtcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIHRoaXMudGFuQztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4Q29ybmVyVGFuXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFuQXQodGhpcy5tYXhDb3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5Db3JuZXJUYW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYW5BdCh0aGlzLm1pbkNvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInJhZEFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0EgPSB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwicmFkQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQiA9IHRoaXMuY29zQjtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NCKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJyYWRDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NDID0gdGhpcy5jb3NDO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc0MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImFyZWFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBiID0gX2EuYiwgYyA9IF9hLmMsIHNpbkEgPSBfYS5zaW5BO1xyXG4gICAgICAgICAgICByZXR1cm4gKGIgKiBjICogc2luQSkgKiAwLjU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwib3V0ZXJSYWRpdXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIHNpbkEgPSBfYS5zaW5BO1xyXG4gICAgICAgICAgICByZXR1cm4gYSAvICgyICogc2luQSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiaW5uZXJSYWRpdXNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYywgYXJlYSA9IF9hLmFyZWE7XHJcbiAgICAgICAgICAgIHJldHVybiAoMiAqIGFyZWEpIC8gKGEgKyBiICsgYyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY2VudGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkM7XHJcbiAgICAgICAgICAgIHZhciBnID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KCkuYWRkKEEpLmFkZChCKS5hZGQoQykudGltZXMoMSAvIDMpO1xyXG4gICAgICAgICAgICByZXR1cm4gZztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJvdXRlckNlbnRlclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBBID0gX2EuQSwgQiA9IF9hLkIsIEMgPSBfYS5DLCByYWRBID0gX2EucmFkQSwgcmFkQiA9IF9hLnJhZEIsIHJhZEMgPSBfYS5yYWRDO1xyXG4gICAgICAgICAgICB2YXIgc2luMkEgPSBNYXRoLnNpbihyYWRBICogMik7XHJcbiAgICAgICAgICAgIHZhciBzaW4yQiA9IE1hdGguc2luKHJhZEIgKiAyKTtcclxuICAgICAgICAgICAgdmFyIHNpbjJDID0gTWF0aC5zaW4ocmFkQyAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgY2VudGVyID0gQS5jbG9uZSgpLnRpbWVzKHNpbjJBKVxyXG4gICAgICAgICAgICAgICAgLmFkZChCLmNsb25lKCkudGltZXMoc2luMkIpKVxyXG4gICAgICAgICAgICAgICAgLmFkZChDLmNsb25lKCkudGltZXMoc2luMkMpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSBzaW4yQSArIHNpbjJCICsgc2luMkM7XHJcbiAgICAgICAgICAgIHJldHVybiBjZW50ZXIudGltZXMoMSAvIGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImlubmVyQ2VudGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSBBLmNsb25lKCkudGltZXMoYSlcclxuICAgICAgICAgICAgICAgIC5hZGQoQi5jbG9uZSgpLnRpbWVzKGIpKVxyXG4gICAgICAgICAgICAgICAgLmFkZChDLmNsb25lKCkudGltZXMoYykpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDEgLyAoYSArIGIgKyBjKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNlbnRlci50aW1lcyhkKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgYSA9IGxpc3RbMF0sIGIgPSBsaXN0WzFdLCBjID0gbGlzdFsyXTtcclxuICAgICAgICAgICAgcmV0dXJuICEoYSA8IGIgKyBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJ0eXBlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR5cGUuTm9uZTtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIG1heCA9IE51bWJlcigoTWF0aC5wb3cobGlzdFswXSwgMikpLnRvRml4ZWQoMTUpKTtcclxuICAgICAgICAgICAgdmFyIG1pZCA9IE51bWJlcigoTWF0aC5wb3cobGlzdFsxXSwgMikpLnRvRml4ZWQoMTUpKTtcclxuICAgICAgICAgICAgdmFyIG1pbiA9IE51bWJlcigoTWF0aC5wb3cobGlzdFsyXSwgMikpLnRvRml4ZWQoMTUpKTtcclxuICAgICAgICAgICAgaWYgKG1heCA8IG1pZCArIG1pbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBUeXBlLkFjdXRlO1xyXG4gICAgICAgICAgICBpZiAobWF4ID4gbWlkICsgbWluKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR5cGUuT2J0dXNlO1xyXG4gICAgICAgICAgICByZXR1cm4gVHlwZS5SaWdodDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkM7XHJcbiAgICAgICAgcmV0dXJuIFwiQVwiICsgQSArIFwiLCBCXCIgKyBCICsgXCIsIENcIiArIEM7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRyaWFuZ2xlMjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVHJpYW5nbGUyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgVmVjdG9yMiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBWZWN0b3IyKHgsIHkpIHtcclxuICAgICAgICBpZiAoeCA9PT0gdm9pZCAwKSB7IHggPSAwOyB9XHJcbiAgICAgICAgaWYgKHkgPT09IHZvaWQgMCkgeyB5ID0gMDsgfVxyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5lcXVhbCA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggPT09IHYueCAmJiB0aGlzLnkgPT09IHYueSk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB0aGlzLnggKz0gdi54O1xyXG4gICAgICAgIHRoaXMueSArPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB0aGlzLnggLT0gdi54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbiAoaykge1xyXG4gICAgICAgIHRoaXMueCAqPSBrO1xyXG4gICAgICAgIHRoaXMueSAqPSBrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJtYWduaXR1ZGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcInNxck1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgcmV0dXJuIHggKiB4ICsgeSAqIHk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcIm5vcm1hbGl6ZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBtYWduaXR1ZGUgPSB0aGlzLm1hZ25pdHVkZTtcclxuICAgICAgICAgICAgaWYgKG1hZ25pdHVkZSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjIuemVybztcclxuICAgICAgICAgICAgdmFyIHYgPSB7XHJcbiAgICAgICAgICAgICAgICB4OiB0aGlzLnggLyBtYWduaXR1ZGUsXHJcbiAgICAgICAgICAgICAgICB5OiB0aGlzLnkgLyBtYWduaXR1ZGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHYueCwgdi55KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwicmFkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICB2YXIgcmFkID0gTWF0aC5hdGFuKHkgLyB4KTtcclxuICAgICAgICAgICAgaWYgKHJhZCA8IDAgJiYgeCA8IDAgfHwgMCA8IHJhZCAmJiB5IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhZCArIE1hdGguUEk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJhZCA8IDAgJiYgMCA8IHgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByYWQgKyAyICogTWF0aC5QSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmFkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnJvdGF0ZSA9IGZ1bmN0aW9uIChyYWQpIHtcclxuICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgdGhpcy54ID0geCAqIE1hdGguY29zKHJhZCkgLSB5ICogTWF0aC5zaW4ocmFkKTtcclxuICAgICAgICB0aGlzLnkgPSB4ICogTWF0aC5zaW4ocmFkKSArIHkgKiBNYXRoLmNvcyhyYWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uICh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMueCA9IHYueDtcclxuICAgICAgICB0aGlzLnkgPSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5sZXJwID0gZnVuY3Rpb24gKHRvLCB0KSB7XHJcbiAgICAgICAgdmFyIHYgPSBWZWN0b3IyLnN1Yih0bywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGQodi50aW1lcyh0KSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwiemVyb1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJvbmVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwidXBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwiZG93blwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAtMSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwibGVmdFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigtMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIsIFwicmlnaHRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMSwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5hZGQgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkuYWRkKHYyKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnN1YiA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gdjEuY2xvbmUoKS5zdWIodjIpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIudGltZXMgPSBmdW5jdGlvbiAodiwgaykge1xyXG4gICAgICAgIHJldHVybiB2LmNsb25lKCkudGltZXMoayk7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5pbnZlcnNlID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gdi5jbG9uZSgpLnRpbWVzKC0xKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzWmVybyA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgcmV0dXJuICh2LnggPT09IDAgJiYgdi55ID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzUGFyYWxsZWwgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIHQgPSBWZWN0b3IyLmNyb3NzKHYxLCB2Mik7XHJcbiAgICAgICAgcmV0dXJuICh0ID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmlzVmVydGljYWwgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIChWZWN0b3IyLmRvdCh2MSwgdjIpID09PSAwKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRvdCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgZG90ID0gdjEueCAqIHYyLnggKyB2MS55ICogdjIueTtcclxuICAgICAgICByZXR1cm4gZG90O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuY3Jvc3MgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgdmFyIGNyb3NzID0gdjEueCAqIHYyLnkgLSB2Mi54ICogdjEueTtcclxuICAgICAgICByZXR1cm4gY3Jvc3M7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5hbmdsZSA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgbmVtdSA9IFZlY3RvcjIuZG90KHYxLCB2Mik7XHJcbiAgICAgICAgdmFyIGRlbm8gPSB2MS5tYWduaXR1ZGUgKiB2Mi5tYWduaXR1ZGU7XHJcbiAgICAgICAgdmFyIGNvcyA9IG5lbXUgLyBkZW5vO1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmRpc3RhbmNlID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyLnN1Yih2MSwgdjIpLm1hZ25pdHVkZTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmxlcnAgPSBmdW5jdGlvbiAodjEsIHYyLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuIHYxLmNsb25lKCkubGVycCh2MiwgdCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFZlY3RvcjI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFZlY3RvcjI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjMoeCwgeSwgeikge1xyXG4gICAgICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAwOyB9XHJcbiAgICAgICAgaWYgKHogPT09IHZvaWQgMCkgeyB6ID0gMDsgfVxyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnogPSB6O1xyXG4gICAgfVxyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICB0aGlzLnggKz0gYS54O1xyXG4gICAgICAgIHRoaXMueSArPSBhLnk7XHJcbiAgICAgICAgdGhpcy56ICs9IGEuejtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHRoaXMueCAtPSBhLng7XHJcbiAgICAgICAgdGhpcy55IC09IGEueTtcclxuICAgICAgICB0aGlzLnogLT0gYS56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLnRpbWVzID0gZnVuY3Rpb24gKG51bSkge1xyXG4gICAgICAgIHRoaXMueCAqPSBudW07XHJcbiAgICAgICAgdGhpcy55ICo9IG51bTtcclxuICAgICAgICB0aGlzLnogKj0gbnVtO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHRoaXMueCArIFwiLCBcIiArIHRoaXMueSArIFwiLCBcIiArIHRoaXMueiArIFwiKVwiO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLnByb3RvdHlwZSwgXCJub3JtYWxpemVkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjMubm9ybWFsaXplKHRoaXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFZlY3RvcjMuYWRkID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoYS54ICsgYi54LCBhLnkgKyBiLnksIGEueiArIGIueik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5zdWIgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhhLnggLSBiLngsIGEueSAtIGIueSwgYS56IC0gYi56KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnRpbWVzID0gZnVuY3Rpb24gKGEsIG51bSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhhLnggKiBudW0sIGEueSAqIG51bSwgYS56ICogbnVtKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydChNYXRoLnBvdyh2LngsIDIpICsgTWF0aC5wb3codi55LCAyKSArIE1hdGgucG93KHYueiwgMikpO1xyXG4gICAgICAgIGlmICgwLjAwMDAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh2LnggLyBsZW5ndGgsIHYueSAvIGxlbmd0aCwgdi56IC8gbGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IzLnplcm87XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFZlY3RvcjMuZG90ID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55ICsgYS56ICogYi56O1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMuY3Jvc3MgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciB4ID0gYS55ICogYi56IC0gYS56ICogYi55O1xyXG4gICAgICAgIHZhciB5ID0gYS56ICogYi54IC0gYS54ICogYi56O1xyXG4gICAgICAgIHZhciB6ID0gYS54ICogYi55IC0gYS55ICogYi54O1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMywgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcIm9uZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygxLCAxLCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMywgXCJ1cFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMygwLCAxLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMywgXCJkb3duXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIC0xLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gVmVjdG9yMztcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5Db2xsaXNpb24yID0gZXhwb3J0cy5QcmltaXRpdmUyID0gZXhwb3J0cy5UcmlhbmdsZTIgPSBleHBvcnRzLk1hdHJpeDQgPSBleHBvcnRzLk1hdHJpeDMgPSBleHBvcnRzLlZlY3RvcjMgPSBleHBvcnRzLlZlY3RvcjIgPSBleHBvcnRzLlF1YWRyYXRpYyA9IGV4cG9ydHMuTGluZWFyID0gZXhwb3J0cy5EZWZpbmUgPSBleHBvcnRzLlV0aWwgPSB2b2lkIDA7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG5leHBvcnRzLlV0aWwgPSBVdGlsO1xyXG52YXIgRGVmaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0RlZmluZVwiKSk7XHJcbmV4cG9ydHMuRGVmaW5lID0gRGVmaW5lO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjJcIikpO1xyXG5leHBvcnRzLlZlY3RvcjIgPSBWZWN0b3IyXzEuZGVmYXVsdDtcclxudmFyIFZlY3RvcjNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IzXCIpKTtcclxuZXhwb3J0cy5WZWN0b3IzID0gVmVjdG9yM18xLmRlZmF1bHQ7XHJcbnZhciBNYXRyaXgzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4M1wiKSk7XHJcbmV4cG9ydHMuTWF0cml4MyA9IE1hdHJpeDNfMS5kZWZhdWx0O1xyXG52YXIgTWF0cml4NF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdHJpeDRcIikpO1xyXG5leHBvcnRzLk1hdHJpeDQgPSBNYXRyaXg0XzEuZGVmYXVsdDtcclxudmFyIFF1YWRyYXRpY18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1F1YWRyYXRpY1wiKSk7XHJcbmV4cG9ydHMuUXVhZHJhdGljID0gUXVhZHJhdGljXzEuZGVmYXVsdDtcclxudmFyIExpbmVhcl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL0xpbmVhclwiKSk7XHJcbmV4cG9ydHMuTGluZWFyID0gTGluZWFyXzEuZGVmYXVsdDtcclxudmFyIFRyaWFuZ2xlMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1RyaWFuZ2xlMlwiKSk7XHJcbmV4cG9ydHMuVHJpYW5nbGUyID0gVHJpYW5nbGUyXzEuZGVmYXVsdDtcclxudmFyIFByaW1pdGl2ZTIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUHJpbWl0aXZlMlwiKSk7XHJcbmV4cG9ydHMuUHJpbWl0aXZlMiA9IFByaW1pdGl2ZTI7XHJcbnZhciBDb2xsaXNpb24yID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0NvbGxpc2lvbjJcIikpO1xyXG5leHBvcnRzLkNvbGxpc2lvbjIgPSBDb2xsaXNpb24yO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmxlcnAgPSBleHBvcnRzLmNyYW1wID0gZXhwb3J0cy5yb3VuZCA9IGV4cG9ydHMucmFkMmRlZyA9IGV4cG9ydHMuZGVnMnJhZCA9IGV4cG9ydHMudW5pZnlTaWduID0gdm9pZCAwO1xyXG5leHBvcnRzLnVuaWZ5U2lnbiA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIHJldHVybiBhO1xyXG59O1xyXG5leHBvcnRzLmRlZzJyYWQgPSBmdW5jdGlvbiAoZCkge1xyXG4gICAgcmV0dXJuIE1hdGguUEkgLyAxODAgKiBkO1xyXG59O1xyXG5leHBvcnRzLnJhZDJkZWcgPSBmdW5jdGlvbiAocikge1xyXG4gICAgcmV0dXJuIDE4MCAvIE1hdGguUEkgKiByO1xyXG59O1xyXG5leHBvcnRzLnJvdW5kID0gZnVuY3Rpb24gKG51bSwgZml4ZWQpIHtcclxuICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgdmFyIGZpeCA9IE1hdGgucG93KDEwLCBmaXhlZCk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZChudW0gKiBmaXgpIC8gZml4O1xyXG59O1xyXG5leHBvcnRzLmNyYW1wID0gZnVuY3Rpb24gKG5vLCBtaW4sIG1heCkge1xyXG4gICAgbm8gPSBNYXRoLm1pbihubywgbWF4KTtcclxuICAgIG5vID0gTWF0aC5tYXgobm8sIG1pbik7XHJcbiAgICByZXR1cm4gbm87XHJcbn07XHJcbmV4cG9ydHMubGVycCA9IGZ1bmN0aW9uIChmcm9tLCB0bywgcmF0ZSkge1xyXG4gICAgcmV0dXJuIGZyb20gKyAoKHRvIC0gZnJvbSkgKiByYXRlKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==