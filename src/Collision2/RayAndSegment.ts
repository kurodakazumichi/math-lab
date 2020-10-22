/******************************************************************************
 * 半直線と線分の衝突
 *****************************************************************************/
//import Vector2 from '../Vector2';
import { Ray, Segment } from '../Primitive2';
import { Define, Vector2 } from '..';
import { LineAndLine, PointAndRay } from '.';

/**
 * 半直線と半直線が当たっているかどうか
 * @param ray1 半直線１
 * @param ray2 半直線２
 */
export function isHit(ray:Ray, segment:Segment) 
{
  // 平行の場合は当たっていない判定
  if (Vector2.isParallel(ray.v, segment.v)) return false;

  // 半直線を直線と見立てて最短距離を取得する
  const result = LineAndLine.getNearestDistance(ray, segment.toLine());

  // 半直線側の媒介変数 t1がプラス、かつ、線分側の媒介変数 t2 が 0 ～ 1であれば衝突
  return (0 <= result.t1 && 0 <= result.t2 && result.t2 <= 1);
}


/**
 * 半直線と半直線が平行であたっているかどうか
 * @param ray 半直線１
 * @param ray2 半直線２
 */
export function isHitParallel(ray:Ray, ray2:Ray) {

  // 平行じゃないなら当たってない判定
  if (Vector2.isParallel(ray.v, ray2.v) == false) return false;

  // 半直線１の始点と半直線２の最短距離を求める
  let dist = PointAndRay.getNearestDistance(ray.p, ray2);

  // この時点で接触が分かれば、衝突している
  if (dist.distance < Define.EPSILON) return true;

  // 半直線１の始点が半直線２の線上にない場合でも、逆のパターンがあるので調べる
  dist = PointAndRay.getNearestDistance(ray2.p, ray);

  // 距離が近ければ衝突している
  return (dist.distance < Define.EPSILON);
}

/**
 * intercect の戻り値の型
 */
export interface IResultIntercect {
  hit : boolean; /** 当たっているかどうか(平行の場合はあたっていない) */
  pos : Vector2; /** 交点 */
  t1  : number;  /** 媒介変数 t1 */
  t2  : number;  /** 媒介変数 t2 */
}

/**
 * 半直線と半直線の衝突
 * @param ray 半直線
 * @param segment 線分
 */
export function intercect(ray:Ray, segment:Segment):IResultIntercect {

  // 半直線を直線と見立てて最短距離を取得する
  const { p1, p2, t1, t2 } = LineAndLine.getNearestDistance(ray, segment.toLine());

  // 半直線同士が交差しているかの判定
  let hit;
  
  // 平行の場合
  if (Vector2.isParallel(ray.v, segment.v)){
    hit = false;
  }

  // 交差している場合
  else {
  // 半直線側の媒介変数 t1がプラス、かつ、線分側の媒介変数 t2 が 0 ～ 1であれば衝突
    hit = (0 <= t1 && 0 <= t2 && t2 <= 1);
  }

  return {
    hit,
    pos: p1, 
    t1, 
    t2,
  }
}
