// eslint-disable-next-line consistent-return

export default function humanize(num): string {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  const numString = num.toString();

  if (num < 0) throw new Error('Negative numbers are not supported.');

  // NaN possibility added

  if (isNaN(num)) throw new Error(`You should give me a number to work with!`);

  if (num === 0) return 'zero';

  // the case of 1 - 20
  if (num < 20) {
    return ones[num];
  }

  if (numString.length === 2) {
    return `${tens[numString[0]]} ${ones[numString[1]]}`;
  }

  // 100 and more
  if (numString.length === 3) {
    if (numString[1] === '0' && numString[2] === '0') {
      return `${ones[numString[0]]} hundred`;
    }
    return `${ones[numString[0]]} hundred and ${humanize(
      +(numString[1] + numString[2]),
    )}`;
  }

  if (numString.length === 4) {
    const end = +(numString[1] + numString[2] + numString[3]);
    if (end === 0) return `${ones[numString[0]]} thousand`;
    if (end < 100) {
      return `${ones[numString[0]]} thousand and ${humanize(end)}`;
    }
    return `${ones[numString[0]]} thousand ${humanize(end)}`;
  }
  // 5-digit number code added

  if (numString.length === 5) {
    const begin = +(numString[0] + numString[1]);
    const end = +(numString[2] + numString[3] + numString[4]);
    if (end === 0) return `${humanize(begin)} thousand`;
    if (end < 100) return `${humanize(begin)} thousand and ${humanize(end)}`;
    return `${humanize(begin)} thousand ${humanize(end)}`;
  }
}

try {
  console.log(humanize(-20));
} catch (e) {
  console.log(e.message);
}

// console.log(humanize(-20));

/*
  if (numString.length === 5) {
    const end = +(numString[2] + numString[3] + numString[4]);
    if (end === 0) return `${ones[numString[0]]} thousand`;
    if (end < 100) return `${ones[numString[0]]} thousand and ${humanize(end)}`;
    // new code starting from here
    // if (numString[0] < 2 && ) return `${ones[numString[0]]} thousand and ${humanize(end)}}`;
    const begin: number = numString[0] + [1];

    if (num < 20000) return `${ones[numString[0]]} thousand and ${humanize(end)}}`;
    // if (numString[0] >= 2) return `${tens[numString[0]]} thousand and ${humanize(end)}}`;
    return `${tens[numString[0]]} ${ones[numString[1]]} thousand ${humanize(end)}`;
  }
}
*/
