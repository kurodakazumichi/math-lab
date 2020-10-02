import Triangle, { Type } from './Triangle2';
import Vector2 from './Vector2';

const r2 = Math.sqrt(2);
const r3 = Math.sqrt(3);
const r4 = Math.sqrt(4);

// データの定義
const D = {
  // ３点が原点(無効な三角形)
  zero  : {
    name:"zero",
    points:[0, 0, 0, 0, 0, 0],
    AB:{x:0, y:0}, BC:{x:0, y:0}, CA:{x:0, y:0},
    a:0, b:0, c:0,
    maxSideName:"", minSideName:"",
    maxLength:0, minLength:0,
    maxCornerName:"", minCornerName:"",
    cosA: 0, cosB:0, cosC:0,
    sinA: 0, sinB:0, sinC:0,
    tanA: 0, tanB:0, tanC:0,
    maxCornerCos:0, minCornerCos: 0,
    maxCornerSin:0, minCornerSin: 0,
    maxCornerTan:0, minCornerTan: 0,
    radA: 0, radB:0, radC:0,
    area: 0,
    outerRadius:0, innerRadius:0,
    center: Vector2.zero,
    outerCenter: Vector2.zero,
    innerCenter:Vector2.zero,
    isInvalid:true,
    type: Type.None,
    toString: "A(0, 0), B(0, 0), C(0, 0)",
  },
  // ３点が(1, 1)、(無効な三角形)
  one   : {
    name:"one",
    points:[1, 1, 1, 1, 1, 1],
    AB:{x:0, y:0}, BC:{x:0, y:0}, CA:{x:0, y:0},
    a:0, b:0, c:0,
    maxSideName:"", minSideName:"",
    maxLength:0, minLength:0,
    maxCornerName:"", minCornerName:"",
    cosA: 0, cosB:0, cosC:0,
    sinA: 0, sinB:0, sinC:0,
    tanA: 0, tanB:0, tanC:0,
    maxCornerCos:0, minCornerCos: 0,
    maxCornerSin:0, minCornerSin: 0,
    maxCornerTan:0, minCornerTan: 0,
    radA: 0, radB:0, radC:0,
    area: 0,
    outerRadius:0, innerRadius:0,
    center: Vector2.zero,
    outerCenter: Vector2.zero,
    innerCenter:Vector2.zero,
    isInvalid:true,
    type: Type.None,
    toString: "A(1, 1), B(1, 1), C(1, 1)",
  },
  // 底辺が3、高さが4の三角形
  s34   : {
    name:"s34",
    points:[3, 4, 0, 0, 3, 0],
    AB:{x:-3, y:-4}, BC:{x:3, y:0}, CA:{x:0, y:4},
    a:3, b:4, c:5,
    maxSideName:"AB", minSideName:"BC",
    maxLength:5, minLength:3,
    maxCornerName:"C", minCornerName:"A",
    cosA: 4/5, cosB:3/5, cosC:0,
    sinA: 3/5, sinB:4/5, sinC:1,
    tanA: 3/4, tanB:4/3, tanC:Infinity,
    maxCornerCos: 0, minCornerCos: 4/5,
    maxCornerSin: 1, minCornerSin: 3/5,
    maxCornerTan:Infinity, minCornerTan: 3/4,
    radA: 0.6435011087932843, radB:0.9272952180016123, radC:1.5707963267948966,
    outerRadius:2.5, innerRadius:1,
    area: 6,
    center     : new Vector2(2, 1.3333333333333333),
    outerCenter: new Vector2(1.5, 1.9999999999999996),
    innerCenter: new Vector2(2, 1),
    isInvalid:false,
    type: Type.Right,
    toString: "A(3, 4), B(0, 0), C(3, 0)",
  },
  // 底辺が1、高さが1の三角形
  s11   : {
    name:"s11",
    points:[1, 1, 0, 0, 1, 0],
    AB:{x:-1, y:-1}, BC:{x:1, y:0}, CA:{x:0, y:1},
    a:1, b:1, c:r2,
    maxSideName:"AB", minSideName:"BC",
    maxLength:r2, minLength:1,
    maxCornerName:"C", minCornerName:"A",
    cosA: 1/r2, cosB:1/r2, cosC:0, 
    sinA: 1/r2, sinB:1/r2, sinC:1, 
    tanA: 1, tanB:1, tanC:-Infinity, 
    maxCornerCos: 0, minCornerCos: 1/r2,
    maxCornerSin: 1, minCornerSin: 1/r2,
    maxCornerTan: -Infinity, minCornerTan: 1,
    radA: 0.785398, radB:0.785398, radC:1.5707963267948966,
    area: 0.5,
    outerRadius:0.7071067811865477, innerRadius:0.2928932188134524,
    center     : new Vector2(0.6666666666666666, 0.3333333333333333),
    outerCenter: new Vector2(0.49999999999999994, 0.5000000000000001),
    innerCenter: new Vector2(0.7071067811865475, 0.2928932188134525),
    isInvalid:false,
    type: Type.Right,
    toString: "A(1, 1), B(0, 0), C(1, 0)",
  },
  // 正三角形
  equi  : {
    name:"equi",
    points:[0, r3, -1, 0, 1, 0], 
    AB:{x:-1, y:-r3}, BC:{x:2, y:0}, CA:{x:-1, y:r3},
    a:2, b:r4, c:r4,
    maxSideName:"BC", minSideName:"AB",
    maxLength:2, minLength:r4,
    maxCornerName:"A", minCornerName:"C",
    cosA: 1/2, cosB:1/2, cosC:1/2, 
    sinA: r3/2, sinB:r3/2, sinC:r3/2, 
    tanA: r3, tanB:r3, tanC:r3, 
    maxCornerCos: 1/2 , minCornerCos: 1/2,
    maxCornerSin: r3/2, minCornerSin: r3/2,
    maxCornerTan: r3  , minCornerTan: r3,
    radA: 1.0472, radB:1.0472, radC:1.0472,
    area: r3,
    outerRadius:1.1547005383792515, innerRadius:0.5773502691896256,
    center     : new Vector2(0, 0.5773502691896257),
    outerCenter: new Vector2(0, 0.5773502691896257),
    innerCenter: new Vector2(0, 0.5773502691896257),
    isInvalid:false,
    type: Type.Acute,
    toString: `A(0, ${r3}), B(-1, 0), C(1, 0)`,
  },
  // 適当な鋭角三角形
  acute : {
    name:"acute",
    points: [0.5, 3, 0, 1, 2, 1],
    AB:{x:-0.5, y:-2}, BC:{x:2, y:0}, CA:{x:-1.5, y:2},
    a:2, b:2.5, c:Math.sqrt(4.25),
    maxSideName:"CA", minSideName:"BC",
    maxLength:2.5, minLength:2,
    maxCornerName:"B", minCornerName:"A",
    cosA: 0.6305926250944657, cosB:0.24253562503633297, cosC:0.6,
    sinA: 0.7761140001162655, sinB:0.9701425001453319, sinC:0.8,
    tanA: 1.2307692307692308, tanB:4, tanC:1.3333333333333335,
    maxCornerCos:0.24253562503633297, minCornerCos: 0.6305926250944657,
    maxCornerSin:0.9701425001453319 , minCornerSin: 0.7761140001162655,
    maxCornerTan:4                  , minCornerTan: 1.2307692307692308,
    radA: 0.8884797719201486, radB:1.3258176636680326, radC:0.9272952180016123,
    area: 2,
    outerRadius:1.288470508005519, innerRadius:0.6096117967977924,
    center     : new Vector2(0.8333333333333333, 1.6666666666666665),
    outerCenter: new Vector2(1, 1.8125000000000002),
    innerCenter: new Vector2(0.7807764064044151, 1.6096117967977925),
    isInvalid:false,
    type: Type.Acute,
    toString: `A(0.5, 3), B(0, 1), C(2, 1)`,
  },
  // 適当な鈍角三角形
  obtuse: {
    name:"obtuse",
    points: [0, 3, -2, 3, 2, 1],
    AB:{x:-2, y:0}, BC:{x:4, y:-2}, CA:{x:-2, y:2},
    a:Math.sqrt(20), b:Math.sqrt(8), c:2,
    maxSideName:"BC", minSideName:"AB",
    maxLength:Math.sqrt(20), minLength:2,
    maxCornerName:"A", minCornerName:"C",
    cosA: -0.7071067811865477, cosB:0.8944271909999159, cosC:0.948683298050514,
    sinA: 0.7071067811865477, sinB:0.44721359549995804, sinC:0.3162277660168374,
    tanA: -1, tanB:0.5000000000000001, tanC:0.3333333333333327,
    maxCornerCos:-0.7071067811865477, minCornerCos: 0.948683298050514,
    maxCornerSin:0.7071067811865477 , minCornerSin: 0.3162277660168374,
    maxCornerTan:-1                 , minCornerTan: 0.3333333333333327,
    radA: 2.3561944901923453, radB:0.46364760900080615, radC:0.3217505543966416,
    area: 2,
    outerRadius:3.1622776601683804, innerRadius:0.43008148707802096,
    center     : new Vector2(0, 2.333333333333333),
    outerCenter: new Vector2(-1.0000000000000078, -1.665334536937739e-15),
    innerCenter: new Vector2(-0.1781455848733054, 2.569918512921979),
    isInvalid:false,
    type: Type.Obtuse,
    toString: `A(0, 3), B(-2, 3), C(2, 1)`,
  }
}

describe('Test of Triangle', () => {

  //---------------------------------------------------------------------------
  // constructor
  //---------------------------------------------------------------------------
  describe('Test of constructors', () => {
    describe('default constructor', () => {
      const t = new Triangle();
      
      it(`t.A.x = 0`, () => { expect(t.A.x).toBe(0); })
      it(`t.A.y = 0`, () => { expect(t.A.y).toBe(0); })
      it(`t.B.x = 0`, () => { expect(t.B.x).toBe(0); })
      it(`t.B.y = 0`, () => { expect(t.B.y).toBe(0); })
      it(`t.C.x = 0`, () => { expect(t.C.x).toBe(0); })
      it(`t.C.y = 0`, () => { expect(t.C.y).toBe(0); })
    })
  })

  //---------------------------------------------------------------------------
  // データによるテスト
  //---------------------------------------------------------------------------
  describe.each`
  data
  ${D.zero}
  ${D.one}
  ${D.s34}
  ${D.s11}
  ${D.equi}
  ${D.acute}
  ${D.obtuse}
  `(`Test by data`, ({data}) => {

    describe(`${data.name}:new Triangle(${data.points})`, () => {
      const t = new Triangle(data.points);

      describe(`constructor(${data.points})`, () => {
        it(`t.A.x = ${data.points[0]}`, () => { expect(t.A.x).toBe(data.points[0]); })
        it(`t.A.y = ${data.points[1]}`, () => { expect(t.A.y).toBe(data.points[1]); })
        it(`t.B.x = ${data.points[2]}`, () => { expect(t.B.x).toBe(data.points[2]); })
        it(`t.B.y = ${data.points[3]}`, () => { expect(t.B.y).toBe(data.points[3]); })
        it(`t.C.x = ${data.points[4]}`, () => { expect(t.C.x).toBe(data.points[4]); })
        it(`t.C.y = ${data.points[5]}`, () => { expect(t.C.y).toBe(data.points[5]); })
      })

      //-----------------------------------------------------------------------
      // 3辺と長さ
      //-----------------------------------------------------------------------
  
      describe(`3 sides`, () => {
        it(`AB = (${data.AB.x}, ${data.AB.y})`, () => {
          expect(t.AB).toEqual(data.AB);
        })
        it(`BC = (${data.BC.x}, ${data.BC.y})`, () => {
          expect(t.BC).toEqual(data.BC);
        })
        it(`CA = (${data.CA.x}, ${data.CA.y})`, () => {
          expect(t.CA).toEqual(data.CA);
        })
      })

      describe(`3 length`, () => {
        it(`a = ${data.a}`, () => { expect(t.a).toBeCloseTo(data.a); })
        it(`b = ${data.b}`, () => { expect(t.b).toBeCloseTo(data.b); })
        it(`c = ${data.c}`, () => { expect(t.c).toBeCloseTo(data.c); })
      })

      describe(`maxSideName`, () => {
        it(`maxSideName = ${data.maxSideName}`, () => {
          expect(t.maxSideName).toEqual(data.maxSideName);
        })
      })

      describe(`minSideName`, () => {
        it(`minSideName = ${data.minSideName}`, () => {
          expect(t.minSideName).toEqual(data.minSideName);
        })
      })

      describe(`maxLength`, () => {
        it(`maxLength = ${data.maxLength}`, () => {
          expect(t.maxLength).toBeCloseTo(data.maxLength);
        })
      })

      describe(`minLength`, () => {
        it(`minLength = ${data.minLength}`, () => {
          expect(t.minLength).toBeCloseTo(data.minLength);
        })
      })

      //-----------------------------------------------------------------------
      // 角の扱い
      //-----------------------------------------------------------------------
      describe(`maxCornerName`, () => {
        it(`maxCornerName = ${data.maxCornerName}`, () => {
          expect(t.maxCornerName).toEqual(data.maxCornerName);
        })
      })

      describe(`minCornerName`, () => {
        it(`minCornerName = ${data.minCornerName}`, () => {
          expect(t.minCornerName).toEqual(data.minCornerName);
        })
      })

      //-----------------------------------------------------------------------
      // 三角比
      //-----------------------------------------------------------------------
      describe(`cosA`, () => {
        it(`cosA = ${data.cosA}`, () => {
          expect(t.cosA).toBeCloseTo(data.cosA);
        })
      })

      describe(`cosB`, () => {
        it(`cosB = ${data.cosB}`, () => {
          expect(t.cosB).toBeCloseTo(data.cosB);
        })
      })

      describe(`cosC`, () => {
        it(`cosC = ${data.cosC}`, () => {
          expect(t.cosC).toBeCloseTo(data.cosC);
        })
      })

      describe(`sinA`, () => {
        it(`sinA = ${data.sinA}`, () => {
          expect(t.sinA).toBeCloseTo(data.sinA);
        })
      })

      describe(`sinB`, () => {
        it(`sinB = ${data.sinB}`, () => {
          expect(t.sinB).toBeCloseTo(data.sinB);
        })
      })

      describe(`sinC`, () => {
        it(`sinC = ${data.sinC}`, () => {
          expect(t.sinC).toBeCloseTo(data.sinC);
        })
      })

      describe(`tanA`, () => {
        it(`tanA = ${data.tanA}`, () => {
          expect(t.tanA).toBeCloseTo(data.tanA);
        })
      })

      describe(`tanB`, () => {
        it(`tanB = ${data.tanB}`, () => {
          expect(t.tanB).toBeCloseTo(data.tanB);
        })
      })

      describe(`tanC`, () => {
        it(`tanC = ${data.tanC}`, () => {
          expect(t.tanC).toBeCloseTo(data.tanC);
        })
      })

      describe(`maxCornerCos`, () => {
        it(`maxCornerCos = ${data.maxCornerCos}`, () => {
          expect(t.maxCornerCos).toBeCloseTo(data.maxCornerCos);
        })
      })

      describe(`minCornerCos`, () => {
        it(`minCornerCos = ${data.minCornerCos}`, () => {
          expect(t.minCornerCos).toBeCloseTo(data.minCornerCos);
        })
      })

      describe(`maxCornerSin`, () => {
        it(`maxCornerSin = ${data.maxCornerSin}`, () => {
          expect(t.maxCornerSin).toBeCloseTo(data.maxCornerSin);
        })
      })

      describe(`minCornerSin`, () => {
        it(`minCornerSin = ${data.minCornerSin}`, () => {
          expect(t.minCornerSin).toBeCloseTo(data.minCornerSin);
        })
      })

      describe(`maxCornerTan`, () => {
        it(`maxCornerTan = ${data.maxCornerTan}`, () => {
          expect(t.maxCornerTan).toBeCloseTo(data.maxCornerTan);
        })
      })

      describe(`minCornerTan`, () => {
        it(`minCornerTan = ${data.minCornerTan}`, () => {
          expect(t.minCornerTan).toBeCloseTo(data.minCornerTan);
        })
      })

      describe(`radA`, () => {
        it(`radA = ${data.radA}`, () => {
          expect(t.radA).toBeCloseTo(data.radA);
        })
      })

      describe(`radB`, () => {
        it(`radB = ${data.radB}`, () => {
          expect(t.radB).toBeCloseTo(data.radB);
        })
      })

      describe(`radC`, () => {
        it(`radC = ${data.radC}`, () => {
          expect(t.radC).toBeCloseTo(data.radC);
        })
      })

      //-----------------------------------------------------------------------
      // 幾何学
      //-----------------------------------------------------------------------
      describe(`area`, () => {
        it(`area = ${data.area}`, () => {
          expect(t.area).toBeCloseTo(data.area);
        })
      })

      describe(`outerRadius`, () => {
        it(`outerRadius = ${data.outerRadius}`, () => {
          expect(t.outerRadius).toBeCloseTo(data.outerRadius);
        })
      })

      describe(`innerRadius`, () => {
        it(`innerRadius = ${data.innerRadius}`, () => {
          expect(t.innerRadius).toBeCloseTo(data.innerRadius);
        })
      })

      describe(`center`, () => {
        it(`center = ${data.center.toString()}`, () => {
          expect(t.center).toEqual(data.center);
        })
      })

      describe(`outerCenter`, () => {
        it(`outerCenter = ${data.outerCenter.toString()}`, () => {
          expect(t.outerCenter).toEqual(data.outerCenter);
        })
      })

      describe(`innerCenter`, () => {
        it(`innerCenter = ${data.innerCenter.toString()}`, () => {
          expect(t.innerCenter).toEqual(data.innerCenter);
        })
      })

      //-----------------------------------------------------------------------
      // 三角形の成立条件
      //-----------------------------------------------------------------------
      describe(`isInvalid`, () => {
        it(`isInvalid = ${data.isInvalid}`, () => {   
          expect(t.isInvalid).toEqual(data.isInvalid); 
        })
      })

      describe(`type`, () => {
        it(`type = ${data.type}`, () => {   
          expect(t.type).toEqual(data.type); 
        })
      })

      describe(`toString()`, () => {
        it(`toString() = ${data.toString}`, () => {   
          expect(t.toString()).toEqual(data.toString); 
        })
      })
    })
  })

  //---------------------------------------------------------------------------
  // 追加テスト
  //---------------------------------------------------------------------------
  describe(`cover line 116, 161`, () => {
    const f = new Triangle([2, 1, 0, 0, 2, 0]);

    it(`f.minSideName=CA`, () => {
      expect(f.minSideName).toBe("CA");
    })

    it(`f.minCornerName=B`, () => {
      expect(f.minCornerName).toBe("B");
    })
  })
})