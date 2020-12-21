export default class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick(): void {
    console.log('tick tack');
  }
}
