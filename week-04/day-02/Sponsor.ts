import Person from './Person';

export default class Sponsor extends Person {
  company: string;

  hireStudents: number;

  constructor(
    name = `Jane Doe`, age = 30, gender = `female`, company = `Google`,
    hireStudents = 0,
  ) {
    super(name, age, gender, `Hire brilliant junior software developers.`);
    this.company = company;
    this.hireStudents = hireStudents;
  }

  public hire(): void {
    this.hireStudents++;
  }

  public introduce(): void {
    super.introduce(`who represents ${this.company}, and hired ${this.hireStudents} so far`);
  }
}
/*
const oshii = new Sponsor(`Oshii`, 37, `male`, `AMC`);

oshii.hire();
oshii.introduce();
oshii.getGoal();
*/
