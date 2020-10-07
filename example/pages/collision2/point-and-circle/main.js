{
  const { Vector2, Collision2 } = MathLab;
  const { Circle } = MathLab.Primitive2;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos    = Vector2.zero;
      this.circle = new Circle(new Vector2(1, 1), 3);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        circle: Sync.circleToCircle(this.circle, shapes.circle()),
        star: shapes.star().opacity(0.5)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndCircle.intercect(this.pos, this.circle);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }

  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2" };
    }

    constructor() {
      super();
      this.circle = new Circle(new Vector2(1, 1), 3);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        p : shapes.pointer().pos(-4, 4), 
        pText: shapes.text().text("P"),

        circle: Sync.circleToCircle(this.circle, shapes.circle()),

        r: shapes.line().points([1, 1, -2, 1]),
        rText: shapes.text().text("r").pos(-0.6, 1),
        a: shapes.point().pos(this.circle.p.x, this.circle.p.y),
        aText: shapes.text().text("A").pos(this.circle.p.x, this.circle.p.y),
        
        aux: shapes.aux(),
      }
    }

    update() {
      const c = this.circle.p;
      const x = this.nodes.p.x();
      const y = this.nodes.p.y();

      this.nodes.pText.pos(x, y);
      this.nodes.aux.points([x, y, c.x, c.y]);
    }
  }
  
  Object.values(graphs).map((graph) => {
    new graph().build();
  })

}

