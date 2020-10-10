{
  const { Vector2, Collision2, Util } = MathLab;
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
      Sync.lineByLine(nodes.line, this.line);
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
      Sync.lineByLine(nodes.line, this.line);
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
        point: shapes.pointer(),
        line : shapes.line(),
        a    : shapes.arrow().color(Somali.sColor.red),
        aText: shapes.text().text("a"),
        b    : shapes.arrow().color(Somali.sColor.yellow),
        bText: shapes.text().text("b"),
      }
    }

    initNodes(nodes) {
      nodes.point.pos(this.pos.x, this.pos.y);
      Sync.lineByLine(nodes.line, this.line);

      const p = this.line.point(2);
      nodes.a.points([this.line.p.x, this.line.p.y, p.x, p.y]);
      nodes.aText.pos(p.x, p.y);
      nodes.point.on('dragmove', (point) => {
        this.pos.set(point.x(), point.y());
      })
    }

    update() {
      const b = Vector2.sub(this.pos, this.line.p);
      this.nodes.b.points([this.line.p.x, this.line.p.y, b.x, b.y]);
      this.nodes.bText.pos(b.x, b.y);
    }
  }    

  class Graph4 extends Somali.Scene 
  {
    get option() {
      return {id:"graph4", update:false}
    }

    constructor() {
      super();

      this.v1 = Vector2.right.times(2);
      this.v2 = Vector2.one.times(3);
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        point: shapes.pointer().pos(this.v2.x, this.v2.y),
        theta: shapes.wedge().pos(0, 0).angle(45).rotation(-45),
        v1   : shapes.arrow().color(Somali.sColor.red),
        v2   : shapes.arrow().color(Somali.sColor.yellow),
        text : shapes.text().text("θ=45").pos(0.5, 0.5),
        cross: shapes.text().fontSize(20),
        sin  : shapes.text().fontSize(20).pos(-5, 4),
      }
    }

    initNodes(nodes) {
      Sync.arrowByVec(nodes.v1, this.v1);
      Sync.arrowByVec(nodes.v2, this.v2);
      this.updateCross();
      this.updateSin();

      nodes.point.on("dragmove", (point) => {
        this.v2.set(point.x(), point.y());
        Sync.arrowByVec(this.nodes.v2, this.v2);

        const deg = this.deg;
        this.nodes.text.text(`θ=${deg}`)

        this.nodes.theta.angle(deg).rotation(-deg);

        this.updateCross();
        this.updateSin();

      });
    }

    get deg() {
      const cross = Vector2.cross(this.v1, this.v2);
      let deg = Util.round(Util.rad2deg(Vector2.angle(this.v1, this.v2)), 0);

      if (cross < 0) {
        deg = 180 + (180 - deg) ;
      }
      return deg;
    }

    updateCross() {
      this.nodes.cross.text(`外積の値=${Vector2.cross(this.v1, this.v2)}`);
    }

    updateSin() {
      const deg = this.deg;
      const sin = Math.sin(Util.deg2rad(deg));

      this.nodes.sin.text(`sin(${deg}) = ${Util.round(sin, 5)}`)
    }
  }

  class Graph5 extends Somali.Scene 
  {
    get option() {
      return {id:"graph5", update:false}
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
  new Graph5().build();

}