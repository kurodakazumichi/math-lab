/******************************************************************************
 * 点と線分の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Segment } from '../Primitive2';
import { Define } from '..';
import { PointAndLine } from '.';

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
  const l = al * bl;
  const d = Vector2.dot(a, b);

  // 点が線分上にあるとしたら、ベクトルaとbは平行なはずなので
  // a,bの内積 = |a||b|になっているはず
  // また線分には長さがあるので、始点から点に伸ばしたベクトル(b)の長さが
  // 線分の長さ(|a|)より短ければ当たっているといえる
  return (Math.abs(l - d) < Define.EPSILON && al > bl);
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

/**
 * 点と線分の最近傍点を取得する
 * @param point 点
 * @param segment 線分
 */
export function getNearestPoint(point:Vector2, segment:Segment) {
  // カプセルと点の最近傍点を求める

  // 線分の向きを表すベクトルをd
  // 線分の始点から点に向かうベクトルをp1
  // 線分の終点から点に向かうベクトルをp2
  const d = segment.v;

  // 線分の始点の外側に点があったら、線分の始点が最近傍点
  const p1 = Vector2.sub(point, segment.p1);
  if (Vector2.dot(d, p1) < 0) {
    return segment.p1.clone();
  }

  // 線分の終端の外側に点があったら、線分の終端が最近傍点
  const p2 = Vector2.sub(point, segment.p2);
  if (0 < Vector2.dot(d, p2)) {
    return segment.p2.clone();
  }

  // 線分上の最近傍点を求める
  const n = d.normalize;
  const dot = Vector2.dot(n, p1);
  return Vector2.add(segment.p1, n.times(dot));
}

export interface IResultNearestDistance {
  distance: number; /** 距離 */
  h: Vector2;       /** 点と線分の最短距離を結ぶ直線の端 */
  t: number;        /** ベクトル係数 */
}

/**
 * 点と線分の最短距離を求める
 */
export function getNearestDistance(point:Vector2, segment:Segment) 
{
  const result:IResultNearestDistance = {
    distance: 0,
    h: Vector2.zero,
    t: 0,
  }

  // 線分を直線と見立てて点と線分の最短距離を取る
  const nd = PointAndLine.getNearestDistance(point, segment.toLine());
  
  // ベクトル係数を結果に含める
  result.t = nd.t;
  
  // 線分の始点が最短距離になる場合
  if (Vector2.isAcuteAngle(segment.p1, segment.p2, point) == false) {
    result.distance = Vector2.sub(point, segment.p1).magnitude;
    result.h = segment.p1.clone();
    return result;
  }

  // 線分の終点が最短距離になる場合
  if (Vector2.isAcuteAngle(segment.p2, segment.p1, point) === false) {
    result.distance = Vector2.sub(point, segment.p2).magnitude;
    result.h = segment.p2.clone();
    return result;
  }

  result.distance = nd.distance;
  result.h = nd.h;
  return result;
}