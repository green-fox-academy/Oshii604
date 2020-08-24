export default abstract class Aircraft {
  protected ammo: number;

  protected baseDamage: number;

  protected maxAmmo: number;

  protected priorityMark: boolean

  constructor(baseDamage: number, maxAmmo: number, priorityMark: boolean) {
    this.ammo = 0;
    this.baseDamage = baseDamage;
    this.maxAmmo = maxAmmo;
    this.priorityMark = priorityMark;
  }

  getMaxAmmo(): number {
    return this.maxAmmo;
  }

  getMaxDamage(): number {
    return this.ammo * this.baseDamage;
  }

  fight(): number {
    const damageDealt: number = this.ammo * this.baseDamage;
    this.ammo = 0;
    return damageDealt;
  }

  refill(refillAmmo: number): number {
    let remainingAmmo = 0;
    this.ammo += this.maxAmmo - this.ammo;
    remainingAmmo = refillAmmo - this.ammo;
    return remainingAmmo;
  }

  isPriority(): boolean {
    return this.priorityMark;
  }

  getType(): string {
    return this.constructor.name;
  }

  getStatus(): string {
    return `Type: ${this.getType()}, Ammo: ${this.ammo}, Base Damage: ${this.baseDamage}, All Damage: ${this.ammo * this.baseDamage}`;
  }
}
