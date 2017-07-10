import {expect} from 'chai';
import {Shop} from '../src/Shop';
import {Item} from '../src/Item';

describe('Gilded Rose', () => {
  it('should test something', () => {
    const gildedRose = new Shop([new Item('foo', 1, 1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.equal('fixme');
  });
});
