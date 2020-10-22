{
  const { Vector2, Collision2, Util } = MathLab;
  const { Ray, Segment } = MathLab.Primitive2;
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
      this.ray = new Ray(new Vector2(-2, 2), new Vector2(2, -1));
      this.seg = new Segment(new Vector2(0, 0), new Vector2(1, 1));
    }

    initGui(gui) {
      const p = gui.addFolder("半直線の始点");
      const v = gui.addFolder("半直線の向き");
      
      p.add(this.ray.p, "x").step(0.1);
      p.add(this.ray.p, "y").step(0.1);
      v.add(this.ray.v, "x").step(0.1);
      v.add(this.ray.v, "y").step(0.1);
      
      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        ray: shapes.line(),
        seg: shapes.line(),
        star: shapes.star().opacity(0.5),
      }
    }

    update() {
      Sync.lineByRay(this.nodes.ray, this.ray);
      Sync.lineBySeg(this.nodes.seg, this.seg);

      const result = Collision2.RayAndSegment.intercect(this.ray, this.seg);
      const color = (result.hit)? sColor.red: sColor.main;

      this.nodes.ray.stroke(color);
      this.nodes.seg.stroke(color);

      this.nodes.star.visible(result.hit);
      Sync.posByVec(this.nodes.star, result.pos);
    }

  }


  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}