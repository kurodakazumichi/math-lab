{
  const { Vector2, Collision2, Util } = MathLab;
  const { Line } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync, NodesUtil } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1", gui:true };
    }

    constructor() {
      super();
      this.point = new Vector2(1, 3),
      this.line = new Line(new Vector2(0, 0), new Vector2(2, 1));  
    }

    initGui(gui) {
      const p = gui.addFolder("点の座標");
      p.add(this.point, "x");
      p.add(this.point, "y");
      p.open();
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        line   : shapes.line(),
        point  : shapes.point(),
        aux    : shapes.aux(),
        HText  : shapes.text("H"),
        text   : shapes.text(),
      }
    }

    update() {
      const result = Collision2.PointAndLine.getNearestDistance(this.point, this.line);
      Sync.posByVec(this.nodes.point, this.point);
      Sync.lineByLine(this.nodes.line, this.line);
      Sync.lineByP1P2(this.nodes.aux, this.point, result.h);
      Sync.posByVec(this.nodes.HText, result.h);
      this.nodes.text.text(`最短距離 = ${Util.round(result.distance, 3)}...`);
    }
  }

  class Graph2Base extends Somali.Scene 
  {
    constructor() {
      super();
      this.point = new Vector2(1, 3),
      this.line = new Line(new Vector2(-3, -1.5), new Vector2(2, 1));  
      this.col  = Collision2.PointAndLine.getNearestDistance(this.point, this.line);
      this.t = this.col.t;
    }

    createNodes(shapes, groups) {
      return {
        grid    : groups.grid(),
        line    : shapes.line(),
        P1      : shapes.point(),
        P1Text  : shapes.text("P1").offsetY(0.5),
        P2      : shapes.point(),
        P2Text  : shapes.text("P2"),
        tv2     : shapes.arrow().color(sColor.red).strokeWidth(6),
        tv2Text : shapes.text("t・v2").offset(-0.5, 0.5),        
        v2      : shapes.arrow().color(sColor.yellow),
        v2Text  : shapes.text("v2"),
        aux     : shapes.aux(),
        HText   : shapes.text("H"),
      }
    }

    initNodes(nodes) {
      Sync.posByVec(nodes.P1, this.point);
      Sync.posByVec(nodes.P2, this.line.p);

      Sync.lineByLine(nodes.line, this.line);
      Sync.arrowByPV(nodes.v2, this.line.p, this.line.v);

      Sync.lineByP1P2(nodes.aux, this.point, this.col.h);
      Sync.posByVec(nodes.HText, this.col.h);

      Sync.posByVec(nodes.P1Text, this.point);
      Sync.posByVec(nodes.P2Text, this.line.p);
      Sync.posByVec(nodes.v2Text, Vector2.add(this.line.p, this.line.v))

      const tv2 = Vector2.times(this.line.v, this.t);
      Sync.arrowByPV(nodes.tv2, this.line.p, tv2);
      Sync.posByVec(nodes.tv2Text, Vector2.add(this.line.p, tv2));
    }

  }

  graphs.Graph2_1 = class extends Graph2Base {
    get option() { return { id:"graph2_1", update: false}}
    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["tv2", "tv2Text"])
    }
  }

  graphs.Graph2_2 = class extends Graph2Base {
    get option() { return { id:"graph2_2", update: false}}
  }

  graphs.Graph2_3 = class extends Graph2Base {
    get option() { return { id:"graph2_3", update: false}}
    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["v2", "v2Text", "tv2Text", "aux"]);
      Sync.arrowByP1P2(nodes.tv2, this.col.h, this.point).color(sColor.yellow).strokeWidth(3);
    }    
  }    

  graphs.Graph2_4 = class extends Graph2Base {
    get option() { return { id:"graph2_4", update: false}}
    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["tv2Text", "aux"]);
      Sync.arrowByP1P2(nodes.tv2, this.col.h, this.point).color(sColor.yellow).strokeWidth(3);
    }    
  }

  graphs.Graph2_5 = class extends Graph2Base {
    get option() { return { id:"graph2_5", gui:true}}

    initGui(gui) {
      gui.add(this.point, "x");
      gui.add(this.point, "y");
      gui.add(this, "t").listen();
    }

    update() {
      this.col = Collision2.PointAndLine.getNearestDistance(this.point, this.line);
      this.t = this.col.t;
      this.initNodes(this.nodes);
    }


  }

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}