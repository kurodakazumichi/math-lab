import Vector2 from '../Vector2';
import { Segment } from '../Primitive2';
export declare function isHit(point: Vector2, segment: Segment): boolean;
export declare function intercect(point: Vector2, segment: Segment): {
    hit: boolean;
    pos: Vector2;
};
export declare function getNearestNeighborPoint(point: Vector2, segment: Segment): Vector2;
//# sourceMappingURL=PointAndSegment.d.ts.map