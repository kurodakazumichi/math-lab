import Linear from './Linear';

describe('Test of Linear', () => {
  //---------------------------------------------------------------------------
  // constructor
  //---------------------------------------------------------------------------
  describe('default constructor', () => {
    const f = new Linear();
    it ('f.a == 0', () => { expect(f.a).toBe(0); })
    it ('f.b == 0', () => { expect(f.b).toBe(0); })
  })

  //---------------------------------------------------------------------------
  // getter / setter
  //---------------------------------------------------------------------------
  describe('Test of setter and getter', () => {

    //-------------------------------------------------------------------------
    describe.each`
    v     
    ${-1} 
    ${0}  
    ${1}  
    `(`Test of properity a`, ({v}) => {
      
      const f = new Linear();
      it(`set a = ${v}, and get a = ${v}`, () => {
        f.a = v;
        expect(f.a).toBe(v);
      })
    })

    //-------------------------------------------------------------------------
    describe.each`
    v     
    ${-1} 
    ${0}  
    ${1}  
    `(`Test of properity b`, ({v}) => {
      
      const f = new Linear();
      it(`set b = ${v}, and get b = ${v}`, () => {
        f.b = v;
        expect(f.b).toBe(v);
      })
    })
  })

  //---------------------------------------------------------------------------
  // 座標計算
  //---------------------------------------------------------------------------
  describe.each`
  a | b | x | y
  ${0}        | ${0} | ${0} | ${0}
  ${1}        | ${0} | ${0} | ${0}
  ${1}        | ${0} | ${1} | ${1}
  ${1}        | ${1} | ${0} | ${1}
  ${1}        | ${1} | ${1} | ${2}
  ${Infinity} | ${1} | ${1} | ${0}
  `(`Test of calc coordinate`, ({a, b, x, y}) => {

    const f = new Linear();
    f.a = a, f.b = b;
    
    it(`fx(${x}) => ${y}`, () => {
      expect(f.fx(x)).toBe(y);
    })
  })

  //---------------------------------------------------------------------------
  // 初期化
  //---------------------------------------------------------------------------
  describe('Test of all initialization processing.', () => {

    describe.each`
    a | b 
    ${-1} | ${-1}
    ${0}  | ${0}
    ${1}  | ${1}
    `(`Test of initStandardForm`, ({a, b}) => {
  
      describe(`f.initStandardForm(${a}, ${b})`, () => {
        const f = new Linear();
        f.initStandardForm(a, b);

        it(`f.a = ${a}`, () => { expect(f.a).toBe(a); })
        it(`f.b = ${a}`, () => { expect(f.b).toBe(b); })
      })
    })

    describe.each`
    A | B | C | a | b
    ${3}   | ${-2} | ${8} | ${3/2}       | ${-4}
    ${0}   | ${1}  | ${3} | ${0}         | ${3}
    ${0.5} | ${-1} | ${0} | ${0.5}       | ${0}
    ${0.5} | ${0}  | ${1} | ${-Infinity} | ${Infinity}
    ${0.5} | ${0}  | ${0} | ${-Infinity} | ${NaN}
    ${0}   | ${0}  | ${0} | ${NaN}       | ${NaN}
    `(`Test of initGeneralForm`, ({A, B, C, a, b}) => {
  
      describe(`f.initGeneralForm(${A}, ${B}, ${C})`, () => {
        const f = new Linear();
        f.initGeneralForm(A, B, C);

        it(`f.a = ${a}`, () => { expect(f.a).toBe(a); })
        it(`f.b = ${b}`, () => { expect(f.b).toBe(b); })
      })
    })

    describe.each`
    a | x | y | b
    ${3}  | ${1} | ${-2} | ${-5}
    ${2}  | ${3} | ${1}  | ${-5}
    ${-3} | ${2} | ${1}  | ${7}
    ${5}  | ${2} | ${4}  | ${-6}
    `(`Test of initBySlopeAndPoint`, ({a, x, y, b}) => {
  
      describe(`f.initBySlopeAndPoint(${a}, ${x}, ${y}, ${b})`, () => {
        const f = new Linear();
        f.initBySlopeAndPoint(a, x, y);

        it(`f.a = ${a}`, () => { expect(f.a).toBe(a); })
        it(`f.b = ${b}`, () => { expect(f.b).toBe(b); })
      })
    })

    describe.each`
     x1 | y1 | x2 | y2 | a | b
    ${2} | ${6}  | ${4} | ${14}  | ${4}  | ${-2}
    ${1} | ${3}  | ${3} | ${11}  | ${4}  | ${-1}
    ${2} | ${-1} | ${4} | ${-13} | ${-6} | ${11}
    `(`Test of initBy2Point`, ({x1, y1, x2, y2, a,  b}) => {
  
      describe(`f.initBy2Point(${x1}, ${y1}, ${x2}, ${y2})`, () => {
        const f = new Linear();
        f.initBy2Point(x1, y1, x2, y2);

        it(`f.a = ${a}`, () => { expect(f.a).toBe(a); })
        it(`f.b = ${b}`, () => { expect(f.b).toBe(b); })
      })
    })

  })

  //---------------------------------------------------------------------------
  // 状態
  //---------------------------------------------------------------------------
  describe.each`
  a            | b | invalid
  ${0}         | ${0}         | ${false}
  ${1}         | ${0}         | ${false}
  ${-1}        | ${0}         | ${false}
  ${Infinity}  | ${0}         | ${true}
  ${-Infinity} | ${0}         | ${true}
  ${NaN}       | ${0}         | ${true}
  ${0}         | ${1}         | ${false}
  ${0}         | ${-1}        | ${false}
  ${0}         | ${Infinity}  | ${true}
  ${0}         | ${-Infinity} | ${true}
  ${0}         | ${NaN}       | ${true}
  `(`Test of isInvalid`, ({a, b, invalid}) => {

    const f = new Linear();
    f.a = a; f.b = b;
    
    it(`${f.toString()}.isInvalid = ${invalid}`, () => {
      expect(f.isInvalid).toBe(invalid);
    })
  })

  describe.each`
  a | b | result
  ${{a:1, b:0}}   | ${{a:-1, b:0}}   | ${true}
  ${{a:1, b:0}}   | ${{a:-1, b:2}}   | ${true}
  ${{a:1, b:1}}   | ${{a: 1, b:2}}   | ${false}
  ${{a:NaN, b:1}} | ${{a: 1, b:2}}   | ${false}
  ${{a:1, b:1}}   | ${{a: NaN, b:2}} | ${false}
  `(`Test of isPerpWith`, ({a, b, result}) => {

    const f1 = new Linear().initStandardForm(a.a, a.b);
    const f2 = new Linear().initStandardForm(b.a, b.b);
    
    it(`f1.isPerpWith(f2) = ${result}`, () => {
      expect(f1.isPerpWith(f2)).toBe(result);
    })
  })

  //---------------------------------------------------------------------------
  // Util
  //---------------------------------------------------------------------------
  describe.each`
  a | b | slope
  ${0} | ${0} | ${0}
  ${1} | ${0} | ${-1}
  ${2} | ${2} | ${-1/2}

  `(`Test of perpSlope`, ({a, b, slope}) => {
    const f = new Linear().initStandardForm(a, b);

    it(`${f.toString()}.perpSlope() = ${slope}`, () => {
      expect(f.perpSlope).toBe(slope);
    })
  })

  //---------------------------------------------------------------------------
  // Static
  //---------------------------------------------------------------------------
  describe.each`
  f1  | f2 | count | points 
  ${ new Linear(0, 0) } | ${ new Linear(0, 0) }  | ${0} | ${[]}
  ${ new Linear(1, 0) } | ${ new Linear(1, 0) }  | ${0} | ${[]}
  ${ new Linear(2, 0) } | ${ new Linear(1, 0) }  | ${1} | ${[0, 0]}
  ${ new Linear(1, 0) } | ${ new Linear(-1, 1) } | ${1} | ${[0.5, 0.5]}
  `(`Test of intersect`, ({f1, f2, count, points}) => {

    describe(`${f1.toString()} intersect ${f2.toString()}`, () => {

      it(`count = ${count}, points = [${points}]`, () => {
        expect(Linear.intersect(f1, f2)).toEqual({count, points});
      })

    })
  })

})