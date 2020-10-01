import * as Util from './util';

/******************************************************************************
 * １次関数 直線
 * y = ax + b の標準形を基準とする
 *
 * 垂直な直線は扱わない
 *****************************************************************************/
export default class Linear
{
  /** y = ax + b とした際のab */
  private _a:number;
  private _b:number;

  constructor(a:number = 0, b:number = 0) {
    this._a = a;
    this._b = b;
  }

  //---------------------------------------------------------------------------
  // getter / setter
  //---------------------------------------------------------------------------
  get a() { return this._a; }
  set a(v:number) { this._a = Util.unifySign(v); }
  get b() { return this._b; }
  set b(v:number) { this._b = Util.unifySign(v); }

  //---------------------------------------------------------------------------
  // 座標計算
  //---------------------------------------------------------------------------
  /** xに対応するyの値(無効時は常に0) */
  fx(x:number) {
    if (this.isInvalid) return 0;
    const { a, b } = this;
    return a * x + b;
  }

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------
  /**
   * 傾き・切片標準形 y = ax + bの式で初期化
   * @param a 傾き
   * @param b y切片
   */
  initStandardForm(a:number, b:number) {
    this.a = a, this.b = b;
    return this;
  }
  
  /**
   * 一般形 Ax + By + Cの式で初期化 
   */
  initGeneralForm(A:number, B:number, C:number) {
    A; B; C;
    this.a = -A/B;
    this.b = C/B;
    return this;
  }

  /**
   * 傾きと１点から初期化する
   * @param a = 傾き
   * @param x = 通過するx
   * @param y = 通過するy
   */
  initBySlopeAndPoint(a:number, x:number, y:number) {
    const b = y - a * x;
    this.a = a;
    this.b = b;
    return this;
  }

  /**
   * 通る２点から初期化する
   * @param x1 = 通過点1のx
   * @param y1 = 通過点1のy
   * @param x2 = 通過点2のx
   * @param y2 = 通過点2のy
   */
  initBy2Point(x1:number, y1:number, x2:number, y2:number) {
    const nume = y2 - y1;
    const deno = x2 - x1;
    const a = nume / deno;
    this.initBySlopeAndPoint(a, x1, y1);
    return this;
  }

  //---------------------------------------------------------------------------
  // 状態・比較
  //---------------------------------------------------------------------------
  /**
   * a, bのいずれかがNaNやInfinityであれば無効とみなす
   */
  get isInvalid() {
    if (!Number.isFinite(this.a)) return true;
    if (!Number.isFinite(this.b)) return true;

    return false;
  }

  /** 与えられたLinearと垂直の関係かどうか */
  isPerpWith(linear:Linear) {
    if (this.isInvalid) return false;
    if (linear.isInvalid) return false;

    return (this.a * linear.a === -1);
  }

  //---------------------------------------------------------------------------
  // Util
  //---------------------------------------------------------------------------
  /** 垂直な直線の傾きを取得 */
  get perpSlope() {
    const slope = -(1/this.a);
    return (Number.isFinite(slope))? slope:0;    
  }

  /** 文字化 */
  toString() {
    return `y=${this.a}x+${this.b}`;
  }

  //---------------------------------------------------------------------------
  // static
  //---------------------------------------------------------------------------

  /** 二つの直線の交点を求める */
  static intersect(a:Linear, b:Linear) {
    const result: {count:number, points:number[]} = {
      count:0,
      points:[]
    }

    const nume = b.b - a.b;
    const deno = a.a - b.a;
    const x = nume/deno;

    // xが求められなかったら終わり
    if (!Number.isFinite(x)) return result;

    // xからyを求める
    const y = a.fx(x);

    // 結果を返す
    result.count = 1;
    result.points.push(x, y);
    return result;
  }
}