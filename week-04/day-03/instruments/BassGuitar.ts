import StringedInstrument from './StringedInstrument';

export default class BassGuitar extends StringedInstrument {
  soundOfInstrument = `Duum-duum-duum`;

  constructor(numberOfStrings = 4) {
    super(`Bass Guitar`, numberOfStrings);
  }

  sound(): string {
    return this.soundOfInstrument;
  }
}
