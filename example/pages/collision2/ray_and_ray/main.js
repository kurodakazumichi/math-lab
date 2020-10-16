{
  const { Vector2, Collision2, Util } = MathLab;
  const { Ray } = MathLab.Primitive2;
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
      this.ray1 = new Ray(new Vector2(-2, 2), new Vector2(2, -1));
      this.ray2 = new Ray(new Vector2(0, 0), new Vector2(1, 1));
    }

    initGui(gui) {
      const p = gui.addFolder("半直線の始点");
      const v = gui.addFolder("半直線の向き");
      
      p.add(this.ray1.p, "x").step(0.1);
      p.add(this.ray1.p, "y").step(0.1);
      v.add(this.ray1.v, "x").step(0.1);
      v.add(this.ray1.v, "y").step(0.1);
      
      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        ray1: shapes.line(),
        ray2: shapes.line(),
        star: shapes.star().opacity(0.5),
      }
    }

    update() {
      Sync.lineByRay(this.nodes.ray1, this.ray1);
      Sync.lineByRay(this.nodes.ray2, this.ray2);

      const result = Collision2.RayAndRay.intercect(this.ray1, this.ray2);
      const color = (result.hit)? sColor.red: sColor.main;

      this.nodes.ray1.stroke(color);
      this.nodes.ray2.stroke(color);

      this.nodes.star.visible(result.hit);
      Sync.posByVec(this.nodes.star, result.p1);
    }

  }


  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}