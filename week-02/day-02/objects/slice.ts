`use strict`;

// slice (in function)

const str = 'Apples are round, and apples are juicy.';
function slicing(a: string) {
  const sliced = a.slice(3, -2);
  console.log(sliced);
}

slicing(str);
