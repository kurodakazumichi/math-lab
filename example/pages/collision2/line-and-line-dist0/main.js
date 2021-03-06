{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  class Graph1Base extends Somali.Scene {
    constructor() {
      super();

      this.l1 = new Line(Vector2.right.times(2), Vector2.one);
      this.l2 = new Line(Vector2.left.times(2), Vector2.one);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
        aux: shapes.aux(),
      }
    }

    initNodes(nodes) {
      this.col = Collision2.LineAndLine.getNearestDistance(this.l1, this.l2);
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);
      Sync.lineByP1P2(nodes.aux, this.col.p1, this.col.p2);
    }
  }

  graphs.Graph1_1 = class extends Graph1Base 
  {
    get option() {
      return { id: "graph1_1", uppdate: false };
    }
  }

  graphs.Graph1_2 = class extends Graph1Base 
  {
    get option() {
      return { id: "graph1_2", uppdate: false };
    }

    constructor() {
      super();
      this.l1.v.set(1, -0.5);
    }
  }

  class Graph2Base extends Somali.Scene {
    constructor() {
      super();

      this.l1 = new Line(new Vector2(-3, 3), new Vector2(2, -0.6));
      this.l2 = new Line(new Vector2(-3, -2.5), new Vector2(2, 1));
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
        QText: shapes.text("Q").offset(-0.2, 0.6),

        tv: shapes.arrow().color(sColor.red).strokeWidth(6),
        tvText: shapes.text().visible(false),

        v1: shapes.arrow().color(sColor.yellow),
        v2: shapes.arrow().color(sColor.yellow),
        v1Text: shapes.text("v1").offsetY(0.5),
        v2Text: shapes.text("v2"),

        v: shapes.arrow().color(sColor.blue).visible(false),
        vText: shapes.text("v").visible(false),
      }
    }

    initNodes(nodes) {
      this.col = Collision2.LineAndLine.getNearestDistance(this.l1, this.l2);
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);
      
      Sync.posByVec(nodes.P1, this.l1.p);
      Sync.posByVec(nodes.P2, this.l2.p);
      Sync.posByVec(nodes.P1Text, this.l1.p);
      Sync.posByVec(nodes.P2Text, this.l2.p);

      Sync.posByVec(nodes.Q, this.col.p1);
      Sync.posByVec(nodes.QText, this.col.p1);

      Sync.arrowByPV(nodes.v1, this.l1.p, this.l1.v);
      Sync.arrowByPV(nodes.v2, this.l2.p, this.l2.v);
      Sync.posByVec(nodes.v1Text, this.l1.point(1.5));
      Sync.posByVec(nodes.v2Text, this.l2.point(1.5));

      Sync.arrowByP1P2(nodes.v, this.l2.p, this.l1.p);
      Sync.posByVec(nodes.vText, Vector2.midpoint(this.l2.p, this.l1.p));
    }
  }

  graphs.Graph2_1 = class extends Graph2Base {
    get option() { return {id:"graph2_1", update:false}}
  }

  graphs.Graph2_2 = class extends Graph2Base {
    get option() { return {id:"graph2_2"}}

    update() {
      this.timer += 0.01;
      const to = Vector2.lerp(this.l1.v, Vector2.sub(this.col.p1, this.l1.p), this.timer);
      Sync.arrowByPV(this.nodes.tv, this.l1.p, to);
      if (1 < this.timer) this.timer = 0;
    }
  }

  graphs.Graph2_3 = class extends Graph2Base {
    get option() { return {id:"graph2_3"}}

    update() {
      this.timer += 0.01;
      const to = Vector2.lerp(this.l2.v, Vector2.sub(this.col.p2, this.l2.p), this.timer);
      Sync.arrowByPV(this.nodes.tv, this.l2.p, to);
      if (1 < this.timer) this.timer = 0;
    }
  }

  graphs.Graph2_3_1 = class extends Graph2Base {
    get option() { return {id:"graph2_3_1", gui:true}}

    constructor() {
      super();
      this.l1.v.set(6, -6);
      this.l2.v.set(4.5, 2);
      this.t1 = 0;
      this.t2 = 0;
    }

    initGui(gui) {
      gui.add(this, "t1").step(0.01).listen();
      gui.add(this, "t2").step(0.01).listen();
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.t1 = this.col.t1;
      this.t2 = this.col.t2;
    }
  }  

  graphs.Graph2_4 = class extends Graph2Base {
    get option() { return {id:"graph2_4", update:false}}

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.show(nodes, ["v", "vText"]);
    }
  }  

  graphs.Graph2_5 = class extends Graph2Base {
    get option() { return {id:"graph2_5", update:false}}

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.show(nodes, ["v", "vText", "tvText"]);

      Sync.arrowByP1P2(nodes.tv, this.l2.p, this.col.p2);
      Sync.posByVec(nodes.tvText, Vector2.midpoint(this.l2.p, this.col.p2)).text("v'2");
    }
  }  

  graphs.Graph2_6 = class extends Graph2Base {
    get option() { return {id:"graph2_6", update:false}}

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.show(nodes, ["v", "vText", "tvText"]);

      Sync.arrowByP1P2(nodes.tv, this.l1.p, this.col.p2);
      Sync.posByVec(nodes.tvText, Vector2.midpoint(this.l1.p, this.col.p2)).text("v'1").offsetY(0.5);
    }
  }  


  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}