/******************************************************************************
 * 点と直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Ray } from '../Primitive2';

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
  const l = a.magnitude * b.magnitude;
  return (Vector2.dot(a, b) === l);
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