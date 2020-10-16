/******************************************************************************
 * 矩形(回転あり)と矩形(回転あり)の衝突
 *****************************************************************************/
import { Box } from '../Primitive2';
import { PointAndBox, CircleAndCircle } from '.';
import { Vector2 } from '..';

/**
 * 正方形と正方形が当たっているかどうか(Boxが正方形でない時は正常に判定されない)
 * @param box1 正方形１
 * @param box2 正方形２
 */
export function isHitSquare(box1:Box, box2:Box) 
{
  // 正方形の半径をもつ、円として見て当たっているかどうかを先に判定する
  const distSq = Vector2.sub(box1.p, box2.p).sqrMagnitude;
  
  // 円としてみた時に衝突していたら、衝突している
  if (distSq < (box1.r.x + box2.r.x)**2) return true;

  const box1Vertex = [
    box1.p1, box1.p2, box1.p3, box1.p4
  ];

  const box2Vertex = [
    box2.p1, box2.p2, box2.p3, box2.p4
  ];

  // 矩形２の4頂点が矩形１の中に含まれているか
  for(let vertex of box2Vertex) {
    if (PointAndBox.isHit(vertex, box1)) return true;
  }

  // 矩形１の4頂点が矩形２の中に含まれているか
  for(let vertex of box1Vertex) {
    if (PointAndBox.isHit(vertex, box2)) return true;
  }

  return false;
}
