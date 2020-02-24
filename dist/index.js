"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(require("./util"));
exports.Util = Util;
var Vector2_1 = __importDefault(require("./Vector2"));
exports.Vector2 = Vector2_1.default;
var Quadratic_1 = __importDefault(require("./Quadratic"));
exports.Quadratic = Quadratic_1.default;
var Linear_1 = __importDefault(require("./Linear"));
exports.Linear = Linear_1.default;
var Triangle2D_1 = __importDefault(require("./Triangle2D"));
exports.Triangle2D = Triangle2D_1.default;
var Primitive2D_1 = require("./Primitive2D");
exports.Line2D = Primitive2D_1.Line2D;
exports.Segment2D = Primitive2D_1.Segment2D;
exports.Ray2D = Primitive2D_1.Ray2D;
exports.Circle2D = Primitive2D_1.Circle2D;
exports.Capsule2D = Primitive2D_1.Capsule2D;
if (typeof window !== "undefined") {
    window.MyMath = {
        Util: Util,
        Quadratic: Quadratic_1.default,
        Vector2: Vector2_1.default,
        Linear: Linear_1.default,
        Triangle2D: Triangle2D_1.default,
    };
}
