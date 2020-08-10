import Thing from './thing';
import Fleet from './fleet';

export default class FleetOfThings {
  private fleet: Fleet;

  main(...things: Thing[]): void {
    this.fleet = new Fleet();
    things.forEach((thing) => this.fleet.add(thing));
  }

  print(): void {
    for (let i = 0; i < this.fleet.getThings().length; i++) {
      const completeStatus = this.fleet.getThings()[i].getCompleted()
        ? '[x]'
        : '[ ]';
      console.log(
        `${i + 1}. ${completeStatus} ${this.fleet.getThings()[i].getName()}`,
      );
    }
  }
}
