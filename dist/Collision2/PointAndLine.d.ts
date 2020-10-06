import Vector2 from '../Vector2';
import { Line } from '../Primitive2';
export declare function isHit(point: Vector2, line: Line): boolean;
export declare function intercect(point: Vector2, line: Line): {
    hit: boolean;
    pos: Vector2;
};
export declare function getNearestNeighborPoint(point: Vector2, line: Line): Vector2;
//# sourceMappingURL=PointAndLine.d.ts.map