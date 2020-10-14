{
  const { Vector2, Collision2, Util } = MathLab;
  const { Segment } = MathLab.Primitive2;
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
      this.point = new Vector2(1, 3),
      this.seg   = new Segment(new Vector2(-1, -1), new Vector2(3, 1.5));  
    }

    initGui(gui) {
      const p = gui.addFolder("点の座標");
      p.add(this.point, "x");
      p.add(this.point, "y");
      p.open();
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        line   : shapes.line(),
        point  : shapes.point(),
        aux    : shapes.aux(),
        HText  : shapes.text("H"),
        text   : shapes.text(),
      }
    }

    update() {
      const result = Collision2.PointAndSegment.getNearestDistance(this.point, this.seg);
      Sync.posByVec(this.nodes.point, this.point);
      Sync.lineBySeg(this.nodes.line, this.seg);
      Sync.lineByP1P2(this.nodes.aux, this.point, result.h);
      Sync.posByVec(this.nodes.HText, result.h);
      this.nodes.text.text(`最短距離 = ${Util.round(result.distance, 3)}...`);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}