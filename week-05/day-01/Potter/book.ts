export default class Book {
  protected name: string;

  protected toBuy : number;

  protected price: number;

  constructor(name: string, toBuy: number, price = 8) {
    this.name = name;
    this.toBuy = toBuy;
    this.price = price;
  }
}
