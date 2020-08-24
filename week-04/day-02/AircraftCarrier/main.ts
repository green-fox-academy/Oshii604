import F16 from './F-16';
import F35 from './F-35';
import Carrier from './Carrier';

const ussNimitz = new Carrier(500, 5000);
// console.log(ussNimitz.getCarrierStatus());

const firstF16 = new F16();
ussNimitz.addAircraft(firstF16);

const firstF35 = new F35();
ussNimitz.addAircraft(firstF35);
const secondF35 = new F35();
ussNimitz.addAircraft(secondF35);

ussNimitz.fillAircrafts(30);
console.log(ussNimitz.getCarrierStatus());

const lameBoat = new Carrier(200, 1300);
const lameF35 = new F35();
lameBoat.addAircraft(lameF35);
console.log(lameBoat.getCarrierStatus());

ussNimitz.fightCarrier(lameBoat);

console.log(lameBoat.getCarrierStatus());

/*
console.log(firstF16);
console.log(firstF35);
console.log(ussNimitz);
*/

console.log(ussNimitz.getCarrierStatus());
