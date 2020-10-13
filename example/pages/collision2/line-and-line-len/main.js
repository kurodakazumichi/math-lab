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
      this.l2 = new Line(Vector2.right, Vector2.up);
    }

    initGui(gui) {
      const p = gui.addFolder("直線上の1点");
      p.add(this.l2.p, "x").step(0.1);
      p.add(this.l2.p, "y").step(0.1);
      const v = gui.addFolder("直線の向き");
      v.add(this.l2.v, "x").step(0.1);
      v.add(this.l2.v, "y").step(0.1);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
        p : shapes.star().opacity(0.5),
        p1: shapes.point(),
        p2: shapes.point(),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.l1, this.l1);
      Sync.lineByLine(this.nodes.l2, this.l2);

      const result = Collision2.LineAndLine.intercect(this.l1, this.l2);
      const distance = Collision2.LineAndLine.getNearestDistanceAndPos(this.l1, this.l2);

      Sync.posByVec(this.nodes.p1, distance.p1);
      Sync.posByVec(this.nodes.p2, distance.p2);

      this.nodes.p.visible(result.hit);

      if (result.hit || result.hitParallel) {
        this.nodes.l1.stroke(sColor.red);
        this.nodes.l2.stroke(sColor.red);

        this.nodes.p.pos(result.pos.x, result.pos.y);
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