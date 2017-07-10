import {expect} from 'chai';
import {Shop} from '../src/Shop';
import {Item} from '../src/Item';

describe('Gilded Rose', () => {
  describe('random product', () => {
    it('should decrease the quality and sellIn of a random product', () => {
      const gildedRose = new Shop([new Item('foo', 1, 1)]);
      const items = gildedRose.updateQuality();

      expect(items[0].name).to.equal('fixme');
    });
  });
});
