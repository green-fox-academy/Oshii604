import Plant from './Plant';

export default class Tree extends Plant {
  protected waterAbsorption: number;

  constructor(color: string, waterAbsorption = 0.4) {
    super(color, 10);
    this.waterAbsorption = waterAbsorption;
  }

  watering(water: number):void {
    super.watering(water * this.waterAbsorption);
  }
}
