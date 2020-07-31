`use strict`;

// Product database - WIP

const groceryList = new Map();
groceryList
  .set(`Eggs`, 200)
  .set(`Milk`, 200)
  .set(`Fish`, 400)
  .set(`Apples`, 150)
  .set(`Bread`, 50)
  .set(`Chicken`, 550);

function howMuch() {
  console.log(groceryList.get(`Fish`));
  console.log(Math.max(...groceryList.values()));
}
howMuch();
