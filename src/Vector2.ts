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

  /** 逆ベクトル */
  inverse() {
    this.x *= -1;
    this.y *= -1;
    return this;
  }

  /** 零ベクトルかどうか */
  get isZero() {
    return (this.x === 0 && this.y === 0);
  }

  /** 大きさ */
  get magnitude() {
    const {x, y} = this;
    return Math.sqrt(x*x + y*y)
  }

  /** 正規化 */
  get normalize() {
    const { magnitude } = this;

    if (magnitude == 0) return {x:0, y:0}

    return {
      x: this.x/magnitude,
      y: this.y/magnitude
    };
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
    return v.clone().inverse();
  }
}