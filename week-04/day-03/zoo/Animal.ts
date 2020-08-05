export default abstract class Animal {
  protected name: string;

  protected age: number;

  protected canFly: boolean;

  protected legs: number;

  constructor(
    name: string,
    age: number,
    canFly: boolean,
    legs: number,
  ) {
    this.name = name;
    this.age = age;
    this.canFly = canFly;
    this.legs = legs;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  canItFly(): boolean {
    return this.canFly;
  }

  getNumberOfLegs(): number {
    return this.legs;
  }

  abstract breed(): void;
}
