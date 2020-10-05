const { Vector2, Util } = MathLab;
const { Sync } = props;

class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", gui:true}
  }

  constructor() {
    super();
    this.params = {
      a: new Vector2(4, 1),
      b: new Vector2(2, 4)
    }
  }

  initGui(gui) {
    gui.add(this.params.b, "x");
    gui.add(this.params.b, "y");
  }


  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      area1: shapes.line().points([-1.25, 5, 1.25, -5, 5, -5, 5, 5]).closed(true).fill(Somali.sColor.blue).stroke("").opacity(0.25),
      area2: shapes.line().points([-1.25, 5, 1.25, -5, -5, -5, -5, 5]).closed(true).fill(Somali.sColor.red).stroke("").opacity(0.25),
      a    : Sync.vecToArrow(this.params.a, shapes.arrow()).color(Somali.sColor.red),
      b    : Sync.vecToArrow(this.params.b, shapes.arrow()),
      aText: shapes.text().text("a").pos(4, 1),
      bText: shapes.text().text("b").pos(2, 4),
      dot  : shapes.text().pos(0, 0)
    }
  }

  update() {
    Sync.vecToArrow(this.params.b, this.nodes.b);
    this.nodes.bText.pos(this.params.b.x, this.params.b.y);
    const dot = Vector2.dot(this.params.a, this.params.b);
    this.nodes.dot.text(`内積の値 = ${ Util.round(dot, 5)}`)
  }
}

class Graph2 extends Somali.Scene 
{
  get option() {
    return {id:"graph2", update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      a    : shapes.arrow().points([0, 0, 4, 4]).color(Somali.sColor.red),
      b    : shapes.arrow().points([0, 0, 2, 2]),
      aText: shapes.text().text("a").pos(4, 4),
      bText: shapes.text().text("b").pos(2, 2),
    }
  }
}

class Graph3 extends Somali.Scene 
{
  get option() {
    return {id:"graph3", update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      a    : shapes.arrow().points([0, 0, 4, 4]).color(Somali.sColor.red),
      b    : shapes.arrow().points([0, 0, -2, -2]),
      aText: shapes.text().text("a").pos(4, 4),
      bText: shapes.text().text("b").pos(-2, -2),
    }
  }
}

class Graph4 extends Somali.Scene {
  get option() {
    return {id:"graph4", gui:true}
  }

  constructor() {
    super();

    this.params = {
      a: new Vector2(4, 1),
      b: new Vector2(1, 4),
    }
  }

  initGui(gui) {
    gui.add(this.params.b, "x");
    gui.add(this.params.b, "y");
  }

  createNodes(shapes, groups) 
  {
    const { a, b } = this.params;
    return {
      grid  : groups.grid(),
      a    : Sync.vecToArrow(a, shapes.arrow()).color(Somali.sColor.red),
      b    : Sync.vecToArrow(b, shapes.arrow()),
      aText: shapes.text().text("a").pos(a.x, a.y),
      bText: shapes.text().text("b").pos(b.x, b.y),
      line : shapes.line().stroke(Somali.sColor.blue),
      tText: shapes.text().text("t"),
      aux  : shapes.aux(),
      dot  : shapes.text().pos(0, 0)
    }
  }

  update() {
    const { a, b } = this.params;

    Sync.vecToArrow(b, this.nodes.b);
    Sync.vecToPos(b, this.nodes.bText);

    // aを正規化して内積を取る
    const n = a.normalize;
    const dot = Vector2.dot(n, b);
    
    n.times(dot);
    this.nodes.line.points([0, 0, n.x, n.y]);
    Sync.vecToPos(n, this.nodes.tText);

    this.nodes.aux.points([b.x, b.y, n.x, n.y]);

    this.nodes.dot.text(`内積の値 = ${ Util.round(dot, 4) }`)
  }
}

new Graph1().build();
new props.Graph.Cos().build();
new Graph2().build();
new Graph3().build();
new Graph4().build();