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
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(require("~/Util"));
describe('Test of Util', function () {
    describe.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from    | to\n  ", " | ", "\n  ", " | ", "\n  ", " | ", "\n  ", " | ", "\n  ", "  | ", "\n  ", "    | ", "\n  ", "   | ", "\n  ", "  | ", "\n  ", "  | ", "\n  ", "  | ", "\n  ", "  | ", "\n  "], ["\n  from    | to\n  ", " | ", "\n  ", " | ", "\n  ", " | ", "\n  ", " | ", "\n  ", "  | ", "\n  ", "    | ", "\n  ", "   | ", "\n  ", "  | ", "\n  ", "  | ", "\n  ", "  | ", "\n  ", "  | ", "\n  "])), -720, Math.PI * -4, -360, Math.PI * -2, -270, Math.PI * -1.5, -180, Math.PI * -1, -90, Math.PI / -2, 0, 0, 90, Math.PI / 2, 180, Math.PI, 270, Math.PI * 1.5, 360, Math.PI * 2, 720, Math.PI * 4)("Test of Util.deg2rad", function (_a) {
        var from = _a.from, to = _a.to;
        it("deg " + from + " => rad " + to, function () {
            expect(Util.deg2rad(from)).toBe(to);
        });
    });
    describe.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from    | to\n  ", "   | ", "\n  ", "   | ", "\n  ", " | ", "\n  ", "   | ", "\n  ", "   | ", " \n  ", "              | ", "   \n  ", "    | ", "  \n  ", "        | ", " \n  ", "  | ", " \n  ", "    | ", " \n  ", "    | ", " \n  "], ["\n  from    | to\n  ", "   | ", "\n  ", "   | ", "\n  ", " | ", "\n  ", "   | ", "\n  ", "   | ", " \n  ", "              | ", "   \n  ", "    | ", "  \n  ", "        | ", " \n  ", "  | ", " \n  ", "    | ", " \n  ", "    | ", " \n  "])), Math.PI * -4, -720, Math.PI * -2, -360, Math.PI * -1.5, -270, Math.PI * -1, -180, Math.PI / -2, -90, 0, 0, Math.PI / 2, 90, Math.PI, 180, Math.PI * 1.5, 270, Math.PI * 2, 360, Math.PI * 4, 720)("Test of Util.rad2deg", function (_a) {
        var from = _a.from, to = _a.to;
        it("rad " + from + " => deg " + to, function () {
            expect(Util.rad2deg(from)).toBe(to);
        });
    });
});
var templateObject_1, templateObject_2;
