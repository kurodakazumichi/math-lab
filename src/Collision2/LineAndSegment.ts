/******************************************************************************
 * 直線と線分の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Segment } from '../Primitive2';
import { Define } from '..';

/**
 * 直線と線分が当たっているかどうか
 * @param line 直線１
 * @param seg 線分
 */
export function isHit(line:Line, seg:Segment) 
{
  // 直線上の点から線分の始点に向かうベクトルを v
  const v = Vector2.sub(seg.p1, line.p);
  
  // 直線の向きを v1、線分の向きをv2とする
  const v1 = line.v;
  const v2 = seg.v;

  // 外積を取る
  const c1 = Vector2.cross(v, v1);
  const c2 = Vector2.cross(v1, v2);

  // c2が 0 だったら平行なので当たってない判定
  if (Math.abs(c2) < Define.EPSILON) return false;

  const t = c1 / c2;

  // tが 0～1ならあたっている
  return (0 <=  t && t <= 1);
}

/**
 * 直線と線分の衝突
 * @param line 直線
 * @param seg 線分
 */
export function intercect(line:Line, seg:Segment) 
{
  // 衝突判定の結果オブジェクト
  const result = {
    hit: false,
    pos: Vector2.zero,
  }

  // 直線の向きをv1、線分の向きをv2として取得
  const v1 = line.v;
  const v2 = seg.v;

  // 直線と線分の外積が0なら平行なので、当たってない判定とする
  const cross = Vector2.cross(v1, v2);
  if (Math.abs(cross) < Define.EPSILON) return result;

  // v2をどれだけ伸ばしたら 直線上の点になるかの値を t として tを求める
  const v = Vector2.sub(seg.p1, line.p);
  const t = Vector2.cross(v, v1) / cross;

  // t が 0 ～ 1 の範囲に収まっていなければ当たっていない
  if (t < 0 || 1 < t) return result;

  // t が 0～1なら当たっている
  result.hit = true;

  // 衝突点は 半直線の始点に t*v2 を足した場所
  result.pos = Vector2.add(seg.p1, v2.clone().times(t));

  return result;
}