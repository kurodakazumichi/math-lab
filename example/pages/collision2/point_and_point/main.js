{
  const { Vector2, Collision2 } = MathLab;
  const { Actions, Action } = props;

  class Graph1 extends Somali.Scene 
  {
    get option() {
      return {id:"graph1"}
    }

    constructor() {
      super();
      this.actions = new Actions();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        p1  : shapes.point(),
        p2  : shapes.point(),
        star: shapes.star(),
      }
    }

    initNodes(nodes) {
      nodes.star.visible(false);
      this.actions.add("p1", new Action.uniform(nodes.p1, new Vector2(-3, 0), new Vector2(1, 0)));
      this.actions.add("p2", new Action.uniform(nodes.p2, new Vector2( 3, 0), new Vector2(-1, 0)));
    }

    update() {
      
      this.timer += 1;

      if (this.timer % 50 !== 0) return;

      this.actions.update();

      // 衝突判定
      const { p1, p2 } = this.actions.map;
      const result = Collision2.PointAndPoint.intercect(p1.pos, p2.pos);

      // 衝突マークの表示
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      // 450フレーム経過でリセット
      if (this.timer === 450) {
        this.actions.reset();
        this.timer = 0;
      }
    }
  }

  class Graph2 extends Somali.Scene 
  {
    get option() {
      return {id:"graph2"}
    }

    constructor() {
      super();
      this.actions = new Actions();
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        p1: shapes.point(),
        p2: shapes.point(),
        star: shapes.star(),
      }
    }

    initNodes(nodes) {
      nodes.star.visible(false);
      this.actions.add("p1", new Action.uniform(nodes.p1, new Vector2(-3, 0), new Vector2(0.01, 0)));
      this.actions.add("p2", new Action.uniform(nodes.p2, new Vector2( 3, 0), new Vector2(-0.01, 0)));
    }

    update() {
      
      this.timer += 1;

      this.actions.update();

      const { p1, p2 } = this.actions.map;
      const result = Collision2.PointAndPoint.intercect(p1.pos, p2.pos);

      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }

      if (this.timer === 450) {
        this.actions.reset();
        this.timer = 0;
      }
    }
  }  
  new Graph1().build();
  new Graph2().build();
}