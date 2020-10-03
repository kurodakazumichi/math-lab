const { Vector2 } = MathLab;
const { Sync } = props;

class Graph1 extends Somali.Scene 
{
  get option() {
    return {id:"graph1", update:false}
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      theta : shapes.wedge().pos(0, 0).rotation(-64).angle(47),
      v1    : Sync.vec2ToArrow(new Vector2(4, 1), shapes.arrow()),
      v2    : Sync.vec2ToArrow(new Vector2(2, 4), shapes.arrow()),
      v1Text: shapes.text().text("v1").pos(4, 1),
      v2Text: shapes.text().text("v2").pos(2, 4),
      thetaText: shapes.text().text("θ").pos(0.5, 0.8),
    }
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
      v1    : Sync.vec2ToArrow(new Vector2(4, 1), shapes.arrow()),
      v2    : Sync.vec2ToArrow(new Vector2(2, 4), shapes.arrow()),
      v1Text: shapes.text().text("v1(a, b)").pos(3, 1.7),
      v2Text: shapes.text().text("v2(c, d)").pos(2, 4),
    }
  }  
}

new Graph1().build();
new Graph2().build();