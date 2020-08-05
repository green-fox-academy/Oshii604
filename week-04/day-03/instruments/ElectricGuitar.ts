import StringedInstrument from './StringedInstrument';

export default class ElectricGuitar extends StringedInstrument {
  soundOfInstrument: string;

  constructor(numberOfStrings = 6, soundOfInstrument = `Twang`) {
    super(`Electric Guitar`, numberOfStrings);
    this.soundOfInstrument = soundOfInstrument;
  }

  sound(): string {
    return this.soundOfInstrument;
  }
}
