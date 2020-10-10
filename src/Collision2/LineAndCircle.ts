/******************************************************************************
 * 直線と円の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Circle } from '../Primitive2';
import * as PointAndLine from './PointAndLine';

/**
 * 直線と円が当たっているかどうか
 * @param line 直線
 * @param circle 円
 */
export function isHit(line:Line, circle:Circle) 
{
  // 円の中心と直線の最近傍点 p を求める
  const p = PointAndLine.getNearestNeighborPoint(circle.p, line);

  // 円の中心から p までの距離を d として
  // d < 円の半径 r だったら当たっている
  const d = Vector2.sub(p, circle.p).sqrMagnitude;

  return (d < circle.r * circle.r);
}

export interface IIntercectResult {
  hit:boolean;
  pos:Vector2[];
  nearest:Vector2;
}

/**
 * 直線と円の衝突
 * @param line 直線
 * @param circle 円
 */
export function intercect(line:Line, circle:Circle) 
{
  // 衝突判定の結果オブジェクト
  const result:IIntercectResult = {
    hit: false,
    pos: [],
    nearest: Vector2.zero, // 最近傍点
  }

  // 円の中心 と直線の最近傍点 p を求める
  const p = PointAndLine.getNearestNeighborPoint(circle.p, line);
  result.nearest = p;

  // 円の中心から p に向かうベクトルを cp とする
  const cp = Vector2.sub(p, circle.p);

  // cp の長さを t とする
  const t = cp.magnitude;

  // t が 円の半径より大きければあたっていない
  if (circle.r < t) return result;

  // ここにきたら直線と円はあたっている
  result.hit = true;

  // 円と直線の交点を求めていく

  // まずは直線と円の交点が1つの場合を考える
  // 直線と円が接している時、 t === r になる。
  if (circle.r === t) 
  {
    // この時、直線と円の交点は、円の中心 c に cpを正規化し r 倍した位置にくる。
    result.pos.push(Vector2.add(circle.p, cp.normalize.times(circle.r)));
    return result;
  }

  // 直線と円が交差している(接点が2つあると場合)

  // p から 接点までの距離を s とおき、三平方の定理から s を導く
  const s = Math.sqrt(circle.r**2 - t**2);

  // 直線の方向ベクトルを正規化したものを s倍したベクトルを sv とすると
  // 交点1：p + sv
  // 交点2：p - sv
  const sv = line.v.normalize.times(s);

  result.pos.push(Vector2.add(p, sv));
  result.pos.push(Vector2.sub(p, sv))

  return result;
}