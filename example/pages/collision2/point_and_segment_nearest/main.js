{
  const { Vector2, Collision2 } = MathLab;
  const { Segment } = MathLab.Primitive2;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.seg = new Segment(new Vector2(-3, -1), new Vector2(6, 2));
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.seg.points),
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
      // this.timer++;

      const nearest = Collision2.PointAndSegment
        .getNearestNeighborPoint(this.pos, this.seg);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
      // this.nodes.star.visible(result.hit);

      // if (result.hit) {
      //   this.nodes.star.pos(result.pos.x, result.pos.y);
      // }

      // if (this.timer === 200) {
      //   this.action.reset();
      //   this.timer = 0;
      // }
    }
  }


  
  new Graph1().build();

}

