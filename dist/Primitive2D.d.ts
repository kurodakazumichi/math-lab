import Vector2 from './Vector2';
export declare class Line {
    constructor(p: Vector2, v: Vector2);
    private _p;
    private _v;
    get p(): Vector2;
    get v(): Vector2;
    getPoint(f: number): Vector2;
}
export declare const Ray: typeof Line;
export declare class Segment extends Line {
    constructor(p1: Vector2, p2: Vector2);
    get p1(): Vector2;
    get p2(): Vector2;
    getEndPoint(): Vector2;
    getPoints(): number[];
}
export declare class Circle {
    constructor(p: Vector2, r: number);
    get p(): Vector2;
    private _p;
    r: number;
}
export declare class Capsule {
    constructor(s: Segment, r: number);
    get s(): Segment;
    private _s;
    r: number;
}
export declare class AABB {
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
export declare class OBB {
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
    get s1(): Vector2;
    get s2(): Vector2;
    get s3(): Vector2;
    get s4(): Vector2;
}
//# sourceMappingURL=Primitive2D.d.ts.map