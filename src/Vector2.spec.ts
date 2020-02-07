import Vector2 from '~/Vector2';

describe('Test of Vector2', () => {

  describe('default constructor', () => {
    const v = new Vector2();
    it (`v.x == 0`, () => { expect(v.x).toBe(0); })
    it (`v.y == 0`, () => { expect(v.x).toBe(0); })
  })

});