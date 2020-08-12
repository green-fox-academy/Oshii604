import Plant from './Plant';

export default class Flower extends Plant {
  protected waterAbsorption: number;

  constructor(color: string, waterAbsorption = 0.75) {
    super(color, 5);
    this.waterAbsorption = waterAbsorption;
  }

  watering(water: number):void {
    super.watering(water * this.waterAbsorption);
  }
}
