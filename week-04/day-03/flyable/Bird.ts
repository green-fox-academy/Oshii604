import Animal from '../zoo/Animal';
import Flyable from './Flyable';

export default class Bird extends Animal implements Flyable {
  breed() {
    console.log(`I don't wanna breed, I wanna fly instead`);
  }

  fly() {}

  takeOff() {}

  land(x: number):void {
    dskjghs;
  }
}
