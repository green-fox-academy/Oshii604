`use strict`;

const shopping: string[] = [
  `eggs`,
  `milk`,
  `fish`,
  `apples`,
  `bread`,
  `chicken`,
];

function doWeNeed() {
  console.log(shopping.includes(`milk`));
  console.log(shopping.includes(`bananas`));
}
doWeNeed();
