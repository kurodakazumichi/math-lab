import Vector2 from '../Vector2';
import { isHit, intercect } from './PointAndPoint';

describe('Test of Collision2.PointAndPoint', () => {

  //-------------------------------------------------------------------------
  describe.each`
  p1 | p2 | result 
  ${Vector2.zero} | ${Vector2.zero} | ${true}
  ${Vector2.zero} | ${Vector2.one}  | ${false}
  ${Vector2.one}  | ${Vector2.one}  | ${true}
  `(`Test of isHit`, ({p1, p2, result}) => {
    it(`isHit(${p1}, ${p2}) = ${result}`, () => {
      expect(isHit(p1, p2)).toBe(result);
    })
  });

  //-------------------------------------------------------------------------
  describe.each`
  p1 | p2 | hit | pos
  ${Vector2.zero} | ${Vector2.zero} | ${true}  | ${Vector2.zero}
  ${Vector2.zero} | ${Vector2.one}  | ${false} | ${Vector2.zero}
  ${Vector2.one}  | ${Vector2.one}  | ${true} | ${Vector2.one}
  `(`Test of intersect`, ({p1, p2, hit, pos}) => {

    const ret = intercect(p1, p2);

    it(`intercect(${p1}, ${p2}).hit = ${hit}`, () => {
      expect(ret.hit).toBe(hit);
    });

    it(`intercect(${p1}, ${p2}).pos = ${pos}`, () => {
      expect(ret.pos).toEqual(pos);
    });    
  });

});