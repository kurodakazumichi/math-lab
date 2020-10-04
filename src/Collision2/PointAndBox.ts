/******************************************************************************
 * 点と矩形(回転あり)の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Box } from '../Primitive2';

/**
 * 点と矩形(回転あり)が当たっているかどうか
 * @param point 点
 * @param box 矩形(回転あり)
 */
export function isHit(point:Vector2, box:Box) 
{
  // 矩形の4辺と、辺の始点から点に向かうベクトルのセット
  const datas = [
    { v1: box.v1to2, v2: Vector2.sub(point, box.p1) },
    { v1: box.v2to3, v2: Vector2.sub(point, box.p2) },
    { v1: box.v3to4, v2: Vector2.sub(point, box.p3) },
    { v1: box.v4to1, v2: Vector2.sub(point, box.p4) }
  ];

  // 分離軸判定
  // 矩形の各辺をv1、辺の始点から点に向かうベクトルをv2として
  // v1とv2の外積が正の値だった場合はその時点で矩形の範囲外になるので判定を終了する
  // 4辺全てに対し、外積の結果がマイナスだった場合は矩形の中に点がある
  for(const data of datas) 
  {
    const cross = Vector2.cross(data.v1, data.v2);
    if (0 < cross) return false;
  }

  return true;
}

/**
 * 点と矩形(回転あり)の衝突
 * @param point 点
 * @param box 矩形(回転あり)
 */
export function intercect(point:Vector2, box:Box) 
{
  // 当たっているかどうか
  const hit = isHit(point, box);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}