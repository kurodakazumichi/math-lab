{
  const { Vector2, Collision2, Util } = MathLab;
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

      this.rad = Util.deg2rad(120);
      this.v1 = new Vector2(3, 1);
      this.v2 = new Vector2(3, 1).rotate(this.rad);
    }

    createNodes(shapes, groups) {
      return {
        grid   : groups.grid(),
        v1   : Sync.arrowByVec(shapes.arrow(), this.v1),
        v2   : Sync.arrowByVec(shapes.arrow(), this.v2),
        v3   : shapes.arrow().color(sColor.red),
      }
    }

    update() {

      this.timer += 0.01;

      const rad = Util.lerp(0, this.rad, this.timer);

      const v = this.v1.clone().rotate(rad);
      Sync.arrowByVec(this.nodes.v3, v);

      if (1 < this.timer) {
        this.timer = 0;
      }
    }
  }

  graphs.Graph2 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph2", update: false };
    }

    constructor() {
      super();

      this.rad = Util.deg2rad(120);
      this.v1 = new Vector2(3, 1);
      this.v2 = new Vector2(3, 1).rotate(this.rad);
    }

    createNodes(shapes, groups) {
      return {
        grid     : groups.grid(),
        theta    : shapes.wedge().pos(0, 0).angle(120).rotation(-140),
        thetaText: shapes.text().text("θ").pos(0, 1),
        av       : Sync.arrowByVec(shapes.arrow(), this.v1),
        avText   : shapes.text().text("a").pos(3, 1),
        bv       : Sync.arrowByVec(shapes.arrow(), this.v2),
        bvText   : shapes.text().text("b").pos(-2.8, 2),
      }
    }
  }  

  graphs.Graph3 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph3", update: false };
    }

    constructor() {
      super();

      this.rad = Util.deg2rad(120);
      this.v1 = new Vector2(3, 1);
      this.v2 = new Vector2(3, 1).rotate(this.rad);
    }

    createNodes(shapes, groups) {
      return {
        grid     : groups.grid(),
        alpha    : shapes.wedge().pos(0, 0).radius(1.5).angle(19).rotation(-19).fill(sColor.red),
        alphaText: shapes.text().text("α").pos(1.5, 0.55),
        av       : Sync.arrowByVec(shapes.arrow(), this.v1),
        avText   : shapes.text().text("a").pos(3, 1),
      }
    }
  }    

  graphs.Graph4 = class extends Somali.Scene 
  {
    get option() {
      return { id: "graph4", update: false };
    }

    constructor() {
      super();

      this.rad = Util.deg2rad(60);
      this.v1 = new Vector2(3, 1);
      this.v2 = new Vector2(3, 1).rotate(this.rad);
    }

    createNodes(shapes, groups) {
      return {
        grid     : groups.grid(),
        alpha    : shapes.wedge().pos(0, 0).radius(1.5).angle(19).rotation(-19).fill(sColor.red),
        alphaText: shapes.text().text("α").pos(1.5, 0.55),
        theta    : shapes.wedge().pos(0, 0).angle(60).rotation(-80),
        thetaText: shapes.text().text("θ").pos(0.5, 1),        
        av       : Sync.arrowByVec(shapes.arrow(), this.v1),
        avText   : shapes.text().text("a").pos(3, 1),
        bv       : Sync.arrowByVec(shapes.arrow(), this.v2),
        bvText   : shapes.text().text("b").pos(0.5, 3.7),        
      }
    }
  }      

  Object.values(graphs).map((graph) => {
    new graph().build();
  })
}

