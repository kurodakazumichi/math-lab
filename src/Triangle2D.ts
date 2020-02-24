import Vector2 from './Vector2';

export enum Type {
  None,   // なし
  Right,  // 直角
  Acute,  // 鋭角
  Obtuse, // 鈍角
}

/******************************************************************************
 * 三角形
 *          * A
 *         * *
 *        *   *
 *       *     *
 *      *********
 *     B         C
 * 
 * 三角形を構成する３点をそれぞれABCとし、それぞれの角度を∠A、∠B、∠Cとする。
 * 
 * この角に対する辺の長さを以下のように定義する
 * BC = a
 * CA = b
 * AB = c
 *****************************************************************************/
export default class Triangle2D {
  
  private _A:Vector2;
  private _B:Vector2;
  private _C:Vector2;

  constructor(p:number[] = []){
    const ax = p[0]? p[0]:0;
    const ay = p[1]? p[1]:0;
    const bx = p[2]? p[2]:0;
    const by = p[3]? p[3]:0;
    const cx = p[4]? p[4]:0;
    const cy = p[5]? p[5]:0;

    this._A = new Vector2(ax, ay);
    this._B = new Vector2(bx, by);
    this._C = new Vector2(cx, cy);
  }

  get A() { return this._A; }
  get B() { return this._B; }
  get C() { return this._C; }

  /** 辺ABのベクトル */
  get AB() {
    return Vector2.sub(this.B, this.A);
  }

  /** 辺BCのベクトル */
  get BC() {
    return Vector2.sub(this.C, this.B);
  }

  /** 辺CAのベクトル */
  get CA() {
    return Vector2.sub(this.A, this.C);
  }
  
  /** 辺ABの長さ */
  get a() {
    return this.BC.magnitude;
  }

  /** 辺CAの長さ */
  get b() {
    return this.CA.magnitude;
  }

  /** 辺ABの長さ */
  get c() {
    return this.AB.magnitude;
  }

  //---------------------------------------------------------------------------
  // 辺の長さの扱い
  /** 辺の長い順にソートした配列 */
  get sortedLength() {
    const { a,  b,  c } = this;
    const list = [a, b, c];
    list.sort((a, b) => b - a);
    return list;
  }

  /** 最大辺の名前 */
  get maxSideName() {
    if(this.isInvalid) return "";

    // 辺の長さが長い順にそーと
    const list = this.sortedLength;
    
    const { a, c } = this;
    switch(list[0]) {
      case c : return "AB";
      case a : return "BC";
      default: return "CA";
    }
  }

  /** 最小辺の名前 */
  get minSideName() {
    if(this.isInvalid) return "";

    // 辺の長さが長い順にそーと
    const list = this.sortedLength;
    
    const { a, c } = this;

    switch(list[2]) {
      case c : return "AB";
      case a : return "BC";
      default: return "CA";
    }
  }

  /** 名前を指定して辺の長さを取得 */
  getLengthAt(sideName: string) {
    switch(sideName) {
      case "BC": return this.a;
      case "CA": return this.b;
      case "AB": return this.c;
    }
    return 0;
  }

  /** 最大辺の長さ */
  get maxLength() {
    return this.getLengthAt(this.maxSideName);
  }

  /** 最小辺の長さ */
  get minLength() {
    return this.getLengthAt(this.minSideName);
  }

  //---------------------------------------------------------------------------
  // 角度の扱い
  /** 最大角の名前 */
  get maxCornerName() {
    const side = this.maxSideName;

    switch(side){
      case "BC": return "A";
      case "CA": return "B";
      case "AB": return "C";
    }

    return "";
  }

  /** 最小角の名前 */
  get minCornerName() {
    const side = this.minSideName;

    switch(side) {
      case "BC": return "A";
      case "CA": return "B";
      case "AB": return "C";
    }

    return "";
  }

  /** 余剰定理によりcosA */
  get cosA() {
    if (this.isInvalid) return 0;

    const { a, b, c } = this;

    const n = (b**2) + (c**2) - (a**2);
    const d = 2 * b * c;
    const cos = n/d;
    return cos;
  }

  /** 余剰定理によりcosB */
  get cosB() {
    if (this.isInvalid) return 0;

    const { a, b, c } = this;

    const n = (c**2) + (a**2) - (b**2);
    const d = 2 * c * a;
    const cos = n/d;
    return cos;
  }

  /** 余剰定理によりcosC */
  get cosC() {
    if (this.isInvalid) return 0;

    const { a, b, c } = this;

    const n = (a**2) + (b**2) - (c**2);
    const d = 2 * a * b;
    const cos = n/d;
    return cos;
  }

  /** sinA */
  get sinA() {
    if (this.isInvalid) return 0;

    const { cosA } = this;
    const sin = Math.sqrt(1 - (cosA**2));
    return sin;
  }

  /** sinB */
  get sinB() {
    if (this.isInvalid) return 0;

    const { cosB } = this;
    const sin = Math.sqrt(1 -  (cosB**2));
    return sin;
  }

  /** sinC */
  get sinC() {
    if (this.isInvalid) return 0;

    const  { cosC } = this;
    const sin = Math.sqrt(1 - (cosC**2));
    return sin;
  }

  /** tanA */
  get tanA() {
    if (this.isInvalid) return 0;

    const { sinA, cosA } = this;
    return sinA / cosA;
  }

  /** tanB */
  get tanB() {
    if (this.isInvalid) return 0;

    const { sinB, cosB } = this;
    return sinB / cosB;
  }

  /** tanC */
  get tanC() {
    if (this.isInvalid) return 0;

    const { sinC, cosC } = this;
    return sinC / Number(cosC.toFixed(15)); // 小数点誤差をごまかすためにfixedでまるめ
  }

  /** 指定した角の余剰を取得する */
  getCosAt(cornerName:string) {
    switch(cornerName) {
      case "A": return this.cosA;
      case "B": return this.cosB;
      case "C": return this.cosC;
    }
    return 0;
  }

  /** 最大角の余剰 */
  get maxCornerCos() {
    return this.getCosAt(this.maxCornerName);
  }

  /** 最小角の余剰 */
  get minCornerCos() {
    return this.getCosAt(this.minCornerName);
  }

  /** 指定した角のsinを取得 */
  getSinAt(cornerName:string) {
    switch(cornerName) {
      case "A": return this.sinA;
      case "B": return this.sinB;
      case "C": return this.sinC;
    }
    return 0;
  }

  /** 最大角のsin */
  get maxCornerSin() {
    return this.getSinAt(this.maxCornerName);
  }

  /** 最小角のsin */
  get minCornerSin() {
    return this.getSinAt(this.minCornerName);
  }

  /** 指定した角のtanを取得 */
  getTanAt(connerName:string) {
    switch(connerName) {
      case "A": return this.tanA;
      case "B": return this.tanB;
      case "C": return this.tanC;
    }
    return 0;
  }

  /** 最大角のtan */
  get maxCornerTan() {
    return this.getTanAt(this.maxCornerName);
  }

  /** 最小角のtan */
  get minCornerTan() {
    return this.getTanAt(this.minCornerName);
  }

  /** ∠A(弧度法) */
  get radA() {
    if (this.isInvalid) return 0;
    const { cosA } = this;
    return Math.acos(cosA);
  }

  /** ∠B(弧度法) */
  get radB() {
    if (this.isInvalid) return 0;
    const { cosB } = this;
    return Math.acos(cosB);
  }

  /** ∠C(弧度法) */
  get radC() {
    if (this.isInvalid) return 0;
    const { cosC } = this;
    return Math.acos(cosC);
  }

  //---------------------------------------------------------------------------
  // 幾何学

  /** 三角形の面積 */
  get area() {
    const { b, c, sinA } = this;
    return (b * c * sinA) * 0.5;
  }

  /** 外接円の半径 */
  get outerRadius() {
    if (this.isInvalid) return 0;
    const { a, sinA } = this;
    return a / (2*sinA);
  }

  /** 内接円の半径 */
  get innerRadius() {
    if (this.isInvalid) return 0;
    const { a, b, c, area } = this;
    return (2 * area) / (a + b + c);
  }

  /** 三角形の中心(重心) */
  get center() {
    if (this.isInvalid) return Vector2.zero;

    const { A, B, C } = this;
    const g = new Vector2().add(A).add(B).add(C).times(1/3);
    
    return g;
  }

  /** 三角形の外接円の中心(外心) */
  get outerCenter() {
    if (this.isInvalid) return Vector2.zero;

    const { A, B, C, radA, radB, radC } = this;

    const sin2A = Math.sin(radA*2);
    const sin2B = Math.sin(radB*2);
    const sin2C = Math.sin(radC*2);

    const center = A.clone().times(sin2A)
      .add(B.clone().times(sin2B))
      .add(C.clone().times(sin2C));

    const d = sin2A + sin2B + sin2C;

    return center.times(1/d);
  }

  /** 三角形の内接円の中心(内心) */
  get innerCenter() {
    if (this.isInvalid) return Vector2.zero;

    const { A, B, C, a, b, c } = this;

    const center = A.clone().times(a)
      .add(B.clone().times(b))
      .add(C.clone().times(c));

    const d = 1 / (a + b + c);

    return center.times(d);
  }

  //---------------------------------------------------------------------------
  // 状態

  /** 三角形として無効か */
  get isInvalid() {
    const list = this.sortedLength;

    // 一番長い辺が残りの２つの辺の長さの合計より小さければ三角形として成り立つ
    const [a, b, c] = list;
    return !(a < b + c);
  }

  /** 三角形のタイプ */
  get type() {
    if (this.isInvalid) return Type.None;

    const list = this.sortedLength;

    const max = Number((list[0]**2).toFixed(15));
    const mid = Number((list[1]**2).toFixed(15));
    const min = Number((list[2]**2).toFixed(15));

    // 最大辺 < 他の二辺の二乗の和 -> 鋭角
    if (max < mid + min) return Type.Acute;
    // 最大辺 > 他の二辺の二乗の和 -> 鈍角
    if (max > mid + min) return Type.Obtuse;
    // 最大辺 = 他の二辺の二乗の和 -> 直角
    return Type.Right;
  }

  toString() {
    const { A, B, C } = this;
    return `A${A}, B${B}, C${C}`
  }
}
