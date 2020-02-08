/******************************************************************************
 * ２次関数
 * このクラスは以下の２次関数の式から組み立てている
 * y = a(x-p)^2 + q
 * y = ax^2 + bx + c
 *
 * a は 放物線の傾き
 * (p, q)は頂点になる。
 *****************************************************************************/
export default class Quadratic 
{
  /** y = ax^2 + bx + c とした際のabc */
  private _a:number = 0;
  private _b:number = 0;
  private _c:number = 0;

  /** y = a(x - p)^2 + q とした際のp, q */
  private _p:number = 0;
  private _q:number = 0;

  constructor() {
    this._a = this._b = this._c = this._p = this._q = 0;
  }

  //---------------------------------------------------------------------------
  // getter / setter
  //---------------------------------------------------------------------------
  /** aの操作 */
  get a() { return (this._a === 0)? 0 : this._a; }
  set a(v) { 
    this._a = Number(v);
    this.initAPQ(this._a, this._p, this._q);
  }

  /** bの操作 */
  get b() { return (this._b === 0)? 0 : this._b; }
  set b(v) {
    this._b = Number(v);
    this._p = Quadratic.calcP_By_ab(this.a, this.b);
    this._q = Quadratic.calcQ_By_abc(this.a, this.b, this.c);
  }

  /** cの操作 */
  get c() { return (this._c === 0)? 0 :this._c; }
  set c(v) {
    this._c = Number(v);
    this._q = Quadratic.calcQ_By_abc(this.a, this.b, this.c);
  }

  /** pの操作 */
  get p() { return (this._p === 0)? 0 : this._p; }
  set p(v) {
    this._p = Number(v);
    this._b = Quadratic.calcB_By_ap(this.a, this.p);
    this._c = Quadratic.calcC_By_pq(this.a, this.p, this.q);
  }

  /** ｑの操作 */
  get q() { return (this._q === 0)? 0 : this._q; }
  set q(v) {
    this._q = Number(v);
    this._c = Quadratic.calcC_By_pq(this.a, this.p, this.q);
  }

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------
  /**
   * y = ax^2 + bx + cの式で初期化する
   */
  initABC(a:number, b:number, c:number) {
    this._a = a, this._b = b, this._c = c;
    this._p = Quadratic.calcP_By_ab(a, b);
    this._q = Quadratic.calcQ_By_abc(a, b, c);
    return this;
  }

  /**
   * y = a(x - p)^2 + qの式で初期化する
   * @param {*} a 
   * @param {*} p 
   * @param {*} q 
   */
  initAPQ(a:number, p:number, q:number) {
    this._a = a, this._p = p, this._q = q;
    this._b = Quadratic.calcB_By_ap(a, p);
    this._c = Quadratic.calcC_By_pq(a, p, q);
    return this;
  }

  /**
   * 頂点(p, q)と通過する１点(x, y)の情報を元に初期化する 
   */
  initByApexAndPassPoint(p:number, q:number, x:number, y:number) {
    const a = Quadratic.calcA_By_pqxy(p, q, x, y);
    this.initAPQ(a, p, q);
    return this;
  }

  /**
   * 軸(x)と通過する２点、(x1, y1), (x2, y2)の情報を元に初期化する
   */
  initByAxisAnd2PassPoints(axisX:number, x1:number, y1:number, x2:number, y2:number) {
    const a = Quadratic.calcA_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
    const q = Quadratic.calcQ_By_axixX_x1y1_x2y2(axisX, x1, y1, x2, y2);
    const p = axisX;
    this.initAPQ(a, p, q);
    return this;
  }

  /**
   * 通過する３点、(x1, y1), (x2, y2), (x3, y3)の情報を元に初期化する
   */
  initBy3PassPoints(x1:number, y1:number, x2:number, y2:number, x3:number, y3:number) {
    const a = Quadratic.calcA_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const b = Quadratic.calcB_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    const c = Quadratic.calcC_By_x1y1_x2y2_x3y3(x1, y1, x2, y2, x3, y3);
    this.initABC(a, b, c);
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

  /** a, p, q要素からcを求める */
  static calcC_By_pq(a:number, p:number, q:number) {
    return a * p**2 + q;
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
    const x1 = (-b - Math.sqrt(d)) / deno;
    const x2 = (-b + Math.sqrt(d)) / deno;

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
  static  hasApex(p:number, q:number) {
    if (isNaN(p) || isNaN(q)) return false;
    if (Infinity === Math.abs(p)) return false;
    if (Infinity === Math.abs(q)) return false;
    return true;
  }
}