import Vector3 from "./Vector3";
declare type num9 = [number, number, number, number, number, number, number, number, number];
declare type num16 = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];
export default class Matrix4 {
    v: num16;
    constructor(v: num16);
    translate(tx: number, ty: number, tz: number): Matrix4;
    xRotate(radian: number): Matrix4;
    yRotate(radian: number): Matrix4;
    zRotate(radian: number): Matrix4;
    scale(sx: number, sy: number, sz: number): Matrix4;
    multiply(m: Matrix4): Matrix4;
    get inverse(): Matrix4;
    get determinant(): number;
    get trans(): Matrix4;
    toString(): string;
    static get identity(): Matrix4;
    static get zero(): Matrix4;
    static translation(tx: number, ty: number, tz: number): Matrix4;
    static xRotation(radian: number): Matrix4;
    static yRotation(radian: number): Matrix4;
    static zRotation(radian: number): Matrix4;
    static scaling(sx: number, sy: number, sz: number): Matrix4;
    static multiply(a: Matrix4, b: Matrix4): Matrix4;
    static orthographic(left: number, right: number, top: number, bottom: number, near: number, far: number): Matrix4;
    static perspective(fovY: number, aspect: number, near: number, far: number): Matrix4;
    static determinant(m: num16): number;
    static trans(m: num16): Matrix4;
    static inverse(m: Matrix4): Matrix4;
    static inverse2(mat: Matrix4): Matrix4;
    static cofactor(r: 1 | 2 | 3 | 4, c: 1 | 2 | 3 | 4, m: num9): number;
    static lookAt(position: Vector3, target: Vector3, up: Vector3): Matrix4;
}
export {};
//# sourceMappingURL=Matrix4.d.ts.map