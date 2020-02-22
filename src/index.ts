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
import Triangle from "./Triangle";

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
    Triangle,
  }
}

export { Util, Vector2, Quadratic, Linear, Triangle }