`use strict`;

const gfStudentHoursPerDay = 6;
const courseDays: number = 17 * 5;
const hoursPerDay = 10.4;

console.log(
  `An average Green Fox student codes ${
    courseDays * gfStudentHoursPerDay
  } hours during the whole course`,
);
console.log(
  `This is exactly ${
    ((courseDays * gfStudentHoursPerDay) / (courseDays * hoursPerDay)) * 100
  }%`,
);
