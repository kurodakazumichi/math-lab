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
import * as Primitive2D from './Primitive2D';

export { 
  Util, 
  Vector2, 
  Linear, 
  Quadratic, 
  Triangle2D,
  Primitive2D,
}