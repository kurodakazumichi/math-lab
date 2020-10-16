/******************************************************************************
 * 線分と線分の衝突
 *****************************************************************************/
//import Vector2 from '../Vector2';
import { Segment } from '../Primitive2';
import { Define, Vector2 } from '..';
import { LineAndLine, PointAndLine } from '.';

/**
 * 線分と線分が当たっているかどうか
 * @param seg1 線分１
 * @param seg2 線分２
 */
export function isHit(seg1:Segment, seg2:Segment) 
{
  // 平行の場合は当たっていない判定
  if (Vector2.isParallel(seg1.v, seg2.v)) return false;

  // 線分を直線と見立てて最短距離を取得する
  const result = LineAndLine.getNearestDistance(seg1.toLine(), seg2.toLine());

  // 媒介変数 t1, t2 が 0 ～ 1 であれば当たっている
  return (0 <= result.t1 && result.t1 <= 1) && (0 <= result.t2 && result.t2 <= 1);
}


/**
 * 線分と線分が平行であたっているかどうか
 * @param seg1 線分１
 * @param seg2 線分２
 */
export function isHitParallel(seg1:Segment, seg2:Segment) {

  // 平行じゃないなら当たってない判定
  if (Vector2.isParallel(seg1.v, seg2.v) == false) return false;

  // 線分１の始点と終点と線分２の最短距離を取得
  const dist1 = PointAndLine.getNearestDistance(seg1.p1, seg2.toLine());
  const dist2 = PointAndLine.getNearestDistance(seg1.p2, seg2.toLine());

  // 点と線分の距離が離れていたらそもそも当たっていない
  if (Define.EPSILON < dist1.distance) return false;

  // 媒介変数 t1, t2 がどちらも マイナス、もしくはどちらも1を超えていたら当たっていない
  const t1 = dist1.t;
  const t2 = dist2.t;

  if (t1 < 0 && t2 < 0) return false;
  if (t1 > 1 && t2 > 1) return false;

  return true;
}

/**
 * intercect の戻り値の型
 */
export interface IResultIntercect {
  hit        : boolean; /** 当たっているかどうか(平行の場合はあたっていない) */
  distance   : number;  /** 線分間の最短距離 */
  p1         : Vector2; /** 交点１(平行の場合は線分１の始点) */
  p2         : Vector2; /** 交点２(平行の場合は線分１の始点からおろした垂線の足) */
  t1         : number;  /** 媒介変数 t1 */
  t2         : number;  /** 媒介変数 t2 */
}

/**
 * 線分と線分の衝突
 * @param seg1 線分１
 * @param seg2 線分２
 */
export function intercect(seg1:Segment, seg2:Segment):IResultIntercect {

  // 線分を直線と見立てて最短距離を取得する
  const { distance, p1, p2, t1, t2 } 
    = LineAndLine.getNearestDistance(seg1.toLine(), seg2.toLine());

  // 線分同士が交差しているかの判定
  let hit;
  
  // 平行の場合
  if (Vector2.isParallel(seg1.v, seg2.v)){
    hit = false;
  }

  // 交差している場合
  else {
    // 媒介変数 t1, t2 が 0 ～ 1 であれば当たっている
    hit = (0 <= t1 && t1 <= 1) && (0 <= t2 && t2 <= 1);    
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
