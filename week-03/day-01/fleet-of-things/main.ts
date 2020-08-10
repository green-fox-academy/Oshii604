import Thing from './thing';
import FleetOfThings from './fleetOfThings';

const milk = new Thing('Get milk');
const obstacles = new Thing('Remove the obstacles');
const standup = new Thing('Stand up');
const lunch = new Thing('Eat lunch');

standup.complete();
lunch.complete();

const fleetOfThings = new FleetOfThings();

fleetOfThings.main(milk, obstacles, standup, lunch);

fleetOfThings.print();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
