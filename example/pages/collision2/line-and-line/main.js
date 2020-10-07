{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
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

      this.l1 = new Line(Vector2.zero, Vector2.one);
      this.l2 = new Line(Vector2.right, Vector2.one);

      const hit = Collision2.LineAndLine.isHit(this.l1, this.l2);
    }

    initGui(gui) {
      const p = gui.addFolder("直線上の1点");
      p.add(this.l2.p, "x");
      p.add(this.l2.p, "y");
      const v = gui.addFolder("直線の向き");
      v.add(this.l2.v, "x");
      v.add(this.l2.v, "y");

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        star: shapes.star().opacity(0.5),
        l1: shapes.line(),
        l2: shapes.line(),
      }
    }

    update() {
      Sync.lineToLine(this.l1, this.nodes.l1);
      Sync.lineToLine(this.l2, this.nodes.l2);

      const result = Collision2.LineAndLine.intercect(this.l1, this.l2);

      this.nodes.star.visible(result.hit);

      if (result.hit || result.hitParallel) {
        this.nodes.l1.stroke(sColor.red);
        this.nodes.l2.stroke(sColor.red);

        Sync.vecToPos(result.pos, this.nodes.star);
      } 
      
      else {
        this.nodes.l1.stroke(sColor.main);
        this.nodes.l2.stroke(sColor.main);
      }


    }


  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}