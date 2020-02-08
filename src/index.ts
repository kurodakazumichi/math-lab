/******************************************************************************
 * 通常のjsファイルのように<script src="***"></script>で読み込んで使えるように
 * 全てのクラスをwindow.MyMath空間にバンドルする。
 *****************************************************************************/
import Vector2 from "./Vector2";
import Quadratic from "./Quadratic";

interface GlobalWindow {
  MyMath: any;
}
declare var window: GlobalWindow;

if (typeof window !== "undefined"){
  window.MyMath = {
    Quadratic: Quadratic,
    Vector2  : Vector2,
  }
}