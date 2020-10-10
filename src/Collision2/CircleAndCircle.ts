/******************************************************************************
 * 円と円の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Circle } from '../Primitive2';

/**
 * 円と円が当たっているかどうか
 * @param circle1 円１
 * @param circle2 円２
 */
export function isHit(circle1:Circle, circle2:Circle) 
{
  // 円１から円２の中心に向かうベクトルを v とする
  const v = Vector2.sub(circle2.p, circle1.p);

  // v の長さが ２つの円の半径の和より小さければ当たっている
  // (処理負荷対策でルートを使わないようにしている)
  return (v.sqrMagnitude < (circle1.r + circle2.r)**2);
}

/**
 * 衝突判定の結果オブジェクト
 */
export interface IIntercectResult {
  hit:boolean;
  pos:Vector2[];
}

/**
 * 直線と円の衝突
 * @param circle1 円１
 * @param circle2 円２
 */
export function intercect(circle1:Circle, circle2:Circle) 
{
  // 衝突判定の結果オブジェクト
  const result:IIntercectResult = {
    hit: false,
    pos: [],
  }

  // 円1の中心をA、円2の中心をB、交点の1つをCとする。
  const A = circle1.p;
  const B = circle2.p;

  // AからBに向かうベクトルをvABと定義する
  const vAB = Vector2.sub(B, A);

  // 辺ABの長さを a とする
  const a = vAB.magnitude;

  // a が 2円の半径の和より大きければ当たっていない
  const sumR = circle1.r + circle2.r;
  if (sumR < a) return result;

  // ここに来たらとりあえず当たっている
  result.hit = true;

  // 円と円の交点を求めていく

  // 円が内包されている時は接点は存在しない
  // 円が内包されている場合、a は 2円の半径の差より小さい
  const subR = Math.abs(circle1.r - circle2.r);
  if (a < subR) {
    return result;
  }

  // 円が外接しているとき、a と 2つの円の半径の和は等しく、接点は１つだけになる。
  // また内接しているとき、a と ２つの円の半径の差は等しく、接点は１つだけになる。
  if (a === sumR || a === subR) 
  {
    // vAB を正規化したベクトルを n とする
    const n = vAB.normalize;

    // 大きい方の円を基準にする
    const large = (circle1.r < circle2.r)? circle2 : circle1;

    // 大きい方の円を基準歳、接点をCとすると
    // C は A に n を 円1の半径の長さ分、マイナスに伸ばしたベクトルを足した位置
    const C = Vector2.add(large.p, n.times(-large.r));
    result.pos.push(C);

    return result;
  }

  // 三角形ABCの三辺は全て既知である。
  // 辺ACの長さをb、辺BCの長さをcとする
  const b = circle1.r;
  const c = circle2.r;

  // 角A の cosA は余弦定理により
  const cosA = (a**2 + b**2 - c**2) / (2 * a * b);

  // CからABに垂線を落とした時に当たる位置を P とすると、APの長さを t とすると t は b * cosA
  const t = b * cosA;

  // 辺CPの長さを s とすると s は三平方の定理から s = √b^2 + t^2
  const s = Math.sqrt(b**2 - t**2);

  // vABの正規化したベクトルを n1とする
  const n1 = vAB.normalize;

  // n1を左に90度回転させたベクトルを n2とする
  const n2 = new Vector2(-n1.y, n1.x);

  // 交点であるCの座標は A + tn1 + sn2 となり
  // もう一つの交点C'は A + tn1 - sn2 となる
  const tn1 = n1.times(t);
  const sn2 = n2.times(s);

  result.pos.push(circle1.p.clone().add(tn1).add(sn2));
  result.pos.push(circle1.p.clone().add(tn1).sub(sn2));
  
  return result;
}