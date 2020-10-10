{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Circle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(0, 0), new Vector2(1, 1));
      this.circle = new Circle(new Vector2(0, 0), 2);
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
      }
    }

    initNodes(nodes) {
      Sync.lineToLine(this.line, nodes.line);
      Sync.circleToCircle(this.circle, nodes.circle);
    }

    update() {
      Sync.lineToLine(this.line, this.nodes.line);

      const hit = Collision2.LineAndCircle.isHit(this.line, this.circle);

      const color = (hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.circle.stroke(color);
    }
  }

  class Graph2Base extends Somali.Scene {

    constructor() {
      super();
      this.line = new Line(new Vector2(0, -2.5), new Vector2(2, 1));
      this.circle = new Circle(new Vector2(0, 0), 3);
      this.col = Collision2.LineAndCircle.intercect(this.line, this.circle);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),
        C: shapes.point(),
        cText: shapes.text("C"),
        H: shapes.point(),
        hText: shapes.text("H"),
        r: shapes.line().dash(5),
        rText: shapes.text("r"),
        aux: shapes.aux(),
      }
    }

    initNodes(nodes) {
      Sync.lineToLine(this.line, nodes.line);
      Sync.circleToCircle(this.circle, nodes.circle);
      Sync.vecToPos(this.circle.p, nodes.C);
      Sync.vecToPos(this.col.nearest, nodes.H);
      Sync.vecToPos(this.circle.p, nodes.cText);
      Sync.vecToPos(this.col.nearest, nodes.hText);

      const rv = Vector2.right.times(this.circle.r).rotate(Util.deg2rad(27));
      const mp = Vector2.midpoint(Vector2.zero, rv);
      Sync.vecToLine(rv, nodes.r);
      Sync.vecToPos(mp, nodes.rText);

      nodes.aux.points([this.circle.p.x, this.circle.p.y, this.col.nearest.x, this.col.nearest.y]);
    }

    hide(keys) {
      keys.map((key) => {
        this.nodes[key].visible(false);
      })
    }
  }

  graphs.Graph2_1 = class extends Graph2Base {
    get option() {
      return {id:"graph2_1"}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.hide(["r", "rText"]);
    }
  }

  graphs.Graph2_2 = class extends Graph2Base {
    get option() {
      return {id:"graph2_2"}
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}