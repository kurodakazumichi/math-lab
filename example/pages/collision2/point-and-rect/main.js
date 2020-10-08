{
  const { Vector2, Collision2 } = MathLab;
  const { Rect } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.rect = new Rect(new Vector2(-2, 2), 4, 5);

      console.log(this.rect);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        circle: Sync.rectToRect(this.rect, shapes.rect()),
        star: shapes.star().opacity(0.5)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndRect.intercect(this.pos, this.rect);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }


  class GraphBase extends Somali.Scene {


    constructor() {
      super();
      this.pos  = new Vector2(1, 3);
      this.rect = new Rect(new Vector2(-2, 2), 4, 5);

      console.log(this.rect);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),

        p: shapes.point(),
        pText: shapes.text("P"),

        rect: shapes.rect(),
        area: shapes.line().closed(true).fill(sColor.yellow).opacity(0.2),

        p1Text: shapes.text("(x1, y1)"),
        p2Text: shapes.text("(x2, y2)"),
      }
    }

    initNodes(nodes) {
      Sync.rectToRect(this.rect, nodes.rect);

      Sync.vecToPos(this.pos, nodes.p);
      Sync.vecToPos(this.pos, nodes.pText);

      Sync.vecToPos(this.rect.p1, nodes.p1Text).offset(-0.7, 0.5);
      Sync.vecToPos(this.rect.p3, nodes.p2Text).offset(-0.7, -0.1);
    }

  }

  class Graph2_1 extends GraphBase {
    get option() {
      return { id: "graph2_1" };
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      nodes.area.points([-2, 2, 2, 2, 2, -3, -2, -3]);
    }
  }

  class Graph2_2 extends GraphBase {
    get option() {
      return { id: "graph2_2" };
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      nodes.area.points([-2, 5, 2, 5, 2, -5, -2, -5]);
    }
  }  

  class Graph2_3 extends GraphBase {
    get option() {
      return { id: "graph2_3" };
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      nodes.area.points([-5, 2, 5, 2, 5, -3, -5, -3]);
    }
  }  
  
  new Graph1().build();
  new Graph2_1().build();
  new Graph2_2().build();
  new Graph2_3().build();

}

