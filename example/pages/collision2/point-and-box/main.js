{
  const { Vector2, Collision2 } = MathLab;
  const { Box } = MathLab.Primitive2;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.box  = new Box(new Vector2(0, 0), new Vector2(2, 3), 20);

      console.log(this.box);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        box  : Sync.boxToRect(this.box, shapes.rect()),
        star: shapes.star().opacity(0.5)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      this.box.angle = (this.timer * 5);
      this.nodes.box.rotation(-this.box.angle);

      const result = Collision2.PointAndBox.intercect(this.pos, this.box);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }


  
  new Graph1().build();

}

