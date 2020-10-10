{
  const { Vector2, Collision2 } = MathLab;
  const { Line, Ray, Segment, Circle, Ellipse, Rect, Box, Triangle, Capsule } = MathLab.Primitive2;
  const { Sync } = props;

  class GraphPoint extends Somali.Scene 
  {
    get option() {
      return { id: "graph_point", gui:true };
    }

    constructor() {
      super();
      this.shape = Vector2.zero;
    }

    initGui(gui) {
      gui.add(this.shape, "x").step(0.1);
      gui.add(this.shape, "y").step(0.1);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.point(),
      }
    }

    update() {
      Sync.vecToPos(this.shape, this.nodes.main);
    }
  } 

  class GraphLine extends Somali.Scene 
  {
    get option() {
      return { id: "graph_line", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(Vector2.zero, Vector2.one);
    }

    initGui(gui) {
      const p = gui.addFolder("直線上の1点");
      p.add(this.line.p, "x").step(0.1);
      p.add(this.line.p, "y").step(0.1);
      const v = gui.addFolder("直線の向き");
      v.add(this.line.v, "x").step(0.1);
      v.add(this.line.v, "y").step(0.1);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line().points(this.line.points(100)),
        point: shapes.point(),
        arrow: shapes.arrow(),
      }
    }

    update() {
      this.nodes.line.points(this.line.points(100));
      Sync.vecToPos(this.line.p, this.nodes.point);
      Sync.vecToArrow(this.line.v, this.nodes.arrow);
    }
  }

  class GraphRay extends Somali.Scene 
  {
    get option() {
      return { id: "graph_ray", gui:true };
    }

    constructor() {
      super();
      this.ray = new Ray(Vector2.zero, Vector2.one);
    }

    initGui(gui) {
      const p = gui.addFolder("始点");
      p.add(this.ray.p, "x").step(0.1);
      p.add(this.ray.p, "y").step(0.1);
      const v = gui.addFolder("直線の向き");
      v.add(this.ray.v, "x").step(0.1);
      v.add(this.ray.v, "y").step(0.1);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line().points(this.ray.points(100)),
        point: shapes.point(),
        arrow: shapes.arrow(),
      }
    }

    update() {
      this.nodes.line.points(this.ray.points(100));
      Sync.vecToPos(this.ray.p, this.nodes.point);
      Sync.vecToArrow(this.ray.v, this.nodes.arrow);
    }
  }

  class GraphSeg extends Somali.Scene 
  {
    get option() {
      return { id: "graph_seg", gui:true };
    }

    constructor() {
      super();
      this.seg = new Segment(Vector2.zero, Vector2.one.times(3));
    }

    initGui(gui) {
      const p = gui.addFolder("始点");
      p.add(this.seg.p1, "x").step(0.1);
      p.add(this.seg.p1, "y").step(0.1);
      const v = gui.addFolder("直線の向きと長さを表すベクトル");
      v.add(this.seg.v, "x").step(0.1);
      v.add(this.seg.v, "y").step(0.1);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line().points(this.seg.points),
        point: shapes.point(),
        arrow: shapes.arrow(),
      }
    }

    update() {
      this.nodes.line.points(this.seg.points);
      Sync.vecToPos(this.seg.p1, this.nodes.point);
      Sync.vecToArrow(this.seg.v, this.nodes.arrow);
    }
  }  

  class GraphCircle extends Somali.Scene 
  {
    get option() {
      return { id: "graph_circle", gui:true };
    }

    constructor() {
      super();
      this.circle = new Circle(Vector2.zero, 3);
    }

    initGui(gui) {
      const p = gui.addFolder("中心位置");
      p.add(this.circle.p, "x").step(0.1);
      p.add(this.circle.p, "y").step(0.1);
      const v = gui.addFolder("半径");
      v.add(this.circle, "r").step(0.1).min(0);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        circle: shapes.circle(),
        point: shapes.point(),
      }
    }

    update() {
      Sync.circleToCircle(this.circle, this.nodes.circle);
      Sync.vecToPos(this.circle.p, this.nodes.point);
    }
  }  

  class GraphEllipse extends Somali.Scene 
  {
    get option() {
      return { id: "graph_ellipse", gui:true };
    }

    constructor() {
      super();
      this.shape = new Ellipse(Vector2.zero, 3, 2, 0);
    }

    initGui(gui) {
      const p = gui.addFolder("中心位置");
      p.add(this.shape.p, "x").step(0.1);
      p.add(this.shape.p, "y").step(0.1);
      const v = gui.addFolder("半径");
      v.add(this.shape.r, "x").step(0.1).min(0);
      v.add(this.shape.r, "y").step(0.1).min(0);
      const r = gui.addFolder("回転");
      r.add(this.shape, "angle");

      p.open();
      v.open();
      r.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.ellipse(),
        point: shapes.point(),
      }
    }

    update() {
      Sync.ellipseByEllipse(this.nodes.main, this.shape);
      Sync.vecToPos(this.shape.p, this.nodes.point);
    }
  }    

  class GraphRect extends Somali.Scene 
  {
    get option() {
      return { id: "graph_rect", gui:true };
    }

    constructor() {
      super();
      this.shape = new Rect(Vector2.zero, 3, 2);
    }

    initGui(gui) {
      const p = gui.addFolder("左上座標");
      p.add(this.shape.p, "x").step(0.1);
      p.add(this.shape.p, "y").step(0.1);
      const v = gui.addFolder("幅と高さ");
      v.add(this.shape, "w").step(0.1);
      v.add(this.shape, "h").step(0.1);

      p.open();
      v.open();

    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.rect(),
        point: shapes.point(),
      }
    }

    update() {
      Sync.rectToRect(this.shape, this.nodes.main);
      Sync.vecToPos(this.shape.p, this.nodes.point);
    }
  }    

  class GraphBox extends Somali.Scene 
  {
    get option() {
      return { id: "graph_box", gui:true };
    }

    constructor() {
      super();
      this.shape = new Box(Vector2.zero, new Vector2(4, 2), 0);
    }

    initGui(gui) {
      const p = gui.addFolder("中心座標");
      p.add(this.shape.p, "x").step(0.1);
      p.add(this.shape.p, "y").step(0.1);
      const v = gui.addFolder("幅と高さ");
      v.add(this.shape.r, "x").step(0.1);
      v.add(this.shape.r, "y").step(0.1);
      const r = gui.addFolder("回転");
      r.add(this.shape, "angle");
      
      p.open();
      v.open();
      r.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.rect(),
        point: shapes.point(),
      }
    }

    update() {
      Sync.boxToRect(this.shape, this.nodes.main);
      Sync.vecToPos(this.shape.p, this.nodes.point);
    }
  } 

  class GraphTri extends Somali.Scene 
  {
    get option() {
      return { id: "graph_tri", gui:true };
    }

    constructor() {
      super();
      this.shape = new Triangle(new Vector2(-2, -2), new Vector2(0, 2), new Vector2(2, -2));
    }

    initGui(gui) {
      const p1 = gui.addFolder("頂点１");
      p1.add(this.shape.p1, "x").step(0.1);
      p1.add(this.shape.p1, "y").step(0.1);
      const p2 = gui.addFolder("頂点２");
      p2.add(this.shape.p2, "x").step(0.1);
      p2.add(this.shape.p2, "y").step(0.1);      
      const p3 = gui.addFolder("頂点３");
      p3.add(this.shape.p3, "x").step(0.1);
      p3.add(this.shape.p3, "y").step(0.1);      
      
      p1.open();
      p2.open();
      p3.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.line(),
      }
    }

    update() {
      Sync.lineByTri(this.nodes.main, this.shape);
    }
  } 

  class GraphCap extends Somali.Scene 
  {
    get option() {
      return { id: "graph_cap", gui:true };
    }

    constructor() {
      super();
      this.shape = new Capsule(new Segment(new Vector2(-1, -1), new Vector2(2, 2)), 1);
    }

    initGui(gui) {
      const p = gui.addFolder("始点");
      p.add(this.shape.s.p1, "x");
      p.add(this.shape.s.p1, "y");
      const v = gui.addFolder("カプセルの線分の向きと長さ");
      v.add(this.shape.s.v, "x");
      v.add(this.shape.s.v, "y");
      const r = gui.addFolder("太さ");
      r.add(this.shape, "r").min(0);

      p.open();
      v.open();
      r.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        main: shapes.line().stroke(Somali.sColor.gray),
        point: shapes.point(),
        line: shapes.line(),
        c1: shapes.circle(),
        c2: shapes.circle(),
      }
    }

    update() {
      const { p1, p2 } = this.shape.s;
      Sync.lineByCapsule(this.nodes.main, this.shape);
      Sync.vecToPos(this.shape.s.p1, this.nodes.point);

      this.nodes.line.points([p1.x, p1.y, p2.x, p2.y]);
      this.nodes.c1.pos(p1.x, p1.y).radius(this.shape.r);
      this.nodes.c2.pos(p2.x, p2.y).radius(this.shape.r);
    }
  } 

  new GraphPoint().build();
  new GraphLine().build();
  new GraphRay().build();
  new GraphSeg().build();
  new GraphCircle().build();
  new GraphEllipse().build();
  new GraphRect().build();
  new GraphBox().build();
  new GraphTri().build();
  new GraphCap().build();
}