/******************************************************************************
 * 点と直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line } from '../Primitive2';

/**
 * 点と直線が当たっているかどうか
 * @param point 点
 * @param line 直線
 */
export function isHit(point:Vector2, line: Line)
{
  // 直線の方向を表すベクトルをa、直線上の任意の点からpointに向かうベクトルをbとすると
  // この2つのベクトルが平行であれば、pointは直線上にあると言える。
  // 2つのベクトルが平行なとき、外積の結果が0になることを使って判定する。
  const a = line.v;
  const b = Vector2.sub(point, line.p);

  // 外積の結果の小数点誤差をある程度のところで切り捨て
  let c = Vector2.cross(a, b);
  c = Math.floor(c * 1000000) / 1000000;

  return (c === 0);
}

/**
 * 点と直線の衝突
 * @param point 点
 * @param line 直線
 */
export function intercect(point:Vector2, line:Line) 
{
  // 当たっているかどうかの判定
  const hit = isHit(point, line);

  // 衝突位置
  // 点との衝突なので衝突してる場合は点の座標が衝突位置になる
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}