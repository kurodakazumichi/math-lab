import Vector2 from './Vector2';
export declare enum Type {
    None = 0,
    Right = 1,
    Acute = 2,
    Obtuse = 3
}
export default class Triangle2D {
    private _A;
    private _B;
    private _C;
    constructor(p?: number[]);
    get A(): Vector2;
    get B(): Vector2;
    get C(): Vector2;
    get AB(): Vector2;
    get BC(): Vector2;
    get CA(): Vector2;
    get a(): number;
    get b(): number;
    get c(): number;
    get sortedLength(): number[];
    get maxSideName(): "" | "AB" | "BC" | "CA";
    get minSideName(): "" | "AB" | "BC" | "CA";
    getLengthAt(sideName: string): number;
    get maxLength(): number;
    get minLength(): number;
    get maxCornerName(): "" | "A" | "B" | "C";
    get minCornerName(): "" | "A" | "B" | "C";
    get cosA(): number;
    get cosB(): number;
    get cosC(): number;
    get sinA(): number;
    get sinB(): number;
    get sinC(): number;
    get tanA(): number;
    get tanB(): number;
    get tanC(): number;
    getCosAt(cornerName: string): number;
    get maxCornerCos(): number;
    get minCornerCos(): number;
    getSinAt(cornerName: string): number;
    get maxCornerSin(): number;
    get minCornerSin(): number;
    getTanAt(connerName: string): number;
    get maxCornerTan(): number;
    get minCornerTan(): number;
    get radA(): number;
    get radB(): number;
    get radC(): number;
    get area(): number;
    get outerRadius(): number;
    get innerRadius(): number;
    get center(): Vector2;
    get outerCenter(): Vector2;
    get innerCenter(): Vector2;
    get isInvalid(): boolean;
    get type(): Type;
    toString(): string;
}
