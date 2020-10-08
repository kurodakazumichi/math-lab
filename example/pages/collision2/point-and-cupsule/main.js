{
  const { Vector2, Collision2 } = MathLab;
  const { Capsule, Segment } = MathLab.Primitive2;
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
      this.capsule  = new Capsule(new Segment(new Vector2(-2, -2), new Vector2(4, 4)), 1.5);
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        capsule: Sync.capsuleToLine(this.capsule, shapes.line()).stroke(Somali.sColor.gray),
        point  : shapes.point(),
        star   : shapes.star().opacity(0.7)
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndCapsule.intercect(this.pos, this.capsule);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }

  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2" };
    }

    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.capsule  = new Capsule(new Segment(new Vector2(-2, -2), new Vector2(4, 4)), 1.5);
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        capsule: shapes.line().stroke(sColor.gray),

        p1: shapes.point(),
        p2: shapes.point(),

        seg: shapes.line(),
        c : shapes.point(),
        circle: shapes.circle().fill(sColor.red).opacity(0.2),
      }
    }

    initNodes(nodes) {
      Sync.capsuleToLine(this.capsule, nodes.capsule);
      Sync.vecToPos(this.capsule.s.p1, nodes.p1);
      Sync.vecToPos(this.capsule.s.p2, nodes.p2);

      this.initNode_seg();

      nodes.circle.radius(this.capsule.r);
    }

    initNode_seg() {
      const { p1, p2 } = this.capsule.s;
      this.nodes.seg.points([p1.x, p1.y, p2.x, p2.y]);
    }

    update() {
      this.timer += 0.01;

      const { p1, p2 } = this.capsule.s;

      const p = Vector2.lerp(p1, p2, Math.abs(Math.sin(this.timer)));

      Sync.vecToPos(p, this.nodes.circle);
      Sync.vecToPos(p, this.nodes.c);
    }
  }

  class Graph3Base extends Somali.Scene 
  {
    constructor() {
      super();
      this.pos  = Vector2.zero;
      this.capsule  = new Capsule(new Segment(new Vector2(-2, -2), new Vector2(4, 4)), 1.5);
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        capsule: shapes.line().stroke(sColor.gray),

        p1: shapes.point(),
        p2: shapes.point(),

        seg: shapes.line(),
        c : shapes.point(),
        circle: shapes.circle().fill(sColor.red).opacity(0.2),

        hit: shapes.star().opacity(0.5),

        p: shapes.pointer(),

        toP: shapes.line().dash(4),
      }
    }

    initNodes(nodes) {
      Sync.capsuleToLine(this.capsule, nodes.capsule);
      Sync.vecToPos(this.capsule.s.p1, nodes.p1);
      Sync.vecToPos(this.capsule.s.p2, nodes.p2);

      this.initNode_seg();

      nodes.circle.radius(this.capsule.r);

      nodes.p.pos(-2, 3);
    }

    initNode_seg() {
      const { p1, p2 } = this.capsule.s;
      this.nodes.seg.points([p1.x, p1.y, p2.x, p2.y]);
    }

    hide(list) {
      list.map((key) => {
        this.nodes[key].visible(false);
      });
    }
  } 

  graphs.Graph3_1 = class extends Graph3Base {
    get option() {
      return { id:"graph3_1", update: false };
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.hide([
        "p1", 
        "p2", 
        "seg",
        "hit",
        "circle",
        "c"
      ])
    }
  }

  graphs.Graph3_2 = class extends Graph3Base {
    get option() {
      return { id:"graph3_2"};
    }

    initNodes(nodes) {
      super.initNodes(nodes);

      this.hide([
        "circle",
        "c"
      ]);
    }

    update() {

      const p = new Vector2(this.nodes.p.x(), this.nodes.p.y());

      // カプセルの線分との最近傍点
      const n = Collision2.PointAndSegment
        .getNearestNeighborPoint(p, this.capsule.s);

      Sync.vecToPos(n, this.nodes.hit);

      this.nodes.toP.points([p.x, p.y, n.x, n.y]);

    }
  }

  graphs.Graph3_3 = class extends Graph3Base {
    get option() {
      return { id:"graph3_3"};
    }

    initNodes(nodes) {
      super.initNodes(nodes);
    }

    update() {

      const p = new Vector2(this.nodes.p.x(), this.nodes.p.y());

      // カプセルの線分との最近傍点
      const n = Collision2.PointAndSegment
        .getNearestNeighborPoint(p, this.capsule.s);

      Sync.vecToPos(n, this.nodes.hit);
      Sync.vecToPos(n, this.nodes.circle);
      Sync.vecToPos(n, this.nodes.c);

      this.nodes.toP.points([p.x, p.y, n.x, n.y]);

    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  });
}