export default class Apples {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getApple(): string {
    return this.name;
  }
}

const apple01 = new Apples(`Finom Apple`);

// console.log(apple01.getApple());
