{
  const { Vector2, Collision2, Util } = MathLab;
  const { Ellipse } = MathLab.Primitive2;
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
      this.pos    = Vector2.zero;
      this.ellipse = new Ellipse(new Vector2(1, 1), 3, 2, 50);

      Collision2.PointAndEllipse.intercect(this.pos, this.ellipse);      
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point(),
        star: shapes.star().opacity(0.5),
        ellipse: Sync.ellipseByEllipse(shapes.ellipse(), this.ellipse),
      }
    }

    update() {
      this.timer += 0.03;

      this.pos.set(Math.sin(this.timer) * 4, Math.cos(this.timer * 0.1) * 4)
      this.nodes.point.pos(this.pos.x, this.pos.y);

      const result = Collision2.PointAndEllipse.intercect(this.pos, this.ellipse);
      this.nodes.star.visible(result.hit);

      if (result.hit) {
        this.nodes.star.pos(result.pos.x, result.pos.y);
      }
    }
  }
  

  graphs.Graph2 = class extends Somali.Scene
  {
    constructor() {
      super();
      this.pos    = new Vector2(1, 2);
      this.ellipse = new Ellipse(new Vector2(1, 1), 3, 2, 50);
    }

    createNodes(shapes, groups) {
      return {
        grid: groups.grid(),
        point: shapes.point().pos(this.pos.x, this.pos.y),

        center: shapes.point().pos(this.ellipse.p.x, this.ellipse.p.y).fill(sColor.main),
        ellipse: Sync.ellipseByEllipse(shapes.ellipse(), this.ellipse),

        arrow: shapes.arrow().strokeWidth(1).dash(5),
      }
    }

    get option() {
      return { id: "graph2", gui:true };
    }

    initGui(gui) {
      gui.add(this, "start");
    }

    start() {
      this.transformEnter();
    }

    update() {
      switch(this.phase) {
        case "transform": this.transformUpdate(); break;
        case "rotate" : this.rotateUpdate(); break;
        case "scale"  : this.scaleUpdate(); break;
      }
    }

    transformEnter() {
      this.timer = 0;
      this.phase = "transform";
      this.pos.set(1, 2);
      this.ellipse.p.set(1, 1);      
      Sync.ellipseByEllipse(this.nodes.ellipse, this.ellipse);
    }

    transformUpdate() {
      this.timer += 0.01;

      if (this.timer < 1.0) {
        const to1 = Vector2.lerp(this.ellipse.p, Vector2.zero, this.timer);
        Sync.vecToPos(to1, this.nodes.ellipse);
        Sync.vecToPos(to1, this.nodes.center);

        const to2 = Vector2.lerp(this.pos, new Vector2(0, 1), this.timer);
        Sync.vecToPos(to2, this.nodes.point); 
      }

      if (2.0 < this.timer) {
        this.rotateEnter();
      }
    }

    rotateEnter() {
      this.timer = 0;
      this.phase = "rotate";
      this.pos.set(0, 1);
      this.ellipse.p.set(0, 0);
    }

    rotateUpdate() {
      this.timer += 0.01;

      if (this.timer < 1.0) {
        const to = Util.lerp(-this.ellipse.angle, 0, this.timer);

        
        this.nodes.ellipse.rotation(to);

        const to2 = Vector2.up.rotate(Util.deg2rad(-this.ellipse.angle - to));
        Sync.vecToPos(to2, this.nodes.point); 
      }

      if (2.0 < this.timer) {
        this.scaleEnter();
      }
    }

    scaleEnter() {
      this.phase = "scale";
      this.timer = 0;
      this.y = this.nodes.point.y();
    }

    scaleUpdate() {
      this.timer += 0.01;

      if (this.timer < 1.0) {
        const to = Util.lerp(2, 3, this.timer);

        
        this.nodes.ellipse.ry(to);

        const to2 = Util.lerp(this.y, this.y * (3/2), this.timer);
        this.nodes.point.y(to2);
      }

      if (2.0 < this.timer) {
        this.timer = 0;
        this.phase = "";
      }      
    }
  }

  graphs.Sin = props.Graph.Sin;
  graphs.Cos = props.Graph.Cos;

  
  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3", update:false };
    }

    constructor() {
      super();
      this.pos    = Vector2.zero;
      this.ellipse = new Ellipse(new Vector2(1, 1), 3, 2, 50);
    }

    createNodes(shapes, groups) {

      const v50 = Vector2.right.times(3).rotate(Util.deg2rad(50));
      const v100 = Vector2.right.times(2).rotate(Util.deg2rad(140));
      return {
        grid: groups.grid(),
        
        ellipse: Sync.ellipseByEllipse(shapes.ellipse(), this.ellipse),

        p: shapes.point().pos(1, 2),
        pText: shapes.text().text("P").pos(1, 2),

        c: shapes.point().pos(1, 1).fill(sColor.main),
        cText: shapes.text().text("C").pos(1, 1),

        theta: shapes.wedge().pos(1, 1).angle(50).rotation(-50),
        thetaText: shapes.text().text("θ").pos(1.5, 1.5),

        rx: shapes.arrow().points([1, 1, v50.x + 1, v50.y + 1]).strokeWidth(1).color(sColor.red),
        rxText: shapes.text().text("rx").pos(2, 2.2),
        ry: shapes.arrow().points([1, 1, v100.x + 1, v100.y + 1]).strokeWidth(1).color(sColor.green),
        ryText: shapes.text().text("ry").pos(0, 1.5)
      }
    }
  }

  graphs.Graph4 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph4", update:false };
    }

    constructor() {
      super();
      this.pos    = Vector2.zero;
      this.ellipse = new Ellipse(new Vector2(0, 0), 3, 3, 0);
    }

    createNodes(shapes, groups) {

      return {
        grid: groups.grid(),
        
        ellipse: Sync.ellipseByEllipse(shapes.ellipse(), this.ellipse),

        p: shapes.point().pos(0.8, 1),
        pText: shapes.text().text("P'").pos(0.8, 1),

        c: shapes.point().pos(0, 0).fill(sColor.main),
        cText: shapes.text().text("C").pos(0, 0),
      }
    }
  }  

  Object.values(graphs).map((graph) => {
    new graph().build();
  })
}

