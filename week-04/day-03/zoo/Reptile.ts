import Animal from './Animal';

export default class Reptile extends Animal {
  breedStyle = `laying eggs`;

  constructor(name: string) {
    super(name, 12, false, 4);
  }

  breed(): string {
    return this.breedStyle;
  }
}
