{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
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

      this.l1 = new Line(Vector2.zero, Vector2.one);
      this.l2 = new Line(Vector2.right, Vector2.one);
    }

    initGui(gui) {
      const p = gui.addFolder("直線上の1点");
      p.add(this.l2.p, "x").step(0.1);
      p.add(this.l2.p, "y").step(0.1);
      const v = gui.addFolder("直線の向き");
      v.add(this.l2.v, "x").step(0.1);
      v.add(this.l2.v, "y").step(0.1);

      p.open();
      v.open();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.l1, this.l1);
      Sync.lineByLine(this.nodes.l2, this.l2);

      const result = Collision2.LineAndLine.intercect(this.l1, this.l2);

      if (result.hit || result.hitParallel) {
        this.nodes.l1.stroke(sColor.red);
        this.nodes.l2.stroke(sColor.red);
      } 
      
      else {
        this.nodes.l1.stroke(sColor.main);
        this.nodes.l2.stroke(sColor.main);
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

      this.l1 = new Line(new Vector2(-3, -1), Vector2.one);
      this.l2 = new Line(Vector2.right, Vector2.one);

      const hit = Collision2.LineAndLine.isHit(this.l1, this.l2);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
        v1: shapes.arrow().color(sColor.red),
        v1Text: shapes.text("v1"),
        v2: shapes.arrow().color(sColor.red),
        v2Text: shapes.text("v2"),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);

      const v11 = this.l1.p;
      const v12 = Vector2.add(this.l1.p, this.l1.v);

      nodes.v1.points([v11.x, v11.y, v12.x, v12.y]);
      nodes.v1Text.pos(v12.x, v12.y);

      const v21 = this.l2.p;
      const v22 = Vector2.add(this.l2.p, this.l2.v);

      nodes.v2.points([v21.x, v21.y, v22.x, v22.y]);
      nodes.v2Text.pos(v22.x, v22.y);
    }
  }  

  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3" };
    }

    constructor() {
      super();

      this.l1 = new Line(new Vector2(-3, -1), Vector2.one);
      this.l2 = new Line(Vector2.right, Vector2.one);

      const hit = Collision2.LineAndLine.isHit(this.l1, this.l2);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
        A : shapes.text("A"),
        B : shapes.text("B"),
        v1: shapes.arrow().color(sColor.red),
        v1Text: shapes.text("v1"),
        v: shapes.arrow().color(sColor.red),
        vText: shapes.text("v"),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);

      const v11 = this.l1.p;
      const v12 = Vector2.add(this.l1.p, this.l1.v);

      nodes.v1.points([v11.x, v11.y, v12.x, v12.y]);
      nodes.v1Text.pos(v12.x, v12.y);
      nodes.A.pos(v11.x, v11.y);

      nodes.B.pos(this.l2.p.x, this.l2.p.y);

      const v1 = this.l1.p;
      const v2 = Vector2.add(v1, Vector2.sub(this.l2.p, this.l1.p));

      nodes.v.points([v1.x, v1.y, v2.x, v2.y]);
      nodes.vText.pos(v2.x, v2.y).offset(-2, -0.5);

    }
  }  

  graphs.Graph4 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph4" };
    }

    constructor() {
      super();

      this.l1 = new Line(new Vector2(-3, -1), Vector2.one);
      this.l2 = new Line(new Vector2(1, 3), Vector2.one);

      const hit = Collision2.LineAndLine.isHit(this.l1, this.l2);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        l1: shapes.line(),
        l2: shapes.line(),
        A : shapes.text("A"),
        B : shapes.text("B"),
        v1: shapes.arrow().color(sColor.red),
        v1Text: shapes.text("v1"),
        v: shapes.arrow().color(sColor.red),
        vText: shapes.text("v"),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);

      const v11 = this.l1.p;
      const v12 = Vector2.add(this.l1.p, this.l1.v);

      nodes.v1.points([v11.x, v11.y, v12.x, v12.y]);
      nodes.v1Text.pos(v12.x, v12.y);
      nodes.A.pos(v11.x, v11.y);

      nodes.B.pos(this.l2.p.x, this.l2.p.y);

      const v1 = this.l1.p;
      const v2 = Vector2.add(v1, Vector2.sub(this.l2.p, this.l1.p));

      nodes.v.points([v1.x, v1.y, v2.x, v2.y]);
      nodes.vText.pos(v2.x, v2.y).offset(-0.5, -0.5);

    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}