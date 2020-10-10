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
      this.l2 = new Line(Vector2.right, Vector2.up);
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
        p : shapes.star().opacity(0.5),
      }
    }

    update() {
      Sync.lineByLine(this.nodes.l1, this.l1);
      Sync.lineByLine(this.nodes.l2, this.l2);

      const result = Collision2.LineAndLine.intercect(this.l1, this.l2);

      this.nodes.p.visible(result.hit);

      if (result.hit || result.hitParallel) {
        this.nodes.l1.stroke(sColor.red);
        this.nodes.l2.stroke(sColor.red);

        this.nodes.p.pos(result.pos.x, result.pos.y);
      } 
      
      else {
        this.nodes.l1.stroke(sColor.main);
        this.nodes.l2.stroke(sColor.main);
      }
    }
  }

  class Graph2Base extends Somali.Scene 
  {
    constructor() {
      super();

      this.l1 = new Line(new Vector2(-2, -2), new Vector2(2, 1));
      this.l2 = new Line(new Vector2(-3, 2), new Vector2(2, -0.35));

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

        v2: shapes.arrow().color(sColor.red).strokeWidth(7),
        v2Text: shapes.text("v2"),

        v: shapes.arrow(),
        vText: shapes.text("v"),

        v1d: shapes.arrow().color(sColor.green),
        v1dText: shapes.text("v1'"),

        tv2: shapes.arrow().color(sColor.yellow),
        tv2Text: shapes.text("t・v2"),
      }
    }

    initNodes(nodes) 
    {
      Sync.lineByLine(nodes.l1, this.l1);
      Sync.lineByLine(nodes.l2, this.l2);

      Sync.vecToPos(this.l1.p, nodes.A);
      Sync.vecToPos(this.l1.p, nodes.AText);
      Sync.vecToPos(this.l2.p, nodes.B);
      Sync.vecToPos(this.l2.p, nodes.BText).offset(0, 0.5);
      Sync.vecToPos(this.collision.pos, nodes.PText);

      this.initNode_v1(nodes);
      this.initNode_v2(nodes);

      this.initNode_v(nodes);

      this.initNode_v1d(nodes);
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

    visible(list, flag) {
      list.map((key) => {
        this.nodes[key].visible(flag);
      })
    }
  }

  graphs.Graph2_1 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_1", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v1",
        "v1Text",
        "v2",
        "v2Text",
        "v",
        "vText",
        "v1d",
        "v1dText",
        "tv2",
        "tv2Text",        
      ], false);
    }

  }

  graphs.Graph2_2 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_2", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v1d",
        "v1dText",
        "tv2",
        "tv2Text",        
      ], false);      
    }

  }  

  graphs.Graph2_3_1 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_3_1", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v1",
        "v1Text",
        "v2",
        "v2Text",        
        "v",
        "vText",
        "tv2",
        "tv2Text",        
      ], false);           
    }

  }  

  graphs.Graph2_3_2 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_3_2", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v1",
        "v1Text",
        "v",
        "vText",
        "v1d",
        "v1dText",
      ], false);           
    }

  }    

  graphs.Graph2_4 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_4", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);


      this.visible([
        "v1",
        "v1Text",
      ], false);                
    }

  }  

  graphs.Graph2_5 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_5", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v1",
        "v1Text",
        "v",
        "vText",
        "v1d",
        "v1dText",
      ], false);             
    }

  }  

  graphs.Graph2_6 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_6", update:false }
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.visible([
        "v",
        "vText",
        "v2",
        "v2Text",
        "tv2",
        "tv2Text",
      ], false);          
    }

  }    

  graphs.Graph2_7 = class extends Graph2Base 
  {
    get option() {
      return { id: "graph2_7", update:false }
    }
  }      

  Object.values(graphs).map((graph) => {
    new graph().build();
  })  

}
