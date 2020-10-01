/******************************************************************************
 * Primitive2D
 * 2次元における基本的な図形を表すクラスを定義している。
 *****************************************************************************/
import Vector2 from './Vector2';
import * as Util from './util';

//-----------------------------------------------------------------------------
// 直線
// 直線は無限に続く線である。
// プログラム上では直線上の1点と直線の方向を表すベクトルの２つの情報によって
// 定義する。
//-----------------------------------------------------------------------------
export class Line {

  /** 直線上の1点 */
  private _p:Vector2;

  /** 直線の方向を表すベクトル */
  private _v:Vector2;

  /**
   * コンストラクタ
   * @param p 直線上の1点となる座標
   * @param v 直線の方向を表すベクトル
   */
  constructor(p:Vector2, v:Vector2) 
  {
    this._p = new Vector2(p.x, p.y);
    this._v = new Vector2(v.x, v.y);
  }

  /** アクセッサ */
  get p() { return this._p; }
  set p(v){ this._p = v; }
  get v() { return this._v; }
  set v(v){ this._v = v; }

  //---------------------------------------------------------------------------
  // ユーティリティ
  //---------------------------------------------------------------------------

  /**
   * 直線上の座標を取得する。
   * @param f 任意の数値
   */
  getPoint(f:number) 
  {
    // 直線上の1点から直線の方向に任意の距離だけ進んだ場所の座標
    return Vector2.add(this.p, this.v.normalize.times(f));
  }

  /**
   * 直線の長さを指定し、その長さの場合の直線の始点から終点までの座標を1次元配列で取得する
   * @param length 直線の長さ
   */
  getPoints(length: number) 
  {
    const halfLength = length / 2;
    const p1 = this.getPoint(-halfLength);
    const p2 = this.getPoint(halfLength);
    return [p1.x, p1.y, p2.x, p2.y];
  }
}

//-----------------------------------------------------------------------------
// Ray(半直線)
// Rayは始点から無限に伸びる直線である。
// 直線と同じく、始点となる座標と直線の方向を表すベクトルで定義できるので
// Lineクラスを継承して実装する
//-----------------------------------------------------------------------------
export class Ray extends Line 
{
  //---------------------------------------------------------------------------
  // ユーティリティ
  //---------------------------------------------------------------------------

  /**
   * 半直線上の座標を取得する。
   * @param f 任意の数値
   */
  getPoint(f:number) 
  {
    // 直線上の1点から直線の方向に任意の距離だけ進んだ場所の座標
    // 視点から逆方向の座標を取得できないようにするため、fの絶対値を取る
    return Vector2.add(this.p, this.v.normalize.times(Math.abs(f)));
  }

  /**
   * Rayの長さを指定し、その長さの場合のRayの始点から終点までの座標を1次元配列で取得する
   * @param length Rayの長さ
   */
  getPoints(length: number) 
  {
    const p1 = this.p;
    const p2 = this.getPoint(length);
    return [p1.x, p1.y, p2.x, p2.y];
  }
}

//-----------------------------------------------------------------------------
// 線分
// 線分は始点と終点のある直線で、始点と終点の２つの座標で定義する。
//-----------------------------------------------------------------------------
export class Segment
{
  /** 始点 */
  private _p1:Vector2;

  /** 終点 */
  private _p2:Vector2;

  /**
   * コンストラクタ
   * @param p1 始点
   * @param p2 終点
   */
  constructor(p1:Vector2, p2:Vector2) {
    this._p1 = p1;
    this._p2 = p2;
  }

  /** アクセッサ */
  get p1 () { return this._p1; }
  set p1 (v){ this._p1 = v; }
  get p2 () { return this._p2; }
  set p2 (v){ this._p2 = v; }
  
  /**
   * 線分の始点と終点の座標を1次元配列で取得する
   */
  getPoints() {
    return [this.p1.x, this.p1.y, this.p2.x, this.p2.y];
  }
}

//-----------------------------------------------------------------------------
// 円
// 円は中心の座標と半径で定義する。
//-----------------------------------------------------------------------------
export class Circle 
{
  /** 中心座標 */
  private _p:Vector2;

  /** 半径 */
  private _r:number;

  /**
   * コンストラクタ
   * @param p 中心座標
   * @param r 半径
   */
  constructor(p:Vector2, r:number) {
    this._p = new Vector2(p.x, p.y);
    this._r = r;
  }

  /** アクセッサ */
  get p() { return this._p; }
  set p(v){ this._p = v; }
  get r() { return this._r; }
  set r(v){ this._r = v; }
}

/** カプセル */
export class Capsule {
  constructor(s:Segment, r:number) {
    this._s = new Segment(s.p1, s.p2);
    this.r  = r;
  }

  get s() { return this._s; }
  private _s:Segment;
  r:number;
}

export class AABB {
  constructor(c:Vector2, r:[number, number]) {
    this._c = c;
    this.rx = r[0];
    this.ry = r[1];
  }

  private _c:Vector2;
  get c() { return this._c; }
  rx:number;
  ry:number;

  get width() { 
    return this.rx*2;
  }

  get height(){ 
    return this.ry*2; 
  }

  /** 左上 */
  get p1() { 
    return new Vector2(this.c.x - this.rx, this.c.y + this.ry); 
  }

  /** 右上 */
  get p2() {
    return new Vector2(this.c.x + this.rx, this.c.y + this.ry);
  }

  /** 右下 */
  get p3() {
    return new Vector2(this.c.x + this.rx, this.c.y - this.ry);
  }

  /** 左下 */
  get p4() {
    return new Vector2(this.c.x - this.rx, this.c.y - this.ry);
  }
}

export class OBB 
{
  constructor(c:Vector2, r:[number, number], angle:number) {
    this._c = c;
    this._r = new Vector2(r[0], r[1]);
    this.angle = angle;
  }

  private _c:Vector2; // 中心座標
  private _r:Vector2; // 半径(縦横)
  rad:number = 0;     // 回転

  get c() { return this._c; }
  get r() { return this._r; }
  get rx() { return this._r.x; }
  get ry() { return this._r.y; }
  set rx(v:number) { this._r.x = v; }
  set ry(v:number) { this._r.y = v; }

  get angle() { return Util.rad2deg(this.rad); }
  set angle(v:number) { this.rad = Util.deg2rad(v); }

  get width() { 
    return this.rx*2;
  }

  get height(){ 
    return this.ry*2; 
  }

  /** 左上 */
  get p1() { 
    return new Vector2(-this._r.x, this._r.y).rotate(this.rad).add(this.c);
  }

  /** 右上 */
  get p2() {
    return new Vector2(this._r.x, this._r.y).rotate(this.rad).add(this.c);
  }

  /** 右下 */
  get p3() {
    return new Vector2(this._r.x, -this._r.y).rotate(this.rad).add(this.c);
  }

  /** 左下 */
  get p4() {
    return new Vector2(-this._r.x, -this._r.y).rotate(this.rad).add(this.c);
  }

  get s1() {
    return Vector2.sub(this.p2, this.p1);
  }
  get s2() {
    return Vector2.sub(this.p3, this.p2);
  }
  get s3() {
    return Vector2.sub(this.p4, this.p3);
  }
  get s4() {
    return Vector2.sub(this.p1, this.p4);
  }
}