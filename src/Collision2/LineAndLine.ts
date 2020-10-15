/******************************************************************************
 * 直線と直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line } from '../Primitive2';
import { Define } from '..';
import { PointAndLine } from '.';

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

/**
 * ２直線の最短距離を求める関数の戻り値を定義
 */
export interface IResultDistance {
  distance:number, /** 直線間の距離 */
  p1:Vector2, /** 直線１上の垂線の足 */
  p2:Vector2, /** 直線２上の垂線の足 */
  t1:number,  /** 直線１側のベクトル係数 */
  t2:number,  /** 直線２側のベクトル係数 */
}

/**
 * 2直線の最短距離を求める
 * @param l1 直線１
 * @param l2 直線２
 */
export function getNearestDistance(l1:Line, l2:Line): IResultDistance {
  // ２直線が平行だったら、点と直線の最短距離に帰結
  if (Vector2.isParallel(l1.v, l2.v)) {
    const res = PointAndLine.getNearestDistance(l1.p, l2);

    return {
      distance: res.distance,
      p1: l1.p.clone(),
      p2: res.h,
      t1: 0,
      t2: res.t,
    }
  }

  const v1 = l1.v;
  const v2 = l2.v;
  const v = Vector2.sub(l1.p, l2.p);

  const t1 = v.cross(v2) / v2.cross(v1);
  const t2 = v.times(-1).cross(v1) / v1.cross(v2);  

  const p1 = Vector2.add(l1.p, Vector2.times(l1.v, t1));
  const p2 = Vector2.add(l2.p, Vector2.times(l2.v, t2));

  return {
    distance: Vector2.sub(p1, p2).magnitude,
    p1, p2, t1, t2
  };
}

/**
 * ２直線の最短距離を求める2
 */
export function getNearestDistance2(l1:Line, l2:Line): IResultDistance 
{
  // ２直線が平行だったら、点と直線の最短距離に帰結
  if (Vector2.isParallel(l1.v, l2.v)) {
    const res = PointAndLine.getNearestDistance(l1.p, l2);

    return {
      distance: res.distance,
      p1: l1.p.clone(),
      p2: res.h,
      t1: 0,
      t2: res.t,
    }
  }

  // 2直線が交差しているときの最短距離、及び媒介変数 t を求める計算(最短距離は基本0)
  const p1 = l1.p;
  const p2 = l2.p;
  const v1 = l1.v;
  const v2 = l2.v;
  const D12 = v1.dot(v2);
  const D11 = v1.sqrMagnitude;
  const D22 = v2.sqrMagnitude;
  const P12 = Vector2.sub(p1, p2);

  // 媒介変数 t と 衝突点 q1, q2 の算出
  const t1 = (D12 * v2.dot(P12) - D22 * v1.dot(P12)) / (D11 * D22 - D12 * D12);
  const q1 = Vector2.add(p1, Vector2.times(v1, t1));
  const t2 = v2.dot(Vector2.sub(q1, p2)) / D22;
  const q2 = Vector2.add(p2, Vector2.times(v2, t2));
  
  return {
    distance: Vector2.sub(q2, q1).magnitude,
    p1:q1,
    p2:q2,
    t1, 
    t2,
  };
}