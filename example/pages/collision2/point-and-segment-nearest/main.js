{
  const { Vector2, Collision2 } = MathLab;
  const { Segment } = MathLab.Primitive2;
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
      this.pos = new Vector2(0, 3);
      this.seg = new Segment(new Vector2(-2, -1), new Vector2(4, 2));
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.seg.points),
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
      const nearest = Collision2.PointAndSegment
        .getNearestNeighborPoint(this.pos, this.seg);

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
      this.pos = new Vector2(0, 3);
      this.seg = new Segment(new Vector2(-2, -1), new Vector2(4, 2));
    }

    createNodes(shapes, groups) {

      const area1 = shapes.line()
        .points([-5, 5, -5, -5, 0, -5])
        .closed(true)
        .fill(sColor.red)
        .stroke("")
        .opacity(0.2);

      const area2 = shapes.line()
        .points([-5, 5, 0, 5, 5, -5, 0, -5])
        .closed(true)
        .fill(sColor.blue)
        .stroke("")
        .opacity(0.2); 

      const area3 = shapes.line()
        .points([5, 5, 5, -5, 0, 5])
        .closed(true)
        .fill(sColor.yellow)
        .stroke("")
        .opacity(0.2);        

      return {
        grid   : groups.grid(),
        area1,
        area2, 
        area3,
        pointer: shapes.pointer().pos(this.pos.x, this.pos.y),
        seg    : shapes.line().points(this.seg.points),
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
      const nearest = Collision2.PointAndSegment
        .getNearestNeighborPoint(this.pos, this.seg);

      this.nodes.star.pos(nearest.x, nearest.y);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);
    }
  }

  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3", update:false };
    }

    constructor() {
      super();
      this.pos = new Vector2(0, 3);
      this.seg = new Segment(new Vector2(-2, -1), new Vector2(4, 2));
    }

    createNodes(shapes, groups) {

      const area1 = shapes.line()
        .points([-5, 5, -5, -5, 0, -5])
        .closed(true)
        .fill(sColor.red)
        .stroke("")
        .opacity(0.2);

      const area2 = shapes.line()
        .points([-5, 5, 0, 5, 5, -5, 0, -5])
        .closed(true)
        .fill(sColor.blue)
        .stroke("")
        .opacity(0.2); 

      const area3 = shapes.line()
        .points([5, 5, 5, -5, 0, 5])
        .closed(true)
        .fill(sColor.yellow)
        .stroke("")
        .opacity(0.2);

      return {
        grid   : groups.grid(),
        area1,
        area2, 
        area3,
        
        seg    : shapes.line().points(this.seg.points),
        aux    : shapes.aux(),

        p1    : shapes.point().fill(sColor.main).pos(this.seg.p1.x, this.seg.p1.y),
        p1Text: shapes.text().text("P1").pos(this.seg.p1.x, this.seg.p1.y),
        p2    : shapes.point().fill(sColor.main).pos(this.seg.p2.x, this.seg.p2.y),
        p2Text: shapes.text().text("P2").pos(this.seg.p2.x, this.seg.p2.y),

        a: shapes.point().pos(this.pos.x, this.pos.y),
        aText: shapes.text().text("A").pos(this.pos.x, this.pos.y),

        va: shapes.arrow().color(sColor.blue),
        vaText: shapes.text().text(""),
        v:shapes.arrow().color(sColor.red),
        vText: shapes.text().text(""),
      }
    }

    initNodes(nodes) {
      const nearest = Collision2.PointAndSegment
        .getNearestNeighborPoint(this.pos, this.seg);

      this.nodes.aux.points([nearest.x, nearest.y, this.pos.x, this.pos.y]);      
    }
  }  

  graphs.Graph4 = class extends graphs.Graph3 {
    get option() {
      return { id: "graph4", update:false };
    }

    constructor() {
      super();
      this.pos.set(-4, 1)
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.aText.offsetY(0.5);
      nodes.va.points([this.seg.p1.x, this.seg.p1.y, this.pos.x, this.pos.y]);
      nodes.vaText.pos(this.pos.x, this.pos.y).text("a").offsetY(-0.4);

      nodes.v.points([-2, -1, -1, -0.5]);
      nodes.vText.text("v").pos(-1, -0.5);
    }


  }

  graphs.Graph5 = class extends graphs.Graph3 {
    get option() {
      return { id: "graph5", update:false };
    }

    constructor() {
      super();
      this.pos.set(3, 3)
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.aText.offsetY(0.5);
      nodes.va.points([this.seg.p2.x, this.seg.p2.y, this.pos.x, this.pos.y]);
      nodes.vaText.pos(this.pos.x, this.pos.y).text("a").offsetY(-0.4);

      nodes.v.points([2, 1, 3, 1.5]);
      nodes.vText.text("v").pos(3, 1.5);
    }
  }

  graphs.Graph6 = class extends graphs.Graph3 {
    get option() {
      return { id: "graph6", update:false };
    }
  }
    
  
  Object.values(graphs).map((graph) => {
    new graph().build();
  })

}

