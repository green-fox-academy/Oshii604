import Animal from './Animal';

export default class Mammal extends Animal {
  breedStyle = `pushing miniature versions out`;

  constructor(name: string) {
    super(name, 8, false, 4);
  }

  breed(): string {
    return this.breedStyle;
  }
}
