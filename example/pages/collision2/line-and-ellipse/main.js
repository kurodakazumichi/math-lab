{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Ellipse } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(0, 0), new Vector2(1, 1));
      this.ellipse = new Ellipse(new Vector2(2, 2), 2, 1, 210);
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
        ellipse: shapes.ellipse(),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.line, this.line);
      Sync.ellipseByEllipse(this.nodes.ellipse, this.ellipse);

      const hit = Collision2.LineAndEllipse.isHit(this.line, this.ellipse);

      const color = (hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.ellipse.stroke(color);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}