{
  const { Vector2, Collision2, Util } = MathLab;
  const { Rect } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene {

    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.rect1 = new Rect(new Vector2(-1, 1.5), 3.5, 3.5);
      this.rect2 = new Rect(new Vector2(-1.5, 0), 3, 2);
    }

    initGui(gui) {
      const p = gui.addFolder("直線の任意の点");
      p.add(this.rect1.p, "x").step(0.1);
      p.add(this.rect1.p, "y").step(0.1);

      const wh = gui.addFolder("矩形の幅・高さ")
      wh.add(this.rect1, "w").step(0.1).min(0.1);
      wh.add(this.rect1, "h").step(0.1).min(0.1);

      p.open();
      wh.open();
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        rect1: shapes.rect(),
        rect2: shapes.rect(),
      }
    }

    initNodes(nodes) {
      Sync.rectByRect(nodes.rect1, this.rect1);
      Sync.rectByRect(nodes.rect2, this.rect2);
    }

    update() 
    {
      this.timer += 0.01;
      this.rect2.p.y = Math.sin(this.timer) * 3.5 + 1;

      Sync.rectByRect(this.nodes.rect1, this.rect1);
      Sync.rectByRect(this.nodes.rect2, this.rect2);

      const hit = Collision2.RectAndRect.isHit(this.rect1, this.rect2);
      const color = (hit)? sColor.red : sColor.main;

      this.nodes.rect1.stroke(color);
      this.nodes.rect2.stroke(color);
    }
  }

  class Graph2Base extends Somali.Scene {

    constructor() {
      super();
      this.rect1 = new Rect(new Vector2(-1.5, 1), 3, 2);
      this.rect2 = new Rect(new Vector2(2, 1), 2, 2);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        rect1: shapes.rect().fill(sColor.red),
        rect2: shapes.rect().fill(sColor.blue),
        R1Text: shapes.text("R1").offset(-0.2, 0.4),
        R2Text: shapes.text("R2").offset(-0.2, 0.4),

        minP: shapes.point(),
        maxP: shapes.point(),
        arrow: shapes.arrow().color(sColor.yellow),
        text: shapes.text(""),
      }
    }

    initNodes(nodes) {
      Sync.rectByRect(nodes.rect1, this.rect1);
      Sync.rectByRect(nodes.rect2, this.rect2);
      Sync.posByVec(nodes.R1Text, this.rect1.c);
      Sync.posByVec(nodes.R2Text, this.rect2.c);
    }
  }  

  graphs.Graph2_0 = class extends Graph2Base {
    get option() { return { id:"graph2_0" }}

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["minP", "maxP", "arrow", "text"])
    }
  }

  graphs.Graph2_1 = class extends Graph2Base {
    get option() { return { id:"graph2_1" }}

    constructor() {
      super();
      this.rect1.p.x = 1;
      this.rect2.p.x = -4;
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      const min = Vector2.midpoint(this.rect2.p2, this.rect2.p3);
      const max = Vector2.midpoint(this.rect1.p1, this.rect1.p4);

      Sync.posByVec(nodes.minP, min);
      Sync.posByVec(nodes.maxP, max);
      Sync.arrowByP1P2(nodes.arrow, max, min);
      nodes.text.text("R2の右端x < R1の左端x").pos(-4, 2)
    }
  }

  graphs.Graph2_2 = class extends Graph2Base {
    get option() { return { id:"graph2_2" }}

    constructor() {
      super();
      this.rect1.p.x = -4;
      this.rect2.p.x = 1;
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      const min = Vector2.midpoint(this.rect2.p1, this.rect2.p4);
      const max = Vector2.midpoint(this.rect1.p2, this.rect1.p3);

      Sync.posByVec(nodes.minP, min);
      Sync.posByVec(nodes.maxP, max);
      Sync.arrowByP1P2(nodes.arrow, max, min);
      nodes.text.text("R1の右端x < R2の左端x").pos(-4, 2)
    }
  }

  graphs.Graph2_3 = class extends Graph2Base {
    get option() { return { id:"graph2_3" }}

    constructor() {
      super();
      this.rect1.p.set(-1.5, 3);
      this.rect2.p.set(-1, -2);
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      const min = Vector2.midpoint(this.rect2.p1, this.rect2.p2);
      const max = Vector2.midpoint(this.rect1.p3, this.rect1.p4);

      Sync.posByVec(nodes.minP, min);
      Sync.posByVec(nodes.maxP, max);
      Sync.arrowByP1P2(nodes.arrow, max, min);
      nodes.text.text("R2の上端y < R1の下端y").pos(-4, 0)
    }
  }

  graphs.Graph2_4 = class extends Graph2Base {
    get option() { return { id:"graph2_4" }}

    constructor() {
      super();
      this.rect1.p.set(-1.5, -2);
      this.rect2.p.set(-1, 3);
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      const max = Vector2.midpoint(this.rect1.p1, this.rect1.p2);
      const min = Vector2.midpoint(this.rect2.p3, this.rect2.p4);

      Sync.posByVec(nodes.minP, min);
      Sync.posByVec(nodes.maxP, max);
      Sync.arrowByP1P2(nodes.arrow, max, min);
      nodes.text.text("R1の上端y < R2の下端y").pos(-4, 0)
    }
  }    

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}