{
  const { Vector2, Collision2 } = MathLab;
  const { Ellipse } = MathLab.Primitive2;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos    = Vector2.zero;
      this.ellipse = new Ellipse(new Vector2(1, 1), 3, 2, 50);

      Collision2.PointAndEllipse.intercect(this.pos, this.ellipse);      
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        star: shapes.star().opacity(0.5),
        ellipse: Sync.ellipseToEllipse(this.ellipse, shapes.ellipse()),
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndEllipse.intercect(this.pos, this.ellipse);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }


  
  new Graph1().build();

}

