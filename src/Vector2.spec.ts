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

      it(`v${v1.toString()} add v${v2.toString()} = ${v3.toString()}`, () => {
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



  })

});