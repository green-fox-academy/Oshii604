export default abstract class Vehicle {
  protected name: string;

  protected numberOfWheels: number;

  protected hasWings: boolean;

  constructor(name: string, numberOfWheels: number, hasWings: boolean) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.hasWings = hasWings;
  }
}
