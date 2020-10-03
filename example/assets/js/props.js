/******************************************************************************
 * MathLab exampleで使う便利機能(小道具)を定義
 *****************************************************************************/
const props = {};

/******************************************************************************
 * Sync
 * MathLabのPrimitiveがもつパラメータをSomaliのShapeに適用するUtil
 *****************************************************************************/
props.Sync = {

  /** Primitive2.lineをSomali.Lineへ適用 */
  lineToLine: (line, shape) => {
    return shape.points(line.points(100));
  },

  /** Vectir2をArrowへ適用 */
  vec2ToArrow: (v, shape) => {
    return shape.points([0, 0, v.x, v.y]);
  }

};

/******************************************************************************
 * Action管理クラス
 *****************************************************************************/
props.Actions = class 
{
  constructor() 
  {
    this.list = [];
    this.map = {}
  }
  add(key, action) {
    this.list.push(action);
    this.map[key] = action;
  }
  reset() {
    this.list.map((action) => { action.reset(); })
  }
  update() {
    this.list.map((action) => { action.update(); })
  }
}

/******************************************************************************
 * Actionクラス
 *****************************************************************************/
props.Action = {};

/**
 * 等速直線運動アクション
 */
props.Action.uniform = class 
{
  constructor(node, pos, velocity) {
    this.node = node;
    this.pos  = pos;
    this.spos = pos.clone();
    this.velocity = velocity;
    this.updateNode();
  }

  reset() {
    this.pos.copy(this.spos);
    this.updateNode();
  }
  update() {
    this.pos.add(this.velocity);
    this.updateNode();
  }

  updateNode() {
    this.node.pos(this.pos.x, this.pos.y);
  }
}