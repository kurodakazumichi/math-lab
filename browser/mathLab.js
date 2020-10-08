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
exports.LineAndLine = exports.PointAndEllipse = exports.PointAndCapsule = exports.PointAndTriangle = exports.PointAndBox = exports.PointAndRect = exports.PointAndCircle = exports.PointAndSegment = exports.PointAndRay = exports.PointAndLine = exports.PointAndPoint = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9NYXRoTGFiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9MaW5lQW5kTGluZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRCb3gudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kQ2Fwc3VsZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRDaXJjbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kRWxsaXBzZS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRMaW5lLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFBvaW50LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFJheS50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL0NvbGxpc2lvbjIvUG9pbnRBbmRSZWN0LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvQ29sbGlzaW9uMi9Qb2ludEFuZFNlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL1BvaW50QW5kVHJpYW5nbGUudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9Db2xsaXNpb24yL2luZGV4LnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvRGVmaW5lLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTGluZWFyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvTWF0cml4My50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL01hdHJpeDQudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9QcmltaXRpdmUyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvUXVhZHJhdGljLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVHJpYW5nbGUyLnRzIiwid2VicGFjazovL01hdGhMYWIvLi9zcmMvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vTWF0aExhYi8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9NYXRoTGFiLy4vc3JjL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0EsZ0NB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MEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3RIYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QiwyQkFBMkIsT0FBTztBQUNsQywrQkFBK0IsT0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUN4SGE7QUFDYjtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVELGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25ELGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCLDJCQUEyQixPQUFPO0FBQ2xDLCtCQUErQixPQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDMVRhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnQkFBZ0Isc0NBQXNDLGlCQUFpQixFQUFFO0FBQ3ZGLDZCQUE2Qix1REFBdUQ7QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGtDQUFrQyxvQ0FBb0MsYUFBYSxFQUFFLEVBQUU7QUFDdkYsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSx5Q0FBeUMsNkJBQTZCO0FBQ3RFLENBQUM7QUFDRDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRCx3QkFBd0IsbUJBQU8sQ0FBQyw2QkFBUTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLCtDQUErQyxFQUFFO0FBQzNFO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0JBQWdCLEVBQUU7QUFDNUMsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsa0JBQWtCLEVBQUU7QUFDOUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDBCQUEwQixrQkFBa0IsRUFBRTtBQUM5QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGtCQUFrQixFQUFFO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwQkFBMEIsZ0NBQWdDLEVBQUU7QUFDNUQsMkJBQTJCLDZCQUE2QixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxDQUFDO0FB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QUFDTDtBQUNBLDBCQUEwQixnQkFBZ0IsRUFBRTtBQUM1QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLGdCQUFnQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsY0FBYyxFQUFFO0FBQ3ZEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7O0FDeGRhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7QUMzTGE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0EsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEMsMkJBQTJCLE9BQU87QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ2hHYTtBQUNiO0FBQ0E7QUFDQSxrQ0FBa0Msb0NBQW9DLGFBQWEsRUFBRSxFQUFFO0FBQ3ZGLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUNBQXlDLDZCQUE2QjtBQUN0RSxDQUFDO0FBQ0Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsNkJBQVE7QUFDeEM7QUFDQSwwQkFBMEIsbUJBQU8sQ0FBQyxpQ0FBVTtBQUM1QztBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0EsZ0NBQWdDLG1CQUFPLENBQUMsbUNBQVc7QUFDbkQ7QUFDQSxnQ0FBZ0MsbUJBQU8sQ0FBQyxtQ0FBVztBQUNuRDtBQUNBLGdDQUFnQyxtQkFBTyxDQUFDLG1DQUFXO0FBQ25EO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsdUNBQWE7QUFDdkQ7QUFDQSwrQkFBK0IsbUJBQU8sQ0FBQyxpQ0FBVTtBQUNqRDtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHVDQUFhO0FBQ3ZEO0FBQ0EsOEJBQThCLG1CQUFPLENBQUMseUNBQWM7QUFDcEQ7QUFDQSw4QkFBOEIsbUJBQU8sQ0FBQywrQ0FBYztBQUNwRDs7Ozs7Ozs7Ozs7OztBQzlDYTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYXRoTGFiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiTWF0aExhYlwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNYXRoTGFiXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmdldENvbGxpc2lvblBvaW50ID0gZXhwb3J0cy5pc0hpdFBhcmFsbGVsID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0KGwxLCBsMikge1xyXG4gICAgcmV0dXJuIChWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyhsMS52LCBsMi52KSAhPT0gMCk7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpc0hpdFBhcmFsbGVsKGwxLCBsMikge1xyXG4gICAgdmFyIHYxID0gbDEudjtcclxuICAgIHZhciB2MiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1YihsMS5wLCBsMi5wKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMoVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3ModjEsIHYyKSkgPCBfXzEuRGVmaW5lLkVQU0lMT04pO1xyXG59XHJcbmV4cG9ydHMuaXNIaXRQYXJhbGxlbCA9IGlzSGl0UGFyYWxsZWw7XHJcbmZ1bmN0aW9uIGdldENvbGxpc2lvblBvaW50KGwxLCBsMikge1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIobDIucCwgbDEucCk7XHJcbiAgICB2YXIgdjEgPSBsMS52O1xyXG4gICAgdmFyIHYyID0gbDIudjtcclxuICAgIHZhciB0MiA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYsIHYxKSAvIFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKHYxLCB2Mik7XHJcbiAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuYWRkKGwyLnAsIHYyLmNsb25lKCkudGltZXModDIpKTtcclxufVxyXG5leHBvcnRzLmdldENvbGxpc2lvblBvaW50ID0gZ2V0Q29sbGlzaW9uUG9pbnQ7XHJcbmZ1bmN0aW9uIGludGVyY2VjdChsMSwgbDIpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChsMSwgbDIpO1xyXG4gICAgdmFyIGhpdFBhcmFsbGVsID0gaXNIaXRQYXJhbGxlbChsMSwgbDIpO1xyXG4gICAgdmFyIHBvcyA9IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICBpZiAoaGl0KSB7XHJcbiAgICAgICAgcG9zLmNvcHkoZ2V0Q29sbGlzaW9uUG9pbnQobDEsIGwyKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhpdDogaGl0LFxyXG4gICAgICAgIGhpdFBhcmFsbGVsOiBoaXRQYXJhbGxlbCxcclxuICAgICAgICBwb3M6IHBvc1xyXG4gICAgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBleHBvcnRzLmlzSGl0ID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi9WZWN0b3IyXCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGJveCkge1xyXG4gICAgdmFyIGRhdGFzID0gW1xyXG4gICAgICAgIHsgdjE6IGJveC52MXRvMiwgdjI6IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgYm94LnAxKSB9LFxyXG4gICAgICAgIHsgdjE6IGJveC52MnRvMywgdjI6IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgYm94LnAyKSB9LFxyXG4gICAgICAgIHsgdjE6IGJveC52M3RvNCwgdjI6IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgYm94LnAzKSB9LFxyXG4gICAgICAgIHsgdjE6IGJveC52NHRvMSwgdjI6IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgYm94LnA0KSB9XHJcbiAgICBdO1xyXG4gICAgZm9yICh2YXIgX2kgPSAwLCBkYXRhc18xID0gZGF0YXM7IF9pIDwgZGF0YXNfMS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICB2YXIgZGF0YSA9IGRhdGFzXzFbX2ldO1xyXG4gICAgICAgIHZhciBjcm9zcyA9IFZlY3RvcjJfMS5kZWZhdWx0LmNyb3NzKGRhdGEudjEsIGRhdGEudjIpO1xyXG4gICAgICAgIGlmICgwIDwgY3Jvc3MpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBib3gpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgYm94KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBQb2ludEFuZFNlZ21lbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRTZWdtZW50XCIpKTtcclxuZnVuY3Rpb24gaXNIaXQocG9pbnQsIGNhcHN1bGUpIHtcclxuICAgIHZhciBwID0gUG9pbnRBbmRTZWdtZW50LmdldE5lYXJlc3ROZWlnaGJvclBvaW50KHBvaW50LCBjYXBzdWxlLnMpO1xyXG4gICAgdmFyIHYgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHApO1xyXG4gICAgcmV0dXJuICh2LnNxck1hZ25pdHVkZSA8IGNhcHN1bGUuciAqIGNhcHN1bGUucik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGNhcHN1bGUpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgY2Fwc3VsZSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgY2lyY2xlKSB7XHJcbiAgICB2YXIgdiA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgY2lyY2xlLnApO1xyXG4gICAgcmV0dXJuICh2LnNxck1hZ25pdHVkZSA8IGNpcmNsZS5yICogY2lyY2xlLnIpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBjaXJjbGUpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgY2lyY2xlKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBlbGxpcHNlKSB7XHJcbiAgICB2YXIgcCA9IHBvaW50O1xyXG4gICAgdmFyIGUgPSBlbGxpcHNlO1xyXG4gICAgdmFyIHNpbiA9IE1hdGguc2luKGUucmFkKTtcclxuICAgIHZhciBjb3MgPSBNYXRoLmNvcyhlLnJhZCk7XHJcbiAgICB2YXIgcnggPSBlbGxpcHNlLnJ4LCByeSA9IGVsbGlwc2Uucnk7XHJcbiAgICB2YXIgcHggPSAocC54IC0gZS5wLngpICogY29zICsgKHAueSAtIGUucC55KSAqIHNpbjtcclxuICAgIHZhciBweSA9IChyeCAvIHJ5KSAqICgtKHAueCAtIGUucC54KSAqIHNpbiArIChwLnkgLSBlLnAueSkgKiBjb3MpO1xyXG4gICAgcmV0dXJuIChweCAqIHB4ICsgcHkgKiBweSkgPCByeCAqIHJ4O1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBlbGxpcHNlKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIGVsbGlwc2UpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIERlZmluZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi4vRGVmaW5lXCIpKTtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBsaW5lKSB7XHJcbiAgICB2YXIgYSA9IGxpbmUudjtcclxuICAgIHZhciBiID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBsaW5lLnApO1xyXG4gICAgdmFyIGMgPSBWZWN0b3IyXzEuZGVmYXVsdC5jcm9zcyhhLCBiKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMoYykgPCBEZWZpbmUuRVBTSUxPTik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIGxpbmUpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgbGluZSk7XHJcbiAgICB2YXIgcG9zID0gKGhpdCkgPyBwb2ludC5jbG9uZSgpIDogVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgIHJldHVybiB7IGhpdDogaGl0LCBwb3M6IHBvcyB9O1xyXG59XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gaW50ZXJjZWN0O1xyXG5mdW5jdGlvbiBnZXROZWFyZXN0TmVpZ2hib3JQb2ludChwb2ludCwgbGluZSkge1xyXG4gICAgdmFyIGQgPSBsaW5lLnY7XHJcbiAgICB2YXIgcCA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgbGluZS5wKTtcclxuICAgIHZhciBuID0gZC5ub3JtYWxpemU7XHJcbiAgICB2YXIgZG90ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KG4sIHApO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZChsaW5lLnAsIG4udGltZXMoZG90KSk7XHJcbn1cclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGdldE5lYXJlc3ROZWlnaGJvclBvaW50O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG5mdW5jdGlvbiBpc0hpdChwMSwgcDIpIHtcclxuICAgIHJldHVybiBwMS5lcXVhbChwMik7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocDEsIHAyKSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocDEsIHAyKTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHAxLmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQgPSBleHBvcnRzLmludGVyY2VjdCA9IGV4cG9ydHMuaXNIaXQgPSB2b2lkIDA7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL1ZlY3RvcjJcIikpO1xyXG52YXIgX18xID0gcmVxdWlyZShcIi4uXCIpO1xyXG5mdW5jdGlvbiBpc0hpdChwb2ludCwgcmF5KSB7XHJcbiAgICB2YXIgYSA9IHJheS52O1xyXG4gICAgdmFyIGIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHJheS5wKTtcclxuICAgIHZhciBsID0gYS5tYWduaXR1ZGUgKiBiLm1hZ25pdHVkZTtcclxuICAgIHZhciBkID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KGEsIGIpO1xyXG4gICAgcmV0dXJuIChNYXRoLmFicyhkIC0gbCkgPCBfXzEuRGVmaW5lLkVQU0lMT04pO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCByYXkpIHtcclxuICAgIHZhciBoaXQgPSBpc0hpdChwb2ludCwgcmF5KTtcclxuICAgIHZhciBwb3MgPSAoaGl0KSA/IHBvaW50LmNsb25lKCkgOiBWZWN0b3IyXzEuZGVmYXVsdC56ZXJvO1xyXG4gICAgcmV0dXJuIHsgaGl0OiBoaXQsIHBvczogcG9zIH07XHJcbn1cclxuZXhwb3J0cy5pbnRlcmNlY3QgPSBpbnRlcmNlY3Q7XHJcbmZ1bmN0aW9uIGdldE5lYXJlc3ROZWlnaGJvclBvaW50KHBvaW50LCByYXkpIHtcclxuICAgIHZhciBkID0gcmF5LnY7XHJcbiAgICB2YXIgcCA9IFZlY3RvcjJfMS5kZWZhdWx0LnN1Yihwb2ludCwgcmF5LnApO1xyXG4gICAgaWYgKFZlY3RvcjJfMS5kZWZhdWx0LmRvdChkLCBwKSA8IDApIHtcclxuICAgICAgICByZXR1cm4gcmF5LnAuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIHZhciBuID0gZC5ub3JtYWxpemU7XHJcbiAgICB2YXIgZG90ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KG4sIHApO1xyXG4gICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZChyYXkucCwgbi50aW1lcyhkb3QpKTtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCByZWN0KSB7XHJcbiAgICB2YXIgaXNDb250YWluWCA9IChyZWN0LnAxLnggPD0gcG9pbnQueCkgJiYgKHBvaW50LnggPD0gcmVjdC5wMy54KTtcclxuICAgIHZhciBpc0NvbnRhaW5ZID0gKHJlY3QucDMueSA8PSBwb2ludC55KSAmJiAocG9pbnQueSA8PSByZWN0LnAxLnkpO1xyXG4gICAgcmV0dXJuIChpc0NvbnRhaW5YICYmIGlzQ29udGFpblkpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCByZWN0KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIHJlY3QpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5nZXROZWFyZXN0TmVpZ2hib3JQb2ludCA9IGV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbnZhciBfXzEgPSByZXF1aXJlKFwiLi5cIik7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgYSA9IHNlZ21lbnQudjtcclxuICAgIHZhciBiID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBzZWdtZW50LnAxKTtcclxuICAgIHZhciBhbCA9IGEubWFnbml0dWRlO1xyXG4gICAgdmFyIGJsID0gYi5tYWduaXR1ZGU7XHJcbiAgICB2YXIgbCA9IGFsICogYmw7XHJcbiAgICB2YXIgZCA9IFZlY3RvcjJfMS5kZWZhdWx0LmRvdChhLCBiKTtcclxuICAgIHJldHVybiAoTWF0aC5hYnMobCAtIGQpIDwgX18xLkRlZmluZS5FUFNJTE9OICYmIGFsID4gYmwpO1xyXG59XHJcbmV4cG9ydHMuaXNIaXQgPSBpc0hpdDtcclxuZnVuY3Rpb24gaW50ZXJjZWN0KHBvaW50LCBzZWdtZW50KSB7XHJcbiAgICB2YXIgaGl0ID0gaXNIaXQocG9pbnQsIHNlZ21lbnQpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuZnVuY3Rpb24gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQocG9pbnQsIHNlZ21lbnQpIHtcclxuICAgIHZhciBkID0gc2VnbWVudC52O1xyXG4gICAgdmFyIHAxID0gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHBvaW50LCBzZWdtZW50LnAxKTtcclxuICAgIGlmIChWZWN0b3IyXzEuZGVmYXVsdC5kb3QoZCwgcDEpIDwgMCkge1xyXG4gICAgICAgIHJldHVybiBzZWdtZW50LnAxLmNsb25lKCk7XHJcbiAgICB9XHJcbiAgICB2YXIgcDIgPSBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHNlZ21lbnQucDIpO1xyXG4gICAgaWYgKDAgPCBWZWN0b3IyXzEuZGVmYXVsdC5kb3QoZCwgcDIpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlZ21lbnQucDIuY2xvbmUoKTtcclxuICAgIH1cclxuICAgIHZhciBuID0gZC5ub3JtYWxpemU7XHJcbiAgICB2YXIgZG90ID0gVmVjdG9yMl8xLmRlZmF1bHQuZG90KG4sIHAxKTtcclxuICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQoc2VnbWVudC5wMSwgbi50aW1lcyhkb3QpKTtcclxufVxyXG5leHBvcnRzLmdldE5lYXJlc3ROZWlnaGJvclBvaW50ID0gZ2V0TmVhcmVzdE5laWdoYm9yUG9pbnQ7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuaW50ZXJjZWN0ID0gZXhwb3J0cy5pc0hpdCA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vVmVjdG9yMlwiKSk7XHJcbmZ1bmN0aW9uIGlzSGl0KHBvaW50LCB0cmkpIHtcclxuICAgIHZhciBkYXRhcyA9IFtcclxuICAgICAgICB7IHYxOiB0cmkudjF0bzIsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHRyaS5wMSkgfSxcclxuICAgICAgICB7IHYxOiB0cmkudjJ0bzMsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHRyaS5wMikgfSxcclxuICAgICAgICB7IHYxOiB0cmkudjN0bzEsIHYyOiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIocG9pbnQsIHRyaS5wMykgfSxcclxuICAgIF07XHJcbiAgICBmb3IgKHZhciBfaSA9IDAsIGRhdGFzXzEgPSBkYXRhczsgX2kgPCBkYXRhc18xLmxlbmd0aDsgX2krKykge1xyXG4gICAgICAgIHZhciBkYXRhID0gZGF0YXNfMVtfaV07XHJcbiAgICAgICAgdmFyIGNyb3NzID0gVmVjdG9yMl8xLmRlZmF1bHQuY3Jvc3MoZGF0YS52MSwgZGF0YS52Mik7XHJcbiAgICAgICAgaWYgKDAgPCBjcm9zcylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0cy5pc0hpdCA9IGlzSGl0O1xyXG5mdW5jdGlvbiBpbnRlcmNlY3QocG9pbnQsIHRyaSkge1xyXG4gICAgdmFyIGhpdCA9IGlzSGl0KHBvaW50LCB0cmkpO1xyXG4gICAgdmFyIHBvcyA9IChoaXQpID8gcG9pbnQuY2xvbmUoKSA6IFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICByZXR1cm4geyBoaXQ6IGhpdCwgcG9zOiBwb3MgfTtcclxufVxyXG5leHBvcnRzLmludGVyY2VjdCA9IGludGVyY2VjdDtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5MaW5lQW5kTGluZSA9IGV4cG9ydHMuUG9pbnRBbmRFbGxpcHNlID0gZXhwb3J0cy5Qb2ludEFuZENhcHN1bGUgPSBleHBvcnRzLlBvaW50QW5kVHJpYW5nbGUgPSBleHBvcnRzLlBvaW50QW5kQm94ID0gZXhwb3J0cy5Qb2ludEFuZFJlY3QgPSBleHBvcnRzLlBvaW50QW5kQ2lyY2xlID0gZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBleHBvcnRzLlBvaW50QW5kUmF5ID0gZXhwb3J0cy5Qb2ludEFuZExpbmUgPSBleHBvcnRzLlBvaW50QW5kUG9pbnQgPSB2b2lkIDA7XHJcbnZhciBQb2ludEFuZFBvaW50ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kUG9pbnRcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUG9pbnQgPSBQb2ludEFuZFBvaW50O1xyXG52YXIgUG9pbnRBbmRMaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kTGluZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRMaW5lID0gUG9pbnRBbmRMaW5lO1xyXG52YXIgUG9pbnRBbmRSYXkgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRSYXlcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmF5ID0gUG9pbnRBbmRSYXk7XHJcbnZhciBQb2ludEFuZFNlZ21lbnQgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vUG9pbnRBbmRTZWdtZW50XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFNlZ21lbnQgPSBQb2ludEFuZFNlZ21lbnQ7XHJcbnZhciBQb2ludEFuZENpcmNsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENpcmNsZVwiKSk7XHJcbmV4cG9ydHMuUG9pbnRBbmRDaXJjbGUgPSBQb2ludEFuZENpcmNsZTtcclxudmFyIFBvaW50QW5kUmVjdCA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFJlY3RcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kUmVjdCA9IFBvaW50QW5kUmVjdDtcclxudmFyIFBvaW50QW5kQm94ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL1BvaW50QW5kQm94XCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZEJveCA9IFBvaW50QW5kQm94O1xyXG52YXIgUG9pbnRBbmRUcmlhbmdsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZFRyaWFuZ2xlXCIpKTtcclxuZXhwb3J0cy5Qb2ludEFuZFRyaWFuZ2xlID0gUG9pbnRBbmRUcmlhbmdsZTtcclxudmFyIFBvaW50QW5kQ2Fwc3VsZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZENhcHN1bGVcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kQ2Fwc3VsZSA9IFBvaW50QW5kQ2Fwc3VsZTtcclxudmFyIFBvaW50QW5kRWxsaXBzZSA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9Qb2ludEFuZEVsbGlwc2VcIikpO1xyXG5leHBvcnRzLlBvaW50QW5kRWxsaXBzZSA9IFBvaW50QW5kRWxsaXBzZTtcclxudmFyIExpbmVBbmRMaW5lID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL0xpbmVBbmRMaW5lXCIpKTtcclxuZXhwb3J0cy5MaW5lQW5kTGluZSA9IExpbmVBbmRMaW5lO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkVQU0lMT04gPSB2b2lkIDA7XHJcbmV4cG9ydHMuRVBTSUxPTiA9IDAuMDAwMDE7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSkpO1xyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX3NldE1vZHVsZURlZmF1bHQpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn0pO1xyXG52YXIgX19pbXBvcnRTdGFyID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydFN0YXIpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBVdGlsID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIikpO1xyXG52YXIgTGluZWFyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpbmVhcihhLCBiKSB7XHJcbiAgICAgICAgaWYgKGEgPT09IHZvaWQgMCkgeyBhID0gMDsgfVxyXG4gICAgICAgIGlmIChiID09PSB2b2lkIDApIHsgYiA9IDA7IH1cclxuICAgICAgICB0aGlzLl9hID0gYTtcclxuICAgICAgICB0aGlzLl9iID0gYjtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcImFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fYTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2EgPSBVdGlsLnVuaWZ5U2lnbih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmVhci5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9iOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYiA9IFV0aWwudW5pZnlTaWduKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmZ4ID0gZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIHZhciBfYyA9IHRoaXMsIGEgPSBfYy5hLCBiID0gX2MuYjtcclxuICAgICAgICByZXR1cm4gYSAqIHggKyBiO1xyXG4gICAgfTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaW5pdFN0YW5kYXJkRm9ybSA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdGhpcy5hID0gYSwgdGhpcy5iID0gYjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBMaW5lYXIucHJvdG90eXBlLmluaXRHZW5lcmFsRm9ybSA9IGZ1bmN0aW9uIChBLCBCLCBDKSB7XHJcbiAgICAgICAgQTtcclxuICAgICAgICBCO1xyXG4gICAgICAgIEM7XHJcbiAgICAgICAgdGhpcy5hID0gLUEgLyBCO1xyXG4gICAgICAgIHRoaXMuYiA9IEMgLyBCO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaW5pdEJ5U2xvcGVBbmRQb2ludCA9IGZ1bmN0aW9uIChhLCB4LCB5KSB7XHJcbiAgICAgICAgdmFyIGIgPSB5IC0gYSAqIHg7XHJcbiAgICAgICAgdGhpcy5hID0gYTtcclxuICAgICAgICB0aGlzLmIgPSBiO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIExpbmVhci5wcm90b3R5cGUuaW5pdEJ5MlBvaW50ID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5MiAtIHkxO1xyXG4gICAgICAgIHZhciBkZW5vID0geDIgLSB4MTtcclxuICAgICAgICB2YXIgYSA9IG51bWUgLyBkZW5vO1xyXG4gICAgICAgIHRoaXMuaW5pdEJ5U2xvcGVBbmRQb2ludChhLCB4MSwgeTEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcImlzSW52YWxpZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHRoaXMuYSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUodGhpcy5iKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS5pc1BlcnBXaXRoID0gZnVuY3Rpb24gKGxpbmVhcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChsaW5lYXIuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmEgKiBsaW5lYXIuYSA9PT0gLTEpO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShMaW5lYXIucHJvdG90eXBlLCBcInBlcnBTbG9wZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBzbG9wZSA9IC0oMSAvIHRoaXMuYSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoTnVtYmVyLmlzRmluaXRlKHNsb3BlKSkgPyBzbG9wZSA6IDA7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZWFyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCJ5PVwiICsgdGhpcy5hICsgXCJ4K1wiICsgdGhpcy5iO1xyXG4gICAgfTtcclxuICAgIExpbmVhci5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBwb2ludHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgbnVtZSA9IGIuYiAtIGEuYjtcclxuICAgICAgICB2YXIgZGVubyA9IGEuYSAtIGIuYTtcclxuICAgICAgICB2YXIgeCA9IG51bWUgLyBkZW5vO1xyXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKHgpKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIHZhciB5ID0gYS5meCh4KTtcclxuICAgICAgICByZXN1bHQuY291bnQgPSAxO1xyXG4gICAgICAgIHJlc3VsdC5wb2ludHMucHVzaCh4LCB5KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBMaW5lYXI7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IExpbmVhcjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIE1hdHJpeDMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gTWF0cml4Myh2KSB7XHJcbiAgICAgICAgdGhpcy52ID0gdi5zbGljZSgpO1xyXG4gICAgfVxyXG4gICAgTWF0cml4My5wcm90b3R5cGUudHJhbnNsYXRlID0gZnVuY3Rpb24gKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgzLm11bHRpcGx5KHRoaXMsIE1hdHJpeDMudHJhbnNsYXRpb24odHgsIHR5KSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXgzLm11bHRpcGx5KHRoaXMsIE1hdHJpeDMucm90YXRpb24ocmFkaWFuKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5wcm90b3R5cGUuc2NhbGUgPSBmdW5jdGlvbiAoc3gsIHN5KSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDMubXVsdGlwbHkodGhpcywgTWF0cml4My5zY2FsaW5nKHN4LCBzeSkpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4My5tdWx0aXBseSh0aGlzLCBtKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4My5wcm90b3R5cGUsIFwiZGV0ZXJtaW5hbnRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4My5kZXRlcm1pbmFudCh0aGlzLnYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXgzLnByb3RvdHlwZSwgXCJ0cmFuc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXgzLnRyYW5zKHRoaXMudik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0cml4My5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHYgPSB0aGlzLnY7XHJcbiAgICAgICAgcmV0dXJuIFwiW1xcbiAgXCIgKyB2WzBdICsgXCIsIFwiICsgdlsxXSArIFwiLCBcIiArIHZbMl0gKyBcIixcXG4gIFwiICsgdlszXSArIFwiLCBcIiArIHZbNF0gKyBcIiwgXCIgKyB2WzVdICsgXCIsXFxuICBcIiArIHZbNl0gKyBcIiwgXCIgKyB2WzddICsgXCIsIFwiICsgdls4XSArIFwiLFxcbl1cIjtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4MywgXCJpZGVudGl0eVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXgzLCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBNYXRyaXgzLnRyYW5zbGF0aW9uID0gZnVuY3Rpb24gKHR4LCB0eSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4MyhbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsXHJcbiAgICAgICAgICAgIHR4LCB0eSwgMVxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMucm90YXRpb24gPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICBjLCAtcywgMCxcclxuICAgICAgICAgICAgcywgYywgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnNjYWxpbmcgPSBmdW5jdGlvbiAoc3gsIHN5KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgc3gsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIHN5LCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDMubXVsdGlwbHkgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciBtID0gTWF0cml4My56ZXJvO1xyXG4gICAgICAgIGZvciAodmFyIHIgPSAwOyByIDwgMzsgKytyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgMzsgKytjKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDM7ICsrbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG0udltyICogMyArIGNdICs9IGEudltyICogMyArIG5dICogYi52W24gKiAzICsgY107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5wcm9qZWN0aW9uID0gZnVuY3Rpb24gKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB2YXIgeCA9IDEgLyB3aWR0aDtcclxuICAgICAgICB2YXIgeSA9IDEgLyBoZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXgzKFtcclxuICAgICAgICAgICAgeCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgeSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLmRldGVybWluYW50ID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICB2YXIgbTAgPSBtWzBdLCBtMSA9IG1bMV0sIG0yID0gbVsyXSwgbTMgPSBtWzNdLCBtNCA9IG1bNF0sIG01ID0gbVs1XSwgbTYgPSBtWzZdLCBtNyA9IG1bN10sIG04ID0gbVs4XTtcclxuICAgICAgICByZXR1cm4gKG0wICogbTQgKiBtOCArIG0xICogbTUgKiBtNiArIG0yICogbTMgKiBtNylcclxuICAgICAgICAgICAgLSAobTIgKiBtNCAqIG02ICsgbTUgKiBtNyAqIG0wICsgbTggKiBtMSAqIG0zKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXgzLnRyYW5zID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDMoW1xyXG4gICAgICAgICAgICBtWzBdLCBtWzNdLCBtWzZdLFxyXG4gICAgICAgICAgICBtWzFdLCBtWzRdLCBtWzddLFxyXG4gICAgICAgICAgICBtWzJdLCBtWzVdLCBtWzhdXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4My5jb2ZhY3RvciA9IGZ1bmN0aW9uIChyLCBjLCBtKSB7XHJcbiAgICAgICAgdmFyIGEgPSBNYXRoLnBvdygoLTEpLCAociArIGMpKTtcclxuICAgICAgICB2YXIgZCA9IG1bMF0gKiBtWzNdIC0gbVsxXSAqIG1bMl07XHJcbiAgICAgICAgcmV0dXJuIGEgKiBkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRyaXgzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNYXRyaXgzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG52YXIgTWF0cml4M18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL01hdHJpeDNcIikpO1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjNcIikpO1xyXG52YXIgTWF0cml4NCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBNYXRyaXg0KHYpIHtcclxuICAgICAgICB0aGlzLnYgPSB2LnNsaWNlKCk7XHJcbiAgICB9XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS50cmFuc2xhdGUgPSBmdW5jdGlvbiAodHgsIHR5LCB0eikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQudHJhbnNsYXRpb24odHgsIHR5LCB0eikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnhSb3RhdGUgPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdHJpeDQubXVsdGlwbHkodGhpcywgTWF0cml4NC54Um90YXRpb24ocmFkaWFuKSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5wcm90b3R5cGUueVJvdGF0ZSA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnlSb3RhdGlvbihyYWRpYW4pKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnByb3RvdHlwZS56Um90YXRlID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHJldHVybiBNYXRyaXg0Lm11bHRpcGx5KHRoaXMsIE1hdHJpeDQuelJvdGF0aW9uKHJhZGlhbikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnNjYWxlID0gZnVuY3Rpb24gKHN4LCBzeSwgc3opIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBNYXRyaXg0LnNjYWxpbmcoc3gsIHN5LCBzeikpO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLm11bHRpcGx5ID0gZnVuY3Rpb24gKG0pIHtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC5tdWx0aXBseSh0aGlzLCBtKTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NC5wcm90b3R5cGUsIFwiaW52ZXJzZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRyaXg0LmludmVyc2UodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hdHJpeDQucHJvdG90eXBlLCBcImRldGVybWluYW50XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdHJpeDQuZGV0ZXJtaW5hbnQodGhpcy52KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTWF0cml4NC5wcm90b3R5cGUsIFwidHJhbnNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0cml4NC50cmFucyh0aGlzLnYpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE1hdHJpeDQucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy52O1xyXG4gICAgICAgIHJldHVybiBcIltcXG4gIFwiICsgdlswXSArIFwiLCBcIiArIHZbMV0gKyBcIiwgXCIgKyB2WzJdICsgXCIsIFwiICsgdlszXSArIFwiXFxuICBcIiArIHZbNF0gKyBcIiwgXCIgKyB2WzVdICsgXCIsIFwiICsgdls2XSArIFwiLCBcIiArIHZbN10gKyBcIlxcbiAgXCIgKyB2WzhdICsgXCIsIFwiICsgdls5XSArIFwiLCBcIiArIHZbMTBdICsgXCIsIFwiICsgdlsxMV0gKyBcIlxcbiAgXCIgKyB2WzEyXSArIFwiLCBcIiArIHZbMTNdICsgXCIsIFwiICsgdlsxNF0gKyBcIiwgXCIgKyB2WzE1XSArIFwiXFxuXVwiO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LCBcImlkZW50aXR5XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXRyaXg0LCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTWF0cml4NC50cmFuc2xhdGlvbiA9IGZ1bmN0aW9uICh0eCwgdHksIHR6KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgdHgsIHR5LCB0eiwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnhSb3RhdGlvbiA9IGZ1bmN0aW9uIChyYWRpYW4pIHtcclxuICAgICAgICB2YXIgYyA9IE1hdGguY29zKHJhZGlhbik7XHJcbiAgICAgICAgdmFyIHMgPSBNYXRoLnNpbihyYWRpYW4pO1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIDEsIDAsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIGMsIHMsIDAsXHJcbiAgICAgICAgICAgIDAsIC1zLCBjLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQueVJvdGF0aW9uID0gZnVuY3Rpb24gKHJhZGlhbikge1xyXG4gICAgICAgIHZhciBjID0gTWF0aC5jb3MocmFkaWFuKTtcclxuICAgICAgICB2YXIgcyA9IE1hdGguc2luKHJhZGlhbik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgYywgMCwgLXMsIDAsXHJcbiAgICAgICAgICAgIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgIHMsIDAsIGMsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC56Um90YXRpb24gPSBmdW5jdGlvbiAocmFkaWFuKSB7XHJcbiAgICAgICAgdmFyIGMgPSBNYXRoLmNvcyhyYWRpYW4pO1xyXG4gICAgICAgIHZhciBzID0gTWF0aC5zaW4ocmFkaWFuKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBjLCAtcywgMCwgMCxcclxuICAgICAgICAgICAgcywgYywgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgMCwgMCwgMCwgMSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LnNjYWxpbmcgPSBmdW5jdGlvbiAoc3gsIHN5LCBzeikge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWF0cml4NChbXHJcbiAgICAgICAgICAgIHN4LCAwLCAwLCAwLFxyXG4gICAgICAgICAgICAwLCBzeSwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgc3osIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDAsIDEsXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5tdWx0aXBseSA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIG0gPSBNYXRyaXg0Lnplcm87XHJcbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCA0OyArK3IpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCA0OyArK2MpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgNDsgKytuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbS52W3IgKiA0ICsgY10gKz0gYS52W3IgKiA0ICsgbl0gKiBiLnZbbiAqIDQgKyBjXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0Lm9ydGhvZ3JhcGhpYyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCwgdG9wLCBib3R0b20sIG5lYXIsIGZhcikge1xyXG4gICAgICAgIHZhciB3ID0gcmlnaHQgLSBsZWZ0O1xyXG4gICAgICAgIHZhciBoID0gYm90dG9tIC0gdG9wO1xyXG4gICAgICAgIHZhciBkID0gZmFyIC0gbmVhcjtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICAyIC8gdywgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMiAvIGgsIDAsIDAsXHJcbiAgICAgICAgICAgIDAsIDAsIDIgLyBkLCAwLFxyXG4gICAgICAgICAgICAwLCAwLCAwLCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQucGVyc3BlY3RpdmUgPSBmdW5jdGlvbiAoZm92WSwgYXNwZWN0LCBuZWFyLCBmYXIpIHtcclxuICAgICAgICB2YXIgZiA9IE1hdGgudGFuKE1hdGguUEkgKiAwLjUgLSAwLjUgKiBmb3ZZKTtcclxuICAgICAgICB2YXIgcmFuZ2VJbnYgPSAxLjAgLyAoZmFyIC0gbmVhcik7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgZiAvIGFzcGVjdCwgMCwgMCwgMCxcclxuICAgICAgICAgICAgMCwgZiwgMCwgMCxcclxuICAgICAgICAgICAgMCwgMCwgKGZhciArIG5lYXIpICogcmFuZ2VJbnYsIDEsXHJcbiAgICAgICAgICAgIDAsIDAsIC0yICogbmVhciAqIGZhciAqIHJhbmdlSW52LCAwLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIE1hdHJpeDQuZGV0ZXJtaW5hbnQgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHZhciBtMCA9IG1bMF0sIG0xID0gbVsxXSwgbTIgPSBtWzJdLCBtMyA9IG1bM10sIG00ID0gbVs0XSwgbTUgPSBtWzVdLCBtNiA9IG1bNl0sIG03ID0gbVs3XSwgbTggPSBtWzhdLCBtOSA9IG1bOV0sIG0xMCA9IG1bMTBdLCBtMTEgPSBtWzExXSwgbTEyID0gbVsxMl0sIG0xMyA9IG1bMTNdLCBtMTQgPSBtWzE0XSwgbTE1ID0gbVsxNV07XHJcbiAgICAgICAgdmFyIHQxID0gbTAgKiBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChbXHJcbiAgICAgICAgICAgIG01LCBtNiwgbTcsXHJcbiAgICAgICAgICAgIG05LCBtMTAsIG0xMSxcclxuICAgICAgICAgICAgbTEzLCBtMTQsIG0xNSxcclxuICAgICAgICBdKTtcclxuICAgICAgICB2YXIgdDIgPSAtbTEgKiBNYXRyaXgzXzEuZGVmYXVsdC5kZXRlcm1pbmFudChbXHJcbiAgICAgICAgICAgIG00LCBtNiwgbTcsXHJcbiAgICAgICAgICAgIG04LCBtMTAsIG0xMSxcclxuICAgICAgICAgICAgbTEyLCBtMTQsIG0xNSxcclxuICAgICAgICBdKTtcclxuICAgICAgICB2YXIgdDMgPSBtMiAqIE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KFtcclxuICAgICAgICAgICAgbTQsIG01LCBtNyxcclxuICAgICAgICAgICAgbTgsIG05LCBtMTEsXHJcbiAgICAgICAgICAgIG0xMiwgbTEzLCBtMTUsXHJcbiAgICAgICAgXSk7XHJcbiAgICAgICAgdmFyIHQ0ID0gLW0zICogTWF0cml4M18xLmRlZmF1bHQuZGV0ZXJtaW5hbnQoW1xyXG4gICAgICAgICAgICBtNCwgbTUsIG02LFxyXG4gICAgICAgICAgICBtOCwgbTksIG0xMCxcclxuICAgICAgICAgICAgbTEyLCBtMTMsIG0xNCxcclxuICAgICAgICBdKTtcclxuICAgICAgICByZXR1cm4gdDEgKyB0MiArIHQzICsgdDQ7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC50cmFucyA9IGZ1bmN0aW9uIChtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBNYXRyaXg0KFtcclxuICAgICAgICAgICAgbVswXSwgbVs0XSwgbVs4XSwgbVsxMl0sXHJcbiAgICAgICAgICAgIG1bMV0sIG1bNV0sIG1bOV0sIG1bMTNdLFxyXG4gICAgICAgICAgICBtWzJdLCBtWzZdLCBtWzEwXSwgbVsxNF0sXHJcbiAgICAgICAgICAgIG1bM10sIG1bN10sIG1bMTFdLCBtWzE1XSxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LmludmVyc2UgPSBmdW5jdGlvbiAobSkge1xyXG4gICAgICAgIHZhciBfYSA9IG0udiwgbTAgPSBfYVswXSwgbTEgPSBfYVsxXSwgbTIgPSBfYVsyXSwgbTMgPSBfYVszXSwgbTQgPSBfYVs0XSwgbTUgPSBfYVs1XSwgbTYgPSBfYVs2XSwgbTcgPSBfYVs3XSwgbTggPSBfYVs4XSwgbTkgPSBfYVs5XSwgbTEwID0gX2FbMTBdLCBtMTEgPSBfYVsxMV0sIG0xMiA9IF9hWzEyXSwgbTEzID0gX2FbMTNdLCBtMTQgPSBfYVsxNF0sIG0xNSA9IF9hWzE1XTtcclxuICAgICAgICB2YXIgZCA9IDEuMCAvIE1hdHJpeDQuZGV0ZXJtaW5hbnQobS52KTtcclxuICAgICAgICB2YXIgYzExID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMSwgMSwgW201LCBtNiwgbTcsIG05LCBtMTAsIG0xMSwgbTEzLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMTIgPSBkICogTWF0cml4NC5jb2ZhY3RvcigxLCAyLCBbbTQsIG02LCBtNywgbTgsIG0xMCwgbTExLCBtMTIsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMxMyA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDEsIDMsIFttNCwgbTUsIG03LCBtOCwgbTksIG0xMSwgbTEyLCBtMTMsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMTQgPSBkICogTWF0cml4NC5jb2ZhY3RvcigxLCA0LCBbbTQsIG01LCBtNiwgbTgsIG05LCBtMTAsIG0xMiwgbTEzLCBtMTRdKTtcclxuICAgICAgICB2YXIgYzIxID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMiwgMSwgW20xLCBtMiwgbTMsIG05LCBtMTAsIG0xMSwgbTEzLCBtMTQsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMjIgPSBkICogTWF0cml4NC5jb2ZhY3RvcigyLCAyLCBbbTAsIG0yLCBtMywgbTgsIG0xMCwgbTExLCBtMTIsIG0xNCwgbTE1XSk7XHJcbiAgICAgICAgdmFyIGMyMyA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDIsIDMsIFttMCwgbTEsIG0zLCBtOCwgbTksIG0xMSwgbTEyLCBtMTMsIG0xNV0pO1xyXG4gICAgICAgIHZhciBjMjQgPSBkICogTWF0cml4NC5jb2ZhY3RvcigyLCA0LCBbbTAsIG0xLCBtMiwgbTgsIG05LCBtMTAsIG0xMiwgbTEzLCBtMTRdKTtcclxuICAgICAgICB2YXIgYzMxID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMywgMSwgW20xLCBtMiwgbTMsIG01LCBtNiwgbTcsIG0xMywgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzMyID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMywgMiwgW20wLCBtMiwgbTMsIG00LCBtNiwgbTcsIG0xMiwgbTE0LCBtMTVdKTtcclxuICAgICAgICB2YXIgYzMzID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMywgMywgW20wLCBtMSwgbTMsIG00LCBtNSwgbTcsIG0xMiwgbTEzLCBtMTVdKTtcclxuICAgICAgICB2YXIgYzM0ID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoMywgNCwgW20wLCBtMSwgbTIsIG00LCBtNSwgbTYsIG0xMiwgbTEzLCBtMTRdKTtcclxuICAgICAgICB2YXIgYzQxID0gZCAqIE1hdHJpeDQuY29mYWN0b3IoNCwgMSwgW20xLCBtMiwgbTMsIG01LCBtNiwgbTcsIG05LCBtMTAsIG0xMV0pO1xyXG4gICAgICAgIHZhciBjNDIgPSBkICogTWF0cml4NC5jb2ZhY3Rvcig0LCAyLCBbbTAsIG0yLCBtMywgbTQsIG02LCBtNywgbTgsIG0xMCwgbTExXSk7XHJcbiAgICAgICAgdmFyIGM0MyA9IGQgKiBNYXRyaXg0LmNvZmFjdG9yKDQsIDMsIFttMCwgbTEsIG0zLCBtNCwgbTUsIG03LCBtOCwgbTksIG0xMV0pO1xyXG4gICAgICAgIHZhciBjNDQgPSBkICogTWF0cml4NC5jb2ZhY3Rvcig0LCA0LCBbbTAsIG0xLCBtMiwgbTQsIG01LCBtNiwgbTgsIG05LCBtMTBdKTtcclxuICAgICAgICByZXR1cm4gTWF0cml4NC50cmFucyhbXHJcbiAgICAgICAgICAgIGMxMSwgYzEyLCBjMTMsIGMxNCxcclxuICAgICAgICAgICAgYzIxLCBjMjIsIGMyMywgYzI0LFxyXG4gICAgICAgICAgICBjMzEsIGMzMiwgYzMzLCBjMzQsXHJcbiAgICAgICAgICAgIGM0MSwgYzQyLCBjNDMsIGM0NCxcclxuICAgICAgICBdKTtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0LmludmVyc2UyID0gZnVuY3Rpb24gKG1hdCkge1xyXG4gICAgICAgIHZhciBtID0gbWF0LnY7XHJcbiAgICAgICAgdmFyIG0wMCA9IG1bMCAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xyXG4gICAgICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIG0wMyA9IG1bMCAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xyXG4gICAgICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XHJcbiAgICAgICAgdmFyIG0xMiA9IG1bMSAqIDQgKyAyXTtcclxuICAgICAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xyXG4gICAgICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XHJcbiAgICAgICAgdmFyIG0yMSA9IG1bMiAqIDQgKyAxXTtcclxuICAgICAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xyXG4gICAgICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XHJcbiAgICAgICAgdmFyIG0zMCA9IG1bMyAqIDQgKyAwXTtcclxuICAgICAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xyXG4gICAgICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XHJcbiAgICAgICAgdmFyIG0zMyA9IG1bMyAqIDQgKyAzXTtcclxuICAgICAgICB2YXIgdG1wXzAgPSBtMjIgKiBtMzM7XHJcbiAgICAgICAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xyXG4gICAgICAgIHZhciB0bXBfMiA9IG0xMiAqIG0zMztcclxuICAgICAgICB2YXIgdG1wXzMgPSBtMzIgKiBtMTM7XHJcbiAgICAgICAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xyXG4gICAgICAgIHZhciB0bXBfNSA9IG0yMiAqIG0xMztcclxuICAgICAgICB2YXIgdG1wXzYgPSBtMDIgKiBtMzM7XHJcbiAgICAgICAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xyXG4gICAgICAgIHZhciB0bXBfOCA9IG0wMiAqIG0yMztcclxuICAgICAgICB2YXIgdG1wXzkgPSBtMjIgKiBtMDM7XHJcbiAgICAgICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcclxuICAgICAgICB2YXIgdG1wXzExID0gbTEyICogbTAzO1xyXG4gICAgICAgIHZhciB0bXBfMTIgPSBtMjAgKiBtMzE7XHJcbiAgICAgICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcclxuICAgICAgICB2YXIgdG1wXzE0ID0gbTEwICogbTMxO1xyXG4gICAgICAgIHZhciB0bXBfMTUgPSBtMzAgKiBtMTE7XHJcbiAgICAgICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcclxuICAgICAgICB2YXIgdG1wXzE3ID0gbTIwICogbTExO1xyXG4gICAgICAgIHZhciB0bXBfMTggPSBtMDAgKiBtMzE7XHJcbiAgICAgICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcclxuICAgICAgICB2YXIgdG1wXzIwID0gbTAwICogbTIxO1xyXG4gICAgICAgIHZhciB0bXBfMjEgPSBtMjAgKiBtMDE7XHJcbiAgICAgICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcclxuICAgICAgICB2YXIgdG1wXzIzID0gbTEwICogbTAxO1xyXG4gICAgICAgIHZhciB0MCA9ICh0bXBfMCAqIG0xMSArIHRtcF8zICogbTIxICsgdG1wXzQgKiBtMzEpIC1cclxuICAgICAgICAgICAgKHRtcF8xICogbTExICsgdG1wXzIgKiBtMjEgKyB0bXBfNSAqIG0zMSk7XHJcbiAgICAgICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxyXG4gICAgICAgICAgICAodG1wXzAgKiBtMDEgKyB0bXBfNyAqIG0yMSArIHRtcF84ICogbTMxKTtcclxuICAgICAgICB2YXIgdDIgPSAodG1wXzIgKiBtMDEgKyB0bXBfNyAqIG0xMSArIHRtcF8xMCAqIG0zMSkgLVxyXG4gICAgICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XHJcbiAgICAgICAgdmFyIHQzID0gKHRtcF81ICogbTAxICsgdG1wXzggKiBtMTEgKyB0bXBfMTEgKiBtMjEpIC1cclxuICAgICAgICAgICAgKHRtcF80ICogbTAxICsgdG1wXzkgKiBtMTEgKyB0bXBfMTAgKiBtMjEpO1xyXG4gICAgICAgIHZhciBkID0gMS4wIC8gKG0wMCAqIHQwICsgbTEwICogdDEgKyBtMjAgKiB0MiArIG0zMCAqIHQzKTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICBkICogdDAsXHJcbiAgICAgICAgICAgIGQgKiB0MSxcclxuICAgICAgICAgICAgZCAqIHQyLFxyXG4gICAgICAgICAgICBkICogdDMsXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xICogbTEwICsgdG1wXzIgKiBtMjAgKyB0bXBfNSAqIG0zMCkgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8wICogbTEwICsgdG1wXzMgKiBtMjAgKyB0bXBfNCAqIG0zMCkpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzApIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMSAqIG0wMCArIHRtcF82ICogbTIwICsgdG1wXzkgKiBtMzApKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzMgKiBtMDAgKyB0bXBfNiAqIG0xMCArIHRtcF8xMSAqIG0zMCkgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzQgKiBtMDAgKyB0bXBfOSAqIG0xMCArIHRtcF8xMCAqIG0yMCkgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF81ICogbTAwICsgdG1wXzggKiBtMTAgKyB0bXBfMTEgKiBtMjApKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzEzICogbTEzICsgdG1wXzE0ICogbTIzICsgdG1wXzE3ICogbTMzKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xMyAqIG0wMyArIHRtcF8xOCAqIG0yMyArIHRtcF8yMSAqIG0zMykgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMTQgKiBtMDMgKyB0bXBfMTkgKiBtMTMgKyB0bXBfMjIgKiBtMzMpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzE2ICogbTAzICsgdG1wXzIxICogbTEzICsgdG1wXzIyICogbTIzKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8xNCAqIG0yMiArIHRtcF8xNyAqIG0zMiArIHRtcF8xMyAqIG0xMikgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpLFxyXG4gICAgICAgICAgICBkICogKCh0bXBfMjAgKiBtMzIgKyB0bXBfMTIgKiBtMDIgKyB0bXBfMTkgKiBtMjIpIC1cclxuICAgICAgICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKSxcclxuICAgICAgICAgICAgZCAqICgodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyKSAtXHJcbiAgICAgICAgICAgICAgICAodG1wXzIyICogbTMyICsgdG1wXzE0ICogbTAyICsgdG1wXzE5ICogbTEyKSksXHJcbiAgICAgICAgICAgIGQgKiAoKHRtcF8yMiAqIG0yMiArIHRtcF8xNiAqIG0wMiArIHRtcF8yMSAqIG0xMikgLVxyXG4gICAgICAgICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpXHJcbiAgICAgICAgXSk7XHJcbiAgICB9O1xyXG4gICAgTWF0cml4NC5jb2ZhY3RvciA9IGZ1bmN0aW9uIChyLCBjLCBtKSB7XHJcbiAgICAgICAgdmFyIGEgPSBNYXRoLnBvdygoLTEpLCAociArIGMpKTtcclxuICAgICAgICB2YXIgZCA9IE1hdHJpeDNfMS5kZWZhdWx0LmRldGVybWluYW50KG0pO1xyXG4gICAgICAgIHJldHVybiBhICogZDtcclxuICAgIH07XHJcbiAgICBNYXRyaXg0Lmxvb2tBdCA9IGZ1bmN0aW9uIChwb3NpdGlvbiwgdGFyZ2V0LCB1cCkge1xyXG4gICAgICAgIHZhciB6ID0gVmVjdG9yM18xLmRlZmF1bHQuc3ViKHRhcmdldCwgcG9zaXRpb24pLm5vcm1hbGl6ZWQ7XHJcbiAgICAgICAgdmFyIHggPSBWZWN0b3IzXzEuZGVmYXVsdC5jcm9zcyh1cCwgeik7XHJcbiAgICAgICAgdmFyIHkgPSBWZWN0b3IzXzEuZGVmYXVsdC5jcm9zcyh6LCB4KTtcclxuICAgICAgICByZXR1cm4gbmV3IE1hdHJpeDQoW1xyXG4gICAgICAgICAgICB4LngsIHgueSwgeC56LCAwLFxyXG4gICAgICAgICAgICB5LngsIHkueSwgeS56LCAwLFxyXG4gICAgICAgICAgICB6LngsIHoueSwgei56LCAwLFxyXG4gICAgICAgICAgICBwb3NpdGlvbi54LCBwb3NpdGlvbi55LCBwb3NpdGlvbi56LCAxLFxyXG4gICAgICAgIF0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYXRyaXg0O1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBNYXRyaXg0O1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xyXG4gICAgICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgICAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcclxuICAgICAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UcmlhbmdsZSA9IGV4cG9ydHMuQm94ID0gZXhwb3J0cy5SZWN0ID0gZXhwb3J0cy5DYXBzdWxlID0gZXhwb3J0cy5FbGxpcHNlID0gZXhwb3J0cy5DaXJjbGUgPSBleHBvcnRzLlNlZ21lbnQgPSBleHBvcnRzLlJheSA9IGV4cG9ydHMuTGluZSA9IHZvaWQgMDtcclxudmFyIFZlY3RvcjJfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9WZWN0b3IyXCIpKTtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBMaW5lID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIExpbmUocCwgdikge1xyXG4gICAgICAgIHRoaXMuX3AgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQocC54LCBwLnkpO1xyXG4gICAgICAgIHRoaXMuX3YgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodi54LCB2LnkpO1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmUucHJvdG90eXBlLCBcInBcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KExpbmUucHJvdG90eXBlLCBcInZcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgTGluZS5wcm90b3R5cGUucG9pbnQgPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQodGhpcy5wLCB0aGlzLnYubm9ybWFsaXplLnRpbWVzKGYpKTtcclxuICAgIH07XHJcbiAgICBMaW5lLnByb3RvdHlwZS5wb2ludHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGhhbGZMZW5ndGggPSBsZW5ndGggLyAyO1xyXG4gICAgICAgIHZhciBwMSA9IHRoaXMucG9pbnQoLWhhbGZMZW5ndGgpO1xyXG4gICAgICAgIHZhciBwMiA9IHRoaXMucG9pbnQoaGFsZkxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIFtwMS54LCBwMS55LCBwMi54LCBwMi55XTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gTGluZTtcclxufSgpKTtcclxuZXhwb3J0cy5MaW5lID0gTGluZTtcclxudmFyIFJheSA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XHJcbiAgICBfX2V4dGVuZHMoUmF5LCBfc3VwZXIpO1xyXG4gICAgZnVuY3Rpb24gUmF5KCkge1xyXG4gICAgICAgIHJldHVybiBfc3VwZXIgIT09IG51bGwgJiYgX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcclxuICAgIH1cclxuICAgIFJheS5wcm90b3R5cGUucG9pbnQgPSBmdW5jdGlvbiAoZikge1xyXG4gICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5hZGQodGhpcy5wLCB0aGlzLnYubm9ybWFsaXplLnRpbWVzKE1hdGguYWJzKGYpKSk7XHJcbiAgICB9O1xyXG4gICAgUmF5LnByb3RvdHlwZS5wb2ludHMgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIHAxID0gdGhpcy5wO1xyXG4gICAgICAgIHZhciBwMiA9IHRoaXMucG9pbnQobGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gW3AxLngsIHAxLnksIHAyLngsIHAyLnldO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSYXk7XHJcbn0oTGluZSkpO1xyXG5leHBvcnRzLlJheSA9IFJheTtcclxudmFyIFNlZ21lbnQgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VnbWVudChwLCB2KSB7XHJcbiAgICAgICAgdGhpcy5fcCA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChwLngsIHAueSk7XHJcbiAgICAgICAgdGhpcy5fdiA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh2LngsIHYueSk7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFNlZ21lbnQucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LmFkZCh0aGlzLl9wLCB0aGlzLnYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwidlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl92OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoU2VnbWVudC5wcm90b3R5cGUsIFwicG9pbnRzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgcyA9IF9hLnAxLCBlID0gX2EucDI7XHJcbiAgICAgICAgICAgIHJldHVybiBbcy54LCBzLnksIGUueCwgZS55XTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gU2VnbWVudDtcclxufSgpKTtcclxuZXhwb3J0cy5TZWdtZW50ID0gU2VnbWVudDtcclxudmFyIENpcmNsZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDaXJjbGUocCwgcikge1xyXG4gICAgICAgIHRoaXMuX3AgPSBwLmNsb25lKCk7XHJcbiAgICAgICAgdGhpcy5fciA9IHI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2lyY2xlLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDaXJjbGUucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX3IgPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQ2lyY2xlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNpcmNsZSA9IENpcmNsZTtcclxudmFyIEVsbGlwc2UgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRWxsaXBzZShwLCByeCwgcnksIGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5fcmFkID0gMDtcclxuICAgICAgICB0aGlzLl9wID0gcC5jbG9uZSgpO1xyXG4gICAgICAgIHRoaXMuX3IgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQocngsIHJ5KTtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwicFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9wOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwiclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwicnhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci54OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwicnlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci55OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRWxsaXBzZS5wcm90b3R5cGUsIFwicmFkXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3JhZDsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEVsbGlwc2UucHJvdG90eXBlLCBcImFuZ2xlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwucmFkMmRlZyh0aGlzLl9yYWQpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fcmFkID0gVXRpbC5kZWcycmFkKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gRWxsaXBzZTtcclxufSgpKTtcclxuZXhwb3J0cy5FbGxpcHNlID0gRWxsaXBzZTtcclxudmFyIENhcHN1bGUgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ2Fwc3VsZShzLCByKSB7XHJcbiAgICAgICAgdGhpcy5fcyA9IHM7XHJcbiAgICAgICAgdGhpcy5fciA9IHI7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2Fwc3VsZS5wcm90b3R5cGUsIFwic1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9zOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQ2Fwc3VsZS5wcm90b3R5cGUsIFwiclwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9yOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fciA9IHY7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBDYXBzdWxlO1xyXG59KCkpO1xyXG5leHBvcnRzLkNhcHN1bGUgPSBDYXBzdWxlO1xyXG52YXIgUmVjdCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSZWN0KHAsIHcsIGgpIHtcclxuICAgICAgICB0aGlzLl9wID0gcDtcclxuICAgICAgICB0aGlzLl93ID0gdztcclxuICAgICAgICB0aGlzLl9oID0gaDtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJ3XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3c7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl93ID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcImhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5faDsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2ggPSB2OyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wLmNsb25lKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlY3QucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLnAueCArIHRoaXMudywgdGhpcy5wLnkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWN0LnByb3RvdHlwZSwgXCJwM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMl8xLmRlZmF1bHQodGhpcy5wLnggKyB0aGlzLncsIHRoaXMucC55IC0gdGhpcy5oKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUmVjdC5wcm90b3R5cGUsIFwicDRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMucC54LCB0aGlzLnAueSAtIHRoaXMuaCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIFJlY3Q7XHJcbn0oKSk7XHJcbmV4cG9ydHMuUmVjdCA9IFJlY3Q7XHJcbnZhciBCb3ggPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQm94KHAsIHIsIGFuZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5fcmFkID0gMDtcclxuICAgICAgICB0aGlzLl9wID0gcDtcclxuICAgICAgICB0aGlzLl9yID0gcjtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gYW5nbGU7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3A7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicnhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci54OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fci54ID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicnlcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fci55OyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fci55ID0gdjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwid1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnJ4ICogMjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwiaFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLnJ5ICogMjsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwiYW5nbGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC5yYWQyZGVnKHRoaXMuX3JhZCk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9yYWQgPSBVdGlsLmRlZzJyYWQodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInAxXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCgtdGhpcy5fci54LCB0aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInAyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyXzEuZGVmYXVsdCh0aGlzLl9yLngsIHRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KHRoaXMuX3IueCwgLXRoaXMuX3IueSkucm90YXRlKHRoaXMuX3JhZCkuYWRkKHRoaXMucCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwicDRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KC10aGlzLl9yLngsIC10aGlzLl9yLnkpLnJvdGF0ZSh0aGlzLl9yYWQpLmFkZCh0aGlzLnApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInYxdG8yXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAyLCB0aGlzLnAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQm94LnByb3RvdHlwZSwgXCJ2MnRvM1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5wMywgdGhpcy5wMik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEJveC5wcm90b3R5cGUsIFwidjN0bzRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMucDQsIHRoaXMucDMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShCb3gucHJvdG90eXBlLCBcInY0dG8xXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAxLCB0aGlzLnA0KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gQm94O1xyXG59KCkpO1xyXG5leHBvcnRzLkJveCA9IEJveDtcclxudmFyIFRyaWFuZ2xlID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyaWFuZ2xlKHAxLCBwMiwgcDMpIHtcclxuICAgICAgICB0aGlzLl9wMSA9IHAxO1xyXG4gICAgICAgIHRoaXMuX3AyID0gcDI7XHJcbiAgICAgICAgdGhpcy5fcDMgPSBwMztcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDE7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDI7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicDNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fcDM7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZS5wcm90b3R5cGUsIFwicG9pbnRzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3AxLngsIHRoaXMuX3AxLnksXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wMi54LCB0aGlzLl9wMi55LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcDMueCwgdGhpcy5fcDMueSxcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYxdG8yXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAyLCB0aGlzLnAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYydG8zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAzLCB0aGlzLnAyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUucHJvdG90eXBlLCBcInYzdG8xXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLnAxLCB0aGlzLnAzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gVHJpYW5nbGU7XHJcbn0oKSk7XHJcbmV4cG9ydHMuVHJpYW5nbGUgPSBUcmlhbmdsZTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2NyZWF0ZUJpbmRpbmcgPSAodGhpcyAmJiB0aGlzLl9fY3JlYXRlQmluZGluZykgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KSk7XHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9fc2V0TW9kdWxlRGVmYXVsdCkgfHwgKE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufSk7XHJcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbnZhciBRdWFkcmF0aWMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUXVhZHJhdGljKCkge1xyXG4gICAgICAgIHRoaXMuX2EgPSAwO1xyXG4gICAgICAgIHRoaXMuX2IgPSAwO1xyXG4gICAgICAgIHRoaXMuX2MgPSAwO1xyXG4gICAgICAgIHRoaXMuX2EgPSB0aGlzLl9iID0gdGhpcy5fYyA9IDA7XHJcbiAgICB9XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJhXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFV0aWwudW5pZnlTaWduKHRoaXMuX2EpOyB9LFxyXG4gICAgICAgIHNldDogZnVuY3Rpb24gKHYpIHsgdGhpcy5fYSA9IE51bWJlcih2KTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBVdGlsLnVuaWZ5U2lnbih0aGlzLl9iKTsgfSxcclxuICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2KSB7IHRoaXMuX2IgPSBOdW1iZXIodik7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gVXRpbC51bmlmeVNpZ24odGhpcy5fYyk7IH0sXHJcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodikgeyB0aGlzLl9jID0gTnVtYmVyKHYpOyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFV0aWwudW5pZnlTaWduKFF1YWRyYXRpYy5jYWxjUF9CeV9hYih0aGlzLmEsIHRoaXMuYikpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVXRpbC51bmlmeVNpZ24oUXVhZHJhdGljLmNhbGNRX0J5X2FiYyh0aGlzLmEsIHRoaXMuYiwgdGhpcy5jKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0R2VuZXJhbEZvcm0gPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhLCB0aGlzLl9iID0gYiwgdGhpcy5fYyA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0U3RhbmRhcmRGb3JtID0gZnVuY3Rpb24gKGEsIHAsIHEpIHtcclxuICAgICAgICB0aGlzLl9hID0gYTtcclxuICAgICAgICB0aGlzLl9iID0gUXVhZHJhdGljLmNhbGNCX0J5X2FwKGEsIHApO1xyXG4gICAgICAgIHRoaXMuX2MgPSBRdWFkcmF0aWMuY2FsY0NfQnlfcHEoYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0RmFjdG9yaXphdGlvbkZvcm0gPSBmdW5jdGlvbiAoYSwgcywgdCkge1xyXG4gICAgICAgIHRoaXMuX2EgPSBhO1xyXG4gICAgICAgIHRoaXMuX2IgPSBRdWFkcmF0aWMuY2FsY0JfQnlfYXN0KGEsIHMsIHQpO1xyXG4gICAgICAgIHRoaXMuX2MgPSBRdWFkcmF0aWMuY2FsY0NfQnlfYXN0KGEsIHMsIHQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUuaW5pdEJ5QXBleEFuZFBhc3NQb2ludCA9IGZ1bmN0aW9uIChwLCBxLCB4LCB5KSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfcHF4eShwLCBxLCB4LCB5KTtcclxuICAgICAgICB0aGlzLmluaXRTdGFuZGFyZEZvcm0oYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnlBeGlzQW5kMlBhc3NQb2ludHMgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfYXhpeFhfeDF5MV94MnkyKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdmFyIHEgPSBRdWFkcmF0aWMuY2FsY1FfQnlfYXhpeFhfeDF5MV94MnkyKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mik7XHJcbiAgICAgICAgdmFyIHAgPSBheGlzWDtcclxuICAgICAgICB0aGlzLmluaXRTdGFuZGFyZEZvcm0oYSwgcCwgcSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5pbml0QnkzUGFzc1BvaW50cyA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcbiAgICAgICAgdmFyIGEgPSBRdWFkcmF0aWMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGIgPSBRdWFkcmF0aWMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGMgPSBRdWFkcmF0aWMuY2FsY0NfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdGhpcy5pbml0R2VuZXJhbEZvcm0oYSwgYiwgYyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5meCA9IGZ1bmN0aW9uICh4KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgcCA9IF9kLnAsIHEgPSBfZC5xO1xyXG4gICAgICAgIHJldHVybiBhICogKCh4IC0gcCkgKiAoeCAtIHApKSArIHE7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5nZXRQb2ludHMgPSBmdW5jdGlvbiAoZnJvbVgsIHRvWCwgc3RlcCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIHZhciBwID0gW107XHJcbiAgICAgICAgdG9YICs9IHN0ZXAgKiAwLjE7XHJcbiAgICAgICAgZm9yICh2YXIgeCA9IGZyb21YOyB4IDw9IHRvWDsgeCArPSBzdGVwKSB7XHJcbiAgICAgICAgICAgIHAucHVzaCh4LCB0aGlzLmZ4KHgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHA7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS5nZXRQb2ludHNPZlNsb3BlQXRZVGFuZ2VudCA9IGZ1bmN0aW9uIChmcm9tWCwgdG9YKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgdmFyIHkxID0gdGhpcy5iICogZnJvbVggKyB0aGlzLmM7XHJcbiAgICAgICAgdmFyIHkyID0gdGhpcy5iICogdG9YICsgdGhpcy5jO1xyXG4gICAgICAgIHJldHVybiBbZnJvbVgsIHkxLCB0b1gsIHkyXTtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJhcGV4XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgeDogdGhpcy5wLCB5OiB0aGlzLnEgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJheGlzXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucDtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc0ludmFsaWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIVF1YWRyYXRpYy5pc1ZhbGlkQSh0aGlzLmEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImhhc0FwZXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuaGFzQXBleChwLCBxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJtYXhcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoMCA8PSB0aGlzLmEpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcGV4Lnk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFF1YWRyYXRpYy5wcm90b3R5cGUsIFwibWluXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYSA8PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBleC55O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcImRpc2NyaW1pbmFudFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfZCA9IHRoaXMsIGEgPSBfZC5hLCBiID0gX2QuYiwgYyA9IF9kLmM7XHJcbiAgICAgICAgICAgIHJldHVybiBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShRdWFkcmF0aWMucHJvdG90eXBlLCBcInNvbHV0aW9uXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9kID0gdGhpcywgYSA9IF9kLmEsIGIgPSBfZC5iLCBjID0gX2QuYztcclxuICAgICAgICAgICAgcmV0dXJuIFF1YWRyYXRpYy5zb2x1dGlvbihhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc1Bvc2l0aXZlRGVmaW5pdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmlzUG9zaXRpdmVEZWZpbml0ZShhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoUXVhZHJhdGljLnByb3RvdHlwZSwgXCJpc05lZ2F0aXZlRGVmaW5pdGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jO1xyXG4gICAgICAgICAgICByZXR1cm4gUXVhZHJhdGljLmlzTmVnYXRpdmVEZWZpbml0ZShhLCBiLCBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZTbG9wZSA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYS50b0ZpeGVkKGZpeGVkKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZBeGlzID0gZnVuY3Rpb24gKGZpeGVkKSB7XHJcbiAgICAgICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmhhc0FwZXgpXHJcbiAgICAgICAgICAgIHJldHVybiBcIuOBquOBl1wiO1xyXG4gICAgICAgIHZhciBheGlzID0gdGhpcy5heGlzLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIng9XCIgKyBheGlzO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5wcm90b3R5cGUudG9TdHJpbmdPZkFwZXggPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAoIXRoaXMuaGFzQXBleClcclxuICAgICAgICAgICAgcmV0dXJuIFwi44Gq44GXXCI7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmFwZXgueC50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgeSA9IHRoaXMuYXBleC55LnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIihcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ09mTGF0ZXhBUFEgPSBmdW5jdGlvbiAoZml4ZWQpIHtcclxuICAgICAgICBpZiAoZml4ZWQgPT09IHZvaWQgMCkgeyBmaXhlZCA9IDE7IH1cclxuICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiBcIm5vbmVcIjtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuYS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgcCA9IHRoaXMucC50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICB2YXIgcSA9IHRoaXMucS50b0ZpeGVkKGZpeGVkKTtcclxuICAgICAgICByZXR1cm4gXCIkJHk9XCIgKyBhICsgXCIoeCAtIChcIiArIHAgKyBcIikpXjIgKyAoXCIgKyBxICsgXCIpJCRcIjtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMucHJvdG90eXBlLnRvU3RyaW5nT2ZMYXRleEFCQyA9IGZ1bmN0aW9uIChmaXhlZCkge1xyXG4gICAgICAgIGlmIChmaXhlZCA9PT0gdm9pZCAwKSB7IGZpeGVkID0gMTsgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgcmV0dXJuIFwibm9uZVwiO1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5hLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBiID0gdGhpcy5iLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHZhciBjID0gdGhpcy5jLnRvRml4ZWQoZml4ZWQpO1xyXG4gICAgICAgIHJldHVybiBcIiQkeT1cIiArIGEgKyBcInheMiArIChcIiArIGIgKyBcIil4ICsgKFwiICsgYyArIFwiKSQkXCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZ0Fib3V0U2hhcGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGEgPSB0aGlzLmE7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICBpZiAoYSA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwi5LiK44Gr5Ye4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCLkuIvjgavlh7hcIjtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX2QgPSB0aGlzLCBhID0gX2QuYSwgYiA9IF9kLmIsIGMgPSBfZC5jLCBwID0gX2QucCwgcSA9IF9kLnE7XHJcbiAgICAgICAgcmV0dXJuIFwie2E6XCIgKyBhICsgXCIsIGI6XCIgKyBiICsgXCIsIGM6XCIgKyBjICsgXCIsIHA6XCIgKyBwICsgXCIsIHE6XCIgKyBxICsgXCJ9XCI7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNQX0J5X2FiID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICByZXR1cm4gLWIgLyAoMiAqIGEpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjUV9CeV9hYmMgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHJldHVybiAtKChNYXRoLnBvdyhiLCAyKSkgLSAoNCAqIGEgKiBjKSkgLyAoNCAqIGEpO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQl9CeV9hcCA9IGZ1bmN0aW9uIChhLCBwKSB7XHJcbiAgICAgICAgcmV0dXJuIC0yICogYSAqIHA7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X2FzdCA9IGZ1bmN0aW9uIChhLCBzLCB0KSB7XHJcbiAgICAgICAgcmV0dXJuICgtYSAqIHQpICsgKC1hICogcyk7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNDX0J5X3BxID0gZnVuY3Rpb24gKGEsIHAsIHEpIHtcclxuICAgICAgICByZXR1cm4gYSAqIE1hdGgucG93KHAsIDIpICsgcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfYXN0ID0gZnVuY3Rpb24gKGEsIHMsIHQpIHtcclxuICAgICAgICByZXR1cm4gYSAqIHMgKiB0O1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV9wcXh5ID0gZnVuY3Rpb24gKHAsIHEsIHgsIHkpIHtcclxuICAgICAgICB2YXIgbnVtZSA9IHkgLSBxO1xyXG4gICAgICAgIHZhciBkZW5vID0gTWF0aC5wb3coKHggLSBwKSwgMik7XHJcbiAgICAgICAgcmV0dXJuIG51bWUgLyBkZW5vO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIgPSBmdW5jdGlvbiAoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5MSAtIHkyO1xyXG4gICAgICAgIHZhciBkZW5vID0gKE1hdGgucG93KCh4MSAtIGF4aXNYKSwgMikpIC0gKE1hdGgucG93KCh4MiAtIGF4aXNYKSwgMikpO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY1FfQnlfYXhpeFhfeDF5MV94MnkyID0gZnVuY3Rpb24gKGF4aXNYLCB4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV9heGl4WF94MXkxX3gyeTIoYXhpc1gsIHgxLCB5MSwgeDIsIHkyKTtcclxuICAgICAgICB2YXIgcSA9IHkxIC0gKGEgKiBNYXRoLnBvdygoeDEgLSBheGlzWCksIDIpKTtcclxuICAgICAgICByZXR1cm4gcTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBudW1lID0gKCh5MSAtIHkyKSAqICh4MSAtIHgzKSAtICh5MSAtIHkzKSAqICh4MSAtIHgyKSk7XHJcbiAgICAgICAgdmFyIGRlbm8gPSAoKHgxIC0geDIpICogKHgxIC0geDMpICogKHgyIC0geDMpKTtcclxuICAgICAgICByZXR1cm4gbnVtZSAvIGRlbm87XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmNhbGNCX0J5X3gxeTFfeDJ5Ml94M3kzID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuICAgICAgICB2YXIgYSA9IHRoaXMuY2FsY0FfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIG51bWUgPSB5MSAtIHkyIC0gKGEgKiAoTWF0aC5wb3coeDEsIDIpIC0gTWF0aC5wb3coeDIsIDIpKSk7XHJcbiAgICAgICAgdmFyIGRlbm8gPSB4MSAtIHgyO1xyXG4gICAgICAgIHJldHVybiBudW1lIC8gZGVubztcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuY2FsY0NfQnlfeDF5MV94MnkyX3gzeTMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG4gICAgICAgIHZhciBhID0gdGhpcy5jYWxjQV9CeV94MXkxX3gyeTJfeDN5Myh4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKTtcclxuICAgICAgICB2YXIgYiA9IHRoaXMuY2FsY0JfQnlfeDF5MV94MnkyX3gzeTMoeDEsIHkxLCB4MiwgeTIsIHgzLCB5Myk7XHJcbiAgICAgICAgdmFyIGMgPSB5MSArICgtYSAqICh4MSAqIHgxKSAtIGIgKiB4MSk7XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmRpc2NyaW1pbmFudCA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7XHJcbiAgICAgICAgcmV0dXJuIChNYXRoLnBvdyhiLCAyKSkgLSAoNCAqIGEgKiBjKTtcclxuICAgIH07XHJcbiAgICBRdWFkcmF0aWMuc29sdXRpb24gPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIHZhciBkID0gUXVhZHJhdGljLmRpc2NyaW1pbmFudChhLCBiLCBjKTtcclxuICAgICAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICBpZiAoZCA8IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB2YXIgZGVubyA9IDIgKiBhO1xyXG4gICAgICAgIHZhciB4MSA9IFV0aWwudW5pZnlTaWduKCgtYiAtIE1hdGguc3FydChkKSkgLyBkZW5vKTtcclxuICAgICAgICB2YXIgeDIgPSBVdGlsLnVuaWZ5U2lnbigoLWIgKyBNYXRoLnNxcnQoZCkpIC8gZGVubyk7XHJcbiAgICAgICAgaWYgKGQgPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiBbeDFdO1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5taW4oeDEsIHgyKSwgTWF0aC5tYXgoeDEsIHgyKV07XHJcbiAgICB9O1xyXG4gICAgUXVhZHJhdGljLmlzVmFsaWRBID0gZnVuY3Rpb24gKGEpIHtcclxuICAgICAgICBpZiAoYSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChpc05hTihhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChJbmZpbml0eSA9PSBNYXRoLmFicyhhKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5oYXNBcGV4ID0gZnVuY3Rpb24gKHAsIHEpIHtcclxuICAgICAgICBpZiAoaXNOYU4ocCkgfHwgaXNOYU4ocSkpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAoSW5maW5pdHkgPT09IE1hdGguYWJzKHApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKEluZmluaXR5ID09PSBNYXRoLmFicyhxKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pc1Bvc2l0aXZlRGVmaW5pdGUgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIGlmICghUXVhZHJhdGljLmlzVmFsaWRBKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKGEgPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIHJldHVybiAoZCA8IDApO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pc05lZ2F0aXZlRGVmaW5pdGUgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xyXG4gICAgICAgIGlmICghUXVhZHJhdGljLmlzVmFsaWRBKGEpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKDAgPCBhKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGQgPSBRdWFkcmF0aWMuZGlzY3JpbWluYW50KGEsIGIsIGMpO1xyXG4gICAgICAgIHJldHVybiAoZCA8IDApO1xyXG4gICAgfTtcclxuICAgIFF1YWRyYXRpYy5pbnRlcnNlY3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7XHJcbiAgICAgICAgICAgIGNvdW50OiAwLFxyXG4gICAgICAgICAgICBwb2ludHM6IFtdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoYS5pc0ludmFsaWQgfHwgYi5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgaWYgKGEuYSAtIGIuYSA9PT0gMCkge1xyXG4gICAgICAgICAgICB2YXIgbnVtZSA9IGIuYyAtIGEuYztcclxuICAgICAgICAgICAgdmFyIGRlbm8gPSBhLmIgLSBiLmI7XHJcbiAgICAgICAgICAgIGlmIChkZW5vID09PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgdmFyIHggPSBudW1lIC8gZGVubztcclxuICAgICAgICAgICAgdmFyIHkgPSBhLmZ4KHgpO1xyXG4gICAgICAgICAgICByZXN1bHQuY291bnQgPSAxO1xyXG4gICAgICAgICAgICByZXN1bHQucG9pbnRzLnB1c2goeCwgeSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjID0gbmV3IFF1YWRyYXRpYygpLmluaXRHZW5lcmFsRm9ybShhLmEgLSBiLmEsIGEuYiAtIGIuYiwgYS5jIC0gYi5jKTtcclxuICAgICAgICB2YXIgcHggPSBjLnNvbHV0aW9uO1xyXG4gICAgICAgIGlmIChweCA9PT0gdW5kZWZpbmVkIHx8IHB4Lmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICBweC5tYXAoZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICAgICAgcmVzdWx0LmNvdW50Kys7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wb2ludHMucHVzaCh4LCBhLmZ4KHgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfTtcclxuICAgIHJldHVybiBRdWFkcmF0aWM7XHJcbn0oKSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFF1YWRyYXRpYztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XHJcbn07XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5UeXBlID0gdm9pZCAwO1xyXG52YXIgVmVjdG9yMl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjJcIikpO1xyXG52YXIgVHlwZTtcclxuKGZ1bmN0aW9uIChUeXBlKSB7XHJcbiAgICBUeXBlW1R5cGVbXCJOb25lXCJdID0gMF0gPSBcIk5vbmVcIjtcclxuICAgIFR5cGVbVHlwZVtcIlJpZ2h0XCJdID0gMV0gPSBcIlJpZ2h0XCI7XHJcbiAgICBUeXBlW1R5cGVbXCJBY3V0ZVwiXSA9IDJdID0gXCJBY3V0ZVwiO1xyXG4gICAgVHlwZVtUeXBlW1wiT2J0dXNlXCJdID0gM10gPSBcIk9idHVzZVwiO1xyXG59KShUeXBlID0gZXhwb3J0cy5UeXBlIHx8IChleHBvcnRzLlR5cGUgPSB7fSkpO1xyXG52YXIgVHJpYW5nbGUyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRyaWFuZ2xlMihwKSB7XHJcbiAgICAgICAgaWYgKHAgPT09IHZvaWQgMCkgeyBwID0gW107IH1cclxuICAgICAgICB2YXIgYXggPSBwWzBdID8gcFswXSA6IDA7XHJcbiAgICAgICAgdmFyIGF5ID0gcFsxXSA/IHBbMV0gOiAwO1xyXG4gICAgICAgIHZhciBieCA9IHBbMl0gPyBwWzJdIDogMDtcclxuICAgICAgICB2YXIgYnkgPSBwWzNdID8gcFszXSA6IDA7XHJcbiAgICAgICAgdmFyIGN4ID0gcFs0XSA/IHBbNF0gOiAwO1xyXG4gICAgICAgIHZhciBjeSA9IHBbNV0gPyBwWzVdIDogMDtcclxuICAgICAgICB0aGlzLl9BID0gbmV3IFZlY3RvcjJfMS5kZWZhdWx0KGF4LCBheSk7XHJcbiAgICAgICAgdGhpcy5fQiA9IG5ldyBWZWN0b3IyXzEuZGVmYXVsdChieCwgYnkpO1xyXG4gICAgICAgIHRoaXMuX0MgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoY3gsIGN5KTtcclxuICAgIH1cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fQTsgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9COyB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX0M7IH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIkFCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0LnN1Yih0aGlzLkIsIHRoaXMuQSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiQkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuc3ViKHRoaXMuQywgdGhpcy5CKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJDQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyXzEuZGVmYXVsdC5zdWIodGhpcy5BLCB0aGlzLkMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5CQy5tYWduaXR1ZGU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiYlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkNBLm1hZ25pdHVkZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuQUIubWFnbml0dWRlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNvcnRlZExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gW2EsIGIsIGNdO1xyXG4gICAgICAgICAgICBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGIgLSBhOyB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4U2lkZU5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLnNvcnRlZExlbmd0aDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGxpc3RbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgYzogcmV0dXJuIFwiQUJcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgYTogcmV0dXJuIFwiQkNcIjtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBcIkNBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5TaWRlTmFtZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHN3aXRjaCAobGlzdFsyXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBjOiByZXR1cm4gXCJBQlwiO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhOiByZXR1cm4gXCJCQ1wiO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIFwiQ0FcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0TGVuZ3RoQXQgPSBmdW5jdGlvbiAoc2lkZU5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKHNpZGVOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCQ1wiOiByZXR1cm4gdGhpcy5hO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ0FcIjogcmV0dXJuIHRoaXMuYjtcclxuICAgICAgICAgICAgY2FzZSBcIkFCXCI6IHJldHVybiB0aGlzLmM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heExlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aEF0KHRoaXMubWF4U2lkZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkxlbmd0aFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExlbmd0aEF0KHRoaXMubWluU2lkZU5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lck5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2lkZSA9IHRoaXMubWF4U2lkZU5hbWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiBcIkFcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gXCJCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lck5hbWVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2lkZSA9IHRoaXMubWluU2lkZU5hbWU7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2lkZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJDXCI6IHJldHVybiBcIkFcIjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJDQVwiOiByZXR1cm4gXCJCXCI7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQUJcIjogcmV0dXJuIFwiQ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImNvc0FcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIG4gPSAoTWF0aC5wb3coYiwgMikpICsgKE1hdGgucG93KGMsIDIpKSAtIChNYXRoLnBvdyhhLCAyKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMiAqIGIgKiBjO1xyXG4gICAgICAgICAgICB2YXIgY29zID0gbiAvIGQ7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3M7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiY29zQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jO1xyXG4gICAgICAgICAgICB2YXIgbiA9IChNYXRoLnBvdyhjLCAyKSkgKyAoTWF0aC5wb3coYSwgMikpIC0gKE1hdGgucG93KGIsIDIpKTtcclxuICAgICAgICAgICAgdmFyIGQgPSAyICogYyAqIGE7XHJcbiAgICAgICAgICAgIHZhciBjb3MgPSBuIC8gZDtcclxuICAgICAgICAgICAgcmV0dXJuIGNvcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjb3NDXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGEgPSBfYS5hLCBiID0gX2EuYiwgYyA9IF9hLmM7XHJcbiAgICAgICAgICAgIHZhciBuID0gKE1hdGgucG93KGEsIDIpKSArIChNYXRoLnBvdyhiLCAyKSkgLSAoTWF0aC5wb3coYywgMikpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IDIgKiBhICogYjtcclxuICAgICAgICAgICAgdmFyIGNvcyA9IG4gLyBkO1xyXG4gICAgICAgICAgICByZXR1cm4gY29zO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0EgPSB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NBLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0IgPSB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NCLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInNpbkNcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHZhciBzaW4gPSBNYXRoLnNxcnQoMSAtIChNYXRoLnBvdyhjb3NDLCAyKSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInRhbkFcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgc2luQSA9IF9hLnNpbkEsIGNvc0EgPSBfYS5jb3NBO1xyXG4gICAgICAgICAgICByZXR1cm4gc2luQSAvIGNvc0E7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwidGFuQlwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBzaW5CID0gX2Euc2luQiwgY29zQiA9IF9hLmNvc0I7XHJcbiAgICAgICAgICAgIHJldHVybiBzaW5CIC8gY29zQjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJ0YW5DXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHNpbkMgPSBfYS5zaW5DLCBjb3NDID0gX2EuY29zQztcclxuICAgICAgICAgICAgcmV0dXJuIHNpbkMgLyBOdW1iZXIoY29zQy50b0ZpeGVkKDE1KSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVHJpYW5nbGUyLnByb3RvdHlwZS5nZXRDb3NBdCA9IGZ1bmN0aW9uIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgc3dpdGNoIChjb3JuZXJOYW1lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJBXCI6IHJldHVybiB0aGlzLmNvc0E7XHJcbiAgICAgICAgICAgIGNhc2UgXCJCXCI6IHJldHVybiB0aGlzLmNvc0I7XHJcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6IHJldHVybiB0aGlzLmNvc0M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1heENvcm5lckNvc1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvc0F0KHRoaXMubWF4Q29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWluQ29ybmVyQ29zXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29zQXQodGhpcy5taW5Db3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBUcmlhbmdsZTIucHJvdG90eXBlLmdldFNpbkF0ID0gZnVuY3Rpb24gKGNvcm5lck5hbWUpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvcm5lck5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcIkFcIjogcmV0dXJuIHRoaXMuc2luQTtcclxuICAgICAgICAgICAgY2FzZSBcIkJcIjogcmV0dXJuIHRoaXMuc2luQjtcclxuICAgICAgICAgICAgY2FzZSBcIkNcIjogcmV0dXJuIHRoaXMuc2luQztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwibWF4Q29ybmVyU2luXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2luQXQodGhpcy5tYXhDb3JuZXJOYW1lKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtaW5Db3JuZXJTaW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRTaW5BdCh0aGlzLm1pbkNvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUuZ2V0VGFuQXQgPSBmdW5jdGlvbiAoY29ubmVyTmFtZSkge1xyXG4gICAgICAgIHN3aXRjaCAoY29ubmVyTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiQVwiOiByZXR1cm4gdGhpcy50YW5BO1xyXG4gICAgICAgICAgICBjYXNlIFwiQlwiOiByZXR1cm4gdGhpcy50YW5CO1xyXG4gICAgICAgICAgICBjYXNlIFwiQ1wiOiByZXR1cm4gdGhpcy50YW5DO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJtYXhDb3JuZXJUYW5cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUYW5BdCh0aGlzLm1heENvcm5lck5hbWUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm1pbkNvcm5lclRhblwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRhbkF0KHRoaXMubWluQ29ybmVyTmFtZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwicmFkQVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgY29zQSA9IHRoaXMuY29zQTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3NBKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJyYWRCXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgIHZhciBjb3NCID0gdGhpcy5jb3NCO1xyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5hY29zKGNvc0IpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInJhZENcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgdmFyIGNvc0MgPSB0aGlzLmNvc0M7XHJcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmFjb3MoY29zQyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiYXJlYVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGIgPSBfYS5iLCBjID0gX2EuYywgc2luQSA9IF9hLnNpbkE7XHJcbiAgICAgICAgICAgIHJldHVybiAoYiAqIGMgKiBzaW5BKSAqIDAuNTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJvdXRlclJhZGl1c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgc2luQSA9IF9hLnNpbkE7XHJcbiAgICAgICAgICAgIHJldHVybiBhIC8gKDIgKiBzaW5BKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJpbm5lclJhZGl1c1wiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSW52YWxpZClcclxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBhID0gX2EuYSwgYiA9IF9hLmIsIGMgPSBfYS5jLCBhcmVhID0gX2EuYXJlYTtcclxuICAgICAgICAgICAgcmV0dXJuICgyICogYXJlYSkgLyAoYSArIGIgKyBjKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVHJpYW5nbGUyLnByb3RvdHlwZSwgXCJjZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQztcclxuICAgICAgICAgICAgdmFyIGcgPSBuZXcgVmVjdG9yMl8xLmRlZmF1bHQoKS5hZGQoQSkuYWRkKEIpLmFkZChDKS50aW1lcygxIC8gMyk7XHJcbiAgICAgICAgICAgIHJldHVybiBnO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcIm91dGVyQ2VudGVyXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJbnZhbGlkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjJfMS5kZWZhdWx0Lnplcm87XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIEEgPSBfYS5BLCBCID0gX2EuQiwgQyA9IF9hLkMsIHJhZEEgPSBfYS5yYWRBLCByYWRCID0gX2EucmFkQiwgcmFkQyA9IF9hLnJhZEM7XHJcbiAgICAgICAgICAgIHZhciBzaW4yQSA9IE1hdGguc2luKHJhZEEgKiAyKTtcclxuICAgICAgICAgICAgdmFyIHNpbjJCID0gTWF0aC5zaW4ocmFkQiAqIDIpO1xyXG4gICAgICAgICAgICB2YXIgc2luMkMgPSBNYXRoLnNpbihyYWRDICogMik7XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSBBLmNsb25lKCkudGltZXMoc2luMkEpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEIuY2xvbmUoKS50aW1lcyhzaW4yQikpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEMuY2xvbmUoKS50aW1lcyhzaW4yQykpO1xyXG4gICAgICAgICAgICB2YXIgZCA9IHNpbjJBICsgc2luMkIgKyBzaW4yQztcclxuICAgICAgICAgICAgcmV0dXJuIGNlbnRlci50aW1lcygxIC8gZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFRyaWFuZ2xlMi5wcm90b3R5cGUsIFwiaW5uZXJDZW50ZXJcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMl8xLmRlZmF1bHQuemVybztcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQywgYSA9IF9hLmEsIGIgPSBfYS5iLCBjID0gX2EuYztcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IEEuY2xvbmUoKS50aW1lcyhhKVxyXG4gICAgICAgICAgICAgICAgLmFkZChCLmNsb25lKCkudGltZXMoYikpXHJcbiAgICAgICAgICAgICAgICAuYWRkKEMuY2xvbmUoKS50aW1lcyhjKSk7XHJcbiAgICAgICAgICAgIHZhciBkID0gMSAvIChhICsgYiArIGMpO1xyXG4gICAgICAgICAgICByZXR1cm4gY2VudGVyLnRpbWVzKGQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcImlzSW52YWxpZFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBsaXN0ID0gdGhpcy5zb3J0ZWRMZW5ndGg7XHJcbiAgICAgICAgICAgIHZhciBhID0gbGlzdFswXSwgYiA9IGxpc3RbMV0sIGMgPSBsaXN0WzJdO1xyXG4gICAgICAgICAgICByZXR1cm4gIShhIDwgYiArIGMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShUcmlhbmdsZTIucHJvdG90eXBlLCBcInR5cGVcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0ludmFsaWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5Ob25lO1xyXG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuc29ydGVkTGVuZ3RoO1xyXG4gICAgICAgICAgICB2YXIgbWF4ID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzBdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICB2YXIgbWlkID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzFdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICB2YXIgbWluID0gTnVtYmVyKChNYXRoLnBvdyhsaXN0WzJdLCAyKSkudG9GaXhlZCgxNSkpO1xyXG4gICAgICAgICAgICBpZiAobWF4IDwgbWlkICsgbWluKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFR5cGUuQWN1dGU7XHJcbiAgICAgICAgICAgIGlmIChtYXggPiBtaWQgKyBtaW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVHlwZS5PYnR1c2U7XHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlLlJpZ2h0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIFRyaWFuZ2xlMi5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF9hID0gdGhpcywgQSA9IF9hLkEsIEIgPSBfYS5CLCBDID0gX2EuQztcclxuICAgICAgICByZXR1cm4gXCJBXCIgKyBBICsgXCIsIEJcIiArIEIgKyBcIiwgQ1wiICsgQztcclxuICAgIH07XHJcbiAgICByZXR1cm4gVHJpYW5nbGUyO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBUcmlhbmdsZTI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbnZhciBWZWN0b3IyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFZlY3RvcjIoeCwgeSkge1xyXG4gICAgICAgIGlmICh4ID09PSB2b2lkIDApIHsgeCA9IDA7IH1cclxuICAgICAgICBpZiAoeSA9PT0gdm9pZCAwKSB7IHkgPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmVxdWFsID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCA9PT0gdi54ICYmIHRoaXMueSA9PT0gdi55KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMueCArPSB2Lng7XHJcbiAgICAgICAgdGhpcy55ICs9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5zdWIgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHRoaXMueCAtPSB2Lng7XHJcbiAgICAgICAgdGhpcy55IC09IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS50aW1lcyA9IGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IGs7XHJcbiAgICAgICAgdGhpcy55ICo9IGs7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjIucHJvdG90eXBlLCBcIm1hZ25pdHVkZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguc3FydCh4ICogeCArIHkgKiB5KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwic3FyTWFnbml0dWRlXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcywgeCA9IF9hLngsIHkgPSBfYS55O1xyXG4gICAgICAgICAgICByZXR1cm4geCAqIHggKyB5ICogeTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMi5wcm90b3R5cGUsIFwibm9ybWFsaXplXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG1hZ25pdHVkZSA9IHRoaXMubWFnbml0dWRlO1xyXG4gICAgICAgICAgICBpZiAobWFnbml0dWRlID09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gVmVjdG9yMi56ZXJvO1xyXG4gICAgICAgICAgICB2YXIgdiA9IHtcclxuICAgICAgICAgICAgICAgIHg6IHRoaXMueCAvIG1hZ25pdHVkZSxcclxuICAgICAgICAgICAgICAgIHk6IHRoaXMueSAvIG1hZ25pdHVkZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodi54LCB2LnkpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLnByb3RvdHlwZSwgXCJyYWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCB4ID0gX2EueCwgeSA9IF9hLnk7XHJcbiAgICAgICAgICAgIHZhciByYWQgPSBNYXRoLmF0YW4oeSAvIHgpO1xyXG4gICAgICAgICAgICBpZiAocmFkIDwgMCAmJiB4IDwgMCB8fCAwIDwgcmFkICYmIHkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmFkICsgTWF0aC5QSTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmFkIDwgMCAmJiAwIDwgeCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhZCArIDIgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKHJhZCkge1xyXG4gICAgICAgIHZhciBfYSA9IHRoaXMsIHggPSBfYS54LCB5ID0gX2EueTtcclxuICAgICAgICB0aGlzLnggPSB4ICogTWF0aC5jb3MocmFkKSAtIHkgKiBNYXRoLnNpbihyYWQpO1xyXG4gICAgICAgIHRoaXMueSA9IHggKiBNYXRoLnNpbihyYWQpICsgeSAqIE1hdGguY29zKHJhZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICh2KSB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54O1xyXG4gICAgICAgIHRoaXMueSA9IHYueTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIucHJvdG90eXBlLmxlcnAgPSBmdW5jdGlvbiAodG8sIHQpIHtcclxuICAgICAgICB2YXIgdiA9IFZlY3RvcjIuc3ViKHRvLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZCh2LnRpbWVzKHQpKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gXCIoXCIgKyB0aGlzLnggKyBcIiwgXCIgKyB0aGlzLnkgKyBcIilcIjtcclxuICAgIH07XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJ6ZXJvXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IyLCBcIm9uZVwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJ1cFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigwLCAxKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJkb3duXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIC0xKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJsZWZ0XCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKC0xLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVmVjdG9yMiwgXCJyaWdodFwiLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigxLCAwKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxyXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgICBWZWN0b3IyLmFkZCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gdjEuY2xvbmUoKS5hZGQodjIpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuc3ViID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHJldHVybiB2MS5jbG9uZSgpLnN1Yih2Mik7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi50aW1lcyA9IGZ1bmN0aW9uICh2LCBrKSB7XHJcbiAgICAgICAgcmV0dXJuIHYuY2xvbmUoKS50aW1lcyhrKTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmludmVyc2UgPSBmdW5jdGlvbiAodikge1xyXG4gICAgICAgIHJldHVybiB2LmNsb25lKCkudGltZXMoLTEpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaXNaZXJvID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICByZXR1cm4gKHYueCA9PT0gMCAmJiB2LnkgPT09IDApO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaXNQYXJhbGxlbCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgdCA9IFZlY3RvcjIuY3Jvc3ModjEsIHYyKTtcclxuICAgICAgICByZXR1cm4gKHQgPT09IDApO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuaXNWZXJ0aWNhbCA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICByZXR1cm4gKFZlY3RvcjIuZG90KHYxLCB2MikgPT09IDApO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuZG90ID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciBkb3QgPSB2MS54ICogdjIueCArIHYxLnkgKiB2Mi55O1xyXG4gICAgICAgIHJldHVybiBkb3Q7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMi5jcm9zcyA9IGZ1bmN0aW9uICh2MSwgdjIpIHtcclxuICAgICAgICB2YXIgY3Jvc3MgPSB2MS54ICogdjIueSAtIHYyLnggKiB2MS55O1xyXG4gICAgICAgIHJldHVybiBjcm9zcztcclxuICAgIH07XHJcbiAgICBWZWN0b3IyLmFuZ2xlID0gZnVuY3Rpb24gKHYxLCB2Mikge1xyXG4gICAgICAgIHZhciBuZW11ID0gVmVjdG9yMi5kb3QodjEsIHYyKTtcclxuICAgICAgICB2YXIgZGVubyA9IHYxLm1hZ25pdHVkZSAqIHYyLm1hZ25pdHVkZTtcclxuICAgICAgICB2YXIgY29zID0gbmVtdSAvIGRlbm87XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWNvcyhjb3MpO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIuZGlzdGFuY2UgPSBmdW5jdGlvbiAodjEsIHYyKSB7XHJcbiAgICAgICAgcmV0dXJuIFZlY3RvcjIuc3ViKHYxLCB2MikubWFnbml0dWRlO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjIubGVycCA9IGZ1bmN0aW9uICh2MSwgdjIsIHQpIHtcclxuICAgICAgICByZXR1cm4gdjEuY2xvbmUoKS5sZXJwKHYyLCB0KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVmVjdG9yMjtcclxufSgpKTtcclxuZXhwb3J0cy5kZWZhdWx0ID0gVmVjdG9yMjtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxudmFyIFZlY3RvcjMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVmVjdG9yMyh4LCB5LCB6KSB7XHJcbiAgICAgICAgaWYgKHggPT09IHZvaWQgMCkgeyB4ID0gMDsgfVxyXG4gICAgICAgIGlmICh5ID09PSB2b2lkIDApIHsgeSA9IDA7IH1cclxuICAgICAgICBpZiAoeiA9PT0gdm9pZCAwKSB7IHogPSAwOyB9XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMueiA9IHo7XHJcbiAgICB9XHJcbiAgICBWZWN0b3IzLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoYSkge1xyXG4gICAgICAgIHRoaXMueCArPSBhLng7XHJcbiAgICAgICAgdGhpcy55ICs9IGEueTtcclxuICAgICAgICB0aGlzLnogKz0gYS56O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgdGhpcy54IC09IGEueDtcclxuICAgICAgICB0aGlzLnkgLT0gYS55O1xyXG4gICAgICAgIHRoaXMueiAtPSBhLno7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUudGltZXMgPSBmdW5jdGlvbiAobnVtKSB7XHJcbiAgICAgICAgdGhpcy54ICo9IG51bTtcclxuICAgICAgICB0aGlzLnkgKj0gbnVtO1xyXG4gICAgICAgIHRoaXMueiAqPSBudW07XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgdGhpcy54ICsgXCIsIFwiICsgdGhpcy55ICsgXCIsIFwiICsgdGhpcy56ICsgXCIpXCI7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMucHJvdG90eXBlLCBcIm5vcm1hbGl6ZWRcIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gVmVjdG9yMy5ub3JtYWxpemUodGhpcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgVmVjdG9yMy5hZGQgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhhLnggKyBiLngsIGEueSArIGIueSwgYS56ICsgYi56KTtcclxuICAgIH07XHJcbiAgICBWZWN0b3IzLnN1YiA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGEueCAtIGIueCwgYS55IC0gYi55LCBhLnogLSBiLnopO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMudGltZXMgPSBmdW5jdGlvbiAoYSwgbnVtKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKGEueCAqIG51bSwgYS55ICogbnVtLCBhLnogKiBudW0pO1xyXG4gICAgfTtcclxuICAgIFZlY3RvcjMubm9ybWFsaXplID0gZnVuY3Rpb24gKHYpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KE1hdGgucG93KHYueCwgMikgKyBNYXRoLnBvdyh2LnksIDIpICsgTWF0aC5wb3codi56LCAyKSk7XHJcbiAgICAgICAgaWYgKDAuMDAwMDEgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHYueCAvIGxlbmd0aCwgdi55IC8gbGVuZ3RoLCB2LnogLyBsZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjMuemVybztcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5kb3QgPSBmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnkgKyBhLnogKiBiLno7XHJcbiAgICB9O1xyXG4gICAgVmVjdG9yMy5jcm9zcyA9IGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgdmFyIHggPSBhLnkgKiBiLnogLSBhLnogKiBiLnk7XHJcbiAgICAgICAgdmFyIHkgPSBhLnogKiBiLnggLSBhLnggKiBiLno7XHJcbiAgICAgICAgdmFyIHogPSBhLnggKiBiLnkgLSBhLnkgKiBiLng7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKHgsIHksIHopO1xyXG4gICAgfTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcInplcm9cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgMCwgMCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZlY3RvcjMsIFwib25lXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDEsIDEsIDEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcInVwXCIsIHtcclxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKDAsIDEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWZWN0b3IzLCBcImRvd25cIiwge1xyXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoMCwgLTEsIDApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBWZWN0b3IzO1xyXG59KCkpO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBWZWN0b3IzO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pKTtcclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19zZXRNb2R1bGVEZWZhdWx0KSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59KTtcclxudmFyIF9faW1wb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnRTdGFyKSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNvbGxpc2lvbjIgPSBleHBvcnRzLlByaW1pdGl2ZTIgPSBleHBvcnRzLlRyaWFuZ2xlMiA9IGV4cG9ydHMuTWF0cml4NCA9IGV4cG9ydHMuTWF0cml4MyA9IGV4cG9ydHMuVmVjdG9yMyA9IGV4cG9ydHMuVmVjdG9yMiA9IGV4cG9ydHMuUXVhZHJhdGljID0gZXhwb3J0cy5MaW5lYXIgPSBleHBvcnRzLkRlZmluZSA9IGV4cG9ydHMuVXRpbCA9IHZvaWQgMDtcclxudmFyIFV0aWwgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vdXRpbFwiKSk7XHJcbmV4cG9ydHMuVXRpbCA9IFV0aWw7XHJcbnZhciBEZWZpbmUgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vRGVmaW5lXCIpKTtcclxuZXhwb3J0cy5EZWZpbmUgPSBEZWZpbmU7XHJcbnZhciBWZWN0b3IyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVmVjdG9yMlwiKSk7XHJcbmV4cG9ydHMuVmVjdG9yMiA9IFZlY3RvcjJfMS5kZWZhdWx0O1xyXG52YXIgVmVjdG9yM18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1ZlY3RvcjNcIikpO1xyXG5leHBvcnRzLlZlY3RvcjMgPSBWZWN0b3IzXzEuZGVmYXVsdDtcclxudmFyIE1hdHJpeDNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9NYXRyaXgzXCIpKTtcclxuZXhwb3J0cy5NYXRyaXgzID0gTWF0cml4M18xLmRlZmF1bHQ7XHJcbnZhciBNYXRyaXg0XzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTWF0cml4NFwiKSk7XHJcbmV4cG9ydHMuTWF0cml4NCA9IE1hdHJpeDRfMS5kZWZhdWx0O1xyXG52YXIgUXVhZHJhdGljXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vUXVhZHJhdGljXCIpKTtcclxuZXhwb3J0cy5RdWFkcmF0aWMgPSBRdWFkcmF0aWNfMS5kZWZhdWx0O1xyXG52YXIgTGluZWFyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vTGluZWFyXCIpKTtcclxuZXhwb3J0cy5MaW5lYXIgPSBMaW5lYXJfMS5kZWZhdWx0O1xyXG52YXIgVHJpYW5nbGUyXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4vVHJpYW5nbGUyXCIpKTtcclxuZXhwb3J0cy5UcmlhbmdsZTIgPSBUcmlhbmdsZTJfMS5kZWZhdWx0O1xyXG52YXIgUHJpbWl0aXZlMiA9IF9faW1wb3J0U3RhcihyZXF1aXJlKFwiLi9QcmltaXRpdmUyXCIpKTtcclxuZXhwb3J0cy5QcmltaXRpdmUyID0gUHJpbWl0aXZlMjtcclxudmFyIENvbGxpc2lvbjIgPSBfX2ltcG9ydFN0YXIocmVxdWlyZShcIi4vQ29sbGlzaW9uMlwiKSk7XHJcbmV4cG9ydHMuQ29sbGlzaW9uMiA9IENvbGxpc2lvbjI7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMubGVycCA9IGV4cG9ydHMuY3JhbXAgPSBleHBvcnRzLnJvdW5kID0gZXhwb3J0cy5yYWQyZGVnID0gZXhwb3J0cy5kZWcycmFkID0gZXhwb3J0cy51bmlmeVNpZ24gPSB2b2lkIDA7XHJcbmV4cG9ydHMudW5pZnlTaWduID0gZnVuY3Rpb24gKGEpIHtcclxuICAgIGlmIChhID09PSAwKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgcmV0dXJuIGE7XHJcbn07XHJcbmV4cG9ydHMuZGVnMnJhZCA9IGZ1bmN0aW9uIChkKSB7XHJcbiAgICByZXR1cm4gTWF0aC5QSSAvIDE4MCAqIGQ7XHJcbn07XHJcbmV4cG9ydHMucmFkMmRlZyA9IGZ1bmN0aW9uIChyKSB7XHJcbiAgICByZXR1cm4gMTgwIC8gTWF0aC5QSSAqIHI7XHJcbn07XHJcbmV4cG9ydHMucm91bmQgPSBmdW5jdGlvbiAobnVtLCBmaXhlZCkge1xyXG4gICAgaWYgKGZpeGVkID09PSB2b2lkIDApIHsgZml4ZWQgPSAxOyB9XHJcbiAgICB2YXIgZml4ID0gTWF0aC5wb3coMTAsIGZpeGVkKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKG51bSAqIGZpeCkgLyBmaXg7XHJcbn07XHJcbmV4cG9ydHMuY3JhbXAgPSBmdW5jdGlvbiAobm8sIG1pbiwgbWF4KSB7XHJcbiAgICBubyA9IE1hdGgubWluKG5vLCBtYXgpO1xyXG4gICAgbm8gPSBNYXRoLm1heChubywgbWluKTtcclxuICAgIHJldHVybiBubztcclxufTtcclxuZXhwb3J0cy5sZXJwID0gZnVuY3Rpb24gKGZyb20sIHRvLCByYXRlKSB7XHJcbiAgICByZXR1cm4gZnJvbSArICgodG8gLSBmcm9tKSAqIHJhdGUpO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9