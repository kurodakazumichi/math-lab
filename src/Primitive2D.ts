import Vector2 from './Vector2';

/**
 * 直線
 */
export class Line2D {
  
  constructor(p:Vector2, v:Vector2) {
    this._p = new Vector2(p.x, p.y);
    this._v = new Vector2(v.x, v.y);
  }

  private _p:Vector2;
  private _v:Vector2;

  get p() { return this._p; }
  get v() { return this._v; }

  /** 線上の座標を取得 */
  getPoint(f:number) {
    return Vector2.add(this.p, this.v.normalize.times(f));
  }

  getPoints(f:number) {
    const end = this.getPoint(f);
    return [this.p.x, this.p.y, end.x, end.y];
  }
}

/** Ray2D(Line2Dの別名として定義) */
export const Ray2D = Line2D;

/** 線分 */
export class Segment2D extends Line2D {
  constructor(p1:Vector2, p2:Vector2) {
    super(p1, p2);
  }

  get p1 () { return this.p; } // 始点
  get p2 () { return this.v; } // 終点
  
  getEndPoint() {
    return Vector2.add(this.p1, this.p2);
  }
  getPoints() {
    return [this.p1.x, this.p1.y, this.p2.x, this.p2.y];
  }
}

/** 円 */
export class Circle2D {
  constructor(p:Vector2, r:number) {
    this._p = new Vector2(p.x, p.y);
    this.r = r;
  }

  get p() { return this._p; }

  private _p:Vector2;
  r:number;
}

/** カプセル */
export class Capsule2D {
  constructor(s:Segment2D, r:number) {
    this._s = new Segment2D(s.p1, s.p2);
    this.r  = r;
  }

  get s() { return this._s; }
  private _s:Segment2D;
  r:number;
}