import Clock from `./Clock`

export default class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}

  tick(): void {
    console.log('beep beep');
  }
}
