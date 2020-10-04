/******************************************************************************
 * 点とカプセルの衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import * as PointAndSegment from './PointAndSegment';
import { Capsule } from '../Primitive2';

/**
 * 点とカプセルが当たっているかどうか
 * @param point 点
 * @param capsule カプセル
 */
export function isHit(point:Vector2, capsule:Capsule) 
{
  // カプセルと点の最近傍点を求める
  const p = PointAndSegment.getNearestNeighborPoint(point, capsule.s);

  // 最近傍点から点に向かうベクトル
  const v = Vector2.sub(point, p);

  // 最近傍点と点の距離がカプセルの太さより短ければ当たっている
  return (v.sqrMagnitude < capsule.r * capsule.r);
}

/**
 * 点とカプセルの衝突
 * @param point 点
 * @param capsule 三角形
 */
export function intercect(point:Vector2, capsule:Capsule) 
{
  // 当たっているかどうか
  const hit = isHit(point, capsule);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}