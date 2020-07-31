`use strict`;

function unique(arr) {
  const uniq = arr.filter((v, i, a) => a.indexOf(v) === i);
  console.log(uniq);
  return uniq;
}

unique([1, 11, 34, 11, 52, 61, 1, 34]);
unique([2, 4, 6, 3, 12, 2, 6, 7, 4, 4, 2, 12, 7, 3]);

// Unique with loop

function uniqueWithLoop(input: number[]) {
  const result: number[] = [];
  // input.forEach(function(number:number))
  input.forEach((number: number) => {
    let alreadyInResult = false;
    result.forEach((resultNumber: number) => {
      if (resultNumber === number) {
        alreadyInResult = true;
      }
    });
    if (!alreadyInResult) {
      result.push(number);
    }
  });
  return result;
}

//  Example
console.log(uniqueWithLoop([1, 11, 34, 11, 52, 61, 1, 34]));
