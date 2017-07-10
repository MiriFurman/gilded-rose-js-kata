import {expect} from 'chai';
import {Shop} from '../src/Shop';
import {Item} from '../src/Item';

describe('Gilded Rose Regression', () => {
  const regressionPrint = '---Day 1---\n    +5 Dexterity Vest,9,19\nAged Brie,1,1\nElixir of the Mongoose,4,6\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,14,21\nBackstage passes to a TAFKAL80ETC concert,9,50\nBackstage passes to a TAFKAL80ETC concert,4,50\n\n\n    ---Day 2---\n    +5 Dexterity Vest,8,18\nAged Brie,0,2\nElixir of the Mongoose,3,5\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,13,22\nBackstage passes to a TAFKAL80ETC concert,8,50\nBackstage passes to a TAFKAL80ETC concert,3,50\n\n\n    ---Day 3---\n    +5 Dexterity Vest,7,17\nAged Brie,-1,4\nElixir of the Mongoose,2,4\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,12,23\nBackstage passes to a TAFKAL80ETC concert,7,50\nBackstage passes to a TAFKAL80ETC concert,2,50\n\n\n    ---Day 4---\n    +5 Dexterity Vest,6,16\nAged Brie,-2,6\nElixir of the Mongoose,1,3\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,11,24\nBackstage passes to a TAFKAL80ETC concert,6,50\nBackstage passes to a TAFKAL80ETC concert,1,50\n\n\n    ---Day 5---\n    +5 Dexterity Vest,5,15\nAged Brie,-3,8\nElixir of the Mongoose,0,2\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,10,25\nBackstage passes to a TAFKAL80ETC concert,5,50\nBackstage passes to a TAFKAL80ETC concert,0,50\n\n\n    ---Day 6---\n    +5 Dexterity Vest,4,14\nAged Brie,-4,10\nElixir of the Mongoose,-1,0\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,9,27\nBackstage passes to a TAFKAL80ETC concert,4,50\nBackstage passes to a TAFKAL80ETC concert,-1,0\n\n\n    ---Day 7---\n    +5 Dexterity Vest,3,13\nAged Brie,-5,12\nElixir of the Mongoose,-2,0\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,8,29\nBackstage passes to a TAFKAL80ETC concert,3,50\nBackstage passes to a TAFKAL80ETC concert,-2,0\n\n\n    ---Day 8---\n    +5 Dexterity Vest,2,12\nAged Brie,-6,14\nElixir of the Mongoose,-3,0\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,7,31\nBackstage passes to a TAFKAL80ETC concert,2,50\nBackstage passes to a TAFKAL80ETC concert,-3,0\n\n\n    ---Day 9---\n    +5 Dexterity Vest,1,11\nAged Brie,-7,16\nElixir of the Mongoose,-4,0\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,6,33\nBackstage passes to a TAFKAL80ETC concert,1,50\nBackstage passes to a TAFKAL80ETC concert,-4,0\n\n\n    ---Day 10---\n    +5 Dexterity Vest,0,10\nAged Brie,-8,18\nElixir of the Mongoose,-5,0\nSulfuras, Hand of Ragnaros,0,80\nSulfuras, Hand of Ragnaros,-1,80\nBackstage passes to a TAFKAL80ETC concert,5,35\nBackstage passes to a TAFKAL80ETC concert,0,50\nBackstage passes to a TAFKAL80ETC concert,-5,0\n\n\n    ';
  const createShop = () => {
    const items = [];
    items.push(new Item('+5 Dexterity Vest', 10, 20));
    items.push(new Item('Aged Brie', 2, 0));
    items.push(new Item('Elixir of the Mongoose', 5, 7));
    items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
    items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49));
    items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49));

    return new Shop(items);
  };

  const prettyPrintShop = shop => {
    let shopPrint = '';
    shop.items.forEach(item => {
      shopPrint += `${item.name},${item.sellIn},${item.quality}\n`;
    });

    return shopPrint + '\n';
  };

  const prettyPrintDay = (day, shop) => {
    return `---Day ${day}---
    ${prettyPrintShop(shop)}
    `;
  };

  const prettyPrint = (days, shop) => {
    let prettyPrint = '';
    [...Array(days).keys()].forEach((val, index) => {
      shop.updateQuality();
      prettyPrint += prettyPrintDay(index + 1, shop);
      return '';
    });

    return prettyPrint;
  };

  it('should match regression', () => {
    const shop = createShop();
    const currentPrettyPrint = prettyPrint(10, shop);
    expect(regressionPrint).to.equal(currentPrettyPrint);
  });
});
