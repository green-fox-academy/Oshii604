import Person from './Person';

export default class Student extends Person {
  previousOrganization: string;

  skippedDays: number;

  constructor(
    name = `Jane Doe`, age = 30, gender = `female`, previousOrganization = `School of Life`,
    skippedDays = 0,
  ) {
    super(name, age, gender, `Be a junior software developer.`);
    this.previousOrganization = previousOrganization;
    this.skippedDays = skippedDays;
  }

  public skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }

  public introduce(): void {
    super.introduce(
      `from ${this.previousOrganization} who skipped ${this.skippedDays} days already`,
    );
  }
}
/*
const jane = new Student(
  `Jane Doe`,
  30,
  `female`,
  `School of Life`,
);

jane.skipDays(3);
jane.introduce();
jane.getGoal();
*/
