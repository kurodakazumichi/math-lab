/******************************************************************************
 * 点と直線の衝突
 *****************************************************************************/
import * as Define from '../Define';
import Vector2 from '../Vector2';
import { Line } from '../Primitive2';

/**
 * 点と直線が当たっているかどうか
 * @param point 点
 * @param line 直線
 */
export function isHit(point:Vector2, line: Line)
{
  // 直線の方向を表すベクトルをa、直線上の任意の点からpointに向かうベクトルをbとすると
  // この2つのベクトルが平行であれば、pointは直線上にあると言える。
  // 2つのベクトルが平行なとき、外積の結果が0になることを使って判定する。
  const a = line.v;
  const b = Vector2.sub(point, line.p);

  // 外積の結果の小数点誤差をある程度のところで切り捨て
  const c = Vector2.cross(a, b);

  return (Math.abs(c) < Define.EPSILON);
}

/**
 * 点と直線の衝突
 * @param point 点
 * @param line 直線
 */
export function intercect(point:Vector2, line:Line) 
{
  // 当たっているかどうかの判定
  const hit = isHit(point, line);

  // 衝突位置
  // 点との衝突なので衝突してる場合は点の座標が衝突位置になる
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}

/**
 * 点と直線の最近傍点を取得する
 * @param point 点
 * @param line 直線
 */
export function getNearestPoint(point:Vector2, line:Line) 
{
  // 直線の向きを表すベクトルをd
  // 線分の任意の点から点に向かうベクトルをp
  const d = line.v;
  const p = Vector2.sub(point, line.p);

  // 線分上の最近傍点を求める
  const n = d.normalize;
  const dot = Vector2.dot(n, p);
  return Vector2.add(line.p, n.times(dot));
}

/**
 * 点と直線の最短距離を求める関数の戻り値
 */
export interface IResultNearestDistance {
  distance: number;  /** 距離 */
  h: Vector2;        /** 点から直線におろした垂線の足 */
  t: number;         /** ベクトルの媒介変数 t */
}

/**
 * 点と直線の最短距離
 * @param point 点
 * @param line 直線
 */
export function getNearestDistance(point:Vector2, line:Line) 
{
  const result:IResultNearestDistance = {
    distance: 0,
    h: Vector2.zero,
    t: 0,
  };

  // 点の位置を p1とする
  const p1 = point;

  // 線の基点を p2、方向ベクトルをv2 とする
  const p2 = line.p;
  const v2 = line.v;

  // 方向ベクトルが 0ベクトルの場合は0除算になるので判定している
  // 0ベクトルの場合は t = 0 のまま(p2の位置を基点)にする
  if (Vector2.isZero(v2) == false) 
  {
    // p1から線に垂線を落とした時の衝突点を H とすると
    // H は v2 を t倍した位置にくる
    // この t(ベクトル係数) は以下の計算で求まる    
    result.t = Vector2.dot(v2, Vector2.sub(p1, p2)) / v2.sqrMagnitude;
  }
  
  // 最短距離は p1 と h の間の距離を求めればよい
  const tv2 = Vector2.times(v2, result.t);
  result.h   = Vector2.add(p2, tv2);
  result.distance = Vector2.sub(result.h, p1).magnitude;

  return result;
};