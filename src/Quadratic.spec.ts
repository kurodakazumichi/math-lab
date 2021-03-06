import Quadratic from './Quadratic';

//-----------------------------------------------------------------------------
// static 
//-----------------------------------------------------------------------------
describe('Test of static in Quadratic.', () => {
  describe.each`
  a | b | result
  ${0}  | ${0}  | ${NaN}
  ${1}  | ${0}  | ${-0}
  ${0}  | ${1}  | ${-Infinity}
  ${1}  | ${1}  | ${-0.5}
  ${-1} | ${-1} | ${-0.5}
  ${1}  | ${-1} | ${0.5}
  `(`Test of calcP_By_ab()`, ({a, b, result}) => {
    describe(`calcP_By_ab(${a}, ${b})`, () => {
      it(`is ${result}.`, () => {
        expect(Quadratic.calcP_By_ab(a, b)).toBe(result);
      })
    })
  })

  describe.each`
  a    | b   | c    | d    | e   | f   | result
  ${1} |${0} |${0}  |${-1} |${0} |${0} |${{count:1, points:[0, 0]}}
  ${0} |${0} |${0}  |${-1} |${0} |${0} |${{count:0, points:[]}}
  ${1} |${0} |${1}  |${-1} |${0} |${0} |${{count:0, points:[]}}
  ${1} |${0} |${-1} |${-1} |${0} |${1} |${{count:2, points:[-Math.sqrt(1), 0, Math.sqrt(1), 0]}}
  ${1} |${0} |${0}  |${1}  |${1} |${1} |${{count:1, points:[1, 1]}}
  ${1} |${0} |${0}  |${1}  |${0} |${1} |${{count:0, points:[]}}
  `(`Test of intersect()`, ({a, b, c, d, e, f, result}) => {

    describe(`initStandardForm(${a}, ${b}, ${c}) intersect initStandardForm(${d}, ${e}, ${f})`, () => {
      it(``, () => {
        const fa = new Quadratic().initStandardForm(a, b, c);
        const fb = new Quadratic().initStandardForm(d, e, f);
        expect(Quadratic.intersect(fa, fb)).toEqual(result);
      })
    });

  })
})  

describe('Test of Quadratic', () => 
{
  //---------------------------------------------------------------------------
  // constructor
  //---------------------------------------------------------------------------
  describe('default constructor', () => {
    const f = new Quadratic();
    it (`f.a == 0`, () => { expect(f.a).toBe(0); })
    it (`f.b == 0`, () => { expect(f.b).toBe(0); })
    it (`f.c == 0`, () => { expect(f.c).toBe(0); })
    it (`f.d == 0`, () => { expect(f.p).toBe(NaN); })
    it (`f.e == 0`, () => { expect(f.q).toBe(NaN); })
  })

  //---------------------------------------------------------------------------
  // initialize
  //---------------------------------------------------------------------------
  describe('initStandardForm(0, 0, 0)', () => {
    const f = new Quadratic();
    f.initStandardForm(0, 0, 0);
    it (`is a=0`, () => { expect(f.a).toBe(0); })
    it (`is b=0`, () => { expect(f.b).toBe(0); })
    it (`is c=0`, () => { expect(f.c).toBe(0); })
    it (`is p=0`, () => { expect(f.p).toBe(NaN); })
    it (`is q=0`, () => { expect(f.q).toBe(NaN); })
  })

  describe('initGeneralForm(0, 0, 0)', () => {
    const f = new Quadratic();
    f.initGeneralForm(0, 0, 0);
    it (`is a=0`  , () => { expect(f.a).toBe(0); })
    it (`is b=0`  , () => { expect(f.b).toBe(0); })
    it (`is c=0`  , () => { expect(f.c).toBe(0); })
    it (`is p=NaN`, () => { expect(f.p).toBe(NaN); })
    it (`is q=NaN`, () => { expect(f.q).toBe(NaN); })
  })

  //---------------------------------------------------------------------------
  describe.each`
  a       | p     | q     | b      | c
  ${2}    | ${0}  | ${0}  | ${0}   | ${0} 
  ${-0.5} | ${0}  | ${0}  | ${0}   | ${0}
  ${2}    | ${0}  | ${3}  | ${0}   | ${3}
  ${2}    | ${1}  | ${0}  | ${-4}  | ${2}
  ${-1}   | ${0}  | ${-3} | ${0}   | ${-3}
  ${2}    | ${1}  | ${3}  | ${-4}  | ${5}
  `(`Test of initStandardForm or initGeneralForm`, ({a, p, q, b, c}) => {

    describe(`initStandardForm(${a}, ${p}, ${q})`,() => {
      const f = new Quadratic();
      f.initStandardForm(a, p, q);
      it (`is a=${a}`, () => { expect(f.a).toBe(a); })
      it (`is b=${b}`, () => { expect(f.b).toBe(b); })
      it (`is c=${c}`, () => { expect(f.c).toBe(c); })
      it (`is p=${p}`, () => { expect(f.p).toBe(p); })
      it (`is q=${q}`, () => { expect(f.q).toBe(q); })
    })

    describe(`initGeneralForm(${a}, ${b}, ${c})`, () => {
      const f = new Quadratic();
      f.initGeneralForm(a, b, c);
      it (`is a=${a}`, () => { expect(f.a).toBe(a); })
      it (`is b=${b}`, () => { expect(f.b).toBe(b); })
      it (`is c=${c}`, () => { expect(f.c).toBe(c); })
      it (`is p=${p}`, () => { expect(f.p).toBe(p); })
      it (`is q=${q}`, () => { expect(f.q).toBe(q); })
    })
  });

  describe.each`
  a     | s     | t     | b     | c      
  ${0}  | ${0}  | ${0}  | ${0}  | ${0}  
  ${1}  | ${0}  | ${1}  | ${-1} | ${0} 
  ${2}  | ${2}  | ${-2} | ${0}  | ${-8}   
  `(`Test of initFactorizationForm()`, ({a, s, t, b, c}) => {
    describe(`initFactorizationForm(${a}, ${s}, ${t})`, () => {
      const f = new Quadratic().initFactorizationForm(a, s, t);

      it(`is a=${a}`, () => { expect(f.a).toBe(a); });
      it(`is b=${b}`, () => { expect(f.b).toBe(b); });
      it(`is c=${c}`, () => { expect(f.c).toBe(c); });
    })
  })

  describe.each`
  p     | q     | x     | y     | a      | b     | c 
  ${1}  | ${5}  | ${0}  | ${3}  | ${-2}  | ${4}  | ${3}
  ${1}  | ${5}  | ${-1} | ${7}  | ${0.5} | ${-1} | ${5.5}
  ${-2} | ${-1} | ${0}  | ${11} | ${3}   | ${12} | ${11}
  `(`Test of initByApexAndPassPoint()`, ({p, q, x, y, a, b, c}) => {
    describe(`initByApexAndPassPoint(${p}, ${q}, ${x}, ${y})`, () => {
      const f = new Quadratic();
      f.initByApexAndPassPoint(p, q, x, y);
      it(`is a=${a}`, () => { expect(f.a).toBe(a); });
      it(`is b=${b}`, () => { expect(f.b).toBe(b); });
      it(`is c=${c}`, () => { expect(f.c).toBe(c); });
      it(`is p=${p}`, () => { expect(f.p).toBe(p); });
      it(`is q=${q}`, () => { expect(f.q).toBe(q); });
    })
  })

  describe.each`
  axis | x1   | y1   | x2    | y2    | a     | b    | c    | p    | q 
  ${3} | ${5} | ${6} | ${-1} | ${-6} | ${-1} | ${6} | ${1} | ${3} | ${10}
  `(`Test of initByAxisAnd2PassPoints()`, ({axis, x1, y1, x2, y2, a, b, c, p, q}) => {
    describe(`initByAxisAnd2PassPoints(${axis}, ${x1}, ${y1}, ${x2}, ${y2})`, () => {
      const f = new Quadratic();
      f.initByAxisAnd2PassPoints(axis, x1, y1, x2, y2);
      it(`is a=${a}`, () => { expect(f.a).toBe(a); });
      it(`is b=${b}`, () => { expect(f.b).toBe(b); });
      it(`is c=${c}`, () => { expect(f.c).toBe(c); });
      it(`is p=${p}`, () => { expect(f.p).toBe(p); });
      it(`is q=${q}`, () => { expect(f.q).toBe(q); });
    })
  })

  describe.each`
  x1    |y1    | x2   |y2    |x3    |y3   | a    | b    | c    | p      | q 
  ${1}  |${-2} |${-2} |${4}  |${-3} |${2} |${-1} |${-3} |${2}  |${-1.5} |${17/4}
  ${-1} |${1}  |${1}  |${-3} |${3}  |${9} |${2}  |${-2} |${-3} |${0.5}  |${-7/2}
  `(`Test of initBy3PassPoints()`, ({x1, y1, x2, y2, x3, y3, a, b, c, p, q}) => {
    describe(`initBy3PassPoints(${x1}, ${y1}, ${x2}, ${y2}, ${x3}, ${y3})`, () => {
      const f = new Quadratic();
      f.initBy3PassPoints(x1, y1, x2, y2, x3, y3);
      it(`is a=${a}`, () => { expect(f.a).toBe(a); });
      it(`is b=${b}`, () => { expect(f.b).toBe(b); });
      it(`is c=${c}`, () => { expect(f.c).toBe(c); });
      it(`is p=${p}`, () => { expect(f.p).toBe(p); });
      it(`is q=${q}`, () => { expect(f.q).toBe(q); });
    })
  })

  //---------------------------------------------------------------------------
  // change properity
  //---------------------------------------------------------------------------
  describe.each`
  a       | p            | q            | b    | c
  ${-1}   | ${0.5}       | ${1.25}      | ${1} | ${1} 
  ${2}    | ${-0.25}     | ${7/8}         | ${1} | ${1}
  ${0}    | ${-Infinity} | ${-Infinity} | ${1} | ${1}
  `(`Test of setter a`, ({a, b, c, p, q}) => {
    
    describe(`When a changed from 1 to ${a}, related property is changed `, () => {
      const f = new Quadratic();
      f.initGeneralForm(1, 1, 1);
      f.a = a;

      it (`f.a is ${a}`, () => { expect(f.a).toBe(a); })
      it (`f.b is ${b}`, () => { expect(f.b).toBe(b); })
      it (`f.c is ${c}`, () => { expect(f.c).toBe(c); })
      it (`f.p is ${p}`, () => { expect(f.p).toBe(p); })
      it (`f.q is ${q}`, () => { expect(f.q).toBe(q); })
    })
  })

  describe.each`
  b       | a     | c     | p      | q
  ${-1}   | ${1}  | ${2}  | ${0.5} | ${7/4} 
  ${0}    | ${1}  | ${2}  | ${0}   | ${2}
  ${2}    | ${1}  | ${2}  | ${-1}  | ${1}
  `(`Test of setter b`, ({b, a, c, p, q}) => {
    
    describe(`When b changed from 1 to ${b}, related property is changed `, () => {
      const f = new Quadratic();
      f.initStandardForm(1, 1, 1);
      f.b = b;

      it (`f.a is ${a}`, () => { expect(f.a).toBe(a); })
      it (`f.b is ${b}`, () => { expect(f.b).toBe(b); })
      it (`f.c is ${c}`, () => { expect(f.c).toBe(c); })
      it (`f.p is ${p}`, () => { expect(f.p).toBe(p); })
      it (`f.q is ${q}`, () => { expect(f.q).toBe(q); })
    })
  })

  describe.each`
  c       | a     | b     | p     | q
  ${-1}   | ${1}  | ${-2} | ${1}  | ${-2} 
  ${0}    | ${1}  | ${-2} | ${1}  | ${-1}
  ${2}    | ${1}  | ${-2} | ${1}  | ${1}
  `(`Test of setter c`, ({b, a, c, p, q}) => {
    
    describe(`When c changed from 1 to ${c}, related property is changed `, () => {
      const f = new Quadratic();
      f.initStandardForm(1, 1, 1);
      f.c = c;

      it (`f.a is ${a}`, () => { expect(f.a).toBe(a); })
      it (`f.b is ${b}`, () => { expect(f.b).toBe(b); })
      it (`f.c is ${c}`, () => { expect(f.c).toBe(c); })
      it (`f.p is ${p}`, () => { expect(f.p).toBe(p); })
      it (`f.q is ${q}`, () => { expect(f.q).toBe(q); })
    })
  })

  //---------------------------------------------------------------------------
  // 座標計算
  //---------------------------------------------------------------------------
  describe.each`
  a      | p    | q    | x    | y
  ${1}   | ${0} | ${0} |${0}  |${0}
  ${1}   | ${0} | ${0} |${1}  |${1}
  ${1}   | ${0} | ${0} |${-1} |${1}
  ${2}   | ${3} | ${4} |${0}  |${22}
  ${2}   | ${3} | ${4} |${1}  |${12}
  ${2}   | ${3} | ${4} |${-1} |${36}
  ${NaN} | ${0} | ${0} |${0}  |${0}
  `(`Test of fx()`, ({a, p, q, x, y}) => {
    describe(`initStandardForm(${a}, ${p}, ${q}).f(${x})`, () => {
      const f = new Quadratic().initStandardForm(a, p, q);
      it(`fx(${x}) = ${y}`, () => { expect(f.fx(x)).toBe(y); })
    })
  })

  describe.each`
  a      | b    | c    | points
  ${0}   | ${0} | ${0} |${[]}  
  ${1}   | ${0} | ${0} |${[-2, 4, -1, 1, 0, 0, 1, 1, 2, 4]}  
  `(`Test of getPoints()`, ({a, b, c, points}) => {
    describe(`getPoints(-2, 2, 1)`, () => {

      const p = new Quadratic()
        .initGeneralForm(a, b, c)
        .getPoints(-2, 2, 1);

      it(`points = ${points}`, () => { expect(p).toEqual(points); })
    })
  })

  describe.each`
  a      | b    | c    | points
  ${0}   | ${0} | ${0} |${[]}  
  ${1}   | ${0} | ${0} |${[-2, 0, 2, 0]}  
  ${1}   | ${1} | ${3} |${[-2, 1, 2, 5]}  
  `(`Test of getPointsOfSlopeAtYTangent()`, ({a, b, c, points}) => {
    describe(`getPointsOfSlopeAtYTangent(-2, 2)`, () => {

      const p = new Quadratic()
        .initGeneralForm(a, b, c)
        .getPointsOfSlopeAtYTangent(-2, 2);

      it(`points = ${points}`, () => { expect(p).toEqual(points); })
    })
  })

  //---------------------------------------------------------------------------
  // 導出項目
  //---------------------------------------------------------------------------
  describe.each`
  a     | p     | q 
  ${1}  | ${0}  | ${0}
  ${2}  | ${2}  | ${4}
  ${-1} | ${-3} | ${4}
  `
  (`Test of apex`, ({a, p, q}) => {
    describe(`initStandardForm(${a}, ${p}, ${q}).apex`, () => {
      const f = new Quadratic().initStandardForm(a, p, q);
      it(`is (${p}, ${q})`, () => { expect(f.apex).toEqual({x:p, y:q}); })
    })
  })

  describe.each`
  a     | p     | q 
  ${1}  | ${0}  | ${0}
  ${2}  | ${2}  | ${4}
  ${-1} | ${-3} | ${4}
  `
  (`Test of axis`, ({a, p, q}) => {
    describe(`initStandardForm(${a}, ${p}, ${q}).axis`, () => {
      const f = new Quadratic().initStandardForm(a, p, q);
      it(`is x = ${p}`, () => { expect(f.axis).toBe(p); })
    })
  })

  describe.each`
  a           | result
  ${0}        | ${true}
  ${1}        | ${false}
  ${-1}       | ${false}
  ${NaN}      | ${true}
  ${Infinity} | ${true}
  `(`Test of isInvalid`, ({a, result}) => {
    const f = new Quadratic();
    f.a = a;

    it(`is ${result} when a = ${a}.`, () => { expect(f.isInvalid).toBe(result); })
  });

  describe.each`
  a | b| c |result
  ${0} | ${0} | ${0}        | ${false}
  ${0} | ${1} | ${0}        | ${false}
  ${1} | ${0} | ${Infinity} | ${false}
  ${1} | ${0} | ${0}        | ${true}
  `(`Test of hasApex`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is ${result} when (a, b, c) = (${a}, ${b}, ${c}).`, () => { 
      expect(f.hasApex).toBe(result);
    })
  });

  describe.each`
  a     | p     | q    | max
  ${-1} | ${-3} | ${4} | ${4}
  ${0}  | ${-3} | ${4} | ${undefined}
  ${1}  | ${0}  | ${0} | ${undefined}
  `(`Test of max`, ({a, p, q, max}) => {
    describe(`initStandardForm(${a}, ${p}, ${q}).max`, () => {
      const f = new Quadratic().initStandardForm(a, p, q);
      it(`is max = ${p}`, () => { expect(f.max).toBe(max); })
    })
  })

  describe.each`
  a     | p     | q    | min
  ${-1} | ${-3} | ${4} | ${undefined}
  ${0}  | ${-3} | ${4} | ${undefined}
  ${1}  | ${0}  | ${0} | ${0}
  `(`Test of min`, ({a, p, q, min}) => {
    describe(`initStandardForm(${a}, ${p}, ${q}).max`, () => {
      const f = new Quadratic().initStandardForm(a, p, q);
      it(`is min = ${p}`, () => { expect(f.min).toBe(min); })
    })
  })

  describe.each`
  a     | b     | c    | conditions
  ${1} | ${-4} | ${-1} | ${"toBeGreaterThan"}
  ${1} | ${-4} | ${4}  | ${"toBe"}
  ${1} | ${-4} | ${5}  | ${"toBeLessThan"}
  `(`Test of discriminant`, ({a, b, c, conditions}) => {
    describe(`initGeneralForm(${a}, ${b}, ${c}).discriminant`, () => {
      const f = new Quadratic().initGeneralForm(a, b, c);
      it(`is ${conditions} 0`, () => { 
        const e:any = expect(f.discriminant);
        e[conditions](0)
      })
    })
  })

  describe.each`
  a     | b      | c    | solution
  ${1}  | ${-4}  | ${-1} | ${[2-Math.sqrt(5), 2+Math.sqrt(5)]}
  ${1}  | ${-4}  | ${4}  | ${[2]}
  ${1}  | ${-4}  | ${5}  | ${[]}
  ${1}  | ${3}   | ${-1} | ${[(-3-Math.sqrt(13))/2, (-3+Math.sqrt(13))/2]}
  ${-4} | ${-12} | ${-9} | ${[-3/2]}
  ${-2} | ${1}   | ${-1} | ${[]}
  ${0}  | ${0}   | ${0}  | ${undefined}
  `(`Test of solution`, ({a, b, c, solution}) => {
    describe(`initGeneralForm(${a}, ${b}, ${c}).solution`, () => {
      const f = new Quadratic().initGeneralForm(a, b, c);
      it(`is ${solution}`, () => { expect(f.solution).toEqual(solution); })
    })
  })

  describe.each`
  a     | b      | c     | result
  ${0}  | ${0}   | ${0}  | ${false}
  ${1}  | ${0}   | ${0}  | ${false}
  ${-1} | ${0}   | ${0}  | ${false}
  ${-1} | ${0}   | ${1}  | ${false}
  ${1}  | ${0}   | ${1}  | ${true}
  `(`Quadratic is positive definite?`, ({a, b, c, result}) => {
    describe(`initGeneralForm(${a}, ${b}, ${c}).isPositiveDefinite`, () => {
      const f = new Quadratic().initGeneralForm(a, b, c);
      it(`is ${result}`, () => { 
        expect(f.isPositiveDefinite).toEqual(result); 
      })
    })
  })

  describe.each`
  a     | b      | c     | result
  ${0}  | ${0}   | ${0}  | ${false}
  ${1}  | ${0}   | ${0}  | ${false}
  ${1}  | ${0}   | ${1}  | ${false}
  ${-1} | ${0}   | ${0}  | ${false}
  ${-1} | ${0}   | ${1}  | ${false}
  ${-1} | ${2}   | ${-2} | ${true}
  `(`Quadratic is negative definite?`, ({a, b, c, result}) => {
    describe(`initGeneralForm(${a}, ${b}, ${c}).isNegativeDefinite`, () => {
      const f = new Quadratic().initGeneralForm(a, b, c);
      it(`is ${result}`, () => { 
        expect(f.isNegativeDefinite).toEqual(result); 
      })
    })
  })


  //---------------------------------------------------------------------------
  // 文字列
  //---------------------------------------------------------------------------
  describe.each`
  a           | result
  ${0}        | ${"なし"}
  ${1}        | ${"1.0"}
  ${-1}       | ${"-1.0"}
  ${NaN}      | ${"なし"}
  ${Infinity} | ${"なし"}
  `(`Test of toStringOfSlope()`, ({a, result}) => {
    const f = new Quadratic();
    f.a = a;

    it(`is "${result}" when a = ${a}.`, () => { 
      expect(f.toStringOfSlope(1)).toBe(result); 
      expect(f.toStringOfSlope()).toBe(result); 
    })
  });

  describe.each`
  a           |b   |c   | result
  ${0}        |${0}|${0}| ${"なし"}
  ${1}        |${-2}|${2}| ${"x=1.0"}
  ${-1}       |${0}|${0}| ${"x=0.0"}
  ${NaN}      |${0}|${0}| ${"なし"}
  ${Infinity} |${0}|${0}| ${"なし"}
  `(`Test of toStringOfAxis()`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is "${result}" when initGeneralForm(${a}, ${b}, ${c}).`, () => { 
      expect(f.toStringOfAxis(1)).toBe(result); 
      expect(f.toStringOfAxis()).toBe(result); 
    })
  });

  describe.each`
  a           |b   |c    | result
  ${0}        |${0}|${0} | ${"なし"}
  ${1}        |${-2}|${2}| ${"(1.0, 1.0)"}
  ${-1}       |${0}|${0} | ${"(0.0, 0.0)"}
  ${NaN}      |${0}|${0} | ${"なし"}
  ${Infinity} |${0}|${0} | ${"なし"}
  `(`Test of toStringOfAxis()`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is "${result}" when initGeneralForm(${a}, ${b}, ${c}).`, () => { 
      expect(f.toStringOfApex(1)).toBe(result); 
      expect(f.toStringOfApex()).toBe(result); 
    })
  });

  describe.each`
  a           |b    |c    | result
  ${0}        |${0} |${0} | ${"none"}
  ${1}        |${-2}|${2} | ${"$$y=1.0(x - (1.0))^2 + (1.0)$$"}
  ${-1}       |${0} |${0} | ${"$$y=-1.0(x - (0.0))^2 + (0.0)$$"}
  ${NaN}      |${0} |${0} | ${"none"}
  ${Infinity} |${0} |${0} | ${"none"}
  `(`Test of toStringOfLatexAPQ()`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is "${result}" when initGeneralForm(${a}, ${b}, ${c}).`, () => { 
      expect(f.toStringOfLatexAPQ(1)).toBe(result); 
      expect(f.toStringOfLatexAPQ()).toBe(result); 
    })
  });

  describe.each`
  a           |b    |c    | result
  ${0}        |${0} |${0} | ${"none"}
  ${1}        |${-2}|${2} | ${"$$y=1.0x^2 + (-2.0)x + (2.0)$$"}
  ${-1}       |${0} |${0} | ${"$$y=-1.0x^2 + (0.0)x + (0.0)$$"}
  ${NaN}      |${0} |${0} | ${"none"}
  ${Infinity} |${0} |${0} | ${"none"}
  `(`Test of toStringOfLatexABC()`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is "${result}" when initGeneralForm(${a}, ${b}, ${c}).`, () => { 
      expect(f.toStringOfLatexABC(1)).toBe(result); 
      expect(f.toStringOfLatexABC()).toBe(result); 
    })
  });

  describe.each`
  a           | result
  ${0}        | ${""}
  ${1}        | ${"下に凸"}
  ${-1}       | ${"上に凸"}
  ${NaN}      | ${""}
  ${Infinity} | ${""}
  `(`Test of toStringAboutShape()`, ({a, result}) => {
    const f = new Quadratic();
    f.a = a;

    it(`is "${result}" when a = ${a}.`, () => { expect(f.toStringAboutShape()).toBe(result); })
  });

  describe.each`
  a           |b    |c    | result
  ${0}        |${0} |${0} | ${"{a:0, b:0, c:0, p:NaN, q:NaN}"}
  ${1}        |${-2}|${2} | ${"{a:1, b:-2, c:2, p:1, q:1}"}
  ${-1}       |${0} |${0} | ${"{a:-1, b:0, c:0, p:0, q:0}"}
  ${NaN}      |${0} |${0} | ${"{a:NaN, b:0, c:0, p:NaN, q:NaN}"}
  ${Infinity} |${0} |${0} | ${"{a:Infinity, b:0, c:0, p:0, q:NaN}"}
  `(`Test of toString()`, ({a, b, c, result}) => {
    const f = new Quadratic().initGeneralForm(a, b, c);

    it(`is "${result}" when initGeneralForm(${a}, ${b}, ${c}).`, () => { 
      expect(f.toString()).toBe(result); 
    })
  });

  //---------------------------------------------------------------------------
  // 応用
  //---------------------------------------------------------------------------
  describe.each`
  l      | x       | max
  ${8}   | ${4}    | ${16}
  ${100} | ${50}   | ${2500}
  ${0.1} | ${0.05} | ${0.05*0.05}
  `
  (`直角二等辺三角形に内接する長方形の最大の面積を計算`, ({l, x, max}) => {
    describe(`1辺が${l}cmの直角二等右辺三角形の場合`, () => {
      const f = new Quadratic().initGeneralForm(-1, l, 0);
  
      it(`1辺が${x}cmの時、面積が${max}cm2で最大となる`, () => {
        expect(f.apex.x).toBe(x);
        expect(f.max).toBe(max);
      })
    })
  })

  describe.each`
  t     | x    | y    | s                 | max
  ${10} | ${5} | ${5} | ${Math.sqrt(50)}  | ${25/2}
  ${18} | ${9} | ${9} | ${Math.sqrt(162)} | ${81/2}
  `
  (`直角三角形の面積が最大となる場合の３辺の長さ`, ({t, x, y, s, max}) => {
    describe(`直角を挟む2辺の長さの和が${t}の三角形について`, () => {
      const f = new Quadratic().initGeneralForm(-0.5, t/2, 0);

      const ans = {
        x  : f.apex.x,
        y  : t - f.apex.x,
        max: f.max,
        s  : 0,
      }
      ans.s = Math.sqrt(ans.x * ans.x + ans.y * ans.y);


      it(`底辺が${x}、高さが${y}、斜辺が${s}の時、面積が${max}cm2で最大となる`, () => {
        expect(ans.x).toBe(x);
        expect(ans.y).toBe(y);
        expect(ans.s).toBe(s);
        expect(ans.max).toBe(max);
      })
    })
  })

});