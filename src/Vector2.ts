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

  /** ベクトルの２乗の長さを返す */
  get sqrMagnitude() {
    const { x, y } = this;
    return x*x + y*y;
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

  /** ラジアン角度 */
  get rad() {
    const { x, y } = this;
    const rad = Math.atan(y/x)

    // 第二、第三象限の場合は180度分加算
    if (rad < 0 && x < 0 || 0 < rad && y < 0) {
      return rad + Math.PI;
    }

    // 第四象限の場合は360度分加算
    if (rad < 0 && 0 < x) {
      return rad + 2 * Math.PI;
    }

    return rad;
  }

  /** 
   * 回転 
   * x = x * cosθ - y * sinθ
   * y = x * sinθ + y * cosθ
   **/
  rotate(rad:number) {
    const { x, y } = this;
    this.x = x * Math.cos(rad) - y * Math.sin(rad);
    this.y = x * Math.sin(rad) + y * Math.cos(rad);
    return this;
  }

  set(x:number, y:number) {
    this.x = x;
    this.y = y;
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

  /** 補間 */
  lerp(to:Vector2, t:number) {
    const v = Vector2.sub(to, this);
    this.add(v.times(t));
    return this;
  }

  /** テキスト化 */
  toString() {
    return `(${this.x}, ${this.y})`;
  }

  /** 内積 */
  dot(v:Vector2) {
    return Vector2.dot(this, v);
  }

  /** 外積 */
  cross(v: Vector2) {
    return Vector2.cross(this, v);
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
    const t = Vector2.cross(v1, v2);
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

  /** distance */
  static distance(v1:Vector2, v2:Vector2) {
    return Vector2.sub(v1, v2).magnitude;
  }
  
  /** 補間 */
  static lerp(v1:Vector2, v2:Vector2, t:number) {
    return v1.clone().lerp(v2, t);
  }

  /** 中点 */
  static midpoint(v1:Vector2, v2:Vector2) {
    return v1.clone().add(v2).times(0.5);
  }

  /**
   * 基点となるbaseと2点(p1, p2)の座標を与えると、θが鋭角かどうか返す関数
   *    p2
   *   /
   *  /
   * / θ
   * -------------> p1
   * base
   */
  static isAcuteAngle(base:Vector2, p1:Vector2, p2:Vector2) {
    const v1 = Vector2.sub(p1, base);
    const v2 = Vector2.sub(p2, base);
    return (0 < v1.dot(v2))
  }

    /**
   * 基点となるbaseと2点(p1, p2)の座標を与えると、θが鈍角かどうか返す関数
   *    p2
   *   /
   *  /
   * / θ
   * -------------> p1
   * base
   */
  static isObtuseAngle(base:Vector2, p1:Vector2, p2:Vector2) {
    const v1 = Vector2.sub(p1, base);
    const v2 = Vector2.sub(p2, base);
    return (v1.dot(v2) < 0);
  }
}