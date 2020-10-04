/******************************************************************************
 * 点と楕円の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Ellipse } from '../Primitive2';

/**
 * 点と楕円が当たっているかどうか
 * @param point 点
 * @param ellipse 矩形(回転あり)
 */
export function isHit(point:Vector2, ellipse:Ellipse) 
{
  // 点と楕円の衝突は、楕円を正円に戻した状態で判定する事を考える
  // 楕円を平行移動して原点に戻し、
  // 回転は逆回転して軸と平行にし
  // Y半径をX半径に合わせるように伸縮させる
  // 上記の作用を点に対して行い、原点から点の距離と楕円のX半径との距離を比較する
  const p = point;
  const e = ellipse;
  const sin = Math.sin(e.rad);
  const cos = Math.cos(e.rad);
  
  const { rx, ry } = ellipse;
  
  const px = (p.x - e.p.x) * cos + (p.y - e.p.y) * sin;
  const py = (rx / ry) * (-(p.x - e.p.x) * sin + (p.y - e.p.y) * cos);

  return (px * px + py * py) < rx * rx;
}

/**
 * 点と楕円の衝突
 * @param point 点
 * @param ellipse 楕円
 */
export function intercect(point:Vector2, ellipse:Ellipse) 
{
  // 当たっているかどうか
  const hit = isHit(point, ellipse);

  // 衝突位置(点なので点の位置)
  const pos = (hit)? point.clone() : Vector2.zero;

  // 衝突検知の結果を返却
  return { hit, pos };
}