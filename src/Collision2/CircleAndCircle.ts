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
  vh: Vector2,
  vv: Vector2,
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
    vh:Vector2.zero,
    vv:Vector2.zero,
  }

  // 円1の中心をC1、円2の中心をC2、交点の1つをPとする。
  const C1 = circle1.p;
  const C2 = circle2.p;

  // C1からC2に向かうベクトルを vC1C2と定義する
  const vC1C2 = Vector2.sub(C2, C1);

  // 辺C1C2の長さを a とする
  const a = vC1C2.magnitude;

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
  if (a === sumR) {
      // vC1C2 を正規化したベクトルを n とする
      const n = vC1C2.normalize;

      // 接点P は C1 に n を 円の半径の長さ分伸ばしたベクトルを足せばいい
      const P = Vector2.add(circle1.p, n.times(circle1.r));
      result.pos.push(P);
  
      return result;
  }

  // また内接しているとき、a と ２つの円の半径の差は等しく、接点は１つだけになる。
  if (a === subR) 
  {
    // vC1C2 を正規化したベクトルを n とする
    const n = vC1C2.normalize;

    // C1の方が大きいかどうか
    const isLarge = (circle1.r > circle2.r);

    // 接点をPとすると
    // C1の方が大きい場合、P は C1 + r1・n
    // C1の方が小さい場合、P は C1 - r1・n
    const P = Vector2.add(circle1.p, n.times(isLarge? circle1.r:-circle1.r));
    result.pos.push(P);

    return result;
  }

  // 三角形C1C2Pの三辺は全て既知である。
  // 辺C1Pの長さをb、辺C2Pの長さをcとする
  const b = circle1.r;
  const c = circle2.r;

  // 角C1 の cosθ は余弦定理により
  const cos = (a**2 + b**2 - c**2) / (2 * a * b);

  // PからC1C2に垂線を落とした時に当たる位置を H とし、C1Hの長さを rc とすると rc は b * cos
  const rc = b * cos;

  // 辺HPの長さを rs とすると rs は三平方の定理から rs = √b^2 - t^2
  const rs = Math.sqrt(b**2 - rc**2);

  // vC1C2の正規化したベクトルを n1とする
  const n1 = vC1C2.normalize;

  // n1を左に90度回転させたベクトルを n2とする
  const n2 = new Vector2(-n1.y, n1.x);

  // 交点であるPの座標は C1 + rc・n1 + rs・n2 となり
  // もう一つの交点C'は C1 + rc・n1 - rs・n2 となる
  const tn1 = n1.times(rc);
  const sn2 = n2.times(rs);

  result.vh = tn1;
  result.vv = sn2;

  result.pos.push(circle1.p.clone().add(tn1).add(sn2));
  result.pos.push(circle1.p.clone().add(tn1).sub(sn2));
  
  return result;
}