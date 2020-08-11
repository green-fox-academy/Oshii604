export default abstract class Plant {
  color: string;

  waterLevel: number;

  whenNeedsWater: number;

  needsWater: boolean;

  constructor(color: string, whenNeedsWater: number) {
    this.color = color;
    this.waterLevel = 0;
    this.whenNeedsWater = whenNeedsWater;
    this.needsWater = true;
  }

  public doesItNeedWater(): boolean {
    if (this.waterLevel < this.whenNeedsWater) {
      this.needsWater = true;
    } else {
      this.needsWater = false;
    }
    return this.needsWater;
  }

  public getStatus(): void {
    if (this.waterLevel < this.whenNeedsWater) {
      console.log(`Please water ${this.color} ${this.constructor.name}`);
    } else {
      console.log(
        `The ${this.color} ${this.constructor.name} is fine, no need for any more water`,
      );
    }
  }

  public watering(water: number): void {
    this.waterLevel += water;
  }

  /*
  public watering(x: number): void {
    if (this.waterLevel < this.whenNeedsWater){
    this.waterLevel += x;
  }

  public watering(x:number): void {
    if (this.trees.iNeedWater() === true) {
      console.log(`Please water ${this.flowers.color} tree!`);
    }
  }
  */
}
