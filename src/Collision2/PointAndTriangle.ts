/******************************************************************************
 * 点と三角形の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Triangle } from '../Primitive2';

/**
 * 点と三角形が当たっているかどうか
 * @param point 点
 * @param tri 三角形
 */
export function isHit(point:Vector2, tri:Triangle) 
{
  // 衝突判定データ(三角形の辺と2頂点のセット)
  const datas = [
    {axis: tri.v1to2, vertex:[tri.p1, tri.p3]},
    {axis: tri.v2to3, vertex:[tri.p2, tri.p1]},
    {axis: tri.v3to1, vertex:[tri.p3, tri.p2]},
  ]

  // 1辺ずつチェック
  for(const data of datas) 
  {
    // 三角形の辺を表すベクトルを正規化し90度回転したものを分離軸候補とする
    const axis = data.axis.normalize;
    axis.set(-axis.y, axis.x);

    // 分離軸候補と三角形の2頂点との内積結果(最小値、最大値)を取得
    const maybeMin = axis.dot(data.vertex[0]);
    const maybeMax = axis.dot(data.vertex[1]);
    const min = Math.min(maybeMin, maybeMax);
    const max = Math.max(maybeMin, maybeMax);

    // 分離軸候補と衝突対象の点の内積を取得
    const dot = axis.dot(point);

    // dot が 三角形の2頂点の内積(min, max)の範囲外であれば点と三角形は衝突していない
    if (dot < min || max < dot) return false;

  }

  return true;
}

/**
 * 点と三角形の衝突
 * @param point 点
 * @param tri 三角形
 */
export function intercect(point:Vector2, tri:Triangle) 
{
  // 当たっているかどうか
  const hit = isHit(point, tri);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}