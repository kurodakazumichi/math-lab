{
  const { Vector2, Collision2, Util } = MathLab;
  const { Circle, Triangle } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(0, 0), 1);
      this.circle2 = new Circle(new Vector2(2, 1), 2);
    }

    initGui(gui) {
      gui.add(this.circle1.p, "x").step(0.1);
      gui.add(this.circle1.p, "y").step(0.1);
      gui.add(this.circle1, "r").min(0).step(0.1);
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        circle1: shapes.circle(),
        circle2: shapes.circle(),
        star1: shapes.star().opacity(0.5),
        star2: shapes.star().opacity(0.5),
      }
    }

    initNodes(nodes) {
      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);
    }

    update() {
      Sync.circleByCircle(this.nodes.circle1, this.circle1);

      const result = Collision2.CircleAndCircle.intercect(this.circle1, this.circle2);

      const color = (result.hit)? sColor.red : sColor.main;

      this.nodes.circle1.stroke(color);
      this.nodes.circle2.stroke(color);


      const stars = [this.nodes.star1, this.nodes.star2];
      
      stars.map((star) => { star.visible(false); })

      result.pos.map((pos, index) => {
        stars[index].visible(true);
        Sync.posByVec(stars[index], pos);
      })
    }
  }

  class Graph2Base extends Somali.Scene 
  {
    
    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(-1.4, 0), 3.5);
      this.circle2 = new Circle(new Vector2(2.4, -0.5), 2.5);
      this.col = Collision2.CircleAndCircle.intercect(this.circle1, this.circle2);

      this.triangle = new Triangle(Vector2.zero, Vector2.zero, Vector2.zero);

      // 良く使う変数を予め計算しておく
      this.c1 = this.circle1.p;
      this.c2 = this.circle2.p;
      this.p1 = this.col.pos[0];
      this.p2 = this.col.pos[1];
      this.h = Vector2.add(this.c1, this.col.vh);
      this.n1 = this.col.vh.normalize;
      this.n2 = this.col.vv.normalize;      
    }

    createNodes(shapes, groups) {
      return {
        circle1: shapes.circle(),
        circle2: shapes.circle(),

        C1: shapes.point().radius(0.1),
        C1Text: shapes.text("C1").offset(-0.5, 0.5),
        C2: shapes.point().radius(0.1),
        C2Text: shapes.text("C2"),
        P1: shapes.point().radius(0.1),
        P1Text: shapes.text("P").offset(0, 0.5),
        P2: shapes.point().radius(0.1),
        P2Text: shapes.text("P'").offset(-0.2, -0.2),

        HText: shapes.text("H").offset(0, -0.1),

        C1C2: shapes.line().strokeWidth(1),
        P1P2: shapes.line().strokeWidth(1),
        C1P1: shapes.line().strokeWidth(1),
        C2P1: shapes.line().strokeWidth(1),
        C1H: shapes.line().strokeWidth(2).stroke(sColor.blue),
        HP : shapes.line().strokeWidth(2).stroke(sColor.blue),

        aText: shapes.text("a").offset(-0.1, -0.05),
        bText: shapes.text("b").offset(0, 0.5),
        cText: shapes.text("c").offset(0.1, 0.25),
        rcText: shapes.text("rc"),
        rsText: shapes.text("rs").offset(-0.5, 0.1),

        vn1 : shapes.arrow().color(sColor.yellow),
        vn2 : shapes.arrow().color(sColor.yellow),

        vn1Text: shapes.text("n1").offset(-0.5, -0.2),
        vn2Text: shapes.text("n2"),

        triangle: shapes.line().fill(sColor.yellow).opacity(0.2),

        thetaText: shapes.text("θ").offset(0.6, 0.28),
      }
    }

    initNodes(nodes) {
      const { c1, c2, p1, p2, h, n1, n2 } = this;

      this.triangle.p1.copy(c1);
      this.triangle.p2.copy(c2);
      this.triangle.p3.copy(p1);

      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);

      Sync.posByVec(nodes.C1, c1);
      Sync.posByVec(nodes.C2, c2);
      Sync.posByVec(nodes.P1, p1);
      Sync.posByVec(nodes.P2, p2);

      Sync.posByVec(nodes.C1Text, c1);
      Sync.posByVec(nodes.C2Text, c2);      
      Sync.posByVec(nodes.P1Text, p1);
      Sync.posByVec(nodes.P2Text, p2);

      Sync.lineByP1P2(nodes.C1C2, c1, c2);
      Sync.lineByP1P2(nodes.P1P2, p1, p2);
      Sync.lineByP1P2(nodes.C1P1, c1, p1);
      Sync.lineByP1P2(nodes.C2P1, c2, p1);
      Sync.lineByP1P2(nodes.C1H, c1, h);
      Sync.lineByP1P2(nodes.HP, h, p1);
      Sync.posByVec(nodes.HText, h);

      Sync.posByVec(nodes.aText, Vector2.midpoint(c1, c2));
      Sync.posByVec(nodes.bText, Vector2.midpoint(c1, p1));
      Sync.posByVec(nodes.cText, Vector2.midpoint(c2, p1));
      Sync.posByVec(nodes.rcText, Vector2.midpoint(c1, h));
      Sync.posByVec(nodes.rsText, Vector2.midpoint(h, p1));

      Sync.arrowByPV(nodes.vn1, c1, n1);
      Sync.arrowByPV(nodes.vn2, h, n2);

      Sync.posByVec(nodes.vn1Text, Vector2.add(c1, n1));
      Sync.posByVec(nodes.vn2Text, Vector2.add(h, n2));

      Sync.lineByTri(nodes.triangle, this.triangle);

      Sync.posByVec(nodes.thetaText, c1);
    }

  }

  graphs.Graph2_1_1 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_1", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
      ]);
    }
  }

  graphs.Graph2_1_2 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_2", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
        "vn1",
        "vn1Text",
      ]);
    }
  }

  graphs.Graph2_1_3 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_3", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);
    }
  }

  graphs.Graph2_1_4 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_4", update: true}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
        "vn1",
        "vn1Text",
      ]);

      Sync.arrowByP1P2(nodes.vn1, this.c1, this.h);
    }

    update() {
      this.timer += 0.01;

      if (this.timer <= 1) {
        const to = Vector2.lerp(this.n1, this.col.vh, this.timer);
        Sync.arrowByPV(this.nodes.vn1, this.c1, to);
      }

      if (2 < this.timer) this.timer = 0;
    }
  }

  graphs.Graph2_1_5 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_5", update: true}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);

      Sync.arrowByP1P2(nodes.vn1, this.c1, this.h);
      Sync.arrowByP1P2(nodes.vn2, this.h, this.p1);
    }

    update() {
      this.timer += 0.01;

      if (this.timer <= 1) {
        const to = Vector2.lerp(this.n2, this.col.vv, this.timer);
        Sync.arrowByPV(this.nodes.vn2, this.h, to);
      }

      if (2 < this.timer) this.timer = 0;
    }    
  }

  graphs.Graph2_1_6 = class extends Graph2Base 
  {
    get option() { return { id:"graph2_1_6", update: true}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", 
        "C2", 
        "P1", 
        "P2",
        "HText",
        "C1Text",
        "C2Text",
        "P1Text",
        "P2Text",
        "C1C2",
        "P1P2",
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);

      Sync.arrowByP1P2(nodes.vn1, this.c1, this.h);
      Sync.arrowByP1P2(nodes.vn2, this.h, this.p2);
    }

    update() {
      this.timer += 0.01;

      if (this.timer <= 1) {
        const to = Vector2.lerp(this.n2, this.col.vv.clone().times(-1), this.timer);
        Sync.arrowByPV(this.nodes.vn2, this.h, to);
      }

      if (2 < this.timer) this.timer = 0;
    }    
  }

  graphs.Graph2_2_1 = class extends graphs.Graph2_1_1 {
    get option() { return {id:"graph2_2_1", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "bText",
        "cText",
        "C1P1",
        "C2P1",
      ]);

      nodes.bText.text("r1");
      nodes.cText.text("r2");
    }
  }

  graphs.Graph2_2_2 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_2", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "C1H",
      ]);
    }
  }

  graphs.Graph2_2_3 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_3", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "aText",
        "bText",
        "cText",
        "triangle",
        "C1P1",
        "C2P1",
      ]);

      nodes.C1P1.strokeWidth(2).stroke(sColor.blue);
      nodes.C2P1.strokeWidth(2).stroke(sColor.blue);
      nodes.C1C2.strokeWidth(2).stroke(sColor.blue);


    }
  }

  graphs.Graph2_2_4 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_4", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "aText",
        "bText",
        "cText",
        "triangle",
        "C1P1",
        "C2P1",
        "thetaText",
      ]);

      nodes.C1P1.strokeWidth(2).stroke(sColor.blue);
      nodes.C2P1.strokeWidth(2).stroke(sColor.blue);
      nodes.C1C2.strokeWidth(2).stroke(sColor.blue);
    }
  }    

  graphs.Graph2_2_5 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_5", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "triangle",
        "C1P1",
        "C2P1",
        "thetaText",
        "C1H", 
      ]);
    }
  }

  graphs.Graph2_2_6 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_6", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "bText",
        "triangle",
        "C1P1",
        "C2P1",
        "thetaText",
        "C1H", 
        "rcText",
      ]);

      nodes.C1P1.strokeWidth(2).stroke(sColor.blue);
    }
  }

  graphs.Graph2_2_7 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_7", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "bText",
        "triangle",
        "C1P1",
        "C2P1",
        "thetaText",
        "C1H", 
        "rcText",
      ]);

      nodes.C1P1.strokeWidth(2).stroke(sColor.blue);

      this.triangle.p2.copy(this.h);
      Sync.lineByTri(nodes.triangle, this.triangle);

    }
  }      

  graphs.Graph2_2_8 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_8", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "bText",
        "triangle",
        "C1P1",
        "C2P1",
        "HP", 
        "rcText",
        "rsText",
      ]);

      this.triangle.p2.copy(this.h);
      Sync.lineByTri(nodes.triangle, this.triangle);

    }
  }      

  graphs.Graph2_2_9 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_9", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "bText",
        "triangle",
        "C1P1",
        "C2P1",
        "HP", 
        "rcText",
        "rsText",
      ]);

      nodes.bText.text("r1");

      this.triangle.p2.copy(this.h);
      Sync.lineByTri(nodes.triangle, this.triangle);

    }
  }

  graphs.Graph2_2_10 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_10", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);
    }
  }

  graphs.Graph2_2_11 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_11", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);

      Sync.arrowByP1P2(nodes.vn1, this.c1, this.h);
      Sync.arrowByP1P2(nodes.vn2, this.h, this.p1);
      nodes.vn1Text.text("rc×n1").offset(-0.8, -0.2);
      nodes.vn2Text.text("rs×n2");
    }
  }

  graphs.Graph2_2_12 = class extends graphs.Graph2_1_1 
  {
    get option() { return { id:"graph2_2_12", update: false}}

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.show(nodes, [
        "vn1",
        "vn1Text",
        "vn2",
        "vn2Text",
      ]);

      Sync.arrowByP1P2(nodes.vn1, this.c1, this.h);
      Sync.arrowByP1P2(nodes.vn2, this.h, this.p2);
      nodes.vn1Text.text("rc×n1").offset(-0.8, -0.2);
      nodes.vn2Text.text("-rs×n2").offset(0, -2);
    }
  }

  class Graph3Base extends Somali.Scene 
  {
    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(-1.4, 0), 2);
      this.circle2 = new Circle(new Vector2(2.4, -0.5), 1);
    }

    createNodes(shapes, groups) {
      return {
        gird: groups.grid(),
        circle1: shapes.circle(),
        circle2: shapes.circle(),
      }
    }

    initNodes(nodes) {
      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);
    }
  }

  graphs.Graph3_1 = class extends Graph3Base 
  {
    get option() {
      return { id: "graph3_1", updata:false }
    }
  }

  graphs.Graph3_2 = class extends Graph3Base 
  {
    get option() {
      return { id: "graph3_2", updata:false }
    }

    constructor() {
      super();
      this.circle1.p.set(0, 0);
      this.circle2.p.set(0.5, 0);
    }
  }

  class Graph4Base extends Somali.Scene 
  {
    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(-1, 0), 2);
      this.circle2 = new Circle(new Vector2(2, -0), 1);

      // 良く使う変数を予め計算しておく
      this.c1 = this.circle1.p;
      this.c2 = this.circle2.p;
      this.p = new Vector2(1, 0);
    }

    createNodes(shapes, groups) {
      return {
        circle1: shapes.circle(),
        circle2: shapes.circle(),

        C1: shapes.point().radius(0.1),
        C1Text: shapes.text("C1").offsetX(-0.5),
        C2: shapes.point().radius(0.1),
        C2Text: shapes.text("C2"),

        C1C2: shapes.line().strokeWidth(1),

        P: shapes.point().radius(0.1),
        PText: shapes.text("P"),

        C1P: shapes.line().stroke(sColor.blue),
        C2P: shapes.line().stroke(sColor.red),

        r1Text: shapes.text("r1").offset(-0.1, 0.5),
        r2Text: shapes.text("r2").offset(-0.1, 0.5),

        vn : shapes.arrow().color(sColor.yellow),
        vnText: shapes.text("r1×n").offsetX(-1.5),
      }
    }

    initNodes(nodes) {
      const { c1, c2, p } = this;

      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);

      Sync.posByVec(nodes.C1, c1);
      Sync.posByVec(nodes.C2, c2);
      Sync.posByVec(nodes.C1Text, c1);
      Sync.posByVec(nodes.C2Text, c2);
      Sync.posByVec(nodes.P, p);
      Sync.posByVec(nodes.PText, p);
      
      Sync.lineByP1P2(nodes.C1P, c1, p);
      Sync.lineByP1P2(nodes.C2P, c2, p);
      Sync.posByVec(nodes.r1Text, Vector2.midpoint(c1, p));
      Sync.posByVec(nodes.r2Text, Vector2.midpoint(c2, p));

      Sync.arrowByP1P2(nodes.vn, c1, p);
      Sync.posByVec(nodes.vnText, p);
      
    }

  }

  graphs.Graph4_1 = class extends Graph4Base {
    get option() { return { id: "graph4_1" } }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["vn", "vnText"]);
    }
  }

  graphs.Graph4_2 = class extends Graph4Base {
    get option() { return { id: "graph4_2" } }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["r1Text", "r2Text", "C1P", "C2P"]);
    }
  }

  graphs.Graph4_3 = class extends Graph4Base {
    get option() { return { id: "graph4_3" } }

    constructor() {
      super();
      this.circle1.p.set(0, 0);
      this.circle1.r = 4;
      this.circle2.p.x = 2.5;
      this.circle2.r = 1.5;
      this.p.set(4, 0);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["vn", "vnText"]);

      nodes.C1P.strokeWidth(6).opacity(0.8);
      
    }
  }

  graphs.Graph4_4 = class extends graphs.Graph4_3 {
    get option() { return { id: "graph4_4" } }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["r1", "r1Text", "r2", "r2Text", "C1P", "C2P"]);
      NodesUtil.show(nodes, ["vn", "vnText"]);

      nodes.vnText.offset(-2.5, 0.5);
      
    }
  }

  graphs.Graph4_5 = class extends Graph4Base {
    get option() { return { id: "graph4_5" } }

    constructor() {
      super();
      this.circle2.p.set(0, 0);
      this.circle2.r = 4;
      this.circle1.p.x = 2.5;
      this.circle1.r = 1.5;
      this.p.set(4, 0);
    }

    createNodes(shapes, groups) {
      const nodes = super.createNodes(shapes, groups);

      nodes.v = shapes.arrow().strokeWidth(1);
      nodes.vText = shapes.text("n").offsetY(0.5);
      return nodes;
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["r1", "r1Text", "r2", "r2Text", "C1P", "C2P"]);
      NodesUtil.show(nodes, ["vn", "vnText"]);

      nodes.vnText.offset(-1.2, 0.5).text("-r1×n");

      Sync.arrowByPV(nodes.v, this.c1, Vector2.left);
      Sync.posByVec(nodes.vText, Vector2.add(this.c1, Vector2.left));
    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}