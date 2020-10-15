{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  class Graph1Base extends Somali.Scene {
    constructor() {
      super();

      this.l1 = new Line(new Vector2(-3, 3), new Vector2(2, -0.6));
      this.l2 = new Line(new Vector2(-3, -2.5), new Vector2(3, 1.5));
      this.t1 = 0;
      this.t2 = 0;
    }

    initGui(gui) {
      gui.add(this, "t1").step(0.01).listen();
      gui.add(this, "t2").step(0.01).listen();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l1Text: shapes.text("L1").pos(-5, 4.2),
        l2: shapes.line(),
        l2Text: shapes.text("L2").pos(-5, -3.5),

        P1: shapes.point(),
        P2: shapes.point(),
        P1Text: shapes.text("P1").offsetY(0.5),
        P2Text: shapes.text("P2"),

        Q: shapes.point(),
        Q1: shapes.text("Q1").offset(-0.2, 0.6),
        Q2: shapes.text("Q2").offset(-0.2, -0.25),

        tv1: shapes.arrow().color(sColor.blue).strokeWidth(6),
        tv1Text: shapes.text("t1・v1").fill(sColor.blue).offsetY(0.5),
        tv2: shapes.arrow().color(sColor.blue).strokeWidth(6),
        tv2Text: shapes.text("t2・v2").fill(sColor.blue),

        v1: shapes.arrow().color(sColor.yellow),
        v2: shapes.arrow().color(sColor.yellow),
        v1Text: shapes.text("v1").fill(sColor.yellow).offsetY(0.5),
        v2Text: shapes.text("v2").fill(sColor.yellow),
      }
    }

    initNodes(nodes) {
      this.col = Collision2.LineAndLine.getNearestDistance2(this.l1, this.l2);
      this.t1 = this.col.t1;
      this.t2 = this.col.t2;

      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);
      
      Sync.posByVec(nodes.P1, this.l1.p);
      Sync.posByVec(nodes.P2, this.l2.p);
      Sync.posByVec(nodes.P1Text, this.l1.p);
      Sync.posByVec(nodes.P2Text, this.l2.p);

      Sync.posByVec(nodes.Q, this.col.p1);
      Sync.posByVec(nodes.Q1, this.col.p1);
      Sync.posByVec(nodes.Q2, this.col.p2);

      Sync.arrowByPV(nodes.v1, this.l1.p, this.l1.v);
      Sync.arrowByPV(nodes.v2, this.l2.p, this.l2.v);
      Sync.posByVec(nodes.v1Text, Vector2.add(this.l1.p, this.l1.v));
      Sync.posByVec(nodes.v2Text, Vector2.add(this.l2.p, this.l2.v));

      Sync.arrowByP1P2(nodes.tv1, this.l1.p, this.col.p1);
      Sync.posByVec(nodes.tv1Text, Vector2.midpoint(this.l1.p, this.col.p1));
      Sync.arrowByP1P2(nodes.tv2, this.l2.p, this.col.p2);
      Sync.posByVec(nodes.tv2Text, Vector2.midpoint(this.l2.p, this.col.p2));

    }
  }  

  graphs.Graph1_1 = class extends Graph1Base {
    get option() { return {id:"graph1_1", gui:true}}
  }

  graphs.Graph1_2 = class extends Graph1Base {
    get option() { return {id:"graph1_2", gui:true}}
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}