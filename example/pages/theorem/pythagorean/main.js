{
  const { Vector2, Collision2, Util } = MathLab;
  const { Triangle, Rect } = MathLab.Primitive2;
  const { sColor } = Somali;
  const { Sync } = props;
  const graphs = {};
  
  sColor.backGround = "#083F1E";

  graphs.Graph1 = class extends Somali.Scene {
    get option() {
      return {id:"graph1"};
    }

    constructor() {
      super();
      this.tri = new Triangle(new Vector2(-3, -2), new Vector2(3, 2), new Vector2(3, -2));
    }

    createNodes(shapes, groups) {
      return {
        //grid: groups.grid(),
        tri : shapes.line(),
        a : shapes.text("a").fontSize(32),
        b : shapes.text("b").fontSize(32),
        c : shapes.text("c").fontSize(32),
      }
    }

    initNodes(nodes) {
      Sync.lineByTri(nodes.tri, this.tri);
      nodes.a.pos(0, -2);
      nodes.b.pos(3.2, 0.3);
      nodes.c.pos(-1, 1);
    }

  }

  graphs.Graph2 = class extends Somali.Scene {
    get option() {
      return {id:"graph2"};
    }

    constructor() {
      super();
      this.rect = new Rect(new Vector2(-3, 3), 6, 6);
    }

    createNodes(shapes, groups) {
      return {
        rect: shapes.rect().fill(sColor.gray),

        cc : shapes.line().closed(true).fill(sColor.green).opacity(0.7),

        a: shapes.text("a"),
        b: shapes.text("b"),
        c: shapes.text("c"),

        ab1: shapes.text("a+b"),
        ab2: shapes.text("a+b"),

        aux1: shapes.line(),
        aux2: shapes.line(),
      }
    }

    initNodes(nodes) {
      Sync.rectByRect(nodes.rect, this.rect);

      nodes.cc.points([-3, 1, 1, 3, 3, -1, -1, -3]);
      nodes.a.pos(1, -3);
      nodes.b.pos(3, -1.8);
      nodes.c.pos(0.7, -1.4);

      nodes.ab1.pos(-0.4, 4);
      nodes.ab2.pos(-4.5, 0.3);

      nodes.aux1.points([-3, 3.2, 0, 3.5, 3, 3.2]).tension(1)
      nodes.aux2.points([-3.2, 3, -3.5, 0, -3.2, -3]).tension(1)
    }

  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}  