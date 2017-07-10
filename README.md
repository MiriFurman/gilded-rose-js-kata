# Gilded Rose Refactoring Kata
This Kata was originally created by Terry Hughes in C# [here](https://github.com/NotMyself/GildedRose).
It was translated to many programming languages (including JS) and was copied (and modified) from [here](https://github.com/emilybache/GildedRose-Refactoring-Kata)

## The Goal

We have some complex legacy code that is not readable nor is covered with tests. To make things worse - our PM just asked us to add a couple of new features. Don't Panic! We know that you're the right person to do this job!

## How to Start

1. Clone this repo: `git clone git@github.com:wix-private/gilded-rose-js-kata.git`
2. Read the requirements below to understand the product
3. Open your favorite editor and run Wallaby
4. Start writing tests & refactoring while keeping [Clean-Code rules](https://github.com/ryanmcdermott/clean-code-javascript) in mind
5. Add the new functionaly once the code stops smelling like 💩 (TDD!!!)
6. Refactor some more until the code looks like 💎

## Requirements

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a 
prime location in a prominent city ran by a friendly innkeeper named 
Allison. We also buy and sell only the finest goods. Unfortunately, our 
goods are constantly degrading in quality as they approach their sell by 
date. We have a system in place that updates our inventory for us. It was 
developed by a no-nonsense type named Leeroy, who has moved on to new 
adventures. Your task is to add the new feature to our system so that we 
can begin selling a new category of items. First an introduction to our 
system:

- All items have a SellIn value which denotes the number of days we have 
to sell the item
- All items have a Quality value which denotes how valuable the item is
- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

- Once the sell by date has passed, Quality degrades twice as fast
- The Quality of an item is never negative
- "Aged Brie" actually increases in Quality the older it gets
- The Quality of an item is never more than 50
- "Sulfuras", being a legendary item, never has to be sold or decreases 
in Quality
- "Backstage passes", like aged brie, increases in Quality as it's SellIn 
value approaches; Quality increases by 2 when there are 10 days or less 
and by 3 when there are 5 days or less but Quality drops to 0 after the 
concert

We have recently signed a supplier of conjured items. This requires an 
update to our system:

- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any 
new code as long as everything still works correctly. However, do not 
alter the Item class or Items property as those belong to the goblin 
in the corner who will insta-rage and one-shot you as he doesn't 
believe in shared code ownership (you can make the UpdateQuality 
method and Items property static if you like, we'll cover for you).

Just for clarification, an item can never have its Quality increase 
above 50, however "Sulfuras" is a legendary item and as such its 
Quality is 80 and it never alters.
