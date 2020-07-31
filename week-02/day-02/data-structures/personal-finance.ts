`use strict`;

const myMoney: number[] = [500, 1000, 1250, 175, 800, 120];

function doTheMath() {
  let add = 0;
  for (let i = 0; i < myMoney.length; i++) {
    add += myMoney[i];
  }
  console.log(add);
  console.log(Math.max(...myMoney));
  console.log(Math.min(...myMoney));
  console.log((add / myMoney.length).toFixed(2));
  console.log(Math.round(add / myMoney.length));
}

doTheMath();
