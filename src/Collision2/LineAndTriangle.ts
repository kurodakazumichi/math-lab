/******************************************************************************
 * 直線と三角形の衝突
 *****************************************************************************/
import Vector2 from '../Vector2';
import { Line, Triangle } from '../Primitive2';

/**
 * 直線と三角形が当たっているかどうか
 * @param line 直線
 * @param triangle 三角形
 */
export function isHit(line:Line, triangle:Triangle) 
{
  // 三角形の3頂点を配列化
  const points = [
    triangle.p1,
    triangle.p2,
    triangle.p3,
  ];

  // 外積の符号を覚えておくための変数
  let sign = 0;

  // 角4点と直線の方向ベクトルの関係性を調べる
  for(let i = 0; i < points.length; ++i) {

    // 直線の向きベクトルを v1 とする
    const v1 = line.v;

    // 直線の任意の点から矩形の角に向かうベクトルをv2 とする
    const v2 = Vector2.sub(points[i], line.p);

    // 外積を取る
    const cross = Vector2.cross(v1, v2);

    // 外積の結果が0だったら衝突している
    if (cross === 0) return true;

    // 初回だけ外積の符号を記憶しておく
    if (i == 0) {
      sign = Math.sign(cross);
    }

    // 2点目以降、外積の符号が変わっていたら交差している
    else {
      if (sign !== Math.sign(cross)) return true;
    }
  }

  // 外積の結果が全て同じ符号だったら衝突していない。
  return false;  
}

/**
 * 直線と半直線の衝突
 * @param line 直線
 * @param ray 半直線
 */
// export function intercect(line:Line, ray:Ray) 
// {
//   // 衝突判定の結果オブジェクト
//   const result = {
//     hit: false,
//     pos: Vector2.zero,
//   }

//   return result;
// }