function bubbleSort2(array: number[], ascending = false) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const a = array[j];
        array[j] = array[j + 1];
        array[j + 1] = a;
      } else if (array[j] < array[j + 1] && ascending == true) {
        const a = array[j];
        array[j] = array[j + 1];
        array[j + 1] = a;
      }
    }
  }
  return array;
}

console.log(bubbleSort2([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(bubbleSort2([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
