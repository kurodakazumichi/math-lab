export default class Linear {
    private _a;
    private _b;
    constructor(a?: number, b?: number);
    get a(): number;
    set a(v: number);
    get b(): number;
    set b(v: number);
    fx(x: number): number;
    initStandardForm(a: number, b: number): this;
    initGeneralForm(A: number, B: number, C: number): this;
    initBySlopeAndPoint(a: number, x: number, y: number): this;
    initBy2Point(x1: number, y1: number, x2: number, y2: number): this;
    get isInvalid(): boolean;
    isPerpWith(linear: Linear): boolean;
    get perpSlope(): number;
    toString(): string;
    static intersect(a: Linear, b: Linear): {
        count: number;
        points: number[];
    };
}
