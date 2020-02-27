import Vector2 from './Vector2';
export declare class Line2D {
    constructor(p: Vector2, v: Vector2);
    private _p;
    private _v;
    get p(): Vector2;
    get v(): Vector2;
    getPoint(f: number): Vector2;
}
export declare const Ray2D: typeof Line2D;
export declare class Segment2D extends Line2D {
    constructor(p1: Vector2, p2: Vector2);
    get p1(): Vector2;
    get p2(): Vector2;
    getEndPoint(): Vector2;
    getPoints(): number[];
}
export declare class Circle2D {
    constructor(p: Vector2, r: number);
    get p(): Vector2;
    private _p;
    r: number;
}
export declare class Capsule2D {
    constructor(s: Segment2D, r: number);
    get s(): Segment2D;
    private _s;
    r: number;
}
export declare class AABB2D {
    constructor(c: Vector2, r: [number, number]);
    private _c;
    get c(): Vector2;
    rx: number;
    ry: number;
    get width(): number;
    get height(): number;
    get p1(): Vector2;
    get p2(): Vector2;
    get p3(): Vector2;
    get p4(): Vector2;
}
export declare class OBB2D {
    constructor(c: Vector2, r: [number, number], angle: number);
    private _c;
    private _r;
    rad: number;
    get c(): Vector2;
    get r(): Vector2;
    get rx(): number;
    get ry(): number;
    set rx(v: number);
    set ry(v: number);
    get angle(): number;
    set angle(v: number);
    get width(): number;
    get height(): number;
    get p1(): Vector2;
    get p2(): Vector2;
    get p3(): Vector2;
    get p4(): Vector2;
    get v12(): Vector2;
    get v23(): Vector2;
    get v34(): Vector2;
    get v41(): Vector2;
}
