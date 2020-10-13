{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { sColor } = Somali;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos = new Vector2(1, 3);
      this.line = new Line(new Vector2(0, 0), new Vector2(3, 1));
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.line.points(100)),
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
      const nearest = Collision2.PointAndLine
        .getNearestPoint(this.pos, this.line);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
    }
  }

  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(Vector2.zero, new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        aux2    : shapes.aux().points([p.x, p.y, -3, -1]).stroke(sColor.main),
        aux3    : shapes.aux().points([p.x, p.y, 0, 0]).stroke(sColor.main),
        pointer: shapes.point().pos(p.x, p.y),
      }
    }
  } 
  
  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        pointer: shapes.point().pos(p.x, p.y),
      }
    }
  }

  graphs.Graph4 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph4", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      const p2 = Vector2.add(l.p, l.v);

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        pointer: shapes.point().pos(p.x, p.y),

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        v: shapes.arrow().points([l.p.x, l.p.y, p2.x, p2.y]).color(sColor.red),
        vText: shapes.text().pos(p2.x, p2.y).text("v")
      }
    }
  }    

  graphs.Graph5 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph5" };
    }

    constructor() {
      super();
      this.p = new Vector2(1, 3);
      this.l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      this.s = Vector2.add(this.l.p, this.l.v);
      this.e = Collision2.PointAndLine.getNearestPoint(this.p, this.l);
    }

    createNodes(shapes, groups) {

      const { p, l, s, e } = this;

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(e.x, e.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, e.x, e.y]),
        pointer: shapes.point().pos(p.x, p.y),

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        v: shapes.arrow().points([l.p.x, l.p.y, s.x, s.y]).color(sColor.red),
        vText: shapes.text().pos(s.x, s.y).text("v"),
      }
    }

    update() {
      this.timer += 0.01;

      const s = this.s;
      const e = Vector2.lerp(s, this.e, this.timer);
      

      this.nodes.v.points([this.l.p.x, this.l.p.y, e.x, e.y]);

      if (this.timer > 1.0) {
        this.timer = 0;
      }
    }
  }    

  graphs.Graph6 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph6", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      const p2 = Vector2.add(l.p, l.v.normalize);

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        pointer: shapes.point().pos(p.x, p.y),

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        v: shapes.arrow().points([l.p.x, l.p.y, p2.x, p2.y]).color(sColor.red),
        vText: shapes.text().pos(p2.x, p2.y).text("n")
      }
    }
  }   
  
  graphs.Graph7 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph7", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      const p2 = Vector2.add(l.p, l.v.normalize);

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        pointer: shapes.point().pos(p.x, p.y),

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        n: shapes.arrow().points([l.p.x, l.p.y, p2.x, p2.y]).color(sColor.red),
        nText: shapes.text().pos(p2.x, p2.y).text("n"),

        tn: shapes.arrow().points([l.p.x, l.p.y, near.x, near.y]).strokeWidth(1).color(sColor.yellow),
        tnText: shapes.text().text("tn").pos(0.5, 0.9)
      }
    }
  }     
  
  graphs.Graph8 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph8", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      const p2 = Vector2.add(l.p, l.v.normalize);

      const dot = Vector2.dot(l.v.normalize, Vector2.sub(p, l.p));

      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        n: shapes.arrow().points([l.p.x, l.p.y, p2.x, p2.y]).color(sColor.red),
        nText: shapes.text().pos(p2.x, p2.y).text("n"),

        b: shapes.point().pos(p.x, p.y),
        bText: shapes.text().pos(p.x + 0.1, p.y + 0.3).text("B"),
        vb: shapes.arrow().points([l.p.x, l.p.y, p.x, p.y]).color(sColor.blue),
        vbText: shapes.text().pos(-0.5, 2.5).text("b"),

        tText: shapes.text().pos(0, 0).text(`t=${Util.round(dot, 3)}`),
      }
    }
  }       
  
  graphs.Graph9 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph9", update:false };
    }

    createNodes(shapes, groups) {

      const p = new Vector2(1, 3);
      const l = new Line(new Vector2(-3, -1), new Vector2(3, 1));

      const near = Collision2.PointAndLine.getNearestPoint(p, l);

      const p2 = Vector2.add(l.p, l.v.normalize);


      return {
        grid   : groups.grid(),
        seg    : shapes.line().points(l.points(100)),
        starText: shapes.text().pos(near.x, near.y).text("P"),
        aux1    : shapes.aux().points([p.x, p.y, near.x, near.y]),
        

        a: shapes.point().pos(l.p.x, l.p.y),
        aText: shapes.text().pos(l.p.x, l.p.y).text("A"),

        n: shapes.arrow().points([l.p.x, l.p.y, p2.x, p2.y]).color(sColor.red),
        nText: shapes.text().pos(p2.x, p2.y).text("n"),

        b: shapes.point().pos(p.x, p.y),
        bText: shapes.text().pos(p.x + 0.1, p.y + 0.3).text("B"),
        vb: shapes.arrow().points([l.p.x, l.p.y, p.x, p.y]).color(sColor.blue),
        vbText: shapes.text().pos(-0.5, 2.5).text("b"),
      }
    }
  }   

  Object.values(graphs).map((graph) => {
    new graph().build();
  })
}

