{
  const { Capsule, Segment, Rect, Box, Triangle } = MathLab.Primitive2;
  const { Vector2 } = MathLab;

  const Apply = {
    boxToRect: (box, rect) => {
      return rect.pos(box.c.x, box.c.y)
        .width(box.w)
        .height(box.h)
        .offset(-box.rx, box.ry)
        .rotation(box.angle)
    },
  
    triToLine: (tri, line) => {
      return line.points(tri.points).closed(true).draggable(true);
    }
  }


  class Graph extends Somali.Scene {

    constructor() {
      super();
      this.cupsule = new Capsule(new Segment(Vector2.one.times(-1), Vector2.one), 1);
      this.rect    = new Rect(Vector2.zero, 1, 1);
      this.box     = new Box(Vector2.zero, Vector2.one, 45);
      this.tri     = new Triangle(Vector2.zero, Vector2.up, Vector2.one);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        rect: shapes.rect(),
      }
    }

    initNodes(nodes) {
      Apply.boxToRect(this.box, nodes.rect);
      Apply.triToLine(this.tri, nodes.line);
    }

  }

  new Graph().build();
}