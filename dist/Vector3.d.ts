export default class Vector3 {
    x: number;
    y: number;
    z: number;
    constructor(x?: number, y?: number, z?: number);
    add(a: Vector3): this;
    sub(a: Vector3): this;
    times(num: number): this;
    toString(): string;
    get normalized(): Vector3;
    static add(a: Vector3, b: Vector3): Vector3;
    static sub(a: Vector3, b: Vector3): Vector3;
    static times(a: Vector3, num: number): Vector3;
    static normalize(v: Vector3): Vector3;
    static dot(a: Vector3, b: Vector3): number;
    static cross(a: Vector3, b: Vector3): Vector3;
    static get zero(): Vector3;
    static get one(): Vector3;
    static get up(): Vector3;
    static get down(): Vector3;
}
//# sourceMappingURL=Vector3.d.ts.map