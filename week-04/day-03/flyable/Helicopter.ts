import Vehicle from './Vehicle';
import Flyable from './Flyable';

export default class Helicopter extends Vehicle implements Flyable {
  hasRotors: boolean;

  sound: string;

  constructor(hasRotors = true, sound = `Twup-twup-twup`) {
    super(`Apache`, 3, false);
    this.hasRotors = hasRotors;
    this.sound = sound;
  }

  land(): string {}

  fly(): string {
    blabla;
  }

  takeOff() {
    blabla;
  }
}
