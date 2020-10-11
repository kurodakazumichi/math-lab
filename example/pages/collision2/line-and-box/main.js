{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Box } = MathLab.Primitive2;
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
      this.box  = new Box(new Vector2(2.5, 0), new Vector2(1.5, 2), 0);
    }

    initGui(gui) {
      const p = gui.addFolder("直線の任意の点");
      p.add(this.line.p, "x").step(0.1);
      p.add(this.line.p, "y").step(0.1);

      const v = gui.addFolder("直線の方向")
      v.add(this.line.v, "x").step(0.1);
      v.add(this.line.v, "y").step(0.1);

      p.open();
      v.open();
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        rect: shapes.rect(),
      }
    }

    initNodes(nodes) {
      Sync.rectByBox(nodes.rect, this.box);
      Sync.lineByLine(nodes.line, this.line);
    }

    update() {
      this.timer += 0.5;
      this.box.angle = this.timer;
      Sync.rectByBox(this.nodes.rect, this.box);
      Sync.lineByLine(this.nodes.line, this.line);

      const hit = Collision2.LineAndBox.isHit(this.line, this.box);
      const color = (hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.rect.stroke(color);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}