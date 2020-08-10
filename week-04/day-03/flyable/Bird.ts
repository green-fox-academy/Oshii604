import Animal from '../zoo/Animal';
import Flyable from './Flyable';

export default class Bird extends Animal implements Flyable {
  fly() {
      throw new Error("Method not implemented.");
  }
  takeOff() {
      throw new Error("Method not implemented.");
  }
  land() {
    throw new Error('Method not implemented.');
  }
}
