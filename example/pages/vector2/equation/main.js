{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene
  {
    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.l1 = new Line(new Vector2(1, 1), new Vector2(1, 0.5));
      this.t = 3;
    }

    initGui(gui) {
      gui.add(this, "t").step(0.1);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        A: shapes.point(),
        AText: shapes.text("A"),
        v: shapes.arrow().color(sColor.yellow),
        vText: shapes.text("v"),
        P: shapes.point(),
        PText: shapes.text("P"),

        tv: shapes.arrow().color(sColor.green).strokeWidth(1),
        tvText: shapes.text("tv").fill(sColor.green).offset(-0.5, 0.5),      
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.posByVec(nodes.A, this.l1.p);
      Sync.posByVec(nodes.AText, this.l1.p);

      Sync.arrowByPV(nodes.v, this.l1.p, this.l1.v);
      Sync.posByVec(nodes.vText, this.l1.point(1));
    }

    update() {
      const p = Vector2.add(this.l1.p, Vector2.times(this.l1.v, this.t));
      Sync.posByVec(this.nodes.P, p);
      Sync.posByVec(this.nodes.PText, p);

      Sync.arrowByP1P2(this.nodes.tv, this.l1.p, p);
      Sync.posByVec(this.nodes.tvText, p);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}