{
  const { Vector2, Collision2 } = MathLab;
  const { Segment } = MathLab.Primitive2;
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
      this.seg = new Segment(new Vector2(-1, -1), new Vector2(4, 4));
      this.action;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        seg: shapes.line().points(this.seg.points),
        star: shapes.star().opacity(0.5)
      }
    }

    initNodes(nodes) {
      this.action = new Action.uniform(nodes.point, new Vector2(-4, -4), new Vector2(0.05, 0.05));
    }

    update() {
      this.timer++;

      this.action.update();

      const result = Collision2.PointAndSegment.intercect(this.action.pos, this.seg);
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
      this.seg = new Segment(new Vector2(-1, -1), new Vector2(4, 4));
      this.pos = Vector2.zero;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        ray: shapes.line().points(this.seg.points),
        star: shapes.star().opacity(0.5)
      }
    }


    update() {
      this.timer += 0.05;

      this.pos.set(Math.sin(this.timer), Math.cos(this.timer));
      this.nodes.point.pos(this.pos.x, this.pos.y);
      
      const result = Collision2.PointAndSegment.intercect(this.pos, this.seg);
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

  class Graph3_Base extends Somali.Scene {

    constructor() {
      super();

      this.p = new Vector2(1, 3);
      this.seg = new Segment(new Vector2(-1, -1), new Vector2(4, 2));
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),

        va: shapes.arrow(),
        vaText: shapes.text().text("a"),

        p: shapes.point(),
        pText: shapes.text().text("P").offset(0, 0.8),

        vb: shapes.arrow().color(sColor.yellow).dash(5),
        vbText: shapes.text().text("b").offset(-0.7, -0.4),
      }
    }

    initNodes(nodes) {

      Sync.posByVec(nodes.p, this.p);
      Sync.posByVec(nodes.pText, this.p);

      Sync.arrowBySeg(nodes.va, this.seg);
      Sync.posByVec(nodes.vaText, this.seg.p2);

      nodes.vb.points([this.seg.p1.x, this.seg.p1.y, this.p.x, this.p.y]);
      nodes.vbText.pos(this.p.x, this.p.y);

    }
  }

  graphs.Graph3_1 = class extends Graph3_Base {
    get option() {
      return { id: "graph3_1", update: false }
    }
  }

  graphs.Graph3_2 = class extends Graph3_Base {
    get option() {
      return { id: "graph3_2", update: false }
    }

    constructor() {
      super();
      this.p.set(2, 0.5);
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      nodes.vaText.visible(false);

      nodes.vb.visible(false);
      nodes.vbText.visible(false);
    }
  }  
  
  graphs.Graph3_3 = class extends Graph3_Base {
    get option() {
      return { id: "graph3_3", update: false }
    }

    constructor() {
      super();
      this.p.set(2, 0.5);
    }

  }  

  graphs.Graph3_4 = class extends Graph3_Base {
    get option() {
      return { id: "graph3_4", update: false }
    }

    constructor() {
      super();
      this.p.set(4, 1.5);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.vbText.offset(0, -0.3);
    }

  }    

  graphs.Graph3_5 = class extends Graph3_Base {
    get option() {
      return { id: "graph3_5", update: false }
    }

    constructor() {
      super();
      this.p.set(1, 0);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.vbText.offset(0, -0.3);
    }

  }    

  Object.values(graphs).map((graph) => {
    new graph().build();
  })
}

