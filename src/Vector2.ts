/******************************************************************************
 * Vector2
 *****************************************************************************/
export default class Vector2 
{
  /** x成分 */
  x:number = 0;

  /** y成分 */
  y:number = 0;

  constructor(x:number = 0, y:number = 0) {
    this.x = x;
    this.y = y;
  }

  /** 相等 */
  equal(v:Vector2) {
    return (this.x === v.x && this.y === v.y);
  }

  /** 加法 */
  add(v:Vector2) {
    this.x += v.x;
    this.y += v.y;
    return this;
  }

  /** 減法 */
  sub(v:Vector2) {
    this.x -= v.x;
    this.y -= v.y;
    return this;
  }

  /** 実数倍 */
  times(k:number) {
    this.x *= k;
    this.y *= k;
    return this;
  }

  /** 大きさ */
  get magnitude() {
    const {x, y} = this;
    return Math.sqrt(x*x + y*y)
  }

  /** 正規化 */
  get normalize() {
    const { magnitude } = this;

    if (magnitude == 0) return Vector2.zero;

    const v = {
      x: this.x/magnitude,
      y: this.y/magnitude
    };

    return new Vector2(v.x, v.y);
  }

  /** 
   * 回転 
   * x = x * cosθ - y * sinθ
   * y = x * sinθ + y * cosθ
   **/
  rotate(rad:number) {
    this.x = this.x * Math.cos(rad) - this.y * Math.sin(rad);
    this.y = this.x * Math.sin(rad) + this.y * Math.cos(rad);
    return this;
  }

  /** コピー */
  copy(v:Vector2) {
    this.x = v.x;
    this.y = v.y;
    return this;
  }

  /** 複製 */
  clone() {
    return new Vector2(this.x, this.y);
  }

  /** テキスト化 */
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  //---------------------------------------------------------------------------
  // Static
  //---------------------------------------------------------------------------
  // 基本ベクトル
  static get zero() {
    return new Vector2(0, 0);
  }
  static get one() {
    return new Vector2(1, 1);
  }
  static get up() {
    return new Vector2(0, 1);
  }
  static get down() {
    return new Vector2(0, -1);
  }
  static get left() {
    return new Vector2(-1, 0);
  }
  static get right() {
    return new Vector2(1, 0);
  }

  /** 加法 */
  static add(v1:Vector2, v2:Vector2)  {
    return v1.clone().add(v2);
  }

  /** 減法 */
  static sub(v1:Vector2, v2:Vector2) {
    return v1.clone().sub(v2);
  }

  /** 実数倍 */
  static times(v:Vector2, k:number) {
    return v.clone().times(k);
  }

  /** 逆ベクトル */
  static inverse(v:Vector2) {
    return v.clone().times(-1);
  }

  /** 零ベクトルかどうか */
  static isZero(v:Vector2) {
    return (v.x === 0 && v.y === 0);
  }

  /** 平行かどうか */
  static isParallel(v1:Vector2, v2:Vector2) {
    const t = v1.x * v2.y - v1.y * v2.x;
    return (t === 0);
  }

  /** 垂直かどうか */
  static isVertical(v1:Vector2, v2:Vector2) {
    return (Vector2.dot(v1, v2) === 0);
  }

  /** 内積 */
  static dot(v1:Vector2, v2:Vector2) {
    const dot = v1.x * v2.x + v1.y * v2.y;
    return dot;
  }

  /** 外積 */
  static cross(v1:Vector2, v2:Vector2) {
    const cross = v1.x * v2.y - v2.x * v1.y;
    return cross;
  }

  /** ２つのベクトルがなす角 */
  static angle(v1:Vector2, v2:Vector2) {
    const nemu = Vector2.dot(v1, v2);
    const deno = v1.magnitude * v2.magnitude;
    const cos  = nemu / deno;
    return Math.acos(cos);
  }


}