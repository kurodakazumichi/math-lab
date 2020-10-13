/******************************************************************************
 * 直線とカプセルの衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Capsule } from '../Primitive2';
import { LineAndLine, PointAndLine } from '.';
import { Util } from '..';

/**
 * 直線とカプセルが当たっているかどうか
 * @param line 直線
 * @param capsule カプセル
 */
export function isHit(line:Line, capsule:Capsule) 
{
  // 直線とカプセルの線分が平行だったら
  if (Vector2.isParallel(line.v, capsule.s.v)) 
  {
    const nd = PointAndLine.getNearestDistance(line.p, capsule.s.toLine());

    // 直線と線分の最短距離がカプセルの半径以下なら衝突
    return (nd.distance <= capsule.r);
  }

  // 平行じゃなければカプセルの線分を直線と見立てて衝突
  const nd = LineAndLine.getNearestDistance(line, capsule.s.toLine());

  // t2 が 0～1に収まっていたら
  if (0 <= nd.t2 && nd.t2 <= 1.0) {
    return (nd.distance <= capsule.r);
  }

  // t2 が外側だったら t2を0 ～ 1にクランプ
  const t2 = Util.cramp(nd.t2, 0, 1);
  const p2 = Vector2.add(capsule.s.p1, Vector2.times(capsule.s.v, t2));
  
  const near = PointAndLine.getNearestDistance(p2, line);

  return (near.distance < capsule.r);
}