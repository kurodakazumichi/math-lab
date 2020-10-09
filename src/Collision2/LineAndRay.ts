/******************************************************************************
 * 直線と半直線の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Ray } from '../Primitive2';
import { Define } from '..';

/**
 * 直線と半直線が当たっているかどうか
 * @param line 直線１
 * @param ray 直線２
 */
export function isHit(line:Line, ray:Ray) 
{
  // 直線上の点から半直線の始点に向かうベクトルを v
  const v = Vector2.sub(ray.p, line.p);
  
  // 直線の向きを v1、半直線の向きをv2とする
  const v1 = line.v;
  const v2 = ray.v;

  // 外積を取る
  const c1 = Vector2.cross(v, v1);
  const c2 = Vector2.cross(v1, v2);

  // c2が 0 だったら平行なので当たってない判定
  if (Math.abs(c2) < Define.EPSILON) return false;

  const t = c1 / c2;

  // tがプラスならあたっている
  return (0 < t);
}

/**
 * 直線と半直線の衝突
 * @param line 直線
 * @param ray 半直線
 */
export function intercect(line:Line, ray:Ray) 
{
  // 衝突判定の結果オブジェクト
  const result = {
    hit: false,
    pos: Vector2.zero,
  }

  // 直線の向きをv1、半直線の向きをv2として取得
  const v1 = line.v;
  const v2 = ray.v;

  // 直線と半直線の外積が0なら平行なので、当たってない判定とする
  const cross = Vector2.cross(v1, v2);
  if (Math.abs(cross) < Define.EPSILON) return result;

  // v2をどれだけ伸ばしたら 直線上の点になるかの値を t として tを求める
  const v = Vector2.sub(ray.p, line.p);
  const t = Vector2.cross(v, v1) / cross;

  // t が マイナスだったら当たっていない
  if (t < 0) return result;

  // t がプラスなら当たっているので
  result.hit = true;

  // 衝突点は 半直線の始点に t*v2 を足した場所
  result.pos = Vector2.add(ray.p, v2.clone().times(t));

  return result;
}