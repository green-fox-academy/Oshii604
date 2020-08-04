import Person from './Person';

export default class Mentor extends Person {
  level: string;

  constructor(
    name = `Jane Doe`, age = 30, gender = `female`, level = `intermediate`,
  ) {
    super(name, age, gender, `Educate brilliant junior software developers.`);
    this.level = level;
  }

  public introduce(): void {
    super.introduce(
      `${this.level} mentor`,
    );
  }
}
/*
const jane = new Mentor(`Jane mámegint`, 30, `female`, `senior`);

jane.introduce();
jane.getGoal();
*/
