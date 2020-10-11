{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line, Rect } = MathLab.Primitive2;
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
      this.rect = new Rect(new Vector2(1, 2), 2, 3);
    }

    initGui(gui) {
      const p = gui.addFolder("直線の任意の点");
      p.add(this.line.p, "x").step(0.1);
      p.add(this.line.p, "y").step(0.1);

      const v = gui.addFolder("直線の方向")
      v.add(this.line.v, "x").step(0.1);
      v.add(this.line.v, "y").step(0.1);

      p.open();
      v.open();
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        rect: shapes.rect(),
      }
    }

    initNodes(nodes) {
      Sync.rectByRect(nodes.rect, this.rect);
      Sync.lineByLine(nodes.line, this.line);
    }

    update() {
      Sync.rectByRect(this.nodes.rect, this.rect);
      Sync.lineByLine(this.nodes.line, this.line);

      const hit = Collision2.LineAndRect.isHit(this.line, this.rect);
      const color = (hit)? sColor.red : sColor.main;

      this.nodes.line.stroke(color);
      this.nodes.rect.stroke(color);
    }
  }

  class Graph2Base extends Somali.Scene {

    constructor() {
      super();
      this.line = new Line(new Vector2(-1, 0), new Vector2(1, 1));
      this.rect = new Rect(new Vector2(1, -1), 2, 3);
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        line: shapes.line(),
        rect: shapes.rect(),
        v1 : shapes.arrow().color(sColor.red),
        v1Text: shapes.text("v1").offset(0, 0.8),
        v2 : shapes.arrow().color(sColor.yellow),
        v2Text: shapes.text("v2").offset(-0.5, 0.8),
        cross: shapes.text().visible(false),
      }
    }

    initNodes(nodes) {
      Sync.rectByRect(nodes.rect, this.rect);
      Sync.lineByLine(nodes.line, this.line);
      Sync.arrowByPV(nodes.v1, this.line.p, this.line.v);
      Sync.arrowByP1P2(nodes.v2, this.line.p, this.rect.p1);
      Sync.posByVec(nodes.v1Text, this.line.p);
      Sync.posByVec(nodes.v2Text, this.rect.p1);
    }
  }

  graphs.Graph2_1 = class extends Graph2Base
  {
    get option() { return { id:"graph2_1", update:false }}
  }

  graphs.Graph2_2 = class extends Graph2Base
  {
    get option() { return { id:"graph2_2" }}

    update() {
      this.timer += 1;

      const points = [this.rect.p1, this.rect.p2, this.rect.p3, this.rect.p4];
  
      if (this.timer % 100 === 0) {
        const index = (this.timer / 100) % 4;
        const p = points[index];
        Sync.arrowByP1P2(this.nodes.v2, this.line.p, p);
        Sync.posByVec(this.nodes.v2Text, p);
      }
    }   
  }

  graphs.Graph2_3 = class extends Graph2Base
  {
    get option() { return { id:"graph2_3" }}

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.cross.visible(true).pos(0, 0.6);
    }

    update() {
      const points = [this.rect.p1, this.rect.p2, this.rect.p3, this.rect.p4];
  
      if (this.timer % 100 === 0) {
        const index = (this.timer / 100) % 4;
        const p = points[index];
        Sync.arrowByP1P2(this.nodes.v2, this.line.p, p);
        Sync.posByVec(this.nodes.v2Text, p);

        const cross = Vector2.cross(this.line.v, Vector2.sub(p, this.line.p));
        
        this.nodes.cross.text(`外積の値=${cross}`)
      }
      this.timer += 1;
    }   
  }

  graphs.Graph2_4 = class extends graphs.Graph2_3
  {
    get option() { return { id:"graph2_4" }}

    constructor(){
      super();
      this.rect.p.set(1, 4.5);
    }
  }

  graphs.Graph2_5 = class extends graphs.Graph2_3
  {
    get option() { return { id:"graph2_5" }}

    constructor(){
      super();
      this.rect.p.set(2.5, 3.5);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      nodes.cross.pos(0, 0);
    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}