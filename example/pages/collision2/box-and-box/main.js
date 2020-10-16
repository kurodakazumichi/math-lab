{
  const { Vector2, Collision2, Util } = MathLab;
  const { Box } = MathLab.Primitive2;
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
      this.box1 = new Box(new Vector2(2, 2), new Vector2(1.5, 1.5), 0);
      this.box2 = new Box(new Vector2(0, 0), new Vector2(1.8, 1.8), 45);
    }

    initGui(gui) {
     
      gui.add(this.box1.p, "x").step(0.1).name("pos.x");
      gui.add(this.box1.p, "y").step(0.1).name("pos.y");
      gui.add(this.box1.r, "x").step(0.1).min(0.1).name("size").onChange((x) => {
        this.box1.r.y = x;
      });
      
      gui.add(this.box1, "angle");

    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        box1: shapes.rect(),
        box2: shapes.rect(),
      }
    }

    update() {
      Sync.rectByBox(this.nodes.box1, this.box1);
      Sync.rectByBox(this.nodes.box2, this.box2);

      const hit = Collision2.BoxAndBox.isHitSquare(this.box1, this.box2);
      const color = (hit)? sColor.red: sColor.main;

      this.nodes.box1.stroke(color);
      this.nodes.box2.stroke(color);
    }

  }


  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}