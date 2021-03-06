import Instrument from './Instrument';

export default abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  abstract sound(): string;

  play(): void {
    console.log(
      `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`,
    );
  }
}
