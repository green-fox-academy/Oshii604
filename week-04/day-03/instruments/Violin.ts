import StringedInstrument from './StringedInstrument';

export default class Violin extends StringedInstrument {
  constructor(numberOfStrings = 4) {
    super(`Violin`, numberOfStrings);
  }

  sound(): string {
    return `Schreech`;
  }
}
