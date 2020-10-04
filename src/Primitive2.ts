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
  get v() { return this._v; }

  //---------------------------------------------------------------------------
  // ユーティリティ
  //---------------------------------------------------------------------------

  /**
   * 直線上の座標を取得する。
   * @param f 任意の数値
   */
  point(f:number) 
  {
    // 直線上の1点から直線の方向に任意の距離だけ進んだ場所の座標
    return Vector2.add(this.p, this.v.normalize.times(f));
  }

  /**
   * 直線の長さを指定し、その長さの場合の直線の始点から終点までの座標を1次元配列で取得する
   * @param length 直線の長さ
   */
  points(length: number) 
  {
    const halfLength = length / 2;
    const p1 = this.point(-halfLength);
    const p2 = this.point(halfLength);
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
  point(f:number) 
  {
    // 直線上の1点から直線の方向に任意の距離だけ進んだ場所の座標
    // 視点から逆方向の座標を取得できないようにするため、fの絶対値を取る
    return Vector2.add(this.p, this.v.normalize.times(Math.abs(f)));
  }

  /**
   * Rayの長さを指定し、その長さの場合のRayの始点から終点までの座標を1次元配列で取得する
   * @param length Rayの長さ
   */
  points(length: number) 
  {
    const p1 = this.p;
    const p2 = this.point(length);
    return [p1.x, p1.y, p2.x, p2.y];
  }
}

//-----------------------------------------------------------------------------
// 線分
// 線分は始点と終点のある直線。
// 始点と終点を持っても定義はできるが、始点と線分の方向と長さを表すベクトルから
// 定義する。
//-----------------------------------------------------------------------------
export class Segment
{
  /** 線分の始点 */
  private _p:Vector2;

  /** 線分の方向と長さを表すベクトル */
  private _v:Vector2;

  /**
   * コンストラクタ
   * @param p 線分の始点
   * @param v 線分の方向と長さを表すベクトル
   */
  constructor(p:Vector2, v:Vector2) 
  {
    this._p = new Vector2(p.x, p.y);
    this._v = new Vector2(v.x, v.y);
  }

  /** アクセッサ */
  get p1() { return this._p; }
  get p2() { return Vector2.add(this._p, this.v); }
  get v() { return this._v; }
  
  /**
   * 線分の始点と終点の座標を1次元配列で取得する
   */
  get points() {
    const { p1: s, p2: e } = this;
    return [s.x, s.y, e.x, e.y];
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
    this._p = p.clone();
    this._r = r;
  }

  /** アクセッサ */
  get p() { return this._p; }
  get r() { return this._r; }
  set r(v){ this._r = v; }
}

//-----------------------------------------------------------------------------
// 楕円
// 楕円は中心とXYそれぞれの半径で定義する
//-----------------------------------------------------------------------------
export class Ellipse 
{
  /** 中心 */
  private _p: Vector2;

  /** 半径XY */
  private _r: Vector2;

  /**
   * コンストラクタ
   * @param p 中心
   * @param rx 半径X
   * @param ry 半径Y
   */
  constructor(p:Vector2, rx:number, ry:number) {
    this._p = p.clone();
    this._r = new Vector2(rx, ry);
  }

  /** アクセッサ */
  get p() { return this._p; }
  get rx() { return this._r.x; }
  get ry() { return this._r.y; }
}

//-----------------------------------------------------------------------------
// カプセル
// カプセルは線分と半径の２つの情報から定義される。
//-----------------------------------------------------------------------------
export class Capsule 
{
  /** カプセルを表す線分 */
  private _s:Segment;

  /** カプセルの太さ */
  private _r:number;

  /**
   * コンストラクタ
   * @param s 線分
   * @param r 太さ
   */
  constructor(s:Segment, r:number) 
  {
    this._s = s;
    this._r = r;
  }

  /** アクセッサ */
  get s() { return this._s; }
  get r() { return this._r; }
  set r(v){ this._r = v; }
}

//-----------------------------------------------------------------------------
// 矩形(軸に平行な矩形)
// 矩形は左上の基点となる座標と右下までの長さ(width, heihgt)で定義する
// 各頂点は左上をp1とし、時計回りにp2,p3,p4とする。
// p1      p2
// ┏━━━┓
// ┃      ┃
// ┃      ┃
// ┗━━━┛
// p4      p3
//-----------------------------------------------------------------------------
export class Rect {

  /** 左上の基点となる座標 */
  private _p:Vector2;

  /** 幅 */
  private _w:number;

  /** 高さ */
  private _h:number;  

  /**
   * コンストラクタ
   * @param p 左上の座標
   * @param w 幅
   * @param h 高さ
   */
  constructor(p:Vector2, w:number, h:number) {
    this._p = p;
    this._w = w;
    this._h = h;
  }

  /** アクセッサ */
  get p() { return this._p; }
  get w() { return this._w; }
  set w(v){ this._w = v; }
  get h() { return this._h; }
  set h(v){ this._h = v; }

  /** 左上 */
  get p1() { 
    return this.p.clone();
  }

  /** 右上 */
  get p2() {
    return new Vector2(this.p.x + this.w, this.p.y);
  }

  /** 右下 */
  get p3() {
    return new Vector2(this.p.x + this.w, this.p.y - this.h);
  }

  /** 左下 */
  get p4() {
    return new Vector2(this.p.x, this.p.y - this.h);
  }
}

//-----------------------------------------------------------------------------
// 矩形(回転する矩形)
// 回転する矩形は中心座標とXYそれぞれの半径、また回転角度から定義する。
// 各頂点は左上をp1とし、時計回りにp2,p3,p4とする。
// p1      p2
// ┏━━━┓
// ┃      ┃
// ┃      ┃
// ┗━━━┛
// p4      p3
//-----------------------------------------------------------------------------
export class Box 
{
  /** 中心座標 */
  private _c:Vector2;

  /** 半径(XY) */
  private _r:Vector2;

  /** 回転 */
  private _rad:number = 0;

  /**
   * コンストラクタ
   * @param c 中心座標
   * @param r 半径(XY)
   * @param angle 回転
   */
  constructor(c:Vector2, r:Vector2, angle:number) {
    this._c = c;
    this._r = r;
    this.angle = angle;
  }

  /** アクセッサ */
  get c() { return this._c; }
  get r() { return this._r; }
  get rx() { return this._r.x; }
  get ry() { return this._r.y; }
  set rx(v:number) { this._r.x = v; }
  set ry(v:number) { this._r.y = v; }
  get w() { return this.rx*2; }
  get h(){ return this.ry*2; }
  get angle() { return Util.rad2deg(this._rad); }
  set angle(v:number) { this._rad = Util.deg2rad(v); }

  /** 左上 */
  get p1() { 
    return new Vector2(-this._r.x, this._r.y).rotate(this._rad).add(this.c);
  }

  /** 右上 */
  get p2() {
    return new Vector2(this._r.x, this._r.y).rotate(this._rad).add(this.c);
  }

  /** 右下 */
  get p3() {
    return new Vector2(this._r.x, -this._r.y).rotate(this._rad).add(this.c);
  }

  /** 左下 */
  get p4() {
    return new Vector2(-this._r.x, -this._r.y).rotate(this._rad).add(this.c);
  }

  /** p1からp2に向かうベクトル */
  get v1to2() {
    return Vector2.sub(this.p2, this.p1);
  }

  /** p2からp3に向かうベクトル */
  get v2to3() {
    return Vector2.sub(this.p3, this.p2);
  }

  /** p3からp4に向かうベクトル */
  get v3to4() {
    return Vector2.sub(this.p4, this.p3);
  }

  /** p4からp1に向かうベクトル */
  get v4to1() {
    return Vector2.sub(this.p1, this.p4);
  }
}

//-----------------------------------------------------------------------------
// 三角形
// 三角形は3点の座標によって定義する
//-----------------------------------------------------------------------------
export class Triangle 
{
  /** 頂点１ */
  private _p1:Vector2;

  /** 頂点２ */
  private _p2:Vector2;

  /** 頂点３ */
  private _p3:Vector2;  
  
  /**
   * コンストラクタ
   * @param p1 頂点１
   * @param p2 頂点２
   * @param p3 頂点３
   */
  constructor(p1:Vector2, p2:Vector2, p3:Vector2) 
  {
    this._p1 = p1;
    this._p2 = p2;
    this._p3 = p3;
  }

  /** アクセッサ */
  get p1() { return this._p1; }
  get p2() { return this._p2; }
  get p3() { return this._p3; }

  /** ３頂点の座標を1次元配列で取得する */
  get points() {
    return [
      this._p1.x, this._p1.y,
      this._p2.x, this._p2.y,
      this._p3.x, this._p3.y,
    ];
  }

  /** p1からp2に向かうベクトル */
  get v1to2() {
    return Vector2.sub(this.p2, this.p1);
  }

  /** p2からp3に向かうベクトル */
  get v2to3() {
    return Vector2.sub(this.p3, this.p2);
  }

  /** p3からp1に向かうベクトル */
  get v3to1() {
    return Vector2.sub(this.p1, this.p3);
  }
}