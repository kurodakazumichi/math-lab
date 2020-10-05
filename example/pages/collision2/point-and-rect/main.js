{
  const { Vector2, Collision2 } = MathLab;
  const { Rect } = MathLab.Primitive2;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.rect = new Rect(new Vector2(-2, 2), 4, 5);

      console.log(this.rect);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        circle: Sync.rectToRect(this.rect, shapes.rect()),
        star: shapes.star().opacity(0.5)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndRect.intercect(this.pos, this.rect);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }


  
  new Graph1().build();

}

