export default abstract class Animal {
  protected name: string;

  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  abstract getName () {

  }

  abstract breed () {

  }
}
