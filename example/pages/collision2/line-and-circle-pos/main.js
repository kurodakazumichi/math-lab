{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Circle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(0, 0), new Vector2(1, 1));
      this.circle = new Circle(new Vector2(1, ), 2);
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
        line: shapes.line(),
        circle: shapes.circle(),
        s1:shapes.star().opacity(0.5),
        s2:shapes.star().opacity(0.5),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
    }

    update() {
      Sync.lineByLine(this.nodes.line, this.line);

      const result = Collision2.LineAndCircle.intercect(this.line, this.circle);

      const color = (result.hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.circle.stroke(color);

      this.nodes.s1.visible(result.hit);
      this.nodes.s2.visible(result.hit);

      const stars = [this.nodes.s1, this.nodes.s2];

      result.pos.map((pos, index) => {
        stars[index].pos(pos.x, pos.y);
      });
    }
  }

  class Graph2Base extends Somali.Scene 
  {

    constructor() {
      super();
      this.line = new Line(new Vector2(-1, -3.5), new Vector2(2, 1));
      this.circle = new Circle(new Vector2(0, 0), 4);
      this.col = Collision2.LineAndCircle.intercect(this.line, this.circle);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),

        C: shapes.point(),
        CText: shapes.text("C"),
        H: shapes.point(),
        HText: shapes.text("H"),
        CH: shapes.aux(),

        P1: shapes.point(),
        P1Text: shapes.text("P"),
        P2: shapes.point(),
        P2Text: shapes.text("P'"),
        
        r1: shapes.line().strokeWidth(1),
        r1Text: shapes.text("r").offset(0, 0.4),
        r2: shapes.line().strokeWidth(1),
        r2Text: shapes.text("r").offset(-0.5, 0.35),

        vn: shapes.arrow().color(sColor.yellow),
        vnText: shapes.text("n").offset(0, 0.6),
      }
    }

    initNodes(nodes) {

      const c = this.circle.p;
      const { pos, nearest } = this.col;
      const n = this.line.v.normalize;

      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
      Sync.posByVec(nodes.C     , c)
      Sync.posByVec(nodes.CText , c).offset(0.2, 0.5);;
      Sync.posByVec(nodes.H     , nearest);
      Sync.posByVec(nodes.HText , nearest);
      Sync.posByVec(nodes.P1    , pos[0]);
      Sync.posByVec(nodes.P1Text, pos[0]);
      Sync.posByVec(nodes.P2    , pos[1]);
      Sync.posByVec(nodes.P2Text, pos[1]).offset(0, -0.4);

      Sync.posByVec(nodes.r1Text, Vector2.midpoint(c, pos[0]));
      Sync.posByVec(nodes.r2Text, Vector2.midpoint(c, pos[1]));

      Sync.lineByP1P2(nodes.r1, c, pos[0]);
      Sync.lineByP1P2(nodes.r2, c, pos[1]);
      Sync.lineByP1P2(nodes.CH, c, nearest);

      Sync.arrowByPV(nodes.vn, this.col.nearest, n);
      Sync.posByVec(nodes.vnText, Vector2.add(this.col.nearest, n));
    }
  }

  graphs.Graph2 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      return;
      NodesUtil.hide(this.nodes, [
        "C",
        "CText",
        "H",
        "HText",
        "CH",
        "P1",
        "P1Text",
        "P2",
        "P2Text",
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "vn",
        "vnText",
      ]);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}