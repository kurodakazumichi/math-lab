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
});