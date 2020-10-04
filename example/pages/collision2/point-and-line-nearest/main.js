{
  const { Vector2, Collision2 } = MathLab;
  const { Line } = MathLab.Primitive2;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.line = new Line(new Vector2(0, 0), new Vector2(3, 1));
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.line.points(100)),
        star   : shapes.star().opacity(0.5),
        aux    : shapes.aux()
      }
    }

    initNodes(nodes) {
      nodes.pointer.on("dragmove", (p) => {
        this.pos.set(p.x(), p.y());
      })
    }

    update() {
      const nearest = Collision2.PointAndLine
        .getNearestNeighborPoint(this.pos, this.line);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
    }
  }
  
  new Graph1().build();

}

