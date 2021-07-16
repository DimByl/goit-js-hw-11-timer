import CountdownTimer from "./timer.js";

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('July 19, 2021'),
});