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
      v1    : Sync.arrowByVec(shapes.arrow(), new Vector2(4, 1)),
      v2    : Sync.arrowByVec(shapes.arrow(), new Vector2(2, 4)),
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
      v1    : Sync.arrowByVec(shapes.arrow(), new Vector2(4, 1)),
      v2    : Sync.arrowByVec(shapes.arrow(), new Vector2(2, 4)),
      v1Text: shapes.text().text("v1(a, b)").pos(3, 1.7),
      v2Text: shapes.text().text("v2(c, d)").pos(2, 4),
    }
  }  
}

class Graph3 extends Somali.Scene 
{
  get option() {
    return {id:"graph3", gui: true}
  }

  constructor() {
    super();
    this.params = {
      alpha:true,
      beta:true,
      theta:true,
    }
  }

  initGui(gui) {
    gui.add(this.params, "alpha").onChange((flag) => { 
      this.nodes.alpha.visible(flag);
      this.nodes.alphaText.visible(flag);  
    });
    gui.add(this.params, "beta").onChange((flag) => {
      this.nodes.beta.visible(flag);
      this.nodes.betaText.visible(flag);
    });
    gui.add(this.params, "theta").onChange((flag) => {
      this.nodes.theta.visible(flag);
      this.nodes.thetaText.visible(flag);
    });
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      alpha : shapes.wedge().pos(0, 0).fill(Somali.sColor.red).angle(76).rotation(-76).radius(2),
      beta  : shapes.wedge().pos(0, 0).fill(Somali.sColor.yellow).angle(34).rotation(-34).radius(1.5),
      theta : shapes.wedge().pos(0, 0).rotation(-75).angle(40).radius(1.2),
      v1    : Sync.arrowByVec(shapes.arrow(), new Vector2(3, 2)),
      v2    : Sync.arrowByVec(shapes.arrow(), new Vector2(1, 4)),
      alphaText: shapes.text().text("α").pos(0.8, 1.7),
      betaText: shapes.text().text("β").pos(1, 0.6),
      thetaText: shapes.text().text("θ").pos(0.2, 0.8),
      text  : shapes.text().pos(0, 0).text("θ = α - β")
    }
  }
}

class Graph4 extends Somali.Scene 
{
  get option() {
    return {id:"graph4", gui: true}
  }

  constructor() {
    super();
    this.params = {
      sin_alpha: this.sinAlpha.bind(this),
      cos_beta : this.cosBeta.bind(this),
      cos_alpha:this.cosAlpha.bind(this),
      sin_beta : this.sinBeta.bind(this),
    }
  }

  clearNode() {
    this.nodes.alpha.visible(false);
    this.nodes.alphaText.visible(false);
    this.nodes.beta.visible(false);
    this.nodes.betaText.visible(false);
    this.nodes.title.text("");
  }

  sinAlpha() {
    this.clearNode();
    this.nodes.alpha.visible(true);
    this.nodes.alphaText.visible(true);
    this.nodes.aux1.points([0, 0, 1, 4]);
    this.nodes.aux2.points([1, 4, 1, 0]);
    this.nodes.title.text("sinα = ");
    this.nodes.frac1.text("|v2|");
    this.nodes.frac2.text("d");
  }

  cosBeta() {
    this.clearNode();
    this.nodes.beta.visible(true);
    this.nodes.betaText.visible(true);
    this.nodes.aux1.points([3, 2, 0, 0]);
    this.nodes.aux2.points([0, 0, 3, 0]);
    this.nodes.title.text("cosβ = ");
    this.nodes.frac1.text("|v1|");
    this.nodes.frac2.text("a");    
  }

  cosAlpha() {
    this.clearNode();
    this.nodes.alpha.visible(true);
    this.nodes.alphaText.visible(true);
    this.nodes.aux1.points([1, 4, 0, 0]);
    this.nodes.aux2.points([0, 0, 1, 0]);
    this.nodes.title.text("cosα = ");
    this.nodes.frac1.text("|v2|");
    this.nodes.frac2.text("c");
  }  

  sinBeta() {
    this.clearNode();
    this.nodes.beta.visible(true);
    this.nodes.betaText.visible(true);
    this.nodes.aux1.points([0, 0, 3, 2]);
    this.nodes.aux2.points([3, 2, 3, 0]);
    this.nodes.title.text("sinβ = ");
    this.nodes.frac1.text("|v1|");
    this.nodes.frac2.text("b");    
  }

  initGui(gui) {
    gui.add(this.params, "cos_alpha");
    gui.add(this.params, "cos_beta");
    gui.add(this.params, "sin_alpha");
    gui.add(this.params, "sin_beta");
  }

  createNodes(shapes, groups) {
    return {
      grid  : groups.grid(),
      alpha : shapes.wedge().pos(0, 0).fill(Somali.sColor.red).angle(76).rotation(-76).radius(2),
      beta  : shapes.wedge().pos(0, 0).fill(Somali.sColor.yellow).angle(34).rotation(-34).radius(1.5),
      v1    : Sync.arrowByVec(shapes.arrow(), new Vector2(3, 2)),
      v2    : Sync.arrowByVec(shapes.arrow(), new Vector2(1, 4)),
      alphaText: shapes.text().text("α").pos(0.8, 1.7),
      betaText: shapes.text().text("β").pos(1, 0.6),
      v1Text: shapes.text().text("v1(a, b)").pos(3, 2),
      v2Text: shapes.text().text("v2(c, d)").pos(1, 4),
      aux1  : shapes.arrow().color(Somali.sColor.green),
      aux2  : shapes.arrow().color(Somali.sColor.green),
      title : shapes.text().pos(0, -0.55).fontSize(32),
      frac1 : shapes.text().pos(2.3, -1).fontSize(32),
      frac2 : shapes.text().pos(2.7, -0.1).fontSize(32),
      bar   : shapes.line().points([2.3, -1, 3.9, -1])
    }
  }

  initNodes(nodes) {
    this.cosAlpha();
  }
}

new Graph1().build();
new Graph2().build();
new Graph3().build();
new Graph4().build();