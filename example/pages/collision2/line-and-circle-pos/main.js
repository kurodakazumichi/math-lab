{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Circle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(0, 0), new Vector2(1, 1));
      this.circle = new Circle(new Vector2(1, ), 2);
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
        circle: shapes.circle(),
        s1:shapes.star().opacity(0.5),
        s2:shapes.star().opacity(0.5),
      }
    }

    initNodes(nodes) {
      Sync.lineToLine(this.line, nodes.line);
      Sync.circleToCircle(this.circle, nodes.circle);
    }

    update() {
      Sync.lineToLine(this.line, this.nodes.line);

      const result = Collision2.LineAndCircle.intercect(this.line, this.circle);

      const color = (result.hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.circle.stroke(color);

      this.nodes.s1.visible(result.hit);
      this.nodes.s2.visible(result.hit);

      const stars = [this.nodes.s1, this.nodes.s2];

      result.pos.map((pos, index) => {
        stars[index].pos(pos.x, pos.y);
      });
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}