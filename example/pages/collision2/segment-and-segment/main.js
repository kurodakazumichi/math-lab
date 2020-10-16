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
      this.seg1 = new Segment(new Vector2(-1, 2), new Vector2(5, -2));
      this.seg2 = new Segment(new Vector2(-2, -1), new Vector2(6, 2.5));
    }

    initGui(gui) {
      const p = gui.addFolder("線分の始点");
      const v = gui.addFolder("線分の向きと長さ");
      
      p.add(this.seg1.p1, "x").step(0.1);
      p.add(this.seg1.p1, "y").step(0.1);
      v.add(this.seg1.v, "x").step(0.1);
      v.add(this.seg1.v, "y").step(0.1);
      
      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        seg1: shapes.line(),
        seg2: shapes.line(),
        star: shapes.star().opacity(0.5),
      }
    }

    update() {
      Sync.lineBySeg(this.nodes.seg1, this.seg1);
      Sync.lineBySeg(this.nodes.seg2, this.seg2);

      const result = Collision2.SegmentAndSegment.intercect(this.seg1, this.seg2);
      const color = (result.hit)? sColor.red: sColor.main;

      this.nodes.seg1.stroke(color);
      this.nodes.seg2.stroke(color);

      this.nodes.star.visible(result.hit);
      Sync.posByVec(this.nodes.star, result.p1);
    }

  }


  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}