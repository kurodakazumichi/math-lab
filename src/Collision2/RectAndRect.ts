/******************************************************************************
 * 矩形と矩形の衝突
 *****************************************************************************/
import { Rect } from '../Primitive2';

/**
 * 矩形と矩形が当たっているかどうか
 * @param r1 矩形１
 * @param r2 矩形２
 */
export function isHit(r1:Rect, r2:Rect) 
{
  // x座標に関する判定
  if (r2.maxX < r1.minX) return false;
  if (r1.maxX < r2.minX) return false;

  // y座標に関する判定
  if (r2.maxY < r1.minY) return false;
  if (r1.maxY < r2.minY) return false;

  return true;
}