{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Ray } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();

      this.line = new Line(Vector2.zero, Vector2.one);
      this.ray  = new Ray(new Vector2(-2, 2), Vector2.right);
      
    }

    initGui(gui) {
      const p = gui.addFolder("半直線の始点");
      p.add(this.ray.p, "x").step(0.1);
      p.add(this.ray.p, "y").step(0.1);
      const v = gui.addFolder("半直線の向き");
      v.add(this.ray.v, "x").step(0.1);
      v.add(this.ray.v, "y").step(0.1);
      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        ray : shapes.line(),
        p : shapes.star().opacity(0.5),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.line, this.line);
      Sync.lineByRay(this.nodes.ray, this.ray);

      const result = Collision2.LineAndRay.intercect(this.line, this.ray);
      
      this.nodes.p.visible(result.hit);

      if (result.hit) {
        this.nodes.line.stroke(sColor.red);
        this.nodes.ray.stroke(sColor.red);

        this.nodes.p.pos(result.pos.x, result.pos.y);
      } 
      
      else {
        this.nodes.line.stroke(sColor.main);
        this.nodes.ray.stroke(sColor.main);
      }
    }
  }

  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2", gui:false };
    }

    constructor() {
      super();

      this.line = new Line(Vector2.zero, Vector2.one);
      this.ray  = new Ray(new Vector2(-1, -2), Vector2.right);
      
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        ray : shapes.line(),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.line, this.line);
      Sync.lineByRay(nodes.ray, this.ray);
    }
  }  

  class Graph3Base extends Somali.Scene 
  {
    constructor() {
      super();

      this.l1 = new Line(new Vector2(-2, -2), new Vector2(2, 1));
      this.l2 = new Line(new Vector2(-3, 2), new Vector2(2, -0.5));
      this.ray = new Ray(this.l2.p, this.l2.v);
      this.collision = Collision2.LineAndLine.intercect(this.l1, this.l2);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),

        A    : shapes.point().radius(0.1),
        AText: shapes.text("A"),
        B    : shapes.point().radius(0.1),
        BText: shapes.text("B"),
        PText: shapes.text("P"),

        v1: shapes.arrow().color(sColor.red).strokeWidth(7),
        v1Text: shapes.text("v1"),

        v2: shapes.arrow().color(sColor.red).strokeWidth(7).opacity(0.6),
        v2Text: shapes.text("v2"),

        v: shapes.arrow(),
        vText: shapes.text("v"),

        tv2: shapes.arrow().color(sColor.yellow),
        tv2Text: shapes.text("t・v2"),
      }
    }

    initNodes(nodes) 
    {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByRay(nodes.l2, this.ray);

      Sync.posByVec(nodes.A    , this.l1.p);
      Sync.posByVec(nodes.AText, this.l1.p);
      Sync.posByVec(nodes.B    , this.l2.p);
      Sync.posByVec(nodes.BText, this.l2.p).offset(0, 0.5);
      Sync.posByVec(nodes.PText, this.collision.pos);

      this.initNode_v1(nodes);
      this.initNode_v2(nodes);
      this.initNode_v(nodes);
      this.initNode_tv2(nodes);
    }

    initNode_v1(nodes) {
      const { p, v } = this.l1;
      const e = Vector2.add(p, v);
      nodes.v1.points([p.x, p.y, e.x, e.y]);
      nodes.v1Text.pos(e.x, e.y);
    }

    initNode_v2(nodes) {
      const { p, v } = this.l2;
      const e = Vector2.add(p, v);
      nodes.v2.points([p.x, p.y, e.x, e.y]);
      nodes.v2Text.pos(e.x, e.y);
    }    

    initNode_v(nodes) {
      const a = this.l1.p;
      const b = this.l2.p;
      nodes.v.points([a.x, a.y, b.x, b.y]);
      nodes.vText.pos(b.x, b.y).offset(-0.5, -0.5);
    }

    initNode_v1d(nodes) {
      const a = this.l1.p;
      const b = this.collision.pos;
      nodes.v1d.points([a.x, a.y, b.x, b.y]);
      nodes.v1dText.pos(b.x, b.y).offset(-0.5, -0.5);      
    }

    initNode_tv2(nodes) {
      const a = this.l2.p;
      const b = this.collision.pos;
      nodes.tv2.points([a.x, a.y, b.x, b.y]);
      nodes.tv2Text.pos(b.x, b.y).offset(-1.5, 0.8);
    }

    hide(list) {
      list.map((key) => {
        this.nodes[key].visible(false);
      })
    }
  }

  graphs.Graph3_1 = class extends Graph3Base {
    get option() {
      return {id:"graph3_1", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.hide([
        "A",
        "AText",
        "B",
        "BText",
        "v",
        "vText",
        "v1", 
        "v1Text",
        "tv2",
        "tv2Text",
      ])
    }
  }

  graphs.Graph3_2 = class extends Graph3Base {
    get option() {
      return {id:"graph3_2", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.hide([
        "A",
        "AText",
        "B",
        "BText",
        "v",
        "vText",
        "v1", 
        "v1Text",
      ])
    }
  }  

  graphs.Graph3_3 = class extends Graph3Base {
    get option() {
      return {id:"graph3_3", update:false};
    }

    constructor() {
      super();
      this.l2.v.times(-0.5);
      this.ray.v.copy(this.l2.v);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.hide([
        "A",
        "AText",
        "B",
        "BText",
        "v",
        "vText",
        "v1", 
        "v1Text",
      ])
    }
  }    

  graphs.Graph3_4 = class extends Graph3Base {
    get option() {
      return {id:"graph3_4", update:false};
    }

    constructor() {
      super();
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      this.hide([
        "tv2",
        "tv2Text",
      ]);
    }
  }   

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}
