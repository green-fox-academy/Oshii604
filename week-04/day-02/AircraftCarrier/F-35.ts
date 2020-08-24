import Aircraft from './Aircraft';

export default class F35 extends Aircraft {
  protected ammo: number;

  protected baseDamage: number;

  protected maxAmmo: number;

  constructor() {
    super(50, 12, true);
  }
}
