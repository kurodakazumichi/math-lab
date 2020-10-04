{
  const { Vector2, Collision2 } = MathLab;
  const { Segment } = MathLab.Primitive2;
  const { Action } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1" };
    }

    constructor() {
      super();
      this.seg = new Segment(new Vector2(-1, -1), new Vector2(4, 4));
      this.action;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        seg: shapes.line().points(this.seg.points),
        star: shapes.star().opacity(0.5)
      }
    }

    initNodes(nodes) {
      this.action = new Action.uniform(nodes.point, new Vector2(-4, -4), new Vector2(0.05, 0.05));
    }

    update() {
      this.timer++;

      this.action.update();

      const result = Collision2.PointAndSegment.intercect(this.action.pos, this.seg);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      if (this.timer === 200) {
        this.action.reset();
        this.timer = 0;
      }
    }
  }

  class Graph2 extends Somali.Scene 
  {
    get option() {
      return { id: "graph2" };
    }

    constructor() {
      super();
      this.seg = new Segment(new Vector2(-1, -1), new Vector2(4, 4));
      this.pos = Vector2.zero;
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        ray: shapes.line().points(this.seg.points),
        star: shapes.star().opacity(0.5)
      }
    }


    update() {
      this.timer += 0.05;

      this.pos.set(Math.sin(this.timer), Math.cos(this.timer));
      this.nodes.point.pos(this.pos.x, this.pos.y);
      
      const result = Collision2.PointAndSegment.intercect(this.pos, this.seg);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      if (this.timer === 200) {
        this.action.reset();
        this.timer = 0;
      }
    }
  }
  
  
  new Graph1().build();
  new Graph2().build();
}

