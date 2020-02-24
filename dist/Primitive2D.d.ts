import Vector2 from './Vector2';
export declare class Line2D {
    constructor(p: Vector2, v: Vector2);
    private _p;
    private _v;
    get p(): Vector2;
    get v(): Vector2;
    getPoint(f: number): Vector2;
    getPoints(f: number): number[];
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
