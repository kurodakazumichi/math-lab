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
interface IResultDistance {
  distance:number, /** 直線間の距離 */
  p1:Vector2, /** 直線１上の垂線の足 */
  p2:Vector2, /** 直線２上の垂線の足 */
  t1:number,  /** 直線１側のベクトル係数 */
  t2:number,  /** 直線２側のベクトル係数 */
}

/**
 * ２直線の最短距離を求める
 */
export function getNearestDistance(l1:Line, l2:Line): IResultDistance 
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

  // ２直線がねじれ(2Dでねじれなんてあるの？という感が否めない)
  const DV1V2 = l1.v.dot(l2.v);
  const DV1V1 = l1.v.sqrMagnitude;
  const DV2V2 = l2.v.sqrMagnitude;
  const v = Vector2.sub(l1.p, l2.p);

  const t1 = (DV1V2 * l2.v.dot(v) - DV2V2 * l1.v.dot(v)) / (DV1V1 * DV2V2 - DV1V2 * DV1V2);
  const p1 = Vector2.add(l1.p, Vector2.times(l1.v, t1));
  const t2 = l2.v.dot(Vector2.sub(p1, l2.p)) / DV2V2;
  const p2 = Vector2.add(l2.p, Vector2.times(l2.v, t2));
  
  return {
    distance: Vector2.sub(p2, p1).magnitude,
    p1,
    p2,
    t1, 
    t2,
  };
}

export interface IResultSortest {
  distance: number,
  p1: Vector2,
  p2: Vector2,
}

/**
 * 直線と直線の最近傍点
 * @param l1 直線１
 * @param l2 直線２
 */
export function getNearestDistanceAndPos(l1:Line, l2:Line) {

  const result:IResultSortest = {
    distance: 0,
    p1:Vector2.zero,
    p2:Vector2.zero
  };

  // 平行だったら、直線間の距離はどこでも同じなので直線上の任意の点を基準にして算出する
  if (Vector2.isParallel(l1.v, l2.v)) {
    const nearest = PointAndLine.getNearestPoint(l1.p, l2);
    result.distance = Vector2.sub(l1.p, nearest).magnitude;
    result.p1.copy(l1.p);
    result.p2.copy(nearest);
    return result;
  }

  const v1 = l1.v.normalize;
  const v2 = l2.v.normalize;
  const vP1P2 = Vector2.sub(l2.p, l1.p);

  const D1 = Vector2.dot(v1, vP1P2);
  const D2 = Vector2.dot(v1, vP1P2);
  const Dv = Vector2.dot(v1, v2);

  const t1 = (D1 - D2 * Dv ) / (1.0 - Dv * Dv);
  const t2 = (D2 - D1 * Dv) / (Dv * Dv - 1.0);

  const p1 = Vector2.add(l1.p, Vector2.times(v1, t1));
  const p2 = Vector2.add(l2.p, Vector2.times(v2, t2));

  result.p1.copy(p1);
  result.p2.copy(p2);
  result.distance = Vector2.sub(p1, p2).magnitude;
  return result;
}