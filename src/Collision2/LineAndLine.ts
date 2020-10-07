/******************************************************************************
 * 直線と直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line } from '../Primitive2';
import { Define } from '..';

/**
 * 直線と直線が当たっているかどうか
 * @param l1 直線１
 * @param l2 直線２
 */
export function isHit(l1:Line, l2:Line) 
{
  // 直線が平行でなければ必ず当たっている
  return (Vector2.cross(l1.v, l2.v) !== 0);
}

/**
 * 直線と直線が平行であたっているかどうか
 * @param l1 直線１
 * @param l2 直線２
 */
export function isHitParallel(l1:Line, l2:Line)
{
  // 直線１の方向ベクトルを v1
  const v1 = l1.v;

  // 直線１上の点から直線２上の点に向かうベクトルを v2
  const v2 = Vector2.sub(l1.p, l2.p);

  // v1 と v2 の外積が0だったら、線が重なっている
  return (Math.abs(Vector2.cross(v1, v2)) < Define.EPSILON);
}

/**
 * 直線と直線の衝突点を取得
 * 直線同士が平行な場合、0 devide が発生するので、事前に判定してから呼び出すこと
 * @param l1 直線１
 * @param l2 直線２
 */
export function getCollisionPoint(l1:Line, l2:Line) {

  const v = Vector2.sub(l2.p, l1.p);
  const v1 = l1.v;
  const v2 = l2.v;

  const t2 = Vector2.cross(v,v1) / Vector2.cross(v1, v2);

  return Vector2.add(l2.p, v2.clone().times(t2));
}

/**
 * 直線と直線の衝突
 * @param l1 直線１
 * @param l2 直線２
 */
export function intercect(l1:Line, l2:Line) 
{
  const hit = isHit(l1, l2);
  const hitParallel = isHitParallel(l1, l2);
  const pos = Vector2.zero;

  if (hit) {
    pos.copy(getCollisionPoint(l1, l2));
  }

  return {
    hit,
    hitParallel,
    pos
  }
}