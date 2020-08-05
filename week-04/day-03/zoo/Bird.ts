import Animal from './Animal';

export default class Bird extends Animal {
  breedStyle = `laying eggs`;

  constructor(name: string) {
    super(name, 16, true, 2);
  }

  breed(): string {
    return this.breedStyle;
  }
}
