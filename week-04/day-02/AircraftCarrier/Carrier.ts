import Aircraft from './Aircraft';

export default class Carrier {
  protected aircrafts: Aircraft [] = [];

  protected ammoStorage: number;

  protected healthPoints: number;

  constructor(ammoStorage: number, healthPoints: number) {
    this.ammoStorage = ammoStorage;
    this.healthPoints = healthPoints;
  }

  addAircraft(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  getTotalAmmoNeed(): number {
    let totalAmmoNeed = 0;
    this.aircrafts.forEach((aircraft) => {
      totalAmmoNeed += aircraft.getMaxAmmo();
    });
    return totalAmmoNeed;
  }

  fillAircrafts(refillAmmo): void {
    try {
      if (this.ammoStorage === 0) {
        throw new Error(`There is no ammo in the storage`);
      }
    } catch (error) {
      console.log(error.message);
    }
    if (this.ammoStorage > this.getTotalAmmoNeed()) {
      this.aircrafts.forEach((aircraft) => {
        aircraft.refill(refillAmmo);
        this.ammoStorage -= aircraft.refill(refillAmmo);
      });
    }
    // na ide kellene a priority refill..
  }

  getTotaldamage(): number {
    let totalDamage = 0;
    this.aircrafts.forEach((aircraft) => {
      totalDamage += (aircraft.getMaxDamage());
    });
    return totalDamage;
  }

  fightCarrier(Carrier: Carrier): void {
    this.aircrafts.forEach((aircraft) => {
      aircraft.fight();
    });
    Carrier.healthPoints -= this.getTotaldamage();
  }

  getCarrierStatus(): string {
    if (this.healthPoints < 0) {
      return `It's dead Jim :(`;
    }
    return `HP: ${this.healthPoints}, Aircraft count: ${this.aircrafts.length}; Ammo Storage: ${this.ammoStorage}, Total Damage: ${this.getTotaldamage()}
    Aircrafts:\n
    ${this.aircrafts.map((aircraft) => aircraft.getStatus()).join('\n    ')}`;
  }
}

// ${this.aircrafts[0].getDetails()}
// ${this.aircrafts.map((aircraft) => aircraft.getDetails()).join('\n    ')}
//  ${this.aircrafts.forEach((aircraft) => aircraft.getDetails())}
