/******************************************************************************
 * Vector2
 *****************************************************************************/
export default class Vector2 
{
  /** x成分 */
  x:number = 0;

  /** y成分 */
  y:number = 0;

  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /** 相等 */
  equal(v:Vector2) {
    return (this.x === v.x && this.y === v.y);
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

  /** テキスト化 */
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}