/******************************************************************************
 * MathLab exampleで使う便利機能(小道具)を定義
 *****************************************************************************/
const props = {};

/******************************************************************************
 * NodesUtil
 * NodeリストにたいするUtil
 *****************************************************************************/
props.NodesUtil = {
  hide: (nodes, keys) => {
    keys.map((key) => {
      (nodes[key]) && nodes[key].visible(false);
    })
  }
};

/******************************************************************************
 * Sync
 * MathLabのPrimitiveがもつパラメータをSomaliのShapeに適用するUtil
 *****************************************************************************/
props.Sync = {

  /** Primitive2.lineをSomali.Lineへ適用 */
  lineToLine: (line, shape) => {
    return shape.points(line.points(100));
  },
  lineByLine: (shape, line) => {
    return shape.points(line.points(100));
  },

  /** Primitive2.RayをSomali.Lineへ同期 */
  rayToLine: (ray, shape) => {
    return shape.points(ray.points(100));
  },
  lineByRay: (shape, ray) => {
    return shape.points(ray.points(100));
  },

  /** Vector2をSomali.Arrowへ適用 */
  vecToArrow: (v, shape) => {
    return shape.points([0, 0, v.x, v.y]);
  },
  arrowByVec: (shape, v) => {
    return shape.points([0, 0, v.x, v.y]);
  },

  /** Vector2をSomali.Lineへ同期 */
  lineByVec: (shape, v) => {
    return shape.points([0, 0, v.x, v.y]);
  },

  /** SegmentをSomali.Arrowへ同期 */
  arrowBySeg: (shape, seg) => {
    return shape.points([seg.p1.x, seg.p1.y, seg.p2.x, seg.p2.y]);
  },

  /** SegmentをSomali.Lineへ同期 */
  lineBySeg: (shape, seg) => {
    return shape.points([seg.p1.x, seg.p1.y, seg.p2.x, seg.p2.y]);
  },

  /** Vector2のポジションを同期 */
  vecToPos: (v, shape) => {
    return shape.pos(v.x, v.y);
  },
  posByVec: (shape, v) => {
    return shape.pos(v.x, v.y);
  },

  /** CircleをSomali.Circleへ適用 */
  circleToCircle: (circle, shape) => {
    return shape.pos(circle.p.x, circle.p.y).radius(circle.r);
  },
  circleByCircle: (shape, circle) => {
    return shape.pos(circle.p.x, circle.p.y).radius(circle.r);
  },

  /** RectをSomali.Rectへ適用 */
  rectByRect: (shape, rect) => {
    return shape.pos(rect.p1.x, rect.p1.y).width(rect.w).height(rect.h);
  },

  /** BoxをSomali.Rectへ適用 */
  rectByBox: (shape, box) => {
    return shape
      .pos(box.p.x, box.p.y)
      .width(box.w)
      .height(box.h)
      .rotation(-box.angle)
      .offset(-box.rx, box.ry)
      ;    
  },

  /** TriangleをSomali.Lineへ適用 */
  lineByTri: (shape, tri) => {
    return shape.points(tri.points).closed(true);
  },

  /** CapsuleをSomali.Lineへ適用 */
  lineByCapsule: (shape, capsule) => {
    return shape
      .points(capsule.s.points)
      .strokeWidth(capsule.r * 2, true)
      .lineCap("round");
  },

  /** EllipseをSomali.Ellipseへ適用 */
  ellipseByEllipse: (shape, ellipse) => {
    return shape
      .pos(ellipse.p.x, ellipse.p.y)
      .rx(ellipse.rx)
      .ry(ellipse.ry)
      .rotation(-ellipse.angle);        
  },

  /** 始点と終点を指定するとSomali.Lineを引いてくれる */
  lineByP1P2: (shape, p1, p2) => {
    return shape.points([p1.x, p1.y, p2.x, p2.y]);
  },
  
  /** 始点とベクトルを指定すると、Somali.Arrowを引いてくれる */
  arrowByPV: (shape, p, v) => {
    console.log(shape);
    return shape.points([p.x, p.y, p.x + v.x, p.y + v.y]);
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

/******************************************************************************
 * Graphプリセット
 *****************************************************************************/
props.Graph = {}

props.Graph.Cos = class extends Somali.Scene{

  constructor(id = "graph_cos") {
    super();
    this.id = id;
  }

  get option() {
    return {id:this.id, height: 200, width: 700, unit: 70, update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid().labelX("θ").labelY("cos"),
      cos   : groups.cos(),
    }
  }  
}

props.Graph.Sin = class extends Somali.Scene {
  constructor(id = "graph_sin") {
    super();
    this.id = id;
  }

  get option() {
    return {id:this.id, height: 200, width: 700, unit: 70, update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid().labelX("θ").labelY("sin"),
      sin   : groups.sin(),
    }
  }  
}

props.Graph.Tan = class extends Somali.Scene {
  constructor(id = "graph_tan") {
    super();
    this.id = id;
  }

  get option() {
    return {id:this.id, height: 200, width: 700, unit: 70, update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid().labelX("θ").labelY("tan"),
      tan   : groups.tan(),
    }
  }   
}