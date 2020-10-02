import * as Util from './util';

describe('Test of Util', () => {

  //---------------------------------------------------------------------------
  // -0を0に統一する関数
  describe.each`
  from  | to
  ${0}  | ${0}
  ${-0} | ${0}
  ${1}  | ${1}
  ${-Infinity} | ${-Infinity}
  `
  (`Test of Util.unifySign`, ({from, to}) => {
    it(`Util.unifySign(${from}) = ${to}`, () => {
      expect(Util.unifySign(from)).toBe(to);
    })  
  })

  //---------------------------------------------------------------------------
  // 度数法から弧度法へ
  describe.each`
  from    | to
  ${-720} | ${Math.PI * -4}
  ${-360} | ${Math.PI * -2}
  ${-270} | ${Math.PI * -1.5}
  ${-180} | ${Math.PI * -1}
  ${-90}  | ${Math.PI / -2}
  ${0}    | ${0}
  ${90}   | ${Math.PI / 2}
  ${180}  | ${Math.PI}
  ${270}  | ${Math.PI * 1.5}
  ${360}  | ${Math.PI * 2}
  ${720}  | ${Math.PI * 4}
  `
  (`Test of Util.deg2rad`, ({from, to}) => {
    it(`deg ${from} => rad ${to}`, () => {
      expect(Util.deg2rad(from)).toBe(to);
    })
  })

  //---------------------------------------------------------------------------
  // 弧度法から度数法へ
  describe.each`
  from    | to
  ${Math.PI * -4}   | ${-720}
  ${Math.PI * -2}   | ${-360}
  ${Math.PI * -1.5} | ${-270}
  ${Math.PI * -1}   | ${-180}
  ${Math.PI / -2}   | ${-90} 
  ${0}              | ${0}   
  ${Math.PI / 2}    | ${90}  
  ${Math.PI}        | ${180} 
  ${Math.PI * 1.5}  | ${270} 
  ${Math.PI * 2}    | ${360} 
  ${Math.PI * 4}    | ${720} 
  `
  (`Test of Util.rad2deg`, ({from, to}) => {
    it(`rad ${from} => deg ${to}`, () => {
      expect(Util.rad2deg(from)).toBe(to);
    })
  })

  //---------------------------------------------------------------------------
  // 小数点第何位を指定して使者五入
  describe.each`
  num  | fixed | result
  ${0} | ${0} | ${0}
  ${1.2345} | ${0} | ${1}
  ${1.2345} | ${1} | ${1.2}
  ${1.2345} | ${2} | ${1.23}
  ${1.2345} | ${3} | ${1.235}
  ${1.2345} | ${4} | ${1.2345}
  ${1.2345} | ${5} | ${1.2345}
  `
  (`Test of Util.round`, ({num, fixed, result}) => {
    it(`Util.round(${num}, ${fixed}) = ${result}`, () => {
      expect(Util.round(num, fixed)).toBe(result);
    })
  })

  describe("Test of Util.round when use default arg", () => {
    it(`Util.round(1.23) = 1.2`, () => {
      expect(Util.round(1.23)).toBe(1.2);
    })
  });

  //---------------------------------------------------------------------------
  // 数値を指定した範囲内に収める
  describe.each`
  num   | min  | max   | result
  ${0}  | ${0} | ${0}  | ${0}
  ${5}  | ${0} | ${10} | ${5}
  ${5}  | ${5} | ${10} | ${5}
  ${5}  | ${5} | ${5}  | ${5}
  ${-5} | ${0} | ${10} | ${0}
  ${-5} | ${5} | ${10} | ${5}
  ${15} | ${5} | ${10} | ${10}
  `
  (`Test of Util.cramp`, ({num, min, max, result}) => {
    it(`Util.cramp(${num}, ${min}, ${max}) = ${result}`, () => {
      expect(Util.cramp(num, min, max)).toBe(result);
    })  
  })

});