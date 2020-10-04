/******************************************************************************
 * 点と円の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Circle } from '../Primitive2';

/**
 * 点と円が当たっているかどうか
 * @param point 点
 * @param circle 円
 */
export function isHit(point:Vector2, circle: Circle)
{
  // 点と円の衝突は円の中心から点に向かうベクトルの長さが円の半径より短ければ
  // 衝突しているということになる。

  // 円の中心から点に向かうベクトルをvとする
  const v = Vector2.sub(point, circle.p);

  // ベクトルの長さの二乗で判定する事で処理負荷を下げる
  return (v.sqrMagnitude < circle.r * circle.r);
}

/**
 * 点と円の衝突
 * @param point 点
 * @param circle 円
 */
export function intercect(point:Vector2, circle:Circle) 
{
  // 当たっているかどうかの判定
  const hit = isHit(point, circle);

  // 衝突位置
  // 点との衝突なので衝突してる場合は点の座標が衝突位置になる
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}