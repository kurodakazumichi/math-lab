{
  const { Vector2, Collision2, Util } = MathLab;
  const { Ray } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Action, Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.ray = new Ray(new Vector2(-1, -1), new Vector2(1, 1));
      this.action;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        ray: shapes.line().points(this.ray.points(10)),
        star: shapes.star().opacity(0.5)
      }
    }

    initNodes(nodes) {
      this.action = new Action.uniform(nodes.point, new Vector2(-4, -4), new Vector2(0.05, 0.05));
    }

    update() {
      this.timer++;

      this.action.update();

      const result = Collision2.PointAndRay.intercect(this.action.pos, this.ray);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      if (this.timer === 200) {
        this.action.reset();
        this.timer = 0;
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
      this.ray = new Ray(new Vector2(-1, -1), new Vector2(1, 1));
      this.pos = Vector2.zero;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        ray: shapes.line().points(this.ray.points(10)),
        star: shapes.star().opacity(0.5)
      }
    }


    update() {
      this.timer += 0.05;

      this.pos.set(Math.sin(this.timer), Math.cos(this.timer));
      this.nodes.point.pos(this.pos.x, this.pos.y);
      
      const result = Collision2.PointAndRay.intercect(this.pos, this.ray);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      if (this.timer === 200) {
        this.action.reset();
        this.timer = 0;
      }
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
      this.ray = new Ray(new Vector2(-1, -1), new Vector2(2, 1));
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        pointer : shapes.pointer().pos(this.pos.x, this.pos.y),
        ray: shapes.line().points(this.ray.points(10)),

        va: shapes.arrow().color(sColor.red).opacity(0.6),
        vaText: shapes.text("a"),

        vb: shapes.arrow().color(sColor.yellow),
        vbText: shapes.text("b"),

        dot: shapes.text().pos(1, -1),
        ab: shapes.text().pos(1, -1.5),
      }
    }

    initNodes(nodes) 
    {
      const { ray } = this;
      const a1 = ray.p;
      const a2 = Vector2.add(ray.p, ray.v); 
      nodes.va.points([a1.x, a1.y, a2.x, a2.y]);
      nodes.vaText.pos(a2.x, a2.y);

      nodes.pointer.on("dragmove", (p) => {
        this.pos.set(p.x(), p.y());
      })
    }


    update() {
      const { ray, pos } = this;

      this.nodes.vb.points([ray.p.x, ray.p.y, pos.x, pos.y]);
      this.nodes.vbText.pos(pos.x, pos.y);

      const b = Vector2.sub(pos, ray.p);
      const dot = Vector2.dot(ray.v, b);
      const ab = ray.v.magnitude * b.magnitude;
      this.nodes.dot.text(`a・b = ${Util.round(dot, 4)}`);
      this.nodes.ab.text(`|a||b| = ${Util.round(ab, 4)}`);
    }
  }  
  
  Object.values(graphs).map((graph) => {
    new graph().build();
  })
}

