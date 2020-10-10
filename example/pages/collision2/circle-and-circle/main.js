{
  const { Vector2, Collision2, Util } = MathLab;
  const { Circle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(0, 0), 1);
      this.circle2 = new Circle(new Vector2(2, 1), 2);
    }

    initGui(gui) {
      gui.add(this.circle1.p, "x").step(0.1);
      gui.add(this.circle1.p, "y").step(0.1);
      gui.add(this.circle1, "r").min(0);
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        circle1: shapes.circle(),
        circle2: shapes.circle(),
      }
    }

    initNodes(nodes) {
      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);
    }

    update() {
      Sync.circleByCircle(this.nodes.circle1, this.circle1);

      const hit = Collision2.CircleAndCircle.isHit(this.circle1, this.circle2);

      const color = (hit)? sColor.red : sColor.main;

      this.nodes.circle1.stroke(color);
      this.nodes.circle2.stroke(color);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}