"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var Util = __importStar(require("~/util"));
var Vector2_1 = __importDefault(require("~/Vector2"));
describe('Test of Vector2', function () {
    describe('Test of default constructor', function () {
        var v = new Vector2_1.default();
        it("v.x == 0", function () { expect(v.x).toBe(0); });
        it("v.y == 0", function () { expect(v.x).toBe(0); });
    });
    describe.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  v1 | v2 | result\n  ", " | ", " | ", "\n  ", " | ", " | ", "\n  "], ["\n  v1 | v2 | result\n  ", " | ", " | ", "\n  ", " | ", " | ", "\n  "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), true, new Vector2_1.default(1, 1), new Vector2_1.default(0, 0), false)("Test of Vector2.equal", function (_a) {
        var v1 = _a.v1, v2 = _a.v2, result = _a.result;
        it("v" + v1.toString() + " is equal v" + v2.toString() + " = " + result, function () {
            expect(v1.equal(v2)).toBe(result);
        });
    });
    describe.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  v1 | v2 | result\n  ", "  | ", " | ", "\n  ", "  | ", " | ", "\n  ", " | ", " | ", "\n  "], ["\n  v1 | v2 | result\n  ", "  | ", " | ", "\n  ", "  | ", " | ", "\n  ", " | ", " | ", "\n  "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), new Vector2_1.default(-1, 1), new Vector2_1.default(1, 2), new Vector2_1.default(0, 3))("Test of Vector2.add", function (_a) {
        var v1 = _a.v1, v2 = _a.v2, result = _a.result;
        it("v" + v1.toString() + " add v" + v2.toString() + " = " + result.toString(), function () {
            expect(v1.add(v2)).toBe(v1);
            expect(v1.x).toBe(result.x);
            expect(v1.y).toBe(result.y);
        });
    });
    describe.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  v1 | v2 | result\n  ", "  | ", " | ", "\n  ", "  | ", " | ", "\n  ", " | ", " | ", "\n  "], ["\n  v1 | v2 | result\n  ", "  | ", " | ", "\n  ", "  | ", " | ", "\n  ", " | ", " | ", "\n  "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), new Vector2_1.default(-1, 1), new Vector2_1.default(1, 2), new Vector2_1.default(-2, -1))("Test of Vector2.sub", function (_a) {
        var v1 = _a.v1, v2 = _a.v2, result = _a.result;
        var sub = v1.sub(v2);
        it("v1.sub(v2) return instance of v1", function () {
            expect(sub === v1).toBeTruthy();
        });
        it("v1.sub(v2) = " + result.toString(), function () {
            expect(sub.equal(result)).toBeTruthy();
        });
    });
    describe.each(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  v | scalar | result\n  ", " | ", "  | ", "\n  ", " | ", "  | ", "\n  ", " | ", " | ", "\n  "], ["\n  v | scalar | result\n  ", " | ", "  | ", "\n  ", " | ", "  | ", "\n  ", " | ", " | ", "\n  "])), new Vector2_1.default(1, 1), 0, new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), 2, new Vector2_1.default(2, 2), new Vector2_1.default(1, 1), -1, new Vector2_1.default(-1, -1))("Test of Vector2.times", function (_a) {
        var v = _a.v, scalar = _a.scalar, result = _a.result;
        var times = v.times(scalar);
        it("instance of v.times() is equal instance of v", function () {
            expect(times === v).toBeTruthy();
        });
        it("v.times() = " + result.toString(), function () {
            expect(times.equal(result)).toBeTruthy();
        });
    });
    describe.each(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  v1 | result\n  ", "   | ", "\n  ", "   | ", "\n  ", " | ", "\n  ", "   | ", "\n  "], ["\n  v1 | result\n  ", "   | ", "\n  ", "   | ", "\n  ", " | ", "\n  ", "   | ", "\n  "])), new Vector2_1.default(0, 0), 0, new Vector2_1.default(1, 1), Math.sqrt(2), new Vector2_1.default(-1, -1), Math.sqrt(2), new Vector2_1.default(3, 4), 5)("Test of Vector2.magnitude", function (_a) {
        var v1 = _a.v1, result = _a.result;
        it("v1.magnitude = " + result, function () {
            expect(v1.magnitude).toBe(result);
        });
    });
    describe.each(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  v1 | result\n  ", "    | ", "\n  ", "   | ", "\n  ", "  | ", "\n  ", "    | ", "\n  ", "    | ", "\n  "], ["\n  v1 | result\n  ", "    | ", "\n  ", "   | ", "\n  ", "  | ", "\n  ", "    | ", "\n  ", "    | ", "\n  "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(10, 0), new Vector2_1.default(1, 0), new Vector2_1.default(-10, 0), new Vector2_1.default(-1, 0), new Vector2_1.default(1, 1), new Vector2_1.default(1 / Math.sqrt(2), 1 / Math.sqrt(2)), new Vector2_1.default(3, 4), new Vector2_1.default(3 / 5, 4 / 5))("Test of Vector2.normalize", function (_a) {
        var v1 = _a.v1, result = _a.result;
        it("v1.normalize = " + result, function () {
            expect(v1.normalize).toEqual(result);
        });
    });
    describe.each(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  v\n  ", " \n  ", " \n  "], ["\n  v\n  ", " \n  ", " \n  "])), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1))("Test of Vector2.clone", function (_a) {
        var v = _a.v;
        var clone = v.clone();
        it("v.clone().xy is equal origin vector xy.", function () {
            expect(clone.x).toBe(v.x);
            expect(clone.y).toBe(v.y);
        });
        it("instance of v is not instance of v.clone()", function () {
            expect(v === clone).toBe(false);
        });
    });
    describe.each(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  v | result\n  ", " | ", "\n  ", " | ", "\n  "], ["\n  v | result\n  ", " | ", "\n  ", " | ", "\n  "])), new Vector2_1.default(0, 0), "(0, 0)", new Vector2_1.default(1, 1), "(1, 1)")("Test of Vector2.toString", function (_a) {
        var v = _a.v, result = _a.result;
        it("v.toString() is " + result, function () {
            expect(v.toString()).toBe(result);
        });
    });
    describe('Static', function () {
        describe("Test of basic vector2", function () {
            it("Vector2.zero is (0, 0)", function () {
                expect(Vector2_1.default.zero).toEqual(new Vector2_1.default(0, 0));
            });
            it("Vector2.one is (1, 1)", function () {
                expect(Vector2_1.default.one).toEqual(new Vector2_1.default(1, 1));
            });
            it("Vector2.up is (0, 1)", function () {
                expect(Vector2_1.default.up).toEqual(new Vector2_1.default(0, 1));
            });
            it("Vector2.down is (0, -1)", function () {
                expect(Vector2_1.default.down).toEqual(new Vector2_1.default(0, -1));
            });
            it("Vector2.left is (-1, 0)", function () {
                expect(Vector2_1.default.left).toEqual(new Vector2_1.default(-1, 0));
            });
            it("Vector2.right is (1, 0)", function () {
                expect(Vector2_1.default.right).toEqual(new Vector2_1.default(1, 0));
            });
        });
        describe.each(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n    a              | b             | result\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    "], ["\n    a              | b             | result\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    "])), { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 2 })("Test of Vector2.add", function (_a) {
            var a = _a.a, b = _a.b, result = _a.result;
            var v1 = new Vector2_1.default(a.x, a.y);
            var v2 = new Vector2_1.default(b.x, b.y);
            var v3 = Vector2_1.default.add(v1, v2);
            it("Vector2.add(v1, v2) = " + v3.toString(), function () {
                expect(v3.x).toBe(result.x);
                expect(v3.y).toBe(result.y);
            });
            it("v1 and v2 is not changed", function () {
                expect(v1.x).toBe(a.x);
                expect(v1.y).toBe(a.y);
                expect(v2.x).toBe(b.x);
                expect(v2.y).toBe(b.y);
            });
        });
        describe.each(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n    a              | b             | result\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    "], ["\n    a              | b             | result\n    ", "  | ", " | ", "\n    ", "  | ", " | ", "\n    "])), { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 3 }, { x: -1, y: -2 })("Test of Vector2.sub", function (_a) {
            var a = _a.a, b = _a.b, result = _a.result;
            var v1 = new Vector2_1.default(a.x, a.y);
            var v2 = new Vector2_1.default(b.x, b.y);
            var v3 = Vector2_1.default.sub(v1, v2);
            it("Vector2.sub(v1, v2) = " + v3.toString(), function () {
                expect(v3.x).toBe(result.x);
                expect(v3.y).toBe(result.y);
            });
            it("v1 and v2 is not changed", function () {
                expect(v1.x).toBe(a.x);
                expect(v1.y).toBe(a.y);
                expect(v2.x).toBe(b.x);
                expect(v2.y).toBe(b.y);
            });
        });
        describe.each(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n    v | scalar | result\n    ", " | ", "  | ", "\n    ", " | ", "  | ", "\n    ", " | ", " | ", "\n    "], ["\n    v | scalar | result\n    ", " | ", "  | ", "\n    ", " | ", "  | ", "\n    ", " | ", " | ", "\n    "])), new Vector2_1.default(1, 1), 0, new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), 2, new Vector2_1.default(2, 2), new Vector2_1.default(1, 1), -1, new Vector2_1.default(-1, -1))("Test of Vector2.times", function (_a) {
            var v = _a.v, scalar = _a.scalar, result = _a.result;
            var times = Vector2_1.default.times(v, scalar);
            it("Vector2.times(v, " + scalar + ") is not equal instance of v", function () {
                expect(times === v).toBeFalsy();
            });
            it("Vector2.times(v1, " + scalar + ") = " + result.toString(), function () {
                expect(times.equal(result)).toBeTruthy();
            });
        });
        describe.each(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n    v1 | v2 \n    ", "  | ", "\n    ", "  | ", "\n    ", " | ", "\n    "], ["\n    v1 | v2 \n    ", "  | ", "\n    ", "  | ", "\n    ", " | ", "\n    "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), new Vector2_1.default(1, 1), new Vector2_1.default(-1, -1), new Vector2_1.default(-1, 1), new Vector2_1.default(1, -1))("Test of Vector2.inverse", function (_a) {
            var v1 = _a.v1, v2 = _a.v2;
            var inv = Vector2_1.default.inverse(v1);
            it("Vector2.inverse(v1) is not equal instance of v1", function () {
                expect(inv === v1).toBeFalsy();
            });
            it("Vector2.inverse(v1) = " + v2.toString(), function () {
                expect(inv.equal(v2)).toBeTruthy();
            });
        });
        describe.each(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n    v1 | result\n    ", " | ", "\n    ", " | ", "\n    "], ["\n    v1 | result\n    ", " | ", "\n    ", " | ", "\n    "])), new Vector2_1.default(0, 0), true, new Vector2_1.default(1, 1), false)("Test of Vector2.isZero", function (_a) {
            var v1 = _a.v1, result = _a.result;
            it("Vector2.isZero(v1) = " + result, function () {
                expect(Vector2_1.default.isZero(v1)).toBe(result);
            });
        });
        describe.each(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", " | ", " | ", "\n    ", "   | ", " | ", "\n    "], ["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", " | ", " | ", "\n    ", "   | ", " | ", "\n    "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), true, new Vector2_1.default(1, 1), new Vector2_1.default(2, 2), true, new Vector2_1.default(-1, -1), new Vector2_1.default(2, 2), true, new Vector2_1.default(1, 0), new Vector2_1.default(0, 1), false)("Test of Vector2.isParallel", function (_a) {
            var v1 = _a.v1, v2 = _a.v2, result = _a.result;
            it("Vector2.isParallel(v1, v2) = " + result, function () {
                expect(Vector2_1.default.isParallel(v1, v2)).toBe(result);
            });
        });
        describe.each(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n    v1 | v2 | result\n    ", "   | ", "       | ", "\n    ", "   | ", "      | ", "\n    ", "   | ", "       | ", "\n    ", "  | ", "       | ", "\n    ", "  | ", " | ", "\n    "], ["\n    v1 | v2 | result\n    ", "   | ", "       | ", "\n    ", "   | ", "      | ", "\n    ", "   | ", "       | ", "\n    ", "  | ", "       | ", "\n    ", "  | ", " | ", "\n    "])), Vector2_1.default.up, Vector2_1.default.left, true, Vector2_1.default.up, Vector2_1.default.right, true, Vector2_1.default.up, Vector2_1.default.down, false, Vector2_1.default.one, Vector2_1.default.zero, true, Vector2_1.default.one, new Vector2_1.default(-1, 1), true)("Test of Vector2.isVertical", function (_a) {
            var v1 = _a.v1, v2 = _a.v2, result = _a.result;
            it("Vector2.isVertical(v1, v2) = " + result, function () {
                expect(Vector2_1.default.isVertical(v1, v2)).toBe(result);
            });
        });
        describe.each(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    "], ["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), 0, new Vector2_1.default(1, 1), new Vector2_1.default(2, 0), 2, new Vector2_1.default(2, 0), new Vector2_1.default(1, 1), 2)("Test of Vector2.dot", function (_a) {
            var v1 = _a.v1, v2 = _a.v2, result = _a.result;
            it("Vector2.dot(v1, v2) = " + result, function () {
                expect(Vector2_1.default.dot(v1, v2)).toBe(result);
            });
        });
        describe.each(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    "], ["\n    v1 | v2 | result\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    ", "   | ", " | ", "\n    "])), new Vector2_1.default(0, 0), new Vector2_1.default(0, 0), 0, new Vector2_1.default(1, 1), new Vector2_1.default(2, 0), -2, new Vector2_1.default(2, 0), new Vector2_1.default(1, 1), 2)("Test of Vector2.cross", function (_a) {
            var v1 = _a.v1, v2 = _a.v2, result = _a.result;
            it("Vector2.cross(v1, v2) = " + result, function () {
                expect(Vector2_1.default.cross(v1, v2)).toBe(result);
            });
        });
        describe.each(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n    v1 | v2 | result\n    ", "  | ", "                 | ", "\n    ", "  | ", "                  | ", "\n    ", "   | ", "                  | ", "\n    ", " | ", "                  | ", "\n    ", " | ", " | ", "\n    ", " | ", "                   | ", "\n    ", "  | ", "                  | ", "\n    ", "  | ", "                | ", "\n    ", "  | ", "           | ", "\n    "], ["\n    v1 | v2 | result\n    ", "  | ", "                 | ", "\n    ", "  | ", "                  | ", "\n    ", "   | ", "                  | ", "\n    ", " | ", "                  | ", "\n    ", " | ", " | ", "\n    ", " | ", "                   | ", "\n    ", "  | ", "                  | ", "\n    ", "  | ", "                | ", "\n    ", "  | ", "           | ", "\n    "])), Vector2_1.default.zero, Vector2_1.default.zero, NaN, Vector2_1.default.zero, Vector2_1.default.one, NaN, Vector2_1.default.one, Vector2_1.default.one, 0, Vector2_1.default.right, Vector2_1.default.one, Util.deg2rad(45), Vector2_1.default.right, new Vector2_1.default(1, Math.sqrt(3)), Util.deg2rad(60), Vector2_1.default.right, Vector2_1.default.up, Util.deg2rad(90), Vector2_1.default.left, Vector2_1.default.one, Util.deg2rad(135), Vector2_1.default.left, Vector2_1.default.right, Util.deg2rad(180), Vector2_1.default.left, new Vector2_1.default(1, -1), Util.deg2rad(135))("Test of Vector2.angle", function (_a) {
            var v1 = _a.v1, v2 = _a.v2, result = _a.result;
            it("Vector2.angle(v1, v2) = " + result.toFixed(5), function () {
                expect(Vector2_1.default.angle(v1, v2).toFixed(5)).toBe(result.toFixed(5));
            });
        });
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18;
