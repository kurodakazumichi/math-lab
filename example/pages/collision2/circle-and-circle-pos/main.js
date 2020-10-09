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
        star1: shapes.star().opacity(0.5),
        star2: shapes.star().opacity(0.5),
      }
    }

    initNodes(nodes) {
      Sync.circleToCircle(this.circle1, nodes.circle1);
      Sync.circleToCircle(this.circle2, nodes.circle2);
    }

    update() {
      Sync.circleToCircle(this.circle1, this.nodes.circle1);

      const result = Collision2.CircleAndCircle.intercect(this.circle1, this.circle2);

      const color = (result.hit)? sColor.red : sColor.main;

      this.nodes.circle1.stroke(color);
      this.nodes.circle2.stroke(color);


      const stars = [this.nodes.star1, this.nodes.star2];
      
      stars.map((star) => { star.visible(false); })

      result.pos.map((pos, index) => {
        stars[index].visible(true);
        Sync.vecToPos(pos, stars[index]);
      })
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}