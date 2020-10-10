{
  const { Vector2, Collision2, Util } = MathLab;
  const { Circle } = MathLab.Primitive2;
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
      gui.add(this.circle1, "r").min(0);
    }
    
    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        circle1: shapes.circle(),
        circle2: shapes.circle(),
      }
    }

    initNodes(nodes) {
      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);
    }

    update() {
      Sync.circleByCircle(this.nodes.circle1, this.circle1);

      const hit = Collision2.CircleAndCircle.isHit(this.circle1, this.circle2);

      const color = (hit)? sColor.red : sColor.main;

      this.nodes.circle1.stroke(color);
      this.nodes.circle2.stroke(color);
    }
  }

  class Graph2Base extends Somali.Scene 
  {
    constructor() {
      super();
      this.circle1 = new Circle(new Vector2(-2.5, 1.5), 2);
      this.circle2 = new Circle(new Vector2(2.5, -2), 1.5);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        circle1: shapes.circle(),
        circle2: shapes.circle(),

        C1: shapes.point(),
        C1Text: shapes.text("C1").offset(-0.5, 0.5),
        C2: shapes.point(),
        C2Text: shapes.text("C2"),

        r1: shapes.line().strokeWidth(1),
        r1Text:shapes.text("r1").offsetY(0.5),
        r2: shapes.line().strokeWidth(1),
        r2Text:shapes.text("r2").offsetY(0.5),

        vC1C2: shapes.arrow().strokeWidth(1).color(sColor.green),
      }
    }

    initNodes(nodes) {
      Sync.circleByCircle(nodes.circle1, this.circle1);
      Sync.circleByCircle(nodes.circle2, this.circle2);
      Sync.posByVec(nodes.C1, this.circle1.p);
      Sync.posByVec(nodes.C1Text, this.circle1.p);
      Sync.posByVec(nodes.C2, this.circle2.p);
      Sync.posByVec(nodes.C2Text, this.circle2.p);

      const pR1 = Vector2.add(this.circle1.p, Vector2.right.times(this.circle1.r));
      const pR2 = Vector2.add(this.circle2.p, Vector2.right.times(this.circle2.r));

      Sync.lineByP1P2(nodes.r1, this.circle1.p, pR1);
      Sync.posByVec(nodes.r1Text, Vector2.midpoint(this.circle1.p, pR1));
      Sync.lineByP1P2(nodes.r2, this.circle2.p, pR2);
      Sync.posByVec(nodes.r2Text, Vector2.midpoint(this.circle2.p, pR2));
      
      Sync.arrowByP1P2(nodes.vC1C2, this.circle1.p, this.circle2.p);
    }
  }

  graphs.Graph2_1_1 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_1_1", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, ["circle1", "circle2"]);
    }
    
  }

  graphs.Graph2_1_2 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_1_2", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", "C1Text", "C2", "C2Text"
      ]);
    }
    
  }

  graphs.Graph2_1_3 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_1_3", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      NodesUtil.hideAll(nodes);
      NodesUtil.show(nodes, [
        "circle1", "circle2",
        "C1", "C1Text", "C2", "C2Text",
        "r1", "r1Text", "r2", "r2Text",
      ]);
    }
  }

  graphs.Graph2_1_4 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_1_4", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
    }
  }

  graphs.Graph2_1_5 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_1_5", update: false}
    }

    constructor() {
      super();
      this.circle1.p.set(-1, 1);
      this.circle2.p.set(1.5, -1);
    }

    initNodes(nodes) {
      super.initNodes(nodes);
    }
  }

  graphs.Graph2_2_1 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_2_1", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
      NodesUtil.hide(nodes, ["vC1C2"])
    }
  }

  graphs.Graph2_2_2 = class extends Graph2Base 
  {
    get option() {
      return {id: "graph2_2_2", update: false}
    }

    initNodes(nodes) {
      super.initNodes(nodes);
    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}