export default class Numbers {
  number: number[];

  constructor(number: number[]) {
    this.number = number;
  }

  public sum([]) {
    let summed = 0;
    for (let i = 0; i < this.number.length; i++) {
      summed += this.number[i];
    }
    return summed;
  }
}
