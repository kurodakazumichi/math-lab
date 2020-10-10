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

  // 円の中心を c とする
  const c = circle.p;

  // c と直線の最近傍点 h を求める
  const h = PointAndLine.getNearestNeighborPoint(circle.p, line);
  result.nearest = h;

  // c -> h に向かうベクトルを hp とする
  const hp = Vector2.sub(h, circle.p);

  // hp の長さを hp_len とする
  const hp_len = hp.magnitude;

  // hp_len が 円の半径より大きければあたっていない
  if (circle.r < hp_len) return result;

  // ここにきたら直線と円はあたっている
  result.hit = true;

  // 円と直線の交点を求めていく

  // まずは直線と円の交点が1つの場合を考える
  // 直線と円が接している時、 hp_len === r であり、接点は中心と直線の最近傍点になる。
  if (circle.r === hp_len) 
  {
    result.pos.push(h);
    return result;
  }

  // 直線と円が交差している(接点が2つあると場合)

  // h から 接点までの距離を t とおき、三平方の定理から t を導く
  const t = Math.sqrt(circle.r**2 - hp_len**2);

  // 直線の方向ベクトルを正規化したものを t倍したベクトルを tv とすると
  // 交点1：p + sv
  // 交点2：p - sv
  const tv = line.v.normalize.times(t);

  result.pos.push(Vector2.add(h, tv));
  result.pos.push(Vector2.sub(h, tv))

  return result;
}