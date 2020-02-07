/******************************************************************************
 * 通常のjsファイルのように<script src="***"></script>で読み込んで使えるように
 * 全てのクラスをwindow.MyMath空間にバンドルする。
 *****************************************************************************/
import Vector2 from "./Vector2";

interface GlobalWindow {
  MyMath: any;
}
declare var window: GlobalWindow;

if (typeof window !== "undefined"){
  window.MyMath = {
    Vector2: Vector2,
  }
}