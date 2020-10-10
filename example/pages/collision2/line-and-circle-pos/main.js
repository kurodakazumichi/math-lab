{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Circle, Triangle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(0, 0), new Vector2(1, 1));
      this.circle = new Circle(new Vector2(1, ), 2);
    }

    initGui(gui) {
      const p = gui.addFolder("直線上の1点");
      p.add(this.line.p, "x").step(0.1);
      p.add(this.line.p, "y").step(0.1);
      const v = gui.addFolder("直線の向き");
      v.add(this.line.v, "x").step(0.1);
      v.add(this.line.v, "y").step(0.1);

      p.open();
      v.open();
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),
        s1:shapes.star().opacity(0.5),
        s2:shapes.star().opacity(0.5),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
    }

    update() {
      Sync.lineByLine(this.nodes.line, this.line);

      const result = Collision2.LineAndCircle.intercect(this.line, this.circle);

      const color = (result.hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.circle.stroke(color);

      this.nodes.s1.visible(false);
      this.nodes.s2.visible(false);

      const stars = [this.nodes.s1, this.nodes.s2];

      result.pos.map((pos, index) => {
        stars[index].pos(pos.x, pos.y);
        stars[index].visible(true);
      });
    }
  }

  class Graph2Base extends Somali.Scene 
  {

    constructor() {
      super();
      this.line = new Line(new Vector2(-1, -3.5), new Vector2(2, 1));
      this.circle = new Circle(new Vector2(0, 0), 4);
      this.col = Collision2.LineAndCircle.intercect(this.line, this.circle);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),

        C: shapes.point(),
        CText: shapes.text("C"),
        H: shapes.point(),
        HText: shapes.text("H"),
        CH: shapes.aux(),

        P1: shapes.point(),
        P1Text: shapes.text("P"),
        P2: shapes.point(),
        P2Text: shapes.text("P'"),
        
        r1: shapes.line().strokeWidth(1),
        r1Text: shapes.text("r").offset(0, 0.4),
        r2: shapes.line().strokeWidth(1),
        r2Text: shapes.text("r").offset(-0.5, 0.35),

        vn: shapes.arrow().color(sColor.yellow),
        vnText: shapes.text("n").offset(0, 0.6),

        HP: shapes.line().stroke(sColor.blue),
      }
    }

    initNodes(nodes) {

      const c = this.circle.p;
      const { pos, nearest } = this.col;
      const n = this.line.v.normalize;

      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
      Sync.posByVec(nodes.C     , c)
      Sync.posByVec(nodes.CText , c).offset(0.2, 0.5);;
      Sync.posByVec(nodes.H     , nearest);
      Sync.posByVec(nodes.HText , nearest);
      Sync.posByVec(nodes.P1    , pos[0]);
      Sync.posByVec(nodes.P1Text, pos[0]);
      Sync.posByVec(nodes.P2    , pos[1]);
      Sync.posByVec(nodes.P2Text, pos[1]).offset(0, -0.4);

      Sync.posByVec(nodes.r1Text, Vector2.midpoint(c, pos[0]));
      Sync.posByVec(nodes.r2Text, Vector2.midpoint(c, pos[1]));

      Sync.lineByP1P2(nodes.r1, c, pos[0]);
      Sync.lineByP1P2(nodes.r2, c, pos[1]);
      Sync.lineByP1P2(nodes.CH, c, nearest);

      Sync.arrowByPV(nodes.vn, this.col.nearest, n);
      Sync.posByVec(nodes.vnText, Vector2.add(this.col.nearest, n));

      Sync.lineByP1P2(nodes.HP, this.col.nearest, this.col.pos[0]);
    }
  }

  graphs.Graph2_1_1 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_1", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "C",
        "CText",
        "H",
        "HText",
        "CH",
        "P1",
        "P1Text",
        "P2",
        "P2Text",
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "vn",
        "vnText",
        "HP",
      ]);
    }
  }

  graphs.Graph2_1_2 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_2", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "C",
        "CText",
        "H",
        "HText",
        "CH",
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "vn",
        "vnText",
        "HP",        
      ]);
    }
  }

  graphs.Graph2_1_3 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_3", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "vn",
        "vnText",
        "HP",
      ]);
    }
  }

  graphs.Graph2_1_4 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_4", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "HP",
      ]);
    }
  }
  
  graphs.Graph2_1_5 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_5"}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "HP",
      ]);
    }

    update() {
      this.timer += 0.01;
      

      if (this.timer < 1) {
        const n  = this.line.v.normalize;
        const hp = Vector2.sub(this.col.pos[0], this.col.nearest);
        const to = Vector2.lerp(n, hp, this.timer);
        Sync.arrowByPV(this.nodes.vn, this.col.nearest, to);
      }

      if (1.5 < this.timer) {
        this.timer = 0;
      }
    }
  }

  graphs.Graph2_1_6 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_6"}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "HP",
      ]);
    }

    update() {
      this.timer += 0.01;
      

      if (this.timer < 1) {
        const n  = this.line.v.normalize;
        const hp = Vector2.sub(this.col.pos[1], this.col.nearest);
        const to = Vector2.lerp(n, hp, this.timer);
        Sync.arrowByPV(this.nodes.vn, this.col.nearest, to);
        Sync.posByVec(this.nodes.vnText, Vector2.add(this.col.nearest, to));
      }

      if (1.5 < this.timer) {
        this.timer = 0;
      }
    }
  }

  graphs.Graph2_1_7 = class extends Graph2Base {
    get option() {
      return { id: "graph2_1_7", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "r1",
        "r1Text",
        "r2",
        "r2Text",
        "vn",
        "vnText",
      ]);
    }
  }

  graphs.Graph2_2_1 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_1", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "CH",
        "HP",
      ]);
    }
  }

  graphs.Graph2_2_2 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_2", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "HP",
      ]);
    }
  }  
  
  graphs.Graph2_2_3 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_3", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "vn",
        "vnText",
      ]);
    }
  }

  graphs.Graph2_2_4 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_4", update: false}
    }

    createNodes(shapes, groups) 
    {
      const nodes = super.createNodes(shapes, groups);
      const triangle = shapes.line().fill(sColor.yellow).opacity(0.3);
      Sync.lineByTri(triangle, new Triangle(this.circle.p, this.col.nearest, this.col.pos[0]));

      nodes.triangle = triangle;
      return nodes;

    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "vn",
        "vnText",
      ]);
    }
  }

  graphs.Graph2_2_5 = class extends graphs.Graph2_2_4 {
    get option() {
      return {id:"graph2_2_5", update:false};
    }
  }
  
  graphs.Graph2_2_6 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_6", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "HP"
      ]);

      nodes.vnText.text("tn");
      Sync.arrowByP1P2(nodes.vn, this.col.nearest, this.col.pos[0]);
    }
  }  

  graphs.Graph2_2_7 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_7", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "HP"
      ]);

      Sync.posByVec(nodes.vnText, Vector2.midpoint(this.col.nearest, this.col.pos[1])).text("-tn");
      Sync.arrowByP1P2(nodes.vn, this.col.nearest, this.col.pos[1]);
    }
  }

  graphs.Graph2_2_8 = class extends Graph2Base {
    get option() {
      return { id: "graph2_2_8", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      
      NodesUtil.hide(this.nodes, [
        "HP"
      ]);
    }
  }      

  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return {id:"graph3", update: false}
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(-1, -4), new Vector2(2, 1));
      this.circle = new Circle(new Vector2(0, 0), 2.5);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),
      }
    }

    initNodes(nodes) {
      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
    }
  }

  graphs.Graph4 = class extends Somali.Scene 
  {
    get option() {
      return {id:"graph4", update: false}
    }

    constructor() {
      super();
      this.line = new Line(new Vector2(-1, -5.2), new Vector2(1, 1));
      this.circle = new Circle(new Vector2(0, 0), 3);
      this.col = Collision2.LineAndCircle.intercect(this.line, this.circle);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        circle: shapes.circle(),

        C: shapes.point(),
        CText: shapes.text("C"),
        H: shapes.point(),
        HText: shapes.text("H"),
        CH: shapes.aux(),
      }
    }

    initNodes(nodes) {

      const c = this.circle.p;
      const { nearest } = this.col;

      Sync.lineByLine(nodes.line, this.line);
      Sync.circleByCircle(nodes.circle, this.circle);
      Sync.posByVec(nodes.C     , c)
      Sync.posByVec(nodes.CText , c).offset(0.2, 0.5);;
      Sync.posByVec(nodes.H     , nearest);
      Sync.posByVec(nodes.HText , nearest);
      Sync.lineByP1P2(nodes.CH, c, nearest);
    }
  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}