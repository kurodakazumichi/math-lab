/******************************************************************************
 * 点と矩形の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Rect } from '../Primitive2';

/**
 * 点と矩形が当たっているかどうか
 * @param point 点
 * @param rect 矩形
 */
export function isHit(point:Vector2, rect:Rect) 
{
  // ①点のx座標が矩形の左端より右にあり、かつ矩形の右端より左にあるか
  const isContainX = (rect.p1.x <= point.x) && (point.x <= rect.p3.x);

  // ②点のy座標が矩形の上端より下にあり、かつ矩形の下端より上にあるか
  const isContainY = (rect.p3.y <= point.y) && (point.y <= rect.p1.y);

  return (isContainX && isContainY);
}

/**
 * 点と矩形の衝突
 * @param point 点
 * @param rect 矩形
 */
export function intercect(point:Vector2, rect:Rect) 
{
  // 当たっているかどうか
  const hit = isHit(point, rect);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}