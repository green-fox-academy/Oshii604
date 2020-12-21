/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
class SuperHero {
  constructor(name: string) { }

  getWeapons() { }
}

class Thor extends SuperHero {
  getWeapons() {
    return 'storm breaker';
  }
}

class CaptainAmerica extends SuperHero {
  getWeapons() {
    return 'Shield';
  }
}

class Ironman extends SuperHero {
  getWeapons() {
    return 'Suit';
  }
}

function getWeapons(a: Array<superhero>) {
  for (let index = 0; index <= a.length; index++) {
    console.log(a[index].getWeapons());
  }
}

getWeapons(superheros);
