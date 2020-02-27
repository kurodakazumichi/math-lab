/******************************************************************************
 * 通常のjsファイルのように<script src="***"></script>で読み込んで使えるように
 * 全てのクラスをwindow.MyMath空間にバンドルする。
 * 
 * 正直このやり方は正しくない気はするが、結果的に同じだからいいよね
 * と思ってやってしまっている。
 *****************************************************************************/
import * as Util from "./util";
import Vector2 from "./Vector2";
import Quadratic from "./Quadratic";
import Linear from "./Linear";
import Triangle2D from "./Triangle2D";
import { 
  Line2D, 
  Segment2D, 
  Ray2D,
  Circle2D,
  Capsule2D,
  AABB2D,
  OBB2D,
} from "./Primitive2D";

interface GlobalWindow {
  MyMath: any;
}
declare var window: GlobalWindow;

if (typeof window !== "undefined"){
  window.MyMath = {
    Util,
    Quadratic,
    Vector2,
    Linear,
    Triangle2D,
  }
}

export { 
  Util, 
  Vector2, 
  Linear, 
  Quadratic, 
  Line2D,
  Segment2D,
  Ray2D,
  Circle2D,
  Capsule2D,
  Triangle2D,
  AABB2D,
  OBB2D, 
}