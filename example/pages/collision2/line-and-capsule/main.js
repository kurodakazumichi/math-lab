{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Capsule, Segment } = MathLab.Primitive2;
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
      this.line    = new Line(new Vector2(-2.5, 1.3), Vector2.right);
      this.capsule = new Capsule(new Segment(new Vector2(0, 0), new Vector2(2, 1)), 1);

      const hit = Collision2.LineAndCapsule.isHit(this.line, this.capsule);
      console.log(hit);
    }

    debug() {
      console.log(Collision2.LineAndLine.getNearestDistance(this.line, this.capsule.s.toLine()));
    }

    initGui(gui) {

      gui.add(this, "debug");

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
        capsule: shapes.line().stroke(sColor.gray),
        line: shapes.line(),
        
        p1: shapes.point(),
        v1: shapes.arrow().color(sColor.yellow),

        p3: shapes.point().fill(sColor.green),
        p4: shapes.point().fill(sColor.green),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.line, this.line);
      Sync.lineByCapsule(this.nodes.capsule, this.capsule);
      Sync.posByVec(this.nodes.p1, this.line.p);
      Sync.arrowByPV(this.nodes.v1, this.line.p, this.line.v);

      const hit = Collision2.LineAndCapsule.isHit(this.line, this.capsule);
      const ret = Collision2.LineAndLine.getNearestDistance(this.line, this.capsule.s.toLine());
      const color = (hit)? sColor.red : sColor.gray;
      this.nodes.capsule.stroke(color);

      Sync.posByVec(this.nodes.p3, ret.p1);
      Sync.posByVec(this.nodes.p4, ret.p2);

    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}