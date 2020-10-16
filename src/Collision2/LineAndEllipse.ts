/******************************************************************************
 * 直線と楕円の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Ellipse, Circle } from '../Primitive2';
import { LineAndCircle } from '.';

/**
 * 直線と円が当たっているかどうか
 * @param line 直線
 * @param circle 円
 */
export function isHit(line:Line, ellipse:Ellipse) 
{
  // 直線と楕円の衝突は楕円を正円に戻した状態で判定する。
  // 楕円を正円に戻すために必要な変換を直線に対しても行う。
  const p1 = line.p.clone();
  const p2 = line.point(1);
  const c = ellipse.p;
  const {rx, ry} = ellipse;

  // 直線の2点に対し、楕円を正円に戻すのに必要な計算を適用する
  p1.sub(c).rotate(-ellipse.rad);
  p1.y *= (rx/ry)
  p2.sub(c).rotate(-ellipse.rad);
  p2.y *= (rx/ry);

  // 移動後の2点から新しい直線を作成し、正円にした楕円も生成する
  const newLine = new Line(p1, Vector2.sub(p2, p1));
  const circle = new Circle(Vector2.zero, rx);

  // 新たに生成した直線と、正円にした楕円との衝突をする。
  return LineAndCircle.isHit(newLine, circle);
}