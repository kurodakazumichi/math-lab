{
  const { Vector2, Collision2 } = MathLab;
  const { Ray } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.ray = new Ray(new Vector2(0, 0), new Vector2(3, 1));
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.ray.points(100)),
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
      const nearest = Collision2.PointAndRay
        .getNearestNeighborPoint(this.pos, this.ray);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
    }
  }
  
  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.ray = new Ray(new Vector2(0, 0), new Vector2(3, 1));
    }

    createNodes(shapes, groups) {

      const area1 = shapes.line()
        .points([-5, 5, -2, 6, 2, -6, -5, -5])
        .closed(true)
        .fill(sColor.red)
        .stroke("")
        .opacity(0.2);

        const area2 = shapes.line()
        .points([-2, 6, 5, 5, 5, -5, 2, -6])
        .closed(true)
        .fill(sColor.blue)
        .stroke("")
        .opacity(0.2);

      return {
        grid   : groups.grid(),
        area1,
        area2,
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.ray.points(100)),
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
      const nearest = Collision2.PointAndRay
        .getNearestNeighborPoint(this.pos, this.ray);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
    }
  }

  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.ray = new Ray(new Vector2(0, 0), new Vector2(3, 1));
    }

    createNodes(shapes, groups) {

      const area1 = shapes.line()
        .points([-5, 5, -2, 6, 2, -6, -5, -5])
        .closed(true)
        .fill(sColor.red)
        .stroke("")
        .opacity(0.2);

        const area2 = shapes.line()
        .points([-2, 6, 5, 5, 5, -5, 2, -6])
        .closed(true)
        .fill(sColor.blue)
        .stroke("")
        .opacity(0.2);

      return {
        grid   : groups.grid(),
        area1,
        area2,
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.ray.points(100)),
        aux    : shapes.aux(),

        A     : shapes.point().pos(0, 0),
        AText : shapes.text().text("A").pos(0, 0),

        v     : Sync.vecToArrow(this.ray.v, shapes.arrow()).color(sColor.red),
        vText : shapes.text().text("v").pos(this.ray.v.x, this.ray.v.y),

        B : shapes.text().text("B").offset(0.4, 0),
        b : shapes.arrow().color(sColor.blue),
        bText : shapes.text().text("b").offset(-0.5, 0),
      }
    }

    initNodes(nodes) {
      nodes.pointer.on("dragmove", (p) => {
        this.pos.set(p.x(), p.y());
      })
    }

    update() {
      const nearest = Collision2.PointAndRay
        .getNearestNeighborPoint(this.pos, this.ray);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);

      this.nodes.b.points([0, 0, this.pos.x, this.pos.y]);
      this.nodes.B.pos(this.pos.x, this.pos.y);
      this.nodes.bText.pos(this.pos.x, this.pos.y);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  })
  
}

