declare type num4 = [number, number, number, number];
declare type num9 = [number, number, number, number, number, number, number, number, number];
export default class Matrix3 {
    v: num9;
    constructor(v: num9);
    translate(tx: number, ty: number): Matrix3;
    rotate(radian: number): Matrix3;
    scale(sx: number, sy: number): Matrix3;
    multiply(m: Matrix3): Matrix3;
    get determinant(): number;
    get trans(): Matrix3;
    toString(): string;
    static get identity(): Matrix3;
    static get zero(): Matrix3;
    static translation(tx: number, ty: number): Matrix3;
    static rotation(radian: number): Matrix3;
    static scaling(sx: number, sy: number): Matrix3;
    static multiply(a: Matrix3, b: Matrix3): Matrix3;
    static projection(width: number, height: number): Matrix3;
    static determinant(m: num9): number;
    static trans(m: num9): Matrix3;
    static cofactor(r: 1 | 2 | 3, c: 1 | 2 | 3, m: num4): number;
}
export {};
//# sourceMappingURL=Matrix3.d.ts.map