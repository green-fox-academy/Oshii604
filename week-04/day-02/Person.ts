export default class Person {
  protected name: string;

  protected age: number;

  protected gender: string;

  protected quote: string;

  constructor(
    name = `Jane Doe`,
    age = 30,
    gender = `female`,
    quote = `Live for the moment`,
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.quote = quote;
  }

  public introduce(suffix = ``): void {
    console.log(
      `Hi, I'm ${this.name}, a(n) ${this.age} year old ${this.gender} ${suffix}`,
    );
  }

  public getGoal(): void {
    console.log(`My goal is: ${this.quote}`);
  }
}

const jane = new Person(`Jane Doe`, 30, `female`, `Live for the moment`);
jane.introduce();
jane.getGoal();
