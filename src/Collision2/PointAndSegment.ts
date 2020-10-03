/******************************************************************************
 * 点と線分の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Segment } from '../Primitive2';

/**
 * 点と線分が当たっているかどうか
 * @param point 点
 * @param segment 線分
 */
export function isHit(point:Vector2, segment: Segment)
{
  // 線分の方向と長さを表すベクトルをa
  // 線分の始点から点に向かうベクトルをbとする
  const a = segment.v;
  const b = Vector2.sub(point, segment.p1);

  // ベクトルaの長さをal、ベクトルbの長さをblとする
  const al = a.magnitude;
  const bl = b.magnitude;

  // 小数点誤差をある程度無くすために、極小の値を切り捨て
  const l = Math.floor(al * bl * 1000000) / 1000000;
  const d = Math.floor(Vector2.dot(a, b) * 1000000) / 1000000;

  // 点が線分上にあるとしたら、ベクトルaとbは平行なはずなので
  // a,bの内積 = |a||b|になっているはず
  // また線分には長さがあるので、始点から点に伸ばしたベクトル(b)の長さが
  // 線分の長さ(|a|)より短ければ当たっているといえる
  return (d === l && al > bl);
}

/**
 * 点と線分の衝突
 * @param point 点
 * @param segment 線分
 */
export function intercect(point:Vector2, segment:Segment) 
{
  // 当たっているかどうかの判定
  const hit = isHit(point, segment);

  // 衝突位置
  // 点との衝突なので衝突してる場合は点の座標が衝突位置になる
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}