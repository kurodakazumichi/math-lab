/******************************************************************************
 * 点と直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Ray } from '../Primitive2';
import { Define } from '..';

/**
 * 点と半直線が当たっているかどうか
 * @param point 点
 * @param ray 半直線
 */
export function isHit(point:Vector2, ray: Ray)
{
  // 半直線の方向を表すベクトルをa
  // 半直線の始点からpointに向かうベクトルをb
  // |a||b|をlとする。
  //
  // a・b = |a||b| になるとき、点は半直線の上にあることになる。
  // 
  // ①点が半直線のライン上にあるとき、aとbは平行になる
  // ②内積は|a||b|cos(θ)
  // ③aとbが平行になるとき、θは0度か180度になる。
  // ④cos(0)は1の為、aとbの間の角度が0度の時、内積の値は|a||b|になる
  // ⑤cos(180)は-1のため、aとbの間の角度が180度の時、内積の値は-|a||b|
  // よってaとbの内積=|a||b|の時、点は半直線上にあるといえる。
  const a = ray.v;
  const b = Vector2.sub(point, ray.p);
  let l = a.magnitude * b.magnitude;
  let d = Vector2.dot(a, b);

  return (Math.abs(d - l) < Define.EPSILON);
}

/**
 * 点と半直線の衝突
 * @param point 点
 * @param ray 半直線
 */
export function intercect(point:Vector2, ray:Ray) 
{
  // 当たっているかどうかの判定
  const hit = isHit(point, ray);

  // 衝突位置
  // 点との衝突なので衝突してる場合は点の座標が衝突位置になる
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}

/**
 * 点と半直線の最近傍点を取得する
 * @param point 点
 * @param ray 半直線
 */
export function getNearestNeighborPoint(point:Vector2, ray:Ray) {
  
  // 半直線の向きを表すベクトルをd
  // 半直線の始点から点に向かうベクトルをp
  const d = ray.v;
  const p = Vector2.sub(point, ray.p);

  // 半直線の始点の外側に点があったら、半直線の始点が最近傍点
  if (Vector2.dot(d, p) < 0) {
    return ray.p.clone();
  }

  // 半直線上の最近傍点を求める
  const n = d.normalize;
  const dot = Vector2.dot(n, p);
  return Vector2.add(ray.p, n.times(dot));
}