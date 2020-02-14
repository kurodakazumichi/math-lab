"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Quadratic_1 = __importDefault(require("~/Quadratic"));
describe('Test of static in Quadratic.', function () {
    describe.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  a | b | result\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  ", "  | ", " | ", "\n  "], ["\n  a | b | result\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  ", "  | ", " | ", "\n  "])), 0, 0, NaN, 1, 0, -0, 0, 1, -Infinity, 1, 1, -0.5, -1, -1, -0.5, 1, -1, 0.5)("Test of calcP_By_ab()", function (_a) {
        var a = _a.a, b = _a.b, result = _a.result;
        describe("calcP_By_ab(" + a + ", " + b + ")", function () {
            it("is " + result + ".", function () {
                expect(Quadratic_1.default.calcP_By_ab(a, b)).toBe(result);
            });
        });
    });
    describe.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  a    | b   | c    | d    | e   | f   | result\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", " |", " |", " |", " |", "\n  "], ["\n  a    | b   | c    | d    | e   | f   | result\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", "  |", " |", " |", " |", "\n  ", " |", " |", " |", " |", " |", " |", "\n  "])), 1, 0, 0, -1, 0, 0, { count: 1, points: [0, 0] }, 0, 0, 0, -1, 0, 0, { count: 0, points: [] }, 1, 0, 1, -1, 0, 0, { count: 0, points: [] }, 1, 0, -1, -1, 0, 1, { count: 2, points: [-Math.sqrt(1), 0, Math.sqrt(1), 0] })("Test of intersect()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, d = _a.d, e = _a.e, f = _a.f, result = _a.result;
        describe("initAPQ(" + a + ", " + b + ", " + c + ") intersect initAPQ(" + d + ", " + e + ", " + f + ")", function () {
            it("", function () {
                var fa = new Quadratic_1.default().initAPQ(a, b, c);
                var fb = new Quadratic_1.default().initAPQ(d, e, f);
                expect(Quadratic_1.default.intersect(fa, fb)).toEqual(result);
            });
        });
    });
});
describe('Test of Quadratic', function () {
    describe('default constructor', function () {
        var f = new Quadratic_1.default();
        it("f.a == 0", function () { expect(f.a).toBe(0); });
        it("f.b == 0", function () { expect(f.b).toBe(0); });
        it("f.c == 0", function () { expect(f.c).toBe(0); });
        it("f.d == 0", function () { expect(f.p).toBe(0); });
        it("f.e == 0", function () { expect(f.q).toBe(0); });
    });
    describe('initAPQ(0, 0, 0)', function () {
        var f = new Quadratic_1.default();
        f.initAPQ(0, 0, 0);
        it("is a=0", function () { expect(f.a).toBe(0); });
        it("is b=0", function () { expect(f.b).toBe(0); });
        it("is c=0", function () { expect(f.c).toBe(0); });
        it("is p=0", function () { expect(f.p).toBe(0); });
        it("is q=0", function () { expect(f.q).toBe(0); });
    });
    describe('initABC(0, 0, 0)', function () {
        var f = new Quadratic_1.default();
        f.initABC(0, 0, 0);
        it("is a=0", function () { expect(f.a).toBe(0); });
        it("is b=0", function () { expect(f.b).toBe(0); });
        it("is c=0", function () { expect(f.c).toBe(0); });
        it("is p=NaN", function () { expect(f.p).toBe(NaN); });
        it("is q=NaN", function () { expect(f.q).toBe(NaN); });
    });
    describe.each(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  a       | p     | q     | b      | c\n  ", "    | ", "  | ", "  | ", "   | ", " \n  ", " | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  ", "   | ", "  | ", " | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "], ["\n  a       | p     | q     | b      | c\n  ", "    | ", "  | ", "  | ", "   | ", " \n  ", " | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  ", "   | ", "  | ", " | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "])), 2, 0, 0, 0, 0, -0.5, 0, 0, 0, 0, 2, 0, 3, 0, 3, 2, 1, 0, -4, 2, -1, 0, -3, 0, -3, 2, 1, 3, -4, 5)("Test of initAPQ or initABC", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q, b = _a.b, c = _a.c;
        describe("initAPQ(" + a + ", " + p + ", " + q + ")", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(a, p, q);
            it("is a=" + a, function () { expect(f.a).toBe(a); });
            it("is b=" + b, function () { expect(f.b).toBe(b); });
            it("is c=" + c, function () { expect(f.c).toBe(c); });
            it("is p=" + p, function () { expect(f.p).toBe(p); });
            it("is q=" + q, function () { expect(f.q).toBe(q); });
        });
        describe("initABC(" + a + ", " + b + ", " + c + ")", function () {
            var f = new Quadratic_1.default();
            f.initABC(a, b, c);
            it("is a=" + a, function () { expect(f.a).toBe(a); });
            it("is b=" + b, function () { expect(f.b).toBe(b); });
            it("is c=" + c, function () { expect(f.c).toBe(c); });
            it("is p=" + p, function () { expect(f.p).toBe(p); });
            it("is q=" + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  p     | q     | x     | y     | a      | b     | c \n  ", "  | ", "  | ", "  | ", "  | ", "  | ", "  | ", "\n  ", "  | ", "  | ", " | ", "  | ", " | ", " | ", "\n  ", " | ", " | ", "  | ", " | ", "   | ", " | ", "\n  "], ["\n  p     | q     | x     | y     | a      | b     | c \n  ", "  | ", "  | ", "  | ", "  | ", "  | ", "  | ", "\n  ", "  | ", "  | ", " | ", "  | ", " | ", " | ", "\n  ", " | ", " | ", "  | ", " | ", "   | ", " | ", "\n  "])), 1, 5, 0, 3, -2, 4, 3, 1, 5, -1, 7, 0.5, -1, 5.5, -2, -1, 0, 11, 3, 12, 11)("Test of initByApexAndPassPoint()", function (_a) {
        var p = _a.p, q = _a.q, x = _a.x, y = _a.y, a = _a.a, b = _a.b, c = _a.c;
        describe("initByApexAndPassPoint(" + p + ", " + q + ", " + x + ", " + y + ")", function () {
            var f = new Quadratic_1.default();
            f.initByApexAndPassPoint(p, q, x, y);
            it("is a=" + a, function () { expect(f.a).toBe(a); });
            it("is b=" + b, function () { expect(f.b).toBe(b); });
            it("is c=" + c, function () { expect(f.c).toBe(c); });
            it("is p=" + p, function () { expect(f.p).toBe(p); });
            it("is q=" + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  axis | x1   | y1   | x2    | y2    | a     | b    | c    | p    | q \n  ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n  "], ["\n  axis | x1   | y1   | x2    | y2    | a     | b    | c    | p    | q \n  ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", " | ", "\n  "])), 3, 5, 6, -1, -6, -1, 6, 1, 3, 10)("Test of initByAxisAnd2PassPoints()", function (_a) {
        var axis = _a.axis, x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, a = _a.a, b = _a.b, c = _a.c, p = _a.p, q = _a.q;
        describe("initByAxisAnd2PassPoints(" + axis + ", " + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ")", function () {
            var f = new Quadratic_1.default();
            f.initByAxisAnd2PassPoints(axis, x1, y1, x2, y2);
            it("is a=" + a, function () { expect(f.a).toBe(a); });
            it("is b=" + b, function () { expect(f.b).toBe(b); });
            it("is c=" + c, function () { expect(f.c).toBe(c); });
            it("is p=" + p, function () { expect(f.p).toBe(p); });
            it("is q=" + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  x1    |y1    | x2   |y2    |x3    |y3   | a    | b    | c    | p      | q \n  ", "  |", " |", " |", "  |", " |", " |", " |", " |", "  |", " |", "\n  ", " |", "  |", "  |", " |", "  |", " |", "  |", " |", " |", "  |", "\n  "], ["\n  x1    |y1    | x2   |y2    |x3    |y3   | a    | b    | c    | p      | q \n  ", "  |", " |", " |", "  |", " |", " |", " |", " |", "  |", " |", "\n  ", " |", "  |", "  |", " |", "  |", " |", "  |", " |", " |", "  |", "\n  "])), 1, -2, -2, 4, -3, 2, -1, -3, 2, -1.5, 17 / 4, -1, 1, 1, -3, 3, 9, 2, -2, -3, 0.5, -7 / 2)("Test of initBy3PassPoints()", function (_a) {
        var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2, x3 = _a.x3, y3 = _a.y3, a = _a.a, b = _a.b, c = _a.c, p = _a.p, q = _a.q;
        describe("initBy3PassPoints(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ", " + x3 + ", " + y3 + ")", function () {
            var f = new Quadratic_1.default();
            f.initBy3PassPoints(x1, y1, x2, y2, x3, y3);
            it("is a=" + a, function () { expect(f.a).toBe(a); });
            it("is b=" + b, function () { expect(f.b).toBe(b); });
            it("is c=" + c, function () { expect(f.c).toBe(c); });
            it("is p=" + p, function () { expect(f.p).toBe(p); });
            it("is q=" + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  a       | p     | q     | b      | c\n  ", "   | ", "  | ", "  | ", "   | ", " \n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "], ["\n  a       | p     | q     | b      | c\n  ", "   | ", "  | ", "  | ", "   | ", " \n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "])), -1, 1, 1, 2, 0, 0, 1, 1, 0, 1, 2, 1, 1, -4, 3)("Test of setter a", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, p = _a.p, q = _a.q;
        describe("When a changed from 1 to " + a + ", related property is changed ", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(1, 1, 1);
            f.a = a;
            it("f.a is " + a, function () { expect(f.a).toBe(a); });
            it("f.b is " + b, function () { expect(f.b).toBe(b); });
            it("f.c is " + c, function () { expect(f.c).toBe(c); });
            it("f.p is " + p, function () { expect(f.p).toBe(p); });
            it("f.q is " + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  b       | a     | c     | p      | q\n  ", "   | ", "  | ", "  | ", " | ", " \n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "], ["\n  b       | a     | c     | p      | q\n  ", "   | ", "  | ", "  | ", " | ", " \n  ", "    | ", "  | ", "  | ", "   | ", "\n  ", "    | ", "  | ", "  | ", "  | ", "\n  "])), -1, 1, 2, 0.5, 7 / 4, 0, 1, 2, 0, 2, 2, 1, 2, -1, 1)("Test of setter b", function (_a) {
        var b = _a.b, a = _a.a, c = _a.c, p = _a.p, q = _a.q;
        describe("When b changed from 1 to " + b + ", related property is changed ", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(1, 1, 1);
            f.b = b;
            it("f.a is " + a, function () { expect(f.a).toBe(a); });
            it("f.b is " + b, function () { expect(f.b).toBe(b); });
            it("f.c is " + c, function () { expect(f.c).toBe(c); });
            it("f.p is " + p, function () { expect(f.p).toBe(p); });
            it("f.q is " + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  c       | a     | b     | p     | q\n  ", "   | ", "  | ", " | ", "  | ", " \n  ", "    | ", "  | ", " | ", "  | ", "\n  ", "    | ", "  | ", " | ", "  | ", "\n  "], ["\n  c       | a     | b     | p     | q\n  ", "   | ", "  | ", " | ", "  | ", " \n  ", "    | ", "  | ", " | ", "  | ", "\n  ", "    | ", "  | ", " | ", "  | ", "\n  "])), -1, 1, -2, 1, -2, 0, 1, -2, 1, -1, 2, 1, -2, 1, 1)("Test of setter c", function (_a) {
        var b = _a.b, a = _a.a, c = _a.c, p = _a.p, q = _a.q;
        describe("When c changed from 1 to " + c + ", related property is changed ", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(1, 1, 1);
            f.c = c;
            it("f.a is " + a, function () { expect(f.a).toBe(a); });
            it("f.b is " + b, function () { expect(f.b).toBe(b); });
            it("f.c is " + c, function () { expect(f.c).toBe(c); });
            it("f.p is " + p, function () { expect(f.p).toBe(p); });
            it("f.q is " + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  p     |q     |a       |b       |c\n  ", " |", "  |", "    |", "   |", "\n  ", "  |", "  |", "    |", "   |", "\n  ", "  |", "  |", "    |", "  |", "\n  "], ["\n  p     |q     |a       |b       |c\n  ", " |", "  |", "    |", "   |", "\n  ", "  |", "  |", "    |", "   |", "\n  ", "  |", "  |", "    |", "  |", "\n  "])), -1, 1, 1, 2, 2, 0, 1, 1, 0, 1, 2, 1, 1, -4, 5)("Test of setter p", function (_a) {
        var b = _a.b, a = _a.a, c = _a.c, p = _a.p, q = _a.q;
        describe("When p changed from 1 to " + p + ", related property is changed ", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(1, 1, 1);
            f.p = p;
            it("f.a is " + a, function () { expect(f.a).toBe(a); });
            it("f.b is " + b, function () { expect(f.b).toBe(b); });
            it("f.c is " + c, function () { expect(f.c).toBe(c); });
            it("f.p is " + p, function () { expect(f.p).toBe(p); });
            it("f.q is " + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  q     |p     |a       |b      |c\n  ", " |", "  |", "    |", "  |", "\n  ", "  |", "  |", "    |", "  |", "\n  ", "  |", "  |", "    |", "  |", "\n  "], ["\n  q     |p     |a       |b      |c\n  ", " |", "  |", "    |", "  |", "\n  ", "  |", "  |", "    |", "  |", "\n  ", "  |", "  |", "    |", "  |", "\n  "])), -1, 1, 1, -2, 0, 0, 1, 1, -2, 1, 2, 1, 1, -2, 3)("Test of setter p", function (_a) {
        var b = _a.b, a = _a.a, c = _a.c, p = _a.p, q = _a.q;
        describe("When q changed from 1 to " + q + ", related property is changed ", function () {
            var f = new Quadratic_1.default();
            f.initAPQ(1, 1, 1);
            f.q = q;
            it("f.a is " + a, function () { expect(f.a).toBe(a); });
            it("f.b is " + b, function () { expect(f.b).toBe(b); });
            it("f.c is " + c, function () { expect(f.c).toBe(c); });
            it("f.p is " + p, function () { expect(f.p).toBe(p); });
            it("f.q is " + q, function () { expect(f.q).toBe(q); });
        });
    });
    describe.each(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  a      | p    | q    | x    | y\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", " |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", " |", "\n  ", " | ", " | ", " |", "  |", "\n  "], ["\n  a      | p    | q    | x    | y\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", " |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", "  |", "\n  ", "   | ", " | ", " |", " |", "\n  ", " | ", " | ", " |", "  |", "\n  "])), 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, -1, 1, 2, 3, 4, 0, 22, 2, 3, 4, 1, 12, 2, 3, 4, -1, 36, NaN, 0, 0, 0, 0)("Test of fx()", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q, x = _a.x, y = _a.y;
        describe("initAPQ(" + a + ", " + p + ", " + q + ").f(" + x + ")", function () {
            var f = new Quadratic_1.default().initAPQ(a, p, q);
            it("fx(" + x + ") = " + y, function () { expect(f.fx(x)).toBe(y); });
        });
    });
    describe.each(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  a     | p     | q \n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  "], ["\n  a     | p     | q \n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  "])), 1, 0, 0, 2, 2, 4, -1, -3, 4)("Test of apex", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q;
        describe("initAPQ(" + a + ", " + p + ", " + q + ").apex", function () {
            var f = new Quadratic_1.default().initAPQ(a, p, q);
            it("is (" + p + ", " + q + ")", function () { expect(f.apex).toEqual({ x: p, y: q }); });
        });
    });
    describe.each(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  a     | p     | q \n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  "], ["\n  a     | p     | q \n  ", "  | ", "  | ", "\n  ", "  | ", "  | ", "\n  ", " | ", " | ", "\n  "])), 1, 0, 0, 2, 2, 4, -1, -3, 4)("Test of axis", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q;
        describe("initAPQ(" + a + ", " + p + ", " + q + ").axis", function () {
            var f = new Quadratic_1.default().initAPQ(a, p, q);
            it("is x = " + p, function () { expect(f.axis).toBe(p); });
        });
    });
    describe.each(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "], ["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "])), 0, true, 1, false, -1, false, NaN, true, Infinity, true)("Test of isInvalid", function (_a) {
        var a = _a.a, result = _a.result;
        var f = new Quadratic_1.default();
        f.a = a;
        it("is " + result + " when a = " + a + ".", function () { expect(f.isInvalid).toBe(result); });
    });
    describe.each(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  p           | q     |result\n  ", "        | ", "        |", "\n  ", "      | ", "        |", "\n  ", " | ", "        |", "\n  ", "        | ", "      |", "\n  ", "        | ", " |", "\n  "], ["\n  p           | q     |result\n  ", "        | ", "        |", "\n  ", "      | ", "        |", "\n  ", " | ", "        |", "\n  ", "        | ", "      |", "\n  ", "        | ", " |", "\n  "])), 0, 0, true, NaN, 0, false, Infinity, 0, false, 0, NaN, false, 0, Infinity, false)("Test of hasApex", function (_a) {
        var p = _a.p, q = _a.q, result = _a.result;
        var f = new Quadratic_1.default().initAPQ(1, 1, 1);
        f.p = p, f.q = q;
        it("is " + result + " when (p, q) = (" + p + ", " + q + ").", function () {
            expect(f.hasApex).toBe(result);
        });
    });
    describe.each(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  a     | p     | q    | max\n  ", " | ", " | ", " | ", "\n  ", "  | ", " | ", " | ", "\n  ", "  | ", "  | ", " | ", "\n  "], ["\n  a     | p     | q    | max\n  ", " | ", " | ", " | ", "\n  ", "  | ", " | ", " | ", "\n  ", "  | ", "  | ", " | ", "\n  "])), -1, -3, 4, 4, 0, -3, 4, undefined, 1, 0, 0, undefined)("Test of max", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q, max = _a.max;
        describe("initAPQ(" + a + ", " + p + ", " + q + ").max", function () {
            var f = new Quadratic_1.default().initAPQ(a, p, q);
            it("is max = " + p, function () { expect(f.max).toBe(max); });
        });
    });
    describe.each(templateObject_18 || (templateObject_18 = __makeTemplateObject(["\n  a     | p     | q    | min\n  ", " | ", " | ", " | ", "\n  ", "  | ", " | ", " | ", "\n  ", "  | ", "  | ", " | ", "\n  "], ["\n  a     | p     | q    | min\n  ", " | ", " | ", " | ", "\n  ", "  | ", " | ", " | ", "\n  ", "  | ", "  | ", " | ", "\n  "])), -1, -3, 4, undefined, 0, -3, 4, undefined, 1, 0, 0, 0)("Test of min", function (_a) {
        var a = _a.a, p = _a.p, q = _a.q, min = _a.min;
        describe("initAPQ(" + a + ", " + p + ", " + q + ").max", function () {
            var f = new Quadratic_1.default().initAPQ(a, p, q);
            it("is min = " + p, function () { expect(f.min).toBe(min); });
        });
    });
    describe.each(templateObject_19 || (templateObject_19 = __makeTemplateObject(["\n  a     | b     | c    | conditions\n  ", " | ", " | ", " | ", "\n  ", " | ", " | ", "  | ", "\n  ", " | ", " | ", "  | ", "\n  "], ["\n  a     | b     | c    | conditions\n  ", " | ", " | ", " | ", "\n  ", " | ", " | ", "  | ", "\n  ", " | ", " | ", "  | ", "\n  "])), 1, -4, -1, "toBeGreaterThan", 1, -4, 4, "toBe", 1, -4, 5, "toBeLessThan")("Test of discriminant", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, conditions = _a.conditions;
        describe("initABC(" + a + ", " + b + ", " + c + ").discriminant", function () {
            var f = new Quadratic_1.default().initABC(a, b, c);
            it("is " + conditions + " 0", function () {
                var e = expect(f.discriminant);
                e[conditions](0);
            });
        });
    });
    describe.each(templateObject_20 || (templateObject_20 = __makeTemplateObject(["\n  a     | b      | c    | solution\n  ", "  | ", "  | ", " | ", "\n  ", "  | ", "  | ", "  | ", "\n  ", "  | ", "  | ", "  | ", "\n  ", "  | ", "   | ", " | ", "\n  ", " | ", " | ", " | ", "\n  ", " | ", "   | ", " | ", "\n  ", "  | ", "   | ", "  | ", "\n  "], ["\n  a     | b      | c    | solution\n  ", "  | ", "  | ", " | ", "\n  ", "  | ", "  | ", "  | ", "\n  ", "  | ", "  | ", "  | ", "\n  ", "  | ", "   | ", " | ", "\n  ", " | ", " | ", " | ", "\n  ", " | ", "   | ", " | ", "\n  ", "  | ", "   | ", "  | ", "\n  "])), 1, -4, -1, [2 - Math.sqrt(5), 2 + Math.sqrt(5)], 1, -4, 4, [2], 1, -4, 5, [], 1, 3, -1, [(-3 - Math.sqrt(13)) / 2, (-3 + Math.sqrt(13)) / 2], -4, -12, -9, [-3 / 2], -2, 1, -1, [], 0, 0, 0, undefined)("Test of solution", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, solution = _a.solution;
        describe("initABC(" + a + ", " + b + ", " + c + ").solution", function () {
            var f = new Quadratic_1.default().initABC(a, b, c);
            it("is " + solution, function () { expect(f.solution).toEqual(solution); });
        });
    });
    describe.each(templateObject_21 || (templateObject_21 = __makeTemplateObject(["\n  a     | b      | c     | result\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  "], ["\n  a     | b      | c     | result\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  "])), 0, 0, 0, false, 1, 0, 0, false, -1, 0, 0, false, -1, 0, 1, false, 1, 0, 1, true)("Quadratic is positive definite?", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        describe("initABC(" + a + ", " + b + ", " + c + ").isPositiveDefinite", function () {
            var f = new Quadratic_1.default().initABC(a, b, c);
            it("is " + result, function () {
                expect(f.isPositiveDefinite).toEqual(result);
            });
        });
    });
    describe.each(templateObject_22 || (templateObject_22 = __makeTemplateObject(["\n  a     | b      | c     | result\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", " | ", "\n  "], ["\n  a     | b      | c     | result\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", "  | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", "  | ", "\n  ", " | ", "   | ", " | ", "\n  "])), 0, 0, 0, false, 1, 0, 0, false, 1, 0, 1, false, -1, 0, 0, false, -1, 0, 1, false, -1, 2, -2, true)("Quadratic is negative definite?", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        describe("initABC(" + a + ", " + b + ", " + c + ").isNegativeDefinite", function () {
            var f = new Quadratic_1.default().initABC(a, b, c);
            it("is " + result, function () {
                expect(f.isNegativeDefinite).toEqual(result);
            });
        });
    });
    describe.each(templateObject_23 || (templateObject_23 = __makeTemplateObject(["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "], ["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "])), 0, "なし", 1, "1.0", -1, "-1.0", NaN, "なし", Infinity, "なし")("Test of toStringOfSlope()", function (_a) {
        var a = _a.a, result = _a.result;
        var f = new Quadratic_1.default();
        f.a = a;
        it("is \"" + result + "\" when a = " + a + ".", function () {
            expect(f.toStringOfSlope(1)).toBe(result);
            expect(f.toStringOfSlope()).toBe(result);
        });
    });
    describe.each(templateObject_24 || (templateObject_24 = __makeTemplateObject(["\n  a           |b   |c   | result\n  ", "        |", "|", "| ", "\n  ", "        |", "|", "| ", "\n  ", "       |", "|", "| ", "\n  ", "      |", "|", "| ", "\n  ", " |", "|", "| ", "\n  "], ["\n  a           |b   |c   | result\n  ", "        |", "|", "| ", "\n  ", "        |", "|", "| ", "\n  ", "       |", "|", "| ", "\n  ", "      |", "|", "| ", "\n  ", " |", "|", "| ", "\n  "])), 0, 0, 0, "なし", 1, -2, 2, "x=1.0", -1, 0, 0, "x=0.0", NaN, 0, 0, "なし", Infinity, 0, 0, "なし")("Test of toStringOfAxis()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        var f = new Quadratic_1.default().initABC(a, b, c);
        it("is \"" + result + "\" when initABC(" + a + ", " + b + ", " + c + ").", function () {
            expect(f.toStringOfAxis(1)).toBe(result);
            expect(f.toStringOfAxis()).toBe(result);
        });
    });
    describe.each(templateObject_25 || (templateObject_25 = __makeTemplateObject(["\n  a           |b   |c    | result\n  ", "        |", "|", " | ", "\n  ", "        |", "|", "| ", "\n  ", "       |", "|", " | ", "\n  ", "      |", "|", " | ", "\n  ", " |", "|", " | ", "\n  "], ["\n  a           |b   |c    | result\n  ", "        |", "|", " | ", "\n  ", "        |", "|", "| ", "\n  ", "       |", "|", " | ", "\n  ", "      |", "|", " | ", "\n  ", " |", "|", " | ", "\n  "])), 0, 0, 0, "なし", 1, -2, 2, "(1.0, 1.0)", -1, 0, 0, "(0.0, 0.0)", NaN, 0, 0, "なし", Infinity, 0, 0, "なし")("Test of toStringOfAxis()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        var f = new Quadratic_1.default().initABC(a, b, c);
        it("is \"" + result + "\" when initABC(" + a + ", " + b + ", " + c + ").", function () {
            expect(f.toStringOfApex(1)).toBe(result);
            expect(f.toStringOfApex()).toBe(result);
        });
    });
    describe.each(templateObject_26 || (templateObject_26 = __makeTemplateObject(["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "], ["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "])), 0, 0, 0, "none", 1, -2, 2, "$$y=1.0(x - (1.0))^2 + (1.0)$$", -1, 0, 0, "$$y=-1.0(x - (0.0))^2 + (0.0)$$", NaN, 0, 0, "none", Infinity, 0, 0, "none")("Test of toStringOfLatexAPQ()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        var f = new Quadratic_1.default().initABC(a, b, c);
        it("is \"" + result + "\" when initABC(" + a + ", " + b + ", " + c + ").", function () {
            expect(f.toStringOfLatexAPQ(1)).toBe(result);
            expect(f.toStringOfLatexAPQ()).toBe(result);
        });
    });
    describe.each(templateObject_27 || (templateObject_27 = __makeTemplateObject(["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "], ["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "])), 0, 0, 0, "none", 1, -2, 2, "$$y=1.0x^2 + (-2.0)x + (2.0)$$", -1, 0, 0, "$$y=-1.0x^2 + (0.0)x + (0.0)$$", NaN, 0, 0, "none", Infinity, 0, 0, "none")("Test of toStringOfLatexABC()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        var f = new Quadratic_1.default().initABC(a, b, c);
        it("is \"" + result + "\" when initABC(" + a + ", " + b + ", " + c + ").", function () {
            expect(f.toStringOfLatexABC(1)).toBe(result);
            expect(f.toStringOfLatexABC()).toBe(result);
        });
    });
    describe.each(templateObject_28 || (templateObject_28 = __makeTemplateObject(["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "], ["\n  a           | result\n  ", "        | ", "\n  ", "        | ", "\n  ", "       | ", "\n  ", "      | ", "\n  ", " | ", "\n  "])), 0, "", 1, "下に凸", -1, "上に凸", NaN, "", Infinity, "")("Test of toStringAboutShape()", function (_a) {
        var a = _a.a, result = _a.result;
        var f = new Quadratic_1.default();
        f.a = a;
        it("is \"" + result + "\" when a = " + a + ".", function () { expect(f.toStringAboutShape()).toBe(result); });
    });
    describe.each(templateObject_29 || (templateObject_29 = __makeTemplateObject(["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "], ["\n  a           |b    |c    | result\n  ", "        |", " |", " | ", "\n  ", "        |", "|", " | ", "\n  ", "       |", " |", " | ", "\n  ", "      |", " |", " | ", "\n  ", " |", " |", " | ", "\n  "])), 0, 0, 0, "{a:0, b:0, c:0, p:NaN, q:NaN}", 1, -2, 2, "{a:1, b:-2, c:2, p:1, q:1}", -1, 0, 0, "{a:-1, b:0, c:0, p:0, q:0}", NaN, 0, 0, "{a:NaN, b:0, c:0, p:NaN, q:NaN}", Infinity, 0, 0, "{a:Infinity, b:0, c:0, p:0, q:NaN}")("Test of toString()", function (_a) {
        var a = _a.a, b = _a.b, c = _a.c, result = _a.result;
        var f = new Quadratic_1.default().initABC(a, b, c);
        it("is \"" + result + "\" when initABC(" + a + ", " + b + ", " + c + ").", function () {
            expect(f.toString()).toBe(result);
        });
    });
    describe.each(templateObject_30 || (templateObject_30 = __makeTemplateObject(["\n  l      | x       | max\n  ", "   | ", "    | ", "\n  ", " | ", "   | ", "\n  ", " | ", " | ", "\n  "], ["\n  l      | x       | max\n  ", "   | ", "    | ", "\n  ", " | ", "   | ", "\n  ", " | ", " | ", "\n  "])), 8, 4, 16, 100, 50, 2500, 0.1, 0.05, 0.05 * 0.05)("\u76F4\u89D2\u4E8C\u7B49\u8FBA\u4E09\u89D2\u5F62\u306B\u5185\u63A5\u3059\u308B\u9577\u65B9\u5F62\u306E\u6700\u5927\u306E\u9762\u7A4D\u3092\u8A08\u7B97", function (_a) {
        var l = _a.l, x = _a.x, max = _a.max;
        describe("1\u8FBA\u304C" + l + "cm\u306E\u76F4\u89D2\u4E8C\u7B49\u53F3\u8FBA\u4E09\u89D2\u5F62\u306E\u5834\u5408", function () {
            var f = new Quadratic_1.default().initABC(-1, l, 0);
            it("1\u8FBA\u304C" + x + "cm\u306E\u6642\u3001\u9762\u7A4D\u304C" + max + "cm2\u3067\u6700\u5927\u3068\u306A\u308B", function () {
                expect(f.apex.x).toBe(x);
                expect(f.max).toBe(max);
            });
        });
    });
    describe.each(templateObject_31 || (templateObject_31 = __makeTemplateObject(["\n  t     | x    | y    | s                 | max\n  ", " | ", " | ", " | ", "  | ", "\n  ", " | ", " | ", " | ", " | ", "\n  "], ["\n  t     | x    | y    | s                 | max\n  ", " | ", " | ", " | ", "  | ", "\n  ", " | ", " | ", " | ", " | ", "\n  "])), 10, 5, 5, Math.sqrt(50), 25 / 2, 18, 9, 9, Math.sqrt(162), 81 / 2)("\u76F4\u89D2\u4E09\u89D2\u5F62\u306E\u9762\u7A4D\u304C\u6700\u5927\u3068\u306A\u308B\u5834\u5408\u306E\uFF13\u8FBA\u306E\u9577\u3055", function (_a) {
        var t = _a.t, x = _a.x, y = _a.y, s = _a.s, max = _a.max;
        describe("\u76F4\u89D2\u3092\u631F\u30802\u8FBA\u306E\u9577\u3055\u306E\u548C\u304C" + t + "\u306E\u4E09\u89D2\u5F62\u306B\u3064\u3044\u3066", function () {
            var f = new Quadratic_1.default().initABC(-0.5, t / 2, 0);
            var ans = {
                x: f.apex.x,
                y: t - f.apex.x,
                max: f.max,
                s: 0,
            };
            ans.s = Math.sqrt(ans.x * ans.x + ans.y * ans.y);
            it("\u5E95\u8FBA\u304C" + x + "\u3001\u9AD8\u3055\u304C" + y + "\u3001\u659C\u8FBA\u304C" + s + "\u306E\u6642\u3001\u9762\u7A4D\u304C" + max + "cm2\u3067\u6700\u5927\u3068\u306A\u308B", function () {
                expect(ans.x).toBe(x);
                expect(ans.y).toBe(y);
                expect(ans.s).toBe(s);
                expect(ans.max).toBe(max);
            });
        });
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31;
