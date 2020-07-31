function example(number) {
  console.log(number);
  return example(number + 1);
}
1 + example(0);
