{
  const { Vector2, Collision2 } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return {id:"graph1"}
    }

    constructor() {
      super();
      this.line = new Line(Vector2.zero, new Vector2(2, 1));
      this.pos  = Vector2.one;
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        point: shapes.point(),
        line : shapes.line(),
        star: shapes.star(),
      }
    }

    initNodes(nodes) {
      nodes.star.visible(false).opacity(0.5);
      nodes.point.pos(this.pos.x, this.pos.y);
      Sync.lineToLine(this.line, nodes.line);
    }

    update() {
      this.timer += 1;

      if (this.timer % 30 !== 0) return;

      const x = Math.ceil(Math.random() * 8 - 4);
      const y = Math.ceil(Math.random() * 4 - 2);
      this.pos.set(x, y);

      this.nodes.point.pos(x, y);

      const result = Collision2.PointAndLine.intercect(this.pos, this.line);

      this.nodes.star.visible(result.hit);
      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }

  class Graph2 extends Somali.Scene 
  {
    get option() {
      return {id:"graph2"}
    }

    constructor() {
      super();
      this.line = new Line(Vector2.zero, new Vector2(2, 1));
      this.pos  = Vector2.one;
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        point: shapes.point(),
        line : shapes.line(),
        star: shapes.star(),
      }
    }

    initNodes(nodes) {
      nodes.star.visible(false).opacity(0.5);
      nodes.point.pos(this.pos.x, this.pos.y);
      Sync.lineToLine(this.line, nodes.line);
    }

    update() {
      this.timer += 0.03;

      const x = Math.sin(this.timer) * 4;
      const y = Math.cos(this.timer * 0.33) * 2;
      this.pos.set(x, y);

      this.nodes.point.pos(x, y);

      const result = Collision2.PointAndLine.intercect(this.pos, this.line);

      this.nodes.star.visible(result.hit);
      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }  

  class Graph3 extends Somali.Scene 
  {
    get option() {
      return {id:"graph3"}
    }

    constructor() {
      super();
      this.line = new Line(Vector2.zero, new Vector2(4, -1)); 
      this.pos  = new Vector2(3, 3);
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        point: shapes.point().draggable(true),
        line : shapes.line(),
        a    : shapes.arrow().color(Somali.sColor.red),
        b    : shapes.arrow().color(Somali.sColor.yellow),
      }
    }

    initNodes(nodes) {
      nodes.point.pos(this.pos.x, this.pos.y);
      Sync.lineToLine(this.line, nodes.line);

      const p = this.line.point(2);
      nodes.a.points([this.line.p.x, this.line.p.y, p.x, p.y]);

      nodes.point.on('dragmove', (point) => {
        this.pos.set(point.x(), point.y());
      })
    }

    update() {
      const b = Vector2.sub(this.pos, this.line.p);
      this.nodes.b.points([this.line.p.x, this.line.p.y, b.x, b.y]);
    }
  }    

  class Graph4 extends Somali.Scene 
  {
    get option() {
      return {id:"graph4", update:false}
    }

    constructor() {
      super();
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        point: shapes.point().pos(1, 1),
        line : shapes.line().points([-10, -28, 10, 32]),
        text : shapes.text().pos(1, 1).text("A(1, 1)")
      }
    }
  }     

  new Graph1().build();
  new Graph2().build();
  new Graph3().build();
  new Graph4().build();

}