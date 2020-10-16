/******************************************************************************
 * 半直線と半直線の衝突
 *****************************************************************************/
//import Vector2 from '../Vector2';
import { Ray } from '../Primitive2';
import { Define, Vector2 } from '..';
import { LineAndLine, PointAndRay } from '.';

/**
 * 半直線と半直線が当たっているかどうか
 * @param ray1 半直線１
 * @param ray2 半直線２
 */
export function isHit(ray1:Ray, ray2:Ray) 
{
  // 平行の場合は当たっていない判定
  if (Vector2.isParallel(ray1.v, ray2.v)) return false;

  // 半直線を直線と見立てて最短距離を取得する
  const result = LineAndLine.getNearestDistance(ray1, ray2);

  // 媒介変数 t1, t2 がプラスであれば当たっている
  return (0 <= result.t1 && 0 <= result.t2);
}


/**
 * 半直線と半直線が平行であたっているかどうか
 * @param ray1 半直線１
 * @param ray2 半直線２
 */
export function isHitParallel(ray1:Ray, ray2:Ray) {

  // 平行じゃないなら当たってない判定
  if (Vector2.isParallel(ray1.v, ray2.v) == false) return false;

  // 半直線１の始点と半直線２の最短距離を求める
  let dist = PointAndRay.getNearestDistance(ray1.p, ray2);

  // この時点で接触が分かれば、衝突している
  if (dist.distance < Define.EPSILON) return true;

  // 半直線１の始点が半直線２の線上にない場合でも、逆のパターンがあるので調べる
  dist = PointAndRay.getNearestDistance(ray2.p, ray1);

  // 距離が近ければ衝突している
  return (dist.distance < Define.EPSILON);
}

/**
 * intercect の戻り値の型
 */
export interface IResultIntercect {
  hit        : boolean; /** 当たっているかどうか(平行の場合はあたっていない) */
  distance   : number;  /** 半直線間の最短距離 */
  p1         : Vector2; /** 交点１(平行の場合は半直線１の始点) */
  p2         : Vector2; /** 交点２(平行の場合は半直線１の始点からおろした垂線の足) */
  t1         : number;  /** 媒介変数 t1 */
  t2         : number;  /** 媒介変数 t2 */
}

/**
 * 半直線と半直線の衝突
 * @param ray1 半直線１
 * @param ray2 半直線２
 */
export function intercect(ray1:Ray, ray2:Ray):IResultIntercect {

  // 半直線を直線と見立てて最短距離を取得する
  const { distance, p1, p2, t1, t2 } = LineAndLine.getNearestDistance(ray1, ray2);

  // 半直線同士が交差しているかの判定
  let hit;
  
  // 平行の場合
  if (Vector2.isParallel(ray1.v, ray2.v)){
    hit = false;
  }

  // 交差している場合
  else {
    // 媒介変数 t1, t2 がプラスであれば当たっている
    hit = (0 <= t1 && 0 <= t2)
  }

  return {
    hit,
    distance,
    p1, 
    p2, 
    t1, 
    t2,
  }
}
