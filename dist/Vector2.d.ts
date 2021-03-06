export default class Vector2 {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    equal(v: Vector2): boolean;
    add(v: Vector2): this;
    sub(v: Vector2): this;
    times(k: number): this;
    get magnitude(): number;
    get sqrMagnitude(): number;
    get normalize(): Vector2;
    get rad(): number;
    rotate(rad: number): this;
    set(x: number, y: number): this;
    copy(v: Vector2): this;
    clone(): Vector2;
    lerp(to: Vector2, t: number): this;
    toString(): string;
    static get zero(): Vector2;
    static get one(): Vector2;
    static get up(): Vector2;
    static get down(): Vector2;
    static get left(): Vector2;
    static get right(): Vector2;
    static add(v1: Vector2, v2: Vector2): Vector2;
    static sub(v1: Vector2, v2: Vector2): Vector2;
    static times(v: Vector2, k: number): Vector2;
    static inverse(v: Vector2): Vector2;
    static isZero(v: Vector2): boolean;
    static isParallel(v1: Vector2, v2: Vector2): boolean;
    static isVertical(v1: Vector2, v2: Vector2): boolean;
    static dot(v1: Vector2, v2: Vector2): number;
    static cross(v1: Vector2, v2: Vector2): number;
    static angle(v1: Vector2, v2: Vector2): number;
    static distance(v1: Vector2, v2: Vector2): number;
    static lerp(v1: Vector2, v2: Vector2, t: number): Vector2;
}
//# sourceMappingURL=Vector2.d.ts.map