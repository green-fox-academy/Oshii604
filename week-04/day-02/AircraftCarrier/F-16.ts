import Aircraft from './Aircraft';

export default class F16 extends Aircraft {
  protected ammo: number;

  protected baseDamage: number;

  protected maxAmmo: number;

  constructor() {
    super(30, 8, false);
  }
}
