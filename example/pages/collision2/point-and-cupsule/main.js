{
  const { Vector2, Collision2 } = MathLab;
  const { Capsule, Segment } = MathLab.Primitive2;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.capsule  = new Capsule(new Segment(new Vector2(-2, -2), new Vector2(4, 4)), 1.5);
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        cupsule: Sync.capsuleToLine(this.capsule, shapes.line()).stroke(Somali.sColor.gray),
        point  : shapes.point(),
        star   : shapes.star().opacity(0.7)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndCapsule.intercect(this.pos, this.capsule);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }


  
  new Graph1().build();

}