{
  const { Vector2, Collision2 } = MathLab;
  const { Box } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};

  graphs.Graph1 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.box  = new Box(new Vector2(0, 0), new Vector2(2, 3), 20);

      console.log(this.box);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        box  : Sync.boxToRect(this.box, shapes.rect()),
        star: shapes.star().opacity(0.5)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      this.box.angle = (this.timer * 5);
      this.nodes.box.rotation(-this.box.angle);

      const result = Collision2.PointAndBox.intercect(this.pos, this.box);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }

  class Graph2Base extends Somali.Scene {

    constructor() {
      super();
      this.pos  = new Vector2(1, 1);
      this.box  = new Box(new Vector2(0, 0), new Vector2(2, 3), 20);
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        p    : shapes.point(),
        box  : shapes.rect(),
        v12  : shapes.arrow().color(sColor.red),
        v23  : shapes.arrow().color(sColor.red),
        v34  : shapes.arrow().color(sColor.red),
        v41  : shapes.arrow().color(sColor.red),
        area : shapes.line().closed(true).fill(sColor.yellow).opacity(0.2),
      }
    }

    initNodes(nodes) {
      Sync.boxToRect(this.box, nodes.box);
      Sync.vecToPos(this.pos, nodes.p);
    }

    initNode_line(line, s, e) {
      line.points([s.x, s.y, e.x, e.y]);
    }

  }

  graphs.Graph2_1 = class extends Graph2Base {
    get option() {
      return {id:"graph2_1", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);
    }
  }

  graphs.Graph2_2 = class extends Graph2Base {
    get option() {
      return {id:"graph2_2", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.v12, this.box.p1, this.box.p2);
      
      nodes.area.points([-5, 1.35, 5, 5, 5, -5, -5, -5]);
    }
  }

  graphs.Graph2_3 = class extends Graph2Base {
    get option() {
      return {id:"graph2_3", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.v12, this.box.p1, this.box.p2);
      this.initNode_line(nodes.v23, this.box.p2, this.box.p3);
      nodes.area.points([-5, 1.35, this.box.p2.x, this.box.p2.y, 3.95, -5, -5, -5]);
    }
  }  

  graphs.Graph2_4 = class extends Graph2Base {
    get option() {
      return {id:"graph2_4", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.v12, this.box.p1, this.box.p2);
      this.initNode_line(nodes.v23, this.box.p2, this.box.p3);
      this.initNode_line(nodes.v34, this.box.p3, this.box.p4);
      nodes.area.points([
        -5, 1.35, 
        this.box.p2.x, this.box.p2.y, 
        this.box.p3.x, this.box.p3.y, 
        -5, -5]);
    }
  }    

  graphs.Graph2_5 = class extends Graph2Base {
    get option() {
      return {id:"graph2_5", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.v12, this.box.p1, this.box.p2);
      this.initNode_line(nodes.v23, this.box.p2, this.box.p3);
      this.initNode_line(nodes.v34, this.box.p3, this.box.p4);
      this.initNode_line(nodes.v41, this.box.p4, this.box.p1);
      nodes.area.points([
        this.box.p1.x, this.box.p1.y, 
        this.box.p2.x, this.box.p2.y, 
        this.box.p3.x, this.box.p3.y, 
        this.box.p4.x, this.box.p4.y
      ]);
    }
  }    
  

  class Graph3Base extends Somali.Scene {

    constructor() {
      super();
      this.pos  = new Vector2(1, 1);
      this.box  = new Box(new Vector2(0, 0), new Vector2(2, 3), 20);
    }

    createNodes(shapes, groups) {
      return {
        grid : groups.grid(),
        p    : shapes.point(),
        P    : shapes.text("P"),
        box  : shapes.rect(),
        v12  : shapes.arrow().color(sColor.red),
        v23  : shapes.arrow().color(sColor.red),
        v34  : shapes.arrow().color(sColor.red),
        v41  : shapes.arrow().color(sColor.red),

        p1 : shapes.text("P1"),
        p2 : shapes.text("P2"),
        p3 : shapes.text("P3"),
        p4 : shapes.text("P4"),

        toP : shapes.arrow().color(sColor.green),
      }
    }

    initNodes(nodes) {
      Sync.boxToRect(this.box, nodes.box);
      Sync.vecToPos(this.pos, nodes.p);
      Sync.vecToPos(this.pos, nodes.P);

      this.initNode_line(nodes.v12, this.box.p1, this.box.p2);
      this.initNode_line(nodes.v23, this.box.p2, this.box.p3);
      this.initNode_line(nodes.v34, this.box.p3, this.box.p4);
      this.initNode_line(nodes.v41, this.box.p4, this.box.p1);

      this.initNode_line(nodes.toP, this.box.p1, this.pos);

      Sync.vecToPos(this.box.p1, nodes.p1).offset(-0.5, 0.5);
      Sync.vecToPos(this.box.p2, nodes.p2).offset(0, 0.5);;
      Sync.vecToPos(this.box.p3, nodes.p3);
      Sync.vecToPos(this.box.p4, nodes.p4);
    }

    initNode_line(line, s, e) {
      line.points([s.x, s.y, e.x, e.y]);
    }

    hide(list, flag) {
      list.map((key) => {
        this.nodes[key].visible(flag);
      })
    }

  }

  graphs.Graph3_0 = class extends Graph3Base {
    get option() {
      return {id:"graph3_0", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.hide([
        "v12",
        "v23",
        "v34",
        "v41",
        "toP",
      ], false);
    }
  }  

  graphs.Graph3_1 = class extends Graph3Base {
    get option() {
      return {id:"graph3_1", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.hide([
        "v23",
        "v34",
        "v41",
      ], false);
    }
  }   

  graphs.Graph3_2 = class extends Graph3Base {
    get option() {
      return {id:"graph3_2", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.toP, this.box.p2, this.pos);

      this.hide([
        "v12",
        "v34",
        "v41",
      ], false);
    }
  }   

  graphs.Graph3_3 = class extends Graph3Base {
    get option() {
      return {id:"graph3_3", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.toP, this.box.p3, this.pos);

      this.hide([
        "v12",
        "v23",
        "v41",
      ], false);
    }
  }   
  
  graphs.Graph3_4 = class extends Graph3Base {
    get option() {
      return {id:"graph3_4", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.initNode_line(nodes.toP, this.box.p4, this.pos);

      this.hide([
        "v12",
        "v23",
        "v34",
      ], false);
    }
  }     

  graphs.Graph3_5 = class extends Graph3Base {
    get option() {
      return {id:"graph3_5", update:false};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.hide([
        "v12",
        "v23",
        "v34",
        "v41",
        "toP",
      ], false);
    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  })

}

