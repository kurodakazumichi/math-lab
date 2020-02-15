import * as Util from './Util';

/******************************************************************************
 * ２次関数
 * y = ax^2 + bx + c の一般形を基準とする
 *
 * aは放物線の開き具合
 * bはy切片における接線の傾き
 * cはy切片
 *****************************************************************************/
export default class Quadratic 
{
  /** y = ax^2 + bx + c とした際のabc */
  private _a:number = 0;
  private _b:number = 0;
  private _c:number = 0;

  constructor() {
    this._a = this._b = this._c = 0;
  }

  //---------------------------------------------------------------------------
  // getter / setter
  //---------------------------------------------------------------------------
  /** aの操作 */
  get a() { return Util.unifySign(this._a); }
  set a(v) { this._a = Number(v); }

  /** bの操作 */
  get b() { return Util.unifySign(this._b); }
  set b(v) { this._b = Number(v); }

  /** cの操作 */
  get c() { return Util.unifySign(this._c); }
  set c(v) { this._c = Number(v); }

  /** pの導出 */
  get p() { 
    return Util.unifySign(Quadratic.calcP_By_ab(this.a, this.b))
  }

  /** ｑの導出 */
  get q() { 
    return Util.unifySign(Quadratic.calcQ_By_abc(this.a, this.b, this.c));
  }

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------
  /**
   * 一般形
   * y = ax^2 + bx + cの式で初期化する
   */
  initGeneralForm(a:number, b:number, c:number) {
    this._a = a, this._b = b, this._c = c;
    return this;
  }

  /**
   * 標準形
   * y = a(x - p)^2 + qの式で初期化する
   */
  initStandardForm(a:number, p:number, q:number) {
    this._a = a;
    this._b = Quadratic.calcB_By_ap(a, p);
    this._c = Quadratic.calcC_By_pq(a, p, q);
    return this;
  }

  /** 
   * 因数分解形
   * y = a(x-t)(x-s)の式で初期化する
   */
  initFactorizationForm(a:number, s:number, t:number) {
    this._a = a;
    this._b = Quadratic.calcB_By_ast(a, s, t);
    this._c = Quadratic.calcC_By_ast(a, s, t);
    return this;
  }

  /**
   * 頂点(p, q)と通過する１点(x, y)の情報を元に初期化する 
   */
  initByApexAndPassPoint(p:number, q:number, x:number, y:number) {
    const a = Quadratic.calcA_By_pqxy(p, q, x, y);
    this.initStandardForm(a, p, q);
    return this;
  }

  /**
   * 軸(x)と通過する２点、(x1, y1), (x2, y2)の情報を元に初期化する
   */
  initByAxisAnd2PassPoints(axisX:number, x1:number, y1:number, x2:number, y2:number) {
    const a = Quadratic.calcA_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
    const q = Quadratic.calcQ_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
    const p = axisX;
    this.initStandardForm(a, p, q);
    return this;
  }

  /**
   * 通過する３点、(x1, y1), (x2, y2), (x3, y3)の情報を元に初期化する
   */
  initBy3PassPoints(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    const a = Quadratic.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const b = Quadratic.calcB_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const c = Quadratic.calcC_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    this.initGeneralForm(a, b, c);
    return this;
  }

  //---------------------------------------------------------------------------
  // 座標計算
  //---------------------------------------------------------------------------

  /** xからyを求める */
  fx(x:number) {
    if (this.isInvalid) return 0;

    const { a, p, q } = this;
    return a * ((x - p) * (x - p)) + q;
  }

  /** 放物線の座標リスト */
  getPoints(fromX:number, toX:number, step:number) 
  {
    if (this.isInvalid) return [];

    const p:number[] = [];

    for(let x = fromX; x <= toX; x+=step) {
      p.push(x, this.fx(x));
    }

    return p;    
  }

  /** Y接線における傾きを表す直線の座標リスト */
  getPointsOfSlopeAtYTangent(fromX:number, toX:number) 
  {
    if (this.isInvalid) return [];
    const y1 = this.b * fromX + this.c;
    const y2 = this.b * toX   + this.c;
    return [fromX, y1, toX, y2];
  }

  //---------------------------------------------------------------------------
  // 導出項目
  //---------------------------------------------------------------------------
  /** 頂点 */
  get apex() {
    return { x: this.p, y: this.q }
  }

  /** 軸 */
  get axis() {
    return this.p;
  }

  /** 無効 */
  get isInvalid() {
    return !Quadratic.isValidA(this.a);
  }

  /** 頂点を持っている(定まっているかどうか) */
  get hasApex() {
    const { p, q } = this;
    return Quadratic.hasApex(p, q);
  }

  /** 最大値 */
  get max() {
    if (0 <= this.a) return undefined;
    return this.apex.y;
  }

  /** 最小値 */
  get min() {
    if (this.a <= 0) return undefined;
    return this.apex.y;
  }

  /** 判別式(b^2 - 4ac) */
  get discriminant() {
    const { a, b, c } = this;
    return Quadratic.discriminant(a, b, c);
  }

  /** 解(解の公式から求める) */
  get solution() {
    const { a, b, c } = this;
    return Quadratic.solution(a, b, c);
  }

  /** 正の定符号かどうか */
  get isPositiveDefinite() {
    const { a, b, c } = this;
    return Quadratic.isPositiveDefinite(a, b, c);
  }


  /** 負の定符号かどうか */
  get isNegativeDefinite() {
    const { a, b, c } = this;
    return Quadratic.isNegativeDefinite(a, b, c);
  }

  //---------------------------------------------------------------------------
  // 文字列
  //---------------------------------------------------------------------------
  /** 傾き */
  toStringOfSlope(fixed = 1) {
    if (this.isInvalid) return "なし";
    return this.a.toFixed(fixed);
  }

  /** グラフの軸を表す文字列 */
  toStringOfAxis(fixed = 1) {
    if (!this.hasApex) return "なし";
    const axis = this.axis.toFixed(fixed);
    return `x=${axis}`;
  }

  /** グラフの頂点を表す文字列 */
  toStringOfApex(fixed = 1) {
    if (!this.hasApex) return "なし";
    const x = this.apex.x.toFixed(fixed);
    const y = this.apex.y.toFixed(fixed);
    return `(${x}, ${y})`
  }

  /** y=a(x-p)^2 + q 形式のLatex文字列 */
  toStringOfLatexAPQ(fixed = 1) {
    if (this.isInvalid) return "none";
    const a = this.a.toFixed(fixed);
    const p = this.p.toFixed(fixed);
    const q = this.q.toFixed(fixed);

    return `$$y=${a}(x - (${p}))^2 + (${q})$$`;
  }

  /** y=ax^2+bx+c 形式のLatex文字列 */
  toStringOfLatexABC(fixed = 1) {
    if (this.isInvalid) return "none";

    const a = this.a.toFixed(fixed);
    const b = this.b.toFixed(fixed);
    const c = this.c.toFixed(fixed);
    return `$$y=${a}x^2 + (${b})x + (${c})$$`;
  }

  /** 形状に関する文字列 */
  toStringAboutShape() 
  {
    const { a } = this;
    if (this.isInvalid) return "";
    if (a < 0){
      return "上に凸";
    } else {
      return "下に凸";
    }
  }

  /** 二次関数に関する文字列 */
  toString() {
    const { a, b, c, p , q } = this;
    return `{a:${a}, b:${b}, c:${c}, p:${p}, q:${q}}`
  }

  //---------------------------------------------------------------------------
  // Static
  //---------------------------------------------------------------------------

  /** a, b要素からpを求める */
  static calcP_By_ab(a:number, b:number) {
    return -b / (2 * a);
  }

  /** a, b, c要素からqを求める */
  static calcQ_By_abc(a:number, b:number, c:number) {
    return -((b**2) - (4 * a * c)) / (4 * a);
  }

  /** a, p要素からbを求める */
  static calcB_By_ap(a:number, p:number) {
    return -2 * a * p;
  }

  /** a, s, t要素からbを求める */
  static calcB_By_ast(a:number, s:number, t:number) {
    return (-a*t) + (-a*s);
  }

  /** a, p, q要素からcを求める */
  static calcC_By_pq(a:number, p:number, q:number) {
    return a * p**2 + q;
  }

  /** a, s, t要素からcを求める */
  static calcC_By_ast(a:number, s:number, t:number) {
    return a * s * t;
  }

  /** 頂点pqと通過する１点xyから傾きを計算する */
  static calcA_By_pqxy(p:number, q:number, x:number, y:number) {
    const nume = y - q;
    const deno = (x - p) ** 2;
    return nume / deno;
  }

  /** 軸と通過する２点から傾きを計算する */
  static calcA_By_axixX_x1y1_x2y2(axisX:number, x1:number, y1:number, x2:number, y2:number) {
    const nume = y1 - y2;
    const deno = ((x1 - axisX) ** 2) - ((x2 - axisX) ** 2);
    return nume / deno;
  }

  /** 軸と通過する２点からq(頂点のy座標)を計算する */
  static calcQ_By_axixX_x1y1_x2y2(axisX:number, x1:number, y1:number, x2:number, y2:number) {
    const a  = this.calcA_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
    const q = y1 - (a * (x1 - axisX)**2);
    return q;
  }

  /** ３点から傾きを計算する */
  static calcA_By_x1y1_x2y2_x3y3(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    const nume = ((y1 - y2) * (x1 - x3) - (y1 - y3) * (x1 - x2));
    const deno = ((x1 - x2) * (x1 - x3) * (x2 - x3))
    return nume / deno;
  }

  /** ３点からbを計算する */
  static calcB_By_x1y1_x2y2_x3y3(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    const a = this.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const nume = y1 - y2 - (a * (x1**2 - x2**2));
    const deno = x1 - x2;
    return nume / deno;
  }

  /** 3点からcを計算する */
  static calcC_By_x1y1_x2y2_x3y3(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    const a = this.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const b = this.calcB_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const c = y1 + (-a*(x1*x1) - b*x1);
    return c;
  }

  /** 判別式(b^2 - 4ac) */
  static discriminant(a:number, b:number, c:number) {
    return (b**2) - (4*a*c);
  }

  /** 解(解の公式から求める) */
  static solution(a:number, b:number, c:number) {

    const d = Quadratic.discriminant(a, b, c);

    // a が 0の場合は定義なし
    if (a === 0) return undefined;

    // D < 0の時、解はない
    if (d < 0) return [];

    // 解を求める
    const deno = 2 * a;
    const x1 = Util.unifySign((-b - Math.sqrt(d)) / deno);
    const x2 = Util.unifySign((-b + Math.sqrt(d)) / deno);

    // D = 0の時、重解になる
    if (d === 0) return [x1];

    // D > 0の時、異なる２点を共有する
    return [Math.min(x1, x2), Math.max(x1, x2)];
  }

  /** 傾き(a)が有効かどうか */
  static isValidA(a:number) {
    if (a === 0) return false;
    if (isNaN(a)) return false;
    if (Infinity == Math.abs(a)) return false;
    return true;
  }

  /** 頂点を持っている(定まっているかどうか) */
  static hasApex(p:number, q:number) {
    if (isNaN(p) || isNaN(q)) return false;
    if (Infinity === Math.abs(p)) return false;
    if (Infinity === Math.abs(q)) return false;
    return true;
  }

  /** 
   * ２次関数が正の定符号であるか 
   * ①放物線は下に凸(0 < a)でなければいけない
   * ②判別式の結果が0未満でなければいけない(x軸との共有点を持たない)
   */
  static isPositiveDefinite(a:number, b:number, c:number) {
    if (!Quadratic.isValidA(a)) return false;
    if (a < 0) return false;
    const d = Quadratic.discriminant(a, b, c);
    return (d < 0);
  }

  /** 
   * ２次関数が負の定符号であるか 
   * ①放物線は上に凸(a < 0)でなければいけない
   * ②判別式の結果が0未満でなければいけない(x軸との共有点を持たない)
   */
  static isNegativeDefinite(a:number, b:number, c:number) {
    if (!Quadratic.isValidA(a)) return false;
    if (0 < a) return false;
    const d = Quadratic.discriminant(a, b, c);
    return (d < 0);
  }

  /**
   * ２つの２次関数が交差する点を求める 
   */
  static intersect(a:Quadratic, b:Quadratic) 
  {
    // 返却用のデータを定義
    const result:{count:number, points:number[]} = {
      count:0,
      points:[]
    };

    // 無効な２次式は扱わないものとする
    if (a.isInvalid || b.isInvalid) return result;
    
    // ２つの２次式から新たな２次式を作る
    const c = new Quadratic().initGeneralForm(a.a - b.a, a.b - b.b, a.c - b.c);

    // 解の公式から交わるxの座標を求める
    const px = c.solution;



    // 解なしの場合は交わらない
    if (px === undefined || px.length === 0) return result;

    // 解が存在する場合は解の数だけ座標を計算して結果を返す
    px.map((x) => {
      result.count++;
      result.points.push(x, a.fx(x));
    })

    return result;
  }

}