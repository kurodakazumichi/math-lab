import Vector2 from './Vector2';
export declare class Line {
    private _p;
    private _v;
    constructor(p: Vector2, v: Vector2);
    get p(): Vector2;
    get v(): Vector2;
    point(f: number): Vector2;
    points(length: number): number[];
}
export declare class Ray extends Line {
    point(f: number): Vector2;
    points(length: number): number[];
}
export declare class Segment {
    private _p;
    private _v;
    constructor(p: Vector2, v: Vector2);
    get p1(): Vector2;
    get p2(): Vector2;
    get v(): Vector2;
    get points(): number[];
}
export declare class Circle {
    private _p;
    private _r;
    constructor(p: Vector2, r: number);
    get p(): Vector2;
    get r(): number;
    set r(v: number);
}
export declare class Ellipse {
    private _p;
    private _r;
    constructor(p: Vector2, rx: number, ry: number);
    get p(): Vector2;
    get rx(): number;
    get ry(): number;
}
export declare class Capsule {
    private _s;
    private _r;
    constructor(s: Segment, r: number);
    get s(): Segment;
    get r(): number;
    set r(v: number);
}
export declare class Rect {
    private _p;
    private _w;
    private _h;
    constructor(p: Vector2, w: number, h: number);
    get p(): Vector2;
    get w(): number;
    set w(v: number);
    get h(): number;
    set h(v: number);
    get p1(): Vector2;
    get p2(): Vector2;
    get p3(): Vector2;
    get p4(): Vector2;
}
export declare class Box {
    private _c;
    private _r;
    private _rad;
    constructor(c: Vector2, r: Vector2, angle: number);
    get c(): Vector2;
    get r(): Vector2;
    get rx(): number;
    get ry(): number;
    set rx(v: number);
    set ry(v: number);
    get w(): number;
    get h(): number;
    get angle(): number;
    set angle(v: number);
    get p1(): Vector2;
    get p2(): Vector2;
    get p3(): Vector2;
    get p4(): Vector2;
    get v1to2(): Vector2;
    get v2to3(): Vector2;
    get v3to4(): Vector2;
    get v4to1(): Vector2;
}
export declare class Triangle {
    private _p1;
    private _p2;
    private _p3;
    constructor(p1: Vector2, p2: Vector2, p3: Vector2);
    get p1(): Vector2;
    get p2(): Vector2;
    get p3(): Vector2;
    get points(): number[];
    get v1to2(): Vector2;
    get v2to3(): Vector2;
    get v3to1(): Vector2;
}
//# sourceMappingURL=Primitive2.d.ts.map