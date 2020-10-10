{
  const { Vector2 } = MathLab;
  const { Sync } = props;
  class Graph1 extends Somali.Scene 
  {
    get option() {
      return { id: "graph1", gui: true };
    }

    constructor() {
      super();
      this.params = {
        v: new Vector2(3, 3),
        normalize: () => {
          const n = this.params.v.normalize;
          this.params.v.set(n.x, n.y);
        }
      }
    }

    initGui(gui) {
      gui.add(this.params, "normalize");
      gui.add(this.params.v, "x").listen();
      gui.add(this.params.v, "y").listen();
    }

    createNodes(shapes, groups) {
      return {
        grid  : groups.grid(),
        vector: Sync.arrowByVec(shapes.arrow(), this.params.v),
      }
    }

    update() {
      Sync.arrowByVec(this.nodes.vector, this.params.v);
    }
  }

  class Graph2 extends Somali.Scene 
  {
    get option() {
      return { id: "graph2", update:false };
    }

    createNodes(shapes, groups) {
      return {
        grid  : groups.grid(),
        vector: shapes.arrow().points([0, 0, 3, 4]),
        text  : shapes.text().pos(3, 4).text("v(3, 4)")
      }
    }


  }  

  class Graph3 extends Somali.Scene 
  {
    get option() {
      return { id: "graph3", update:false };
    }

    createNodes(shapes, groups) {
      return {
        grid  : groups.grid(),
        v: shapes.arrow().points([0, 0, 3, 4]),
        n: shapes.arrow().points([0, 0, 0.6, 0.8]).color(Somali.sColor.green),
        vt : shapes.text().pos(3, 4).text("v"),
        nt : shapes.text().pos(0.6, 0.8).text("n"),
      }
    }


  }    

  new Graph1().build();
  new Graph2().build();
  new Graph3().build();
}
