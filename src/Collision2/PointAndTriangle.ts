/******************************************************************************
 * 点と三角形の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Triangle } from '../Primitive2';

/**
 * 点と三角形が当たっているかどうか
 * @param point 点
 * @param tri 三角形
 */
export function isHit(point:Vector2, tri:Triangle) 
{
  // 三角形の3辺と、辺の始点から点に向かうベクトルのセット
  const datas = [
    { v1: tri.v1to2, v2: Vector2.sub(point, tri.p1) },
    { v1: tri.v2to3, v2: Vector2.sub(point, tri.p2) },
    { v1: tri.v3to1, v2: Vector2.sub(point, tri.p3) },
  ];

  // 分離軸判定
  for(const data of datas) 
  {
    const cross = Vector2.cross(data.v1, data.v2);
    if (0 < cross) return false;
  }

  return true;
}

/**
 * 点と三角形の衝突
 * @param point 点
 * @param tri 三角形
 */
export function intercect(point:Vector2, tri:Triangle) 
{
  // 当たっているかどうか
  const hit = isHit(point, tri);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}