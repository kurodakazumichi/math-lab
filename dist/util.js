"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
