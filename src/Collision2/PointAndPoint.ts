/******************************************************************************
 * 点と点の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';

/**
 * 点と点が当たっているかどうか
 * @param p1 点１
 * @param p2 点２
 */
export function isHit(p1:Vector2, p2:Vector2) 
{
  // 点同士の衝突はそれぞれのXY座標が完全に一致しているときだけである。
  return p1.equal(p2);
}

/**
 * 点と点の衝突
 * @param p1 点１
 * @param p2 点２
 */
export function intercect(p1:Vector2, p2:Vector2) 
{
  // 当たっているかどうかの判定
  const hit = isHit(p1, p2);

  // 点の衝突位置
  // 点の場合の衝突位置は点の位置そのものになるので、どちらかの点の座標を採用すればよい
  // 衝突していない場合はデフォルトでゼロベクトルをセットしておく。
  const pos = (hit)? p1.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}