`use strict`;

const currentHours = 14;
const currentMinutes = 34;
const currentSeconds = 42;

const remainingSeconds = (23 - currentHours) * 3600 + (59 - currentMinutes) * 60 + 60 - currentSeconds;
console.log(
  `Ennyi idő van hátra a mai napból: ${
    23 - currentHours
  } óra ${
    59 - currentMinutes
  } perc ${
    60 - currentSeconds
  } másodperc`,
);
console.log(`Mindez ennyi másodperc: ${remainingSeconds}`);
