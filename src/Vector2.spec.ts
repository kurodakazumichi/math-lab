import Vector2 from '~/Vector2';

describe('Test of Vector2', () => {

  describe('Test of default constructor', () => {
    const v = new Vector2();
    it (`v.x == 0`, () => { expect(v.x).toBe(0); })
    it (`v.y == 0`, () => { expect(v.x).toBe(0); })
  })
  
  //---------------------------------------------------------------------------
  // ベクトルの相等
  describe.each`
  v1 | v2 | result
  ${new Vector2(0, 0)} | ${new Vector2(0, 0)} | ${true}
  ${new Vector2(1, 1)} | ${new Vector2(0, 0)} | ${false}
  `
  (`Test of Vector2.equal`, ({v1, v2, result}) => {
    it(`v${v1.toString()} is equal v${v2.toString()} = ${result}`, () => {
      expect(v1.equal(v2)).toBe(result);
    })
  })

  //---------------------------------------------------------------------------
  // ベクトルの加法
  describe.each`
  v1 | v2 | result
  ${new Vector2(0, 0)}  | ${new Vector2(0, 0)} | ${new Vector2(0, 0)}
  ${new Vector2(1, 1)}  | ${new Vector2(0, 0)} | ${new Vector2(1, 1)}
  ${new Vector2(-1, 1)} | ${new Vector2(1, 2)} | ${new Vector2(0, 3)}
  `
  (`Test of Vector2.add`, ({v1, v2, result}) => {
    it(`v${v1.toString()} add v${v2.toString()} = ${result.toString()}`, () => {
      expect(v1.add(v2)).toBe(v1);
      expect(v1.x).toBe(result.x);
      expect(v1.y).toBe(result.y);
    })
  })

  //---------------------------------------------------------------------------
  // ベクトルの減法
  describe.each`
  v1 | v2 | result
  ${new Vector2(0, 0)}  | ${new Vector2(0, 0)} | ${new Vector2(0, 0)}
  ${new Vector2(1, 1)}  | ${new Vector2(0, 0)} | ${new Vector2(1, 1)}
  ${new Vector2(-1, 1)} | ${new Vector2(1, 2)} | ${new Vector2(-2, -1)}
  `
  (`Test of Vector2.sub`, ({v1, v2, result}) => {
    const sub = v1.sub(v2);
    it(`v1.sub(v2) return instance of v1`, () => {
      expect(sub === v1).toBeTruthy();
    })
    it(`v1.sub(v2) = ${result.toString()}`, () => {
      expect(sub.equal(result)).toBeTruthy();
    })
  })

  //---------------------------------------------------------------------------
  // 実数倍
  describe.each`
  v | scalar | result
  ${new Vector2(1, 1)} | ${0}  | ${new Vector2(0, 0)}
  ${new Vector2(1, 1)} | ${2}  | ${new Vector2(2, 2)}
  ${new Vector2(1, 1)} | ${-1} | ${new Vector2(-1, -1)}
  `
  (`Test of Vector2.times`, ({v, scalar, result}) => {
    const times = v.times(scalar);
    it(`instance of v.times() is equal instance of v`, () => {
      expect(times === v).toBeTruthy();
    })
    it(`v.times() = ${result.toString()}`, () => {
      expect(times.equal(result)).toBeTruthy();
    })
  })

  //---------------------------------------------------------------------------
  // 逆ベクトル
  describe.each`
  v1 | v2 
  ${new Vector2(0, 0)}  | ${new Vector2(0, 0)}
  ${new Vector2(1, 1)}  | ${new Vector2(-1, -1)}
  ${new Vector2(-1, 1)} | ${new Vector2(1, -1)}
  `
  (`Test of Vector2.inverse`, ({v1, v2}) => {
    const inv = v1.inverse();
    it(`instance of v1.inverse() is equal instance of v1`, () => {
      expect(inv === v1).toBeTruthy();
    })
    it(`v1.inverse() = ${v2.toString()}`, () => {
      expect(inv.equal(v2)).toBeTruthy();
    })
  })

  //---------------------------------------------------------------------------
  // 零ベクトル
  describe.each`
  v1 | result
  ${new Vector2(0, 0)} | ${true}
  ${new Vector2(1, 1)} | ${false}
  `
  (`Test of Vector2.isZero`, ({v1, result}) => {
    it(`v1.isZero = ${result}`, () => {
      expect(v1.isZero).toBe(result);
    })
  })

  //---------------------------------------------------------------------------
  // 複製
  describe.each`
  v
  ${new Vector2(0, 0)} 
  ${new Vector2(1, 1)} 
  `
  (`Test of Vector2.clone`, ({v}) => {
    const clone = v.clone();
    it (`v.clone().xy is equal origin vector xy.`, () => {
      expect(clone.x).toBe(v.x);
      expect(clone.y).toBe(v.y);
    })
    it(`instance of v is not instance of v.clone()`, () => {
      expect(v === clone).toBe(false);
    })
  })

  //---------------------------------------------------------------------------
  // ベクトルのテキスト化
  describe.each`
  v | result
  ${new Vector2(0, 0)} | ${"(0, 0)"}
  ${new Vector2(1, 1)} | ${"(1, 1)"}
  `
  (`Test of Vector2.toString`, ({v, result}) => {
    it(`v.toString() is ${result}`, () => {
      expect(v.toString()).toBe(result);
    })
  })

  //---------------------------------------------------------------------------
  // Static
  describe('Static', () => {

    //-------------------------------------------------------------------------
    // ベクトルの加法
    describe.each`
    a              | b             | result
    ${{x:0, y:0}}  | ${{x:0, y:0}} | ${{x:0, y:0}}
    ${{x:1, y:1}}  | ${{x:1, y:1}} | ${{x:2, y:2}}
    `
    (`Test of Vector2.add`, ({a, b, result}) => {

      const v1 = new Vector2(a.x, a.y);
      const v2 = new Vector2(b.x, b.y);
      const v3 = Vector2.add(v1, v2);

      it(`Vector2.add(v1, v2) = ${v3.toString()}`, () => {
        expect(v3.x).toBe(result.x);
        expect(v3.y).toBe(result.y);
      })

      it(`v1 and v2 is not changed`, () => {
        expect(v1.x).toBe(a.x);
        expect(v1.y).toBe(a.y);
        expect(v2.x).toBe(b.x);
        expect(v2.y).toBe(b.y);
      })
    })

    //---------------------------------------------------------------------------
    // ベクトルの減法
    describe.each`
    a              | b             | result
    ${{x:0, y:0}}  | ${{x:0, y:0}} | ${{x:0, y:0}}
    ${{x:1, y:1}}  | ${{x:2, y:3}} | ${{x:-1, y:-2}}
    `
    (`Test of Vector2.sub`, ({a, b, result}) => {
      const v1 = new Vector2(a.x, a.y);
      const v2 = new Vector2(b.x, b.y);
      const v3 = Vector2.sub(v1, v2);

      it(`Vector2.sub(v1, v2) = ${v3.toString()}`, () => {
        expect(v3.x).toBe(result.x);
        expect(v3.y).toBe(result.y);
      })

      it(`v1 and v2 is not changed`, () => {
        expect(v1.x).toBe(a.x);
        expect(v1.y).toBe(a.y);
        expect(v2.x).toBe(b.x);
        expect(v2.y).toBe(b.y);
      })
    })

    //---------------------------------------------------------------------------
    // 実数倍
    describe.each`
    v | scalar | result
    ${new Vector2(1, 1)} | ${0}  | ${new Vector2(0, 0)}
    ${new Vector2(1, 1)} | ${2}  | ${new Vector2(2, 2)}
    ${new Vector2(1, 1)} | ${-1} | ${new Vector2(-1, -1)}
    `
    (`Test of Vector2.times`, ({v, scalar, result}) => {
      const times = Vector2.times(v, scalar);
      it(`Vector2.times(v, ${scalar}) is not equal instance of v`, () => {
        expect(times === v).toBeFalsy();
      })
      it(`Vector2.times(v1, ${scalar}) = ${result.toString()}`, () => {
        expect(times.equal(result)).toBeTruthy();
      })
    })

    //---------------------------------------------------------------------------
    // 逆ベクトル
    describe.each`
    v1 | v2 
    ${new Vector2(0, 0)}  | ${new Vector2(0, 0)}
    ${new Vector2(1, 1)}  | ${new Vector2(-1, -1)}
    ${new Vector2(-1, 1)} | ${new Vector2(1, -1)}
    `
    (`Test of Vector2.inverse`, ({v1, v2}) => {
      const inv = Vector2.inverse(v1);
      it(`Vector2.inverse(v1) is not equal instance of v1`, () => {
        expect(inv === v1).toBeFalsy();
      })
      it(`Vector2.inverse(v1) = ${v2.toString()}`, () => {
        expect(inv.equal(v2)).toBeTruthy();
      })
    })

    //---------------------------------------------------------------------------
    // 基本ベクトル
    describe(`Test of basic vector2`, () => {
      it(`Vector2.zero is (0, 0)`, () => { 
        expect(Vector2.zero).toEqual(new Vector2(0, 0)); 
      })
      it(`Vector2.one is (1, 1)`, () => { 
        expect(Vector2.one).toEqual(new Vector2(1, 1)); 
      })
      it(`Vector2.up is (0, 1)`, () => { 
        expect(Vector2.up).toEqual(new Vector2(0, 1)); 
      })
      it(`Vector2.down is (0, -1)`, () => { 
        expect(Vector2.down).toEqual(new Vector2(0, -1)); 
      })
      it(`Vector2.left is (-1, 0)`, () => { 
        expect(Vector2.left).toEqual(new Vector2(-1, 0)); 
      })
      it(`Vector2.right is (1, 0)`, () => { 
        expect(Vector2.right).toEqual(new Vector2(1, 0)); 
      })
    })

  })

});